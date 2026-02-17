export interface BestPageHeroPick {
  label: string;
  brokerSlug: string;
  brokerName: string;
  reason: string;
}

export interface AudienceSegment {
  title: string;
  points: string[];
}

export interface TopPickOverview {
  brokerSlug: string;
  brokerName: string;
  whyPicked: string;
  limitation: string;
  bestFor: string;
}

export interface BrokerBreakdown {
  brokerSlug: string;
  brokerName: string;
  sections: {
    heading: string;
    points: string[];
  }[];
  whenToAvoid: string;
}

export interface CostComparisonPoint {
  title: string;
  detail: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BestPage {
  slug: string;
  title: string;
  intro: string;
  lastUpdated: string;
  heroPicks: BestPageHeroPick[];
  audience: AudienceSegment[];
  evaluationCriteria: {
    points: string[];
    footnote: string;
  };
  topPicksOverview: TopPickOverview[];
  brokerBreakdowns: BrokerBreakdown[];
  costComparisonLogic: {
    intro?: string;
    points: CostComparisonPoint[];
    footnote?: string;
  };
  risks: string[];
  faq: FAQ[];
  methodology: string[];
  nextSteps: string[];
}

export const bestPages: BestPage[] = [
  // ─────────────────────────────────────────────
  // 1) Best Low-Cost Brokers (UK, 2026)
  // ─────────────────────────────────────────────
  {
    slug: "best-low-cost-brokers",
    title: "Best Low-Cost Brokers (UK, 2026)",
    intro: "Brokers offering the lowest realistic total trading cost for UK traders.",
    lastUpdated: "2026-01-15",
    heroPicks: [
      {
        label: "Best Low-Cost Broker Overall",
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        reason: "Competitive raw spreads with commission transparency for active traders."
      },
      {
        label: "Best Low-Cost Broker for Beginners",
        brokerSlug: "xtb",
        brokerName: "XTB",
        reason: "Competitive spreads without complex commission tiers."
      },
      {
        label: "Best for Active FX Traders",
        brokerSlug: "fp-markets",
        brokerName: "FP Markets",
        reason: "Raw spreads + commission structure suited to higher volume."
      },
      {
        label: "Best for Platform + Pricing Balance",
        brokerSlug: "cmc-markets",
        brokerName: "CMC Markets",
        reason: "Competitive spreads with advanced tools."
      }
    ],
    audience: [
      {
        title: "Cost-Sensitive Traders",
        points: [
          "Prioritise spread efficiency",
          "Compare commission tiers",
          "Calculate total trading cost per lot"
        ]
      },
      {
        title: "Active Traders",
        points: [
          "Trade frequently",
          "Benefit from raw-spread accounts"
        ]
      },
      {
        title: "Swing Traders",
        points: [
          "Need to consider overnight financing costs"
        ]
      },
      {
        title: "Regulation-Focused Users",
        points: [
          "Want FCA-regulated low-cost brokers"
        ]
      }
    ],
    evaluationCriteria: {
      points: [
        "FCA regulation status",
        "Spread competitiveness on major FX pairs",
        "Commission transparency",
        "Financing costs (overnight swaps)",
        "Currency conversion charges",
        "Hidden platform or inactivity fees",
        "Execution model clarity"
      ],
      footnote: "Low cost does not mean 'cheapest headline spread.' It means lowest realistic total trading cost."
    },
    topPicksOverview: [
      {
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        whyPicked: "Raw spreads + commission model",
        limitation: "CFD-focused only",
        bestFor: "Active FX traders"
      },
      {
        brokerSlug: "fp-markets",
        brokerName: "FP Markets",
        whyPicked: "Razor pricing model",
        limitation: "Non-FCA UK entity",
        bestFor: "Scalpers"
      },
      {
        brokerSlug: "cmc-markets",
        brokerName: "CMC Markets",
        whyPicked: "Competitive spreads",
        limitation: "No raw-spread tier",
        bestFor: "Advanced traders"
      },
      {
        brokerSlug: "xtb",
        brokerName: "XTB",
        whyPicked: "Transparent spread model",
        limitation: "Slightly wider than raw brokers",
        bestFor: "Beginners"
      }
    ],
    brokerBreakdowns: [
      {
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Standard (spread-only)",
              "Razor (raw spread + commission)",
              "Razor accounts often provide lower all-in cost for high-frequency traders."
            ]
          },
          {
            heading: "Regulation & Safety",
            points: [
              "FCA regulated UK entity",
              "Segregated client funds"
            ]
          },
          {
            heading: "Platform Options",
            points: ["MT4, MT5, cTrader, TradingView"]
          },
          {
            heading: "Suitability",
            points: ["Day traders", "Scalpers", "Algo users"]
          }
        ],
        whenToAvoid: "If you want long-term investing products"
      },
      {
        brokerSlug: "fp-markets",
        brokerName: "FP Markets",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Raw spreads + commission",
              "Competitive on major pairs"
            ]
          },
          {
            heading: "Regulation",
            points: [
              "ASIC / CySEC regulated",
              "UK clients may not receive FCA direct oversight"
            ]
          },
          {
            heading: "Platform",
            points: ["MT4 / MT5"]
          },
          {
            heading: "Suitability",
            points: ["Cost-focused active traders"]
          }
        ],
        whenToAvoid: "If strict FCA protection is required"
      },
      {
        brokerSlug: "cmc-markets",
        brokerName: "CMC Markets",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Spread-based",
              "Competitive FX pricing"
            ]
          },
          {
            heading: "Regulation",
            points: ["FCA regulated"]
          },
          {
            heading: "Platform",
            points: ["Next Generation platform", "MT4"]
          },
          {
            heading: "Suitability",
            points: ["Traders who want pricing + professional tools"]
          }
        ],
        whenToAvoid: "Pure scalpers seeking raw spreads"
      },
      {
        brokerSlug: "xtb",
        brokerName: "XTB",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Spread-only",
              "Transparent cost model"
            ]
          },
          {
            heading: "Regulation",
            points: ["FCA regulated"]
          },
          {
            heading: "Platform",
            points: ["xStation"]
          },
          {
            heading: "Suitability",
            points: ["Cost-conscious beginners"]
          }
        ],
        whenToAvoid: "Ultra-high frequency scalping"
      }
    ],
    costComparisonLogic: {
      points: [
        {
          title: "Spread + Commission",
          detail: "Raw spread models benefit frequent traders."
        },
        {
          title: "Financing Costs",
          detail: "Swing traders must consider overnight swaps."
        },
        {
          title: "Currency Conversion",
          detail: "Accounts in GBP trading USD instruments incur FX conversion."
        },
        {
          title: "Account Type Differences",
          detail: "Standard vs Razor accounts materially affect cost."
        }
      ]
    },
    risks: [
      "Leverage amplifies losses",
      "Overnight financing accumulates",
      "Spreads widen in volatile markets",
      "Regulatory differences impact protections",
      "Low cost should not override risk management."
    ],
    faq: [
      {
        question: "Which broker has the lowest spreads in the UK?",
        answer: "Pepperstone and FP Markets often offer lowest raw spreads on major FX pairs."
      },
      {
        question: "Is spread-only cheaper than commission?",
        answer: "Depends on volume. Raw spread + commission is usually cheaper for frequent traders."
      },
      {
        question: "Are all low-cost brokers FCA regulated?",
        answer: "No — check the regulatory entity governing your account."
      },
      {
        question: "Do low spreads guarantee profit?",
        answer: "No. Execution cost is only one component of trading performance."
      }
    ],
    methodology: [
      "Rankings consider FCA regulation, pricing transparency, spread competitiveness, and financing structure.",
      "This is not financial advice.",
      "Affiliate relationships do not influence rankings."
    ],
    nextSteps: [
      "Compare low-cost brokers side by side.",
      "Review each broker's detailed pricing page.",
      "Match your trading frequency to account type."
    ]
  },

  // ─────────────────────────────────────────────
  // 2) Best Brokers for Beginners (UK, 2026)
  // ─────────────────────────────────────────────
  {
    slug: "best-brokers-for-beginners",
    title: "Best Brokers for Beginners (UK, 2026)",
    intro: "Beginner-friendly brokers with simple platforms, structured education, and clear pricing for UK traders.",
    lastUpdated: "2026-01-15",
    heroPicks: [
      {
        label: "Best Broker for Beginners Overall",
        brokerSlug: "capital-com",
        brokerName: "Capital.com",
        reason: "Intuitive platform, structured education, simple pricing."
      },
      {
        label: "Best Beginner Broker for Simplicity",
        brokerSlug: "plus500",
        brokerName: "Plus500",
        reason: "Clean interface and straightforward execution."
      },
      {
        label: "Best for Social & Copy Trading",
        brokerSlug: "etoro",
        brokerName: "eToro",
        reason: "Beginner-friendly ecosystem with copy features."
      },
      {
        label: "Best Beginner Broker with Room to Grow",
        brokerSlug: "ig",
        brokerName: "IG",
        reason: "Broader tools and investment options once experience increases."
      }
    ],
    audience: [
      {
        title: "New Traders",
        points: [
          "Opening their first trading account",
          "Unsure about spreads, leverage, or order types"
        ]
      },
      {
        title: "Low-Confidence Investors",
        points: [
          "Want a structured learning path",
          "Prefer intuitive apps"
        ]
      },
      {
        title: "Platform-Focused Users",
        points: [
          "Want mobile-first design",
          "Prefer minimal clutter"
        ]
      },
      {
        title: "Regulation-Focused Users",
        points: [
          "Want FCA oversight and UK protections"
        ]
      }
    ],
    evaluationCriteria: {
      points: [
        "FCA regulation & client protections",
        "Platform simplicity",
        "Educational resources",
        "Transparent pricing",
        "Risk controls (negative balance protection)",
        "Customer feedback consistency",
        "Ease of onboarding & funding"
      ],
      footnote: "Beginner-friendly does not mean lowest spreads — it means lowest friction and clarity."
    },
    topPicksOverview: [
      {
        brokerSlug: "capital-com",
        brokerName: "Capital.com",
        whyPicked: "Clean interface + education",
        limitation: "No investing accounts",
        bestFor: "First-time traders"
      },
      {
        brokerSlug: "plus500",
        brokerName: "Plus500",
        whyPicked: "Extremely simple platform",
        limitation: "Limited advanced tools",
        bestFor: "Casual CFD beginners"
      },
      {
        brokerSlug: "etoro",
        brokerName: "eToro",
        whyPicked: "Copy trading + easy onboarding",
        limitation: "Wider spreads vs pro brokers",
        bestFor: "Social learners"
      },
      {
        brokerSlug: "ig",
        brokerName: "IG",
        whyPicked: "Broad ecosystem",
        limitation: "Platform depth may overwhelm",
        bestFor: "Beginners planning to grow"
      }
    ],
    brokerBreakdowns: [
      {
        brokerSlug: "capital-com",
        brokerName: "Capital.com",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Spread-only",
              "Transparent, no complex commission tiers"
            ]
          },
          {
            heading: "Regulation & Safety",
            points: [
              "FCA regulated UK entity",
              "Segregated funds"
            ]
          },
          {
            heading: "Platform Options",
            points: [
              "Proprietary web & mobile",
              "Simple layout"
            ]
          },
          {
            heading: "Suitability",
            points: ["First-time traders", "Education-focused users"]
          }
        ],
        whenToAvoid: "If you want ISA/SIPP investing"
      },
      {
        brokerSlug: "plus500",
        brokerName: "Plus500",
        sections: [
          {
            heading: "Pricing Structure",
            points: ["Spread-only, commission-free"]
          },
          {
            heading: "Regulation",
            points: ["FCA regulated UK entity"]
          },
          {
            heading: "Platform",
            points: ["Proprietary web & mobile platform"]
          },
          {
            heading: "Suitability",
            points: ["Beginners who want minimal learning curve"]
          }
        ],
        whenToAvoid: "Advanced charting or algorithmic trading required"
      },
      {
        brokerSlug: "etoro",
        brokerName: "eToro",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Spread-based",
              "Withdrawal and conversion fees apply"
            ]
          },
          {
            heading: "Regulation",
            points: ["FCA regulated UK entity"]
          },
          {
            heading: "Platform",
            points: [
              "Social & copy trading",
              "Fractional share investing"
            ]
          },
          {
            heading: "Suitability",
            points: ["Beginners who want community-driven trading"]
          }
        ],
        whenToAvoid: "Tight FX spread trading"
      },
      {
        brokerSlug: "ig",
        brokerName: "IG",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Spread-based CFDs",
              "Commission-free share trading (with custody fees)"
            ]
          },
          {
            heading: "Regulation",
            points: ["FCA regulated"]
          },
          {
            heading: "Platform",
            points: [
              "Web platform",
              "Mobile app",
              "ProRealTime option"
            ]
          },
          {
            heading: "Suitability",
            points: ["Beginners who want long-term investing options"]
          }
        ],
        whenToAvoid: "If simplicity is priority over breadth"
      }
    ],
    costComparisonLogic: {
      intro: "For beginners:",
      points: [
        {
          title: "Spread-Only Pricing",
          detail: "Easier to understand than commission tiers."
        },
        {
          title: "Commission Tiers",
          detail: "Can confuse early-stage traders."
        },
        {
          title: "Overnight Financing",
          detail: "Matters if positions are held overnight."
        }
      ],
      footnote: "Cost transparency matters more than marginal spread differences at beginner stage."
    },
    risks: [
      "CFDs carry leverage risk",
      "Losses can exceed deposits",
      "Spread widening in volatility",
      "Financing costs accumulate",
      "Beginners should start with small position sizing and demo accounts where available."
    ],
    faq: [
      {
        question: "Which broker is safest for beginners in the UK?",
        answer: "All listed brokers are FCA regulated with client fund protections."
      },
      {
        question: "Is Plus500 good for first-time traders?",
        answer: "Yes — simple interface and clear pricing make it accessible."
      },
      {
        question: "Does eToro offer demo accounts?",
        answer: "Yes — most beginner-focused brokers offer demo access."
      },
      {
        question: "Should beginners use MT4/MT5?",
        answer: "MetaTrader can be powerful but may overwhelm first-time traders."
      },
      {
        question: "Is low spread important for beginners?",
        answer: "Understanding risk management is more important than minor spread differences."
      }
    ],
    methodology: [
      "Rankings are based on FCA regulation, usability, pricing transparency, and platform design.",
      "This is not financial advice.",
      "Affiliate partnerships do not influence evaluation."
    ],
    nextSteps: [
      "Compare beginner brokers side by side.",
      "Open a demo account before depositing funds.",
      "Review full broker breakdown pages for deeper details."
    ]
  },

  // ─────────────────────────────────────────────
  // 3) Best MT5 Brokers (UK, 2026)
  // ─────────────────────────────────────────────
  {
    slug: "best-mt5-brokers",
    title: "Best MT5 Brokers (UK, 2026)",
    intro: "Top MetaTrader 5 brokers for UK traders seeking algorithmic trading, advanced charting, and flexible execution.",
    lastUpdated: "2026-01-15",
    heroPicks: [
      {
        label: "Best MT5 Broker Overall",
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        reason: "Strong execution, FCA regulation, flexible account types."
      },
      {
        label: "Best Low-Cost MT5 Broker",
        brokerSlug: "fp-markets",
        brokerName: "FP Markets",
        reason: "Competitive raw spreads for active traders."
      },
      {
        label: "Best MT5 Broker for Beginners",
        brokerSlug: "avatrade",
        brokerName: "AvaTrade",
        reason: "Structured onboarding with MT5 support."
      },
      {
        label: "Best FCA-Regulated MT5 Option",
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        reason: "Direct UK FCA entity."
      }
    ],
    audience: [
      {
        title: "MetaTrader Users",
        points: [
          "Specifically want MetaTrader 5 (MT5)",
          "Use custom indicators or Expert Advisors (EAs)"
        ]
      },
      {
        title: "Algorithmic Traders",
        points: [
          "Run automated systems",
          "Require VPS compatibility"
        ]
      },
      {
        title: "Advanced Chart Users",
        points: [
          "Need deeper timeframes",
          "Want additional MT5 tools vs MT4"
        ]
      },
      {
        title: "Regulation-Focused Traders",
        points: [
          "Want FCA oversight while using MT5"
        ]
      }
    ],
    evaluationCriteria: {
      points: [
        "FCA regulation (where applicable)",
        "MT5 availability (full functionality)",
        "Execution quality",
        "Spread + commission model",
        "VPS and algorithm support",
        "Financing transparency",
        "Risk protections (negative balance protection)"
      ],
      footnote: "Not all brokers offering MT4 offer MT5. Platform availability matters."
    },
    topPicksOverview: [
      {
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        whyPicked: "FCA-regulated, strong execution",
        limitation: "CFD-only",
        bestFor: "Active traders"
      },
      {
        brokerSlug: "fp-markets",
        brokerName: "FP Markets",
        whyPicked: "Competitive raw pricing",
        limitation: "Not FCA UK entity",
        bestFor: "Scalpers"
      },
      {
        brokerSlug: "avatrade",
        brokerName: "AvaTrade",
        whyPicked: "Beginner-accessible MT5",
        limitation: "Regulation structure varies",
        bestFor: "Learning traders"
      },
      {
        brokerSlug: "ig",
        brokerName: "IG",
        whyPicked: "Limited MT support",
        limitation: "Not MT5-focused",
        bestFor: "Multi-platform users"
      }
    ],
    brokerBreakdowns: [
      {
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        sections: [
          {
            heading: "MT5 Availability",
            points: [
              "Full MT5 support",
              "Expert Advisors supported",
              "VPS compatibility"
            ]
          },
          {
            heading: "Pricing Structure",
            points: [
              "Razor (raw spread + commission)",
              "Standard (spread-only)"
            ]
          },
          {
            heading: "Regulation & Safety",
            points: ["FCA regulated UK entity"]
          },
          {
            heading: "Suitability",
            points: ["Algo traders", "Scalpers", "Technical analysts"]
          }
        ],
        whenToAvoid: "If you want ISA/SIPP investing"
      },
      {
        brokerSlug: "fp-markets",
        brokerName: "FP Markets",
        sections: [
          {
            heading: "MT5 Availability",
            points: [
              "Full MT5 access",
              "Automation supported"
            ]
          },
          {
            heading: "Pricing Structure",
            points: ["Raw spreads + commission"]
          },
          {
            heading: "Regulation",
            points: ["ASIC/CySEC (UK clients may not have FCA oversight)"]
          },
          {
            heading: "Suitability",
            points: ["Cost-focused active traders"]
          }
        ],
        whenToAvoid: "If FCA UK regulation is priority"
      },
      {
        brokerSlug: "avatrade",
        brokerName: "AvaTrade",
        sections: [
          {
            heading: "MT5 Availability",
            points: [
              "MT5 supported",
              "Beginner-friendly access"
            ]
          },
          {
            heading: "Pricing Structure",
            points: ["Spread-only"]
          },
          {
            heading: "Regulation",
            points: ["Multi-jurisdictional regulation"]
          },
          {
            heading: "Suitability",
            points: ["Beginners wanting MT5 exposure"]
          }
        ],
        whenToAvoid: "If you require raw spread pricing"
      },
      {
        brokerSlug: "ig",
        brokerName: "IG",
        sections: [
          {
            heading: "MT5 Availability",
            points: [
              "IG does not strongly position itself around MT5.",
              "Offers proprietary platforms and limited MT4 support in some regions."
            ]
          },
          {
            heading: "Suitability",
            points: ["Not ideal if MT5 is your primary requirement."]
          }
        ],
        whenToAvoid: "If MT5 is your primary platform requirement"
      }
    ],
    costComparisonLogic: {
      intro: "MT5 brokers vary mainly by:",
      points: [
        {
          title: "Spread vs Commission",
          detail: "Raw + commission often cheaper for high volume."
        },
        {
          title: "Financing",
          detail: "Overnight swaps apply across all brokers."
        },
        {
          title: "Execution Quality",
          detail: "Critical for algorithmic traders."
        }
      ],
      footnote: "Choosing MT5 is about flexibility — pricing differences matter most for active systems."
    },
    risks: [
      "Leverage risk applies to all MT5 CFD trading.",
      "Algorithmic trading can amplify losses quickly.",
      "Spread widening affects EA performance.",
      "Financing impacts swing strategies.",
      "MT5 is a tool — not a profitability guarantee."
    ],
    faq: [
      {
        question: "Which UK broker offers MT5?",
        answer: "Pepperstone, FP Markets, and AvaTrade offer MT5 access."
      },
      {
        question: "Is MT5 better than MT4?",
        answer: "MT5 offers additional timeframes, order types, and multi-asset support."
      },
      {
        question: "Is MT5 good for beginners?",
        answer: "It can be, but learning curve is steeper than proprietary beginner platforms."
      },
      {
        question: "Are MT5 brokers FCA regulated?",
        answer: "Some are (e.g., Pepperstone UK entity). Others operate under overseas regulation."
      },
      {
        question: "Is raw spread better for MT5?",
        answer: "Often yes for high-frequency traders."
      }
    ],
    methodology: [
      "Rankings are based on platform support, FCA status, pricing structure, and execution flexibility.",
      "This is not financial advice.",
      "Affiliate partnerships do not influence evaluation."
    ],
    nextSteps: [
      "Compare MT5 brokers based on pricing and regulation.",
      "Check which entity governs your account.",
      "Match account type to trading frequency."
    ]
  },

  // ─────────────────────────────────────────────
  // 4) Best Regulated Brokers (UK, 2026)
  // ─────────────────────────────────────────────
  {
    slug: "best-regulated-brokers",
    title: "Best Regulated Brokers (UK, 2026)",
    intro: "This page focuses on regulatory strength and client protection first, not pricing or features.",
    lastUpdated: "2026-01-15",
    heroPicks: [
      {
        label: "Best Fully FCA-Regulated Broker Overall",
        brokerSlug: "ig",
        brokerName: "IG",
        reason: "Long operating history, FCA oversight, publicly listed."
      },
      {
        label: "Best FCA-Regulated Broker for Active Traders",
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        reason: "FCA entity with flexible pricing models."
      },
      {
        label: "Best FCA-Regulated Broker for Beginners",
        brokerSlug: "capital-com",
        brokerName: "Capital.com",
        reason: "Simple platform under FCA regulation."
      },
      {
        label: "Best Broad Multi-Asset FCA Broker",
        brokerSlug: "interactive-brokers",
        brokerName: "Interactive Brokers (UK)",
        reason: "Global access with FCA oversight."
      }
    ],
    audience: [
      {
        title: "Regulatory Security",
        points: [
          "FCA oversight",
          "Segregated client funds",
          "FSCS protection eligibility"
        ]
      },
      {
        title: "Risk Protection",
        points: [
          "Negative balance protection",
          "Margin transparency"
        ]
      },
      {
        title: "Institutional Trust Signals",
        points: [
          "Public listing",
          "Long operating history"
        ]
      },
      {
        title: "Compliance-Focused Investors",
        points: [
          "Want UK-based regulatory protection rather than offshore entities"
        ]
      }
    ],
    evaluationCriteria: {
      points: [
        "FCA authorisation status",
        "Client money segregation",
        "Negative balance protection",
        "FSCS eligibility",
        "Corporate transparency (public listing)",
        "Years of operation",
        "Complaint and enforcement history (public data)"
      ],
      footnote: "This page excludes brokers serving UK clients only through offshore regulation."
    },
    topPicksOverview: [
      {
        brokerSlug: "ig",
        brokerName: "IG",
        whyPicked: "FCA regulated, publicly listed",
        limitation: "Costs vary by product",
        bestFor: "Broad trading + investing"
      },
      {
        brokerSlug: "cmc-markets",
        brokerName: "CMC Markets",
        whyPicked: "FCA regulated, publicly listed",
        limitation: "Complex platform",
        bestFor: "Advanced trading"
      },
      {
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        whyPicked: "FCA regulated",
        limitation: "CFD-only",
        bestFor: "Active traders"
      },
      {
        brokerSlug: "capital-com",
        brokerName: "Capital.com",
        whyPicked: "FCA regulated",
        limitation: "No ISA/SIPP",
        bestFor: "Beginners"
      },
      {
        brokerSlug: "interactive-brokers",
        brokerName: "Interactive Brokers (UK)",
        whyPicked: "FCA regulated, publicly listed",
        limitation: "Steeper learning curve",
        bestFor: "Global investors"
      },
      {
        brokerSlug: "plus500",
        brokerName: "Plus500 UK",
        whyPicked: "FCA regulated, publicly listed",
        limitation: "Limited advanced tools",
        bestFor: "Simple CFD trading"
      }
    ],
    brokerBreakdowns: [
      {
        brokerSlug: "ig",
        brokerName: "IG",
        sections: [
          {
            heading: "Regulation",
            points: [
              "Authorised and regulated by the FCA",
              "Segregated client funds",
              "FSCS protection eligibility"
            ]
          },
          {
            heading: "Corporate Transparency",
            points: [
              "Publicly listed company",
              "Long UK operating history"
            ]
          },
          {
            heading: "Suitability",
            points: ["Traders and investors seeking broad coverage"]
          }
        ],
        whenToAvoid: "If lowest-cost FX trading is your only priority"
      },
      {
        brokerSlug: "cmc-markets",
        brokerName: "CMC Markets",
        sections: [
          {
            heading: "Regulation",
            points: [
              "FCA regulated UK entity",
              "Segregated funds"
            ]
          },
          {
            heading: "Corporate Structure",
            points: [
              "London-based broker",
              "Public company"
            ]
          },
          {
            heading: "Suitability",
            points: ["Active UK CFD traders"]
          }
        ],
        whenToAvoid: "Absolute beginners"
      },
      {
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        sections: [
          {
            heading: "Regulation",
            points: [
              "FCA regulated UK entity",
              "Negative balance protection"
            ]
          },
          {
            heading: "Structure",
            points: ["Private company"]
          },
          {
            heading: "Suitability",
            points: ["Active and algorithmic traders"]
          }
        ],
        whenToAvoid: "Investors seeking ISA/SIPP"
      },
      {
        brokerSlug: "capital-com",
        brokerName: "Capital.com",
        sections: [
          {
            heading: "Regulation",
            points: [
              "FCA regulated UK entity",
              "Segregated client funds"
            ]
          },
          {
            heading: "Suitability",
            points: ["Beginner traders wanting regulatory clarity"]
          }
        ],
        whenToAvoid: "Long-term investing focus"
      },
      {
        brokerSlug: "interactive-brokers",
        brokerName: "Interactive Brokers (UK)",
        sections: [
          {
            heading: "Regulation",
            points: ["FCA regulated UK subsidiary"]
          },
          {
            heading: "Corporate Transparency",
            points: ["Publicly listed US company"]
          },
          {
            heading: "Suitability",
            points: ["Multi-asset professional traders"]
          }
        ],
        whenToAvoid: "Users wanting simple retail platforms"
      },
      {
        brokerSlug: "plus500",
        brokerName: "Plus500 UK",
        sections: [
          {
            heading: "Regulation",
            points: [
              "FCA regulated UK entity",
              "Publicly listed"
            ]
          },
          {
            heading: "Suitability",
            points: ["Simple CFD traders"]
          }
        ],
        whenToAvoid: "Advanced charting users"
      }
    ],
    costComparisonLogic: {
      intro: "Regulated brokers:",
      points: [
        {
          title: "Leverage",
          detail: "May offer lower leverage than offshore brokers."
        },
        {
          title: "Compliance",
          detail: "Operate under stricter compliance."
        },
        {
          title: "Margin Policies",
          detail: "Require clearer margin policies."
        }
      ],
      footnote: "Lower leverage ≠ lower risk. But regulatory enforcement provides structural protections."
    },
    risks: [
      "Even with FCA regulation, CFDs remain high risk.",
      "Losses can exceed deposits (depending on structure).",
      "FSCS covers broker insolvency, not trading losses.",
      "Financing costs still apply.",
      "Regulation protects structure — not performance."
    ],
    faq: [
      {
        question: "What does FCA regulation mean?",
        answer: "The Financial Conduct Authority oversees broker conduct, client money rules, and compliance."
      },
      {
        question: "Does FCA regulation guarantee safety?",
        answer: "No — it reduces structural risk but does not eliminate trading risk."
      },
      {
        question: "Is offshore regulation riskier?",
        answer: "Protections and dispute resolution may differ significantly."
      },
      {
        question: "Does FSCS cover trading losses?",
        answer: "No — it covers broker insolvency up to eligible limits."
      },
      {
        question: "Are all brokers on this list FCA regulated?",
        answer: "Yes — all listed brokers operate UK FCA-authorised entities."
      }
    ],
    methodology: [
      "This ranking prioritises FCA status, client money rules, transparency, and regulatory oversight.",
      "This is not financial advice.",
      "Affiliate partnerships do not influence ranking logic."
    ],
    nextSteps: [
      "Review FCA registration numbers directly.",
      "Confirm which entity governs your account.",
      "Compare broker features after verifying regulation."
    ]
  }
];