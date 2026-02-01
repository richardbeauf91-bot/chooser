import { Broker } from "../types/broker";

export const brokers: Broker[] = [
  {
    slug: "ig",
    name: "IG",
    shortDescription: "Established multi-asset broker with strong regulation.",
    longDescription:
      "IG is a long-established trading platform offering CFDs, spread betting, and access to global markets. It is known for its robust trading tools and regulatory oversight.",
    availabilityCountries: ["UK", "EU"],
    regulators: ["FCA"],
    instruments: ["forex", "indices", "commodities", "stocks"],
    products: ["CFDs", "spread betting"],
    platforms: ["Web", "Mobile", "MT4"],
    feeModel: "spread-only",
    minDeposit: "£250",
    pros: ["Strong regulation", "Wide market access", "Good platform stability"],
    cons: ["Higher spreads for small accounts"],
    bestForTags: ["beginners", "regulated", "multi-asset"],
    riskNotes: ["CFDs are complex instruments and come with a high risk of losing money."],
    lastUpdated: "2025-01-15",
    affiliate: {
      primaryCtaText: "Trade with IG",
      affiliateUrl: "https://example.com/ig"
    }
  },
  {
    slug: "cmarkets",
    name: "CMC Markets",
    shortDescription: "Low-cost broker with advanced charting tools.",
    longDescription:
      "CMC Markets provides access to thousands of instruments with competitive pricing and strong charting functionality.",
    availabilityCountries: ["UK", "EU"],
    regulators: ["FCA"],
    instruments: ["forex", "indices", "commodities", "stocks"],
    products: ["CFDs", "spread betting"],
    platforms: ["Web", "Mobile"],
    feeModel: "spread-only",
    minDeposit: "£0",
    pros: ["Tight spreads", "Advanced charts"],
    cons: ["Interface can feel complex"],
    bestForTags: ["low-fees", "advanced"],
    riskNotes: ["Trading leveraged products involves risk."],
    lastUpdated: "2025-01-15",
    affiliate: {
      primaryCtaText: "Visit CMC Markets",
      affiliateUrl: "https://example.com/cmc"
    }
  },
  {
    slug: "plus500",
    name: "Plus500",
    shortDescription: "Simple platform aimed at beginner traders.",
    longDescription:
      "Plus500 focuses on ease of use with a proprietary trading platform and a limited but accessible product range.",
    availabilityCountries: ["UK", "EU"],
    regulators: ["FCA", "CySEC"],
    instruments: ["forex", "commodities", "indices"],
    products: ["CFDs"],
    platforms: ["Web", "Mobile"],
    feeModel: "spread-only",
    minDeposit: "£100",
    pros: ["Easy to use", "Quick account setup"],
    cons: ["Limited advanced tools"],
    bestForTags: ["beginners", "simplicity"],
    riskNotes: ["Retail investor accounts lose money when trading CFDs."],
    lastUpdated: "2025-01-15",
    affiliate: {
      primaryCtaText: "Open Plus500 Account",
      affiliateUrl: "https://example.com/plus500"
    }
  },
  {
    slug: "pepperstone",
    name: "Pepperstone",
    shortDescription: "Low-latency broker popular with active traders.",
    longDescription:
      "Pepperstone offers fast execution and support for MetaTrader platforms, appealing to more experienced traders.",
    availabilityCountries: ["UK", "EU"],
    regulators: ["FCA"],
    instruments: ["forex", "commodities", "indices"],
    products: ["CFDs"],
    platforms: ["MT4", "MT5"],
    feeModel: "commission+spread",
    minDeposit: "£200",
    pros: ["Fast execution", "MT4/MT5 support"],
    cons: ["Less beginner-focused"],
    bestForTags: ["advanced", "low-fees"],
    riskNotes: ["Leverage increases both gains and losses."],
    lastUpdated: "2025-01-15",
    affiliate: {
      primaryCtaText: "Trade with Pepperstone",
      affiliateUrl: "https://example.com/pepperstone"
    }
  },
  {
    slug: "etoro",
    name: "eToro",
    shortDescription: "Social trading platform with copy trading.",
    longDescription:
      "eToro combines trading with social features, allowing users to follow and copy other traders.",
    availabilityCountries: ["UK", "EU"],
    regulators: ["FCA", "CySEC"],
    instruments: ["stocks", "crypto", "indices"],
    products: ["CFDs"],
    platforms: ["Web", "Mobile"],
    feeModel: "spread-only",
    minDeposit: "£50",
    pros: ["Copy trading", "Low entry barrier"],
    cons: ["Higher non-trading fees"],
    bestForTags: ["beginners", "social-trading"],
    riskNotes: ["Crypto trading is highly volatile."],
    lastUpdated: "2025-01-15",
    affiliate: {
      primaryCtaText: "Join eToro",
      affiliateUrl: "https://example.com/etoro"
    }
  },
  {
    slug: "interactive-brokers",
    name: "Interactive Brokers",
    shortDescription: "Professional-grade broker with global market access.",
    longDescription:
      "Interactive Brokers offers extensive market access and advanced tools, primarily targeting experienced traders.",
    availabilityCountries: ["UK", "EU"],
    regulators: ["FCA"],
    instruments: ["stocks", "options", "futures", "forex"],
    products: ["stocks", "options", "futures"],
    platforms: ["Web", "Mobile"],
    feeModel: "commission-based",
    minDeposit: "£0",
    pros: ["Global access", "Professional tools"],
    cons: ["Steep learning curve"],
    bestForTags: ["advanced", "professionals"],
    riskNotes: ["Complex instruments carry higher risk."],
    lastUpdated: "2025-01-15",
    affiliate: {
      primaryCtaText: "Explore Interactive Brokers",
      affiliateUrl: "https://example.com/ib"
    }
  }
];
