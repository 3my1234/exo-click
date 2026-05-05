import { getAllowedDestinationHosts, getDefaultDestination } from "./redirect";

export type RuntimeConfig = {
  monetizationUrl: string;
  interstitialId: string;
  exoPopHost: string;
  exoSyndicationHost: string;
  exoPopZoneId: string;
  defaultDestination: string;
  allowlist: string[];
};

export function getRuntimeConfig(): RuntimeConfig {
  return {
    monetizationUrl: process.env.NEXT_PUBLIC_MONETIZATION_URL ?? "",
    interstitialId: process.env.NEXT_PUBLIC_INTERSTITIAL_ID ?? "",
    exoPopHost: process.env.NEXT_PUBLIC_EXO_POP_HOST ?? "",
    exoSyndicationHost: process.env.NEXT_PUBLIC_EXO_SYNDICATION_HOST ?? "",
    exoPopZoneId: process.env.NEXT_PUBLIC_EXO_POP_ZONE_ID ?? "",
    defaultDestination: getDefaultDestination(),
    allowlist: getAllowedDestinationHosts()
  };
}
