import { ComparePage } from "../types/compare";

export const comparePages: ComparePage[] = [
  {
    aSlug: "ig",
    bSlug: "cmarkets",
    title: "IG vs CMC Markets",
    summary: "Both brokers offer strong regulation and market access, with differences in pricing and tools.",
    comparisonTableFields: ["fees", "platforms", "markets", "regulation"],
    verdict: "IG suits long-term traders, while CMC Markets appeals to active traders seeking low spreads.",
    lastUpdated: "2025-01-15"
  },
  {
    aSlug: "etoro",
    bSlug: "plus500",
    title: "eToro vs Plus500",
    summary: "Beginner-friendly platforms with different approaches to trading.",
    comparisonTableFields: ["ease-of-use", "fees", "features"],
    verdict: "eToro is better for social trading; Plus500 suits straightforward CFD trading.",
    lastUpdated: "2025-01-15"
  }
];
