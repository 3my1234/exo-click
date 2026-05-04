import { getAllowedDestinationHosts, getDefaultDestination } from "./redirect";

export type RuntimeConfig = {
  monetizationUrl: string;
  interstitialId: string;
  defaultDestination: string;
  allowlist: string[];
};

export function getRuntimeConfig(): RuntimeConfig {
  return {
    monetizationUrl: process.env.NEXT_PUBLIC_MONETIZATION_URL ?? "",
    interstitialId: process.env.NEXT_PUBLIC_INTERSTITIAL_ID ?? "",
    defaultDestination: getDefaultDestination(),
    allowlist: getAllowedDestinationHosts()
  };
}
