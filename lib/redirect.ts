const DEFAULT_DEST = "https://example.com";

function normalizeHost(value: string): string {
  return value.trim().toLowerCase();
}

export function getAllowedDestinationHosts(): string[] {
  const raw = process.env.ALLOWED_DEST_HOSTS ?? "";
  return raw
    .split(",")
    .map(normalizeHost)
    .filter(Boolean);
}

export function getDefaultDestination(): string {
  const raw = process.env.DEFAULT_DEST_URL;
  if (!raw) return DEFAULT_DEST;

  try {
    const url = new URL(raw);
    return url.toString();
  } catch {
    return DEFAULT_DEST;
  }
}

export function sanitizeDestination(input: string | null | undefined): string {
  const fallback = getDefaultDestination();
  if (!input) return fallback;

  try {
    const candidate = new URL(input);
    if (!["http:", "https:"].includes(candidate.protocol)) {
      return fallback;
    }

    const allowList = getAllowedDestinationHosts();
    if (allowList.length === 0) {
      return fallback;
    }

    if (!allowList.includes(candidate.hostname.toLowerCase())) {
      return fallback;
    }

    return candidate.toString();
  } catch {
    return fallback;
  }
}
