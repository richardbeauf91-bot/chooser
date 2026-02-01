import { BestPage } from "../types/best";

export const bestPages: BestPage[] = [
  {
    slug: "best-brokers-uk",
    title: "Best Trading Brokers in the UK",
    intro: "These brokers stand out for UK traders based on regulation, fees, and platform quality.",
    criteria: [
      "FCA regulation",
      "Competitive pricing",
      "Platform reliability",
      "Range of markets"
    ],
    recommendedBrokerSlugs: ["ig", "cmarkets", "pepperstone"],
    faq: [
      {
        question: "Are these brokers FCA regulated?",
        answer: "Yes, all listed brokers are authorised and regulated by the FCA."
      }
    ],
    lastUpdated: "2025-01-15"
  },
  {
    slug: "best-brokers-for-beginners",
    title: "Best Brokers for Beginners",
    intro: "Simple platforms with low entry barriers and clear pricing.",
    criteria: ["Ease of use", "Low minimum deposit", "Education"],
    recommendedBrokerSlugs: ["plus500", "etoro", "ig"],
    faq: [],
    lastUpdated: "2025-01-15"
  },
  {
    slug: "best-low-fee-brokers",
    title: "Best Low Fee Brokers",
    intro: "Brokers offering competitive spreads and commissions.",
    criteria: ["Tight spreads", "Transparent fees"],
    recommendedBrokerSlugs: ["pepperstone", "cmarkets"],
    faq: [],
    lastUpdated: "2025-01-15"
  }
];
