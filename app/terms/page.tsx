import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-8 text-slate-100">
      <h1 className="text-3xl font-semibold text-amber-300">Terms of Service</h1>
      <p className="mt-4 text-sm text-slate-300">
        By using SportBanter, you confirm that you are at least 18 years old where required by your jurisdiction,
        and that you will comply with applicable laws when accessing content or external destinations.
      </p>
      <p className="mt-3 text-sm text-slate-300">
        The service is provided on an as-is basis. We do not guarantee uninterrupted availability, specific content
        outcomes, or compatibility with all browsers and devices. External links and third-party pages are operated
        independently and are subject to their own terms and policies.
      </p>
      <p className="mt-3 text-sm text-slate-300">
        You agree not to misuse the platform, attempt unauthorized access, interfere with service integrity, or use
        automated actions that degrade performance. We reserve the right to restrict access where abuse, security risk,
        or policy violations are detected.
      </p>
      <p className="mt-6 text-xs text-slate-400">Last updated: May 6, 2026</p>
      <Link href="/" className="mt-6 inline-block text-sm text-amber-300 hover:text-amber-200">
        Back to Home
      </Link>
    </main>
  );
}
