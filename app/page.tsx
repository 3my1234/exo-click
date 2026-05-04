import BridgePortal from "@/components/bridge-portal";
import { sanitizeDestination } from "@/lib/redirect";

type HomeProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: HomeProps) {
  const resolved = await searchParams;
  const rawDest = typeof resolved.dest === "string" ? resolved.dest : undefined;
  const initialDest = sanitizeDestination(rawDest);

  return <BridgePortal initialDest={initialDest} />;
}
