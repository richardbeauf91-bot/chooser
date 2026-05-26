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
    intro: "Brokers offering the lowest realistic total trading cost for UK traders — covering raw spreads, commissions, and all ancillary fees.",
    lastUpdated: "2026-05-26",
    heroPicks: [
      {
        label: "Best Low-Cost Broker Overall",
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        reason: "Razor account delivers raw spreads with commission transparency — one of the most cost-efficient FCA-regulated brokers for active traders."
      },
      {
        label: "Best Low-Cost FCA Broker for MT4/MT5",
        brokerSlug: "tickmill",
        brokerName: "Tickmill",
        reason: "Raw account charges $3/side ($6 round-turn) on raw interbank spreads — among the lowest total cost for MT4/MT5 traders under FCA regulation."
      },
      {
        label: "Best Low-Cost Broker for Beginners",
        brokerSlug: "xtb",
        brokerName: "XTB",
        reason: "Competitive spreads without complex commission tiers — transparent pricing on a well-designed proprietary platform."
      },
      {
        label: "Best for Platform + Pricing Balance",
        brokerSlug: "cmc-markets",
        brokerName: "CMC Markets",
        reason: "Competitive spreads on core markets with professional-grade charting tools included."
      }
    ],
    audience: [
      {
        title: "Cost-Sensitive Traders",
        points: [
          "Prioritise spread efficiency",
          "Compare commission tiers carefully",
          "Calculate total trading cost per lot, not just headline spread"
        ]
      },
      {
        title: "Active Traders",
        points: [
          "Trade frequently — raw-spread + commission models benefit higher volume",
          "Use MT4 or MT5 for execution"
        ]
      },
      {
        title: "Swing Traders",
        points: [
          "Hold positions overnight — financing costs matter as much as spreads"
        ]
      },
      {
        title: "Regulation-Focused Users",
        points: [
          "Want FCA-regulated low-cost brokers",
          "Require FSCS protection on eligible deposits"
        ]
      }
    ],
    evaluationCriteria: {
      points: [
        "FCA regulation status",
        "Spread competitiveness on major FX pairs",
        "Commission transparency (raw vs spread-only accounts)",
        "Financing costs (overnight swaps)",
        "Currency conversion charges",
        "Hidden platform or inactivity fees",
        "Execution model clarity"
      ],
      footnote: "Low cost does not mean 'cheapest headline spread.' It means lowest realistic total trading cost — spread + commission + financing + ancillary fees."
    },
    topPicksOverview: [
      {
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        whyPicked: "Raw spreads + commission model with FCA regulation",
        limitation: "CFD-focused only — no investing accounts",
        bestFor: "Active FX and CFD traders"
      },
      {
        brokerSlug: "tickmill",
        brokerName: "Tickmill",
        whyPicked: "$3/side commission on raw spreads — marginally cheaper than Pepperstone Razor for MT4/MT5 users",
        limitation: "No stocks, ETFs, ISA or SIPP",
        bestFor: "High-frequency MT4/MT5 traders"
      },
      {
        brokerSlug: "fp-markets",
        brokerName: "FP Markets",
        whyPicked: "Raw spreads + commission via ASIC/CySEC entity",
        limitation: "UK clients typically not under direct FCA oversight",
        bestFor: "Cost-focused scalpers comfortable with non-FCA regulation"
      },
      {
        brokerSlug: "cmc-markets",
        brokerName: "CMC Markets",
        whyPicked: "Competitive spreads on core FX and index markets",
        limitation: "No raw-spread + commission tier",
        bestFor: "Active traders who value tools alongside pricing"
      },
      {
        brokerSlug: "xtb",
        brokerName: "XTB",
        whyPicked: "Transparent spread-only model with no inactivity fee in most regions",
        limitation: "Spreads slightly wider than raw-spread brokers",
        bestFor: "Cost-conscious beginners and intermediate traders"
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
              "Standard account: spread-only pricing",
              "Razor account: raw spread + commission — typically AU$7 (~£3.50) per round turn",
              "Razor accounts often provide lower all-in cost for active traders"
            ]
          },
          {
            heading: "Regulation & Safety",
            points: [
              "FCA regulated UK entity",
              "Segregated client funds and FSCS protection on eligible deposits"
            ]
          },
          {
            heading: "Platform Options",
            points: ["MT4, MT5, cTrader, TradingView"]
          },
          {
            heading: "Suitability",
            points: ["Day traders", "Scalpers", "Algorithmic traders"]
          }
        ],
        whenToAvoid: "If you want long-term investing, ISA or SIPP accounts"
      },
      {
        brokerSlug: "tickmill",
        brokerName: "Tickmill",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Classic account: spread-only (typical EUR/USD ~1.6 pips)",
              "Raw account: raw spreads from 0.0 pips + $3/side ($6 round-turn) commission",
              "Raw account is one of the lowest total costs of any FCA-regulated broker"
            ]
          },
          {
            heading: "Regulation & Safety",
            points: [
              "FCA regulated UK entity (Tickmill UK Ltd)",
              "Segregated client funds and FSCS protection on eligible deposits up to £85,000"
            ]
          },
          {
            heading: "Platform Options",
            points: ["MT4, MT5, Web Trader, Mobile"]
          },
          {
            heading: "Suitability",
            points: ["High-frequency MT4/MT5 traders", "Scalpers", "Algorithmic traders"]
          }
        ],
        whenToAvoid: "If you want stocks, ETFs, cTrader, ISA or SIPP"
      },
      {
        brokerSlug: "fp-markets",
        brokerName: "FP Markets",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Raw spreads + commission",
              "Competitive on major FX pairs"
            ]
          },
          {
            heading: "Regulation",
            points: [
              "ASIC / CySEC regulated",
              "UK clients typically not under direct FCA oversight — verify which entity applies"
            ]
          },
          {
            heading: "Platform",
            points: ["MT4 / MT5"]
          },
          {
            heading: "Suitability",
            points: ["Cost-focused active traders comfortable with non-FCA regulation"]
          }
        ],
        whenToAvoid: "If strict FCA protection and FSCS coverage are required"
      },
      {
        brokerSlug: "cmc-markets",
        brokerName: "CMC Markets",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Spread-based pricing on core markets",
              "Competitive FX and index spreads",
              "Inactivity fee of £10/month after 12 months without trading"
            ]
          },
          {
            heading: "Regulation",
            points: ["FCA regulated UK entity"]
          },
          {
            heading: "Platform",
            points: ["Next Generation proprietary platform", "MT4"]
          },
          {
            heading: "Suitability",
            points: ["Active traders who want competitive pricing alongside professional tools"]
          }
        ],
        whenToAvoid: "Pure scalpers seeking raw spreads — no raw-spread + commission tier available"
      },
      {
        brokerSlug: "xtb",
        brokerName: "XTB",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Spread-only model",
              "Transparent cost structure with no inactivity fee in many regions"
            ]
          },
          {
            heading: "Regulation",
            points: ["FCA regulated UK entity"]
          },
          {
            heading: "Platform",
            points: ["xStation (web, desktop, mobile)"]
          },
          {
            heading: "Suitability",
            points: ["Cost-conscious beginners and intermediate CFD traders"]
          }
        ],
        whenToAvoid: "Ultra-high frequency scalping where raw spread + commission is materially cheaper"
      }
    ],
    costComparisonLogic: {
      points: [
        {
          title: "Spread + Commission",
          detail: "Raw spread models benefit frequent traders — the commission is predictable and the spread is tighter. For occasional traders, spread-only simplicity may outweigh the marginal cost difference."
        },
        {
          title: "Financing Costs",
          detail: "Swing traders must model overnight swap costs — these can exceed spread costs on positions held for days."
        },
        {
          title: "Currency Conversion",
          detail: "GBP accounts trading USD instruments incur FX conversion on each trade — check the broker's conversion rate."
        },
        {
          title: "Account Type Differences",
          detail: "Standard vs Raw/Razor accounts materially affect cost — always model your expected volume against both options before opening."
        }
      ],
      footnote: "A broker with a 0.0 pip spread and $6 commission may be cheaper or more expensive than a 1.2 pip spread-only broker — it depends entirely on trade size and frequency."
    },
    risks: [
      "Leverage amplifies losses — cheap execution does not reduce trading risk",
      "Overnight financing accumulates on leveraged positions held past rollover",
      "Spreads widen significantly during major news events and low liquidity sessions",
      "Regulatory differences between FCA and non-FCA entities affect client protections",
      "Low cost should never override risk management discipline"
    ],
    faq: [
      {
        question: "Which broker has the lowest spreads in the UK?",
        answer: "Pepperstone Razor and Tickmill Raw both offer raw spreads from 0.0 pips on EUR/USD. Total cost depends on volume — Tickmill's $6 round-turn commission is marginally lower than Pepperstone's AU$7 equivalent."
      },
      {
        question: "Is spread-only cheaper than commission + raw spread?",
        answer: "Depends on volume. For active traders placing multiple standard lots per day, raw spread + commission is typically cheaper. For occasional traders, spread-only simplicity may cost less overall."
      },
      {
        question: "Are all low-cost brokers FCA regulated?",
        answer: "No — FP Markets operates under ASIC/CySEC for UK clients. Pepperstone, Tickmill, XTB and CMC Markets all have direct FCA UK entities."
      },
      {
        question: "Do low spreads guarantee better trading results?",
        answer: "No. Execution cost is one component of performance. Risk management, strategy, and position sizing matter far more."
      }
    ],
    methodology: [
      "Rankings consider FCA regulation, pricing transparency, spread competitiveness on major pairs, commission structure, and total realistic cost for different trader profiles.",
      "This is not financial advice.",
      "Affiliate relationships do not influence rankings."
    ],
    nextSteps: [
      "Compare raw account pricing across brokers using our fee calculator.",
      "Check which regulatory entity governs your account before depositing.",
      "Match your trading frequency and lot size to account type before opening."
    ]
  },

  // ─────────────────────────────────────────────
  // 2) Best Brokers for Beginners (UK, 2026)
  // ─────────────────────────────────────────────
  {
    slug: "best-brokers-for-beginners",
    title: "Best Brokers for Beginners (UK, 2026)",
    intro: "Beginner-friendly brokers with simple platforms, clear pricing and strong educational resources — covering both stock investing and CFD trading for new UK traders.",
    lastUpdated: "2026-05-26",
    heroPicks: [
      {
        label: "Best for Beginner Stock & ISA Investors",
        brokerSlug: "trading-212",
        brokerName: "Trading 212",
        reason: "Zero commission, free ISA, £1 minimum CFD / £10 ISA deposit, and one of the best-rated investing apps in the UK — the clearest starting point for new investors."
      },
      {
        label: "Best for Beginner CFD Traders",
        brokerSlug: "capital-com",
        brokerName: "Capital.com",
        reason: "Intuitive platform, structured education, and simple spread-only pricing make it the easiest entry into FCA-regulated CFD trading."
      },
      {
        label: "Best for Social & Copy Trading",
        brokerSlug: "etoro",
        brokerName: "eToro",
        reason: "CopyTrader lets beginners mirror experienced traders automatically — ideal if you want to learn by doing rather than by studying."
      },
      {
        label: "Best Beginner Broker with Room to Grow",
        brokerSlug: "ig",
        brokerName: "IG",
        reason: "Combines stocks, ISA, SIPP, CFDs and spread betting under one FCA-regulated ecosystem — suitable as trading ambitions evolve."
      }
    ],
    audience: [
      {
        title: "First-Time Stock Investors",
        points: [
          "Opening their first ISA or invest account",
          "Want zero commission and a clean app experience"
        ]
      },
      {
        title: "New CFD Traders",
        points: [
          "Unsure about spreads, leverage, or order types",
          "Want a structured learning path alongside trading"
        ]
      },
      {
        title: "Social Learners",
        points: [
          "Learn better by following others",
          "Interested in copy trading rather than solo analysis"
        ]
      },
      {
        title: "Regulation-Focused Users",
        points: [
          "Want FCA oversight, FSCS protection, and UK consumer rights"
        ]
      }
    ],
    evaluationCriteria: {
      points: [
        "FCA regulation and FSCS protection eligibility",
        "Platform simplicity and mobile app quality",
        "Educational resources and learning support",
        "Transparent, predictable pricing",
        "Minimum deposit accessibility",
        "Risk controls (negative balance protection)",
        "Customer feedback from new users"
      ],
      footnote: "Beginner-friendly means lowest friction and clearest pricing — not necessarily the tightest spreads."
    },
    topPicksOverview: [
      {
        brokerSlug: "trading-212",
        brokerName: "Trading 212",
        whyPicked: "Zero commission, free ISA, £1 minimum, highest-rated UK investing app",
        limitation: "No SIPP; limited advanced tools for active CFD traders",
        bestFor: "New stock and ETF investors using an ISA"
      },
      {
        brokerSlug: "capital-com",
        brokerName: "Capital.com",
        whyPicked: "Clean CFD platform with strong built-in education",
        limitation: "No direct share ownership or ISA/SIPP",
        bestFor: "First-time CFD and forex traders"
      },
      {
        brokerSlug: "plus500",
        brokerName: "Plus500",
        whyPicked: "Extremely simple platform with no minimum deposit",
        limitation: "Limited advanced charting and tools",
        bestFor: "Casual CFD beginners who want minimal friction"
      },
      {
        brokerSlug: "etoro",
        brokerName: "eToro",
        whyPicked: "Copy trading and social features for passive learning",
        limitation: "USD withdrawal fee, inactivity fee, wider spreads on some products",
        bestFor: "Beginners who prefer following others over independent analysis"
      },
      {
        brokerSlug: "ig",
        brokerName: "IG",
        whyPicked: "Broadest product range — CFDs, shares, ISA, SIPP under one roof",
        limitation: "Platform depth can feel overwhelming at first",
        bestFor: "Beginners who plan to grow into active trading and investing"
      }
    ],
    brokerBreakdowns: [
      {
        brokerSlug: "trading-212",
        brokerName: "Trading 212",
        sections: [
          {
            heading: "Pricing",
            points: [
              "Zero commission on stocks and ETFs",
              "No annual ISA platform fee",
              "0.15% currency conversion fee on non-GBP instruments",
              "CFD account: spread-based with overnight financing"
            ]
          },
          {
            heading: "Regulation & Safety",
            points: [
              "FCA regulated UK entity (Trading 212 UK Ltd)",
              "Segregated client funds and FSCS protection up to £85,000"
            ]
          },
          {
            heading: "Account Types",
            points: [
              "Stocks & Shares ISA (£10 minimum)",
              "Invest account (£10 minimum)",
              "CFD account (£1 minimum)"
            ]
          },
          {
            heading: "Suitability",
            points: ["New investors building a long-term ISA portfolio", "Cost-conscious UK retail investors"]
          }
        ],
        whenToAvoid: "If you need a SIPP, raw forex spreads, or professional CFD execution tools"
      },
      {
        brokerSlug: "capital-com",
        brokerName: "Capital.com",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Spread-only — no commission on standard trades",
              "Transparent pricing with 0.70% FX conversion fee"
            ]
          },
          {
            heading: "Regulation & Safety",
            points: [
              "FCA regulated UK entity",
              "Segregated funds and negative balance protection"
            ]
          },
          {
            heading: "Platform Options",
            points: [
              "Proprietary web and mobile platform",
              "Built-in educational content and market insights"
            ]
          },
          {
            heading: "Suitability",
            points: ["First-time CFD and forex traders", "Education-focused beginners"]
          }
        ],
        whenToAvoid: "If you want ISA/SIPP investing or direct share ownership"
      },
      {
        brokerSlug: "plus500",
        brokerName: "Plus500",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Spread-only, commission-free on CFDs",
              "Currency conversion fee up to 0.70%"
            ]
          },
          {
            heading: "Regulation",
            points: ["FCA regulated UK entity", "Publicly listed on London Stock Exchange"]
          },
          {
            heading: "Platform",
            points: ["Proprietary web and mobile platform — simple layout focused on quick execution"]
          },
          {
            heading: "Suitability",
            points: ["Beginners who want minimal learning curve and fast setup"]
          }
        ],
        whenToAvoid: "If you need advanced charting, algorithmic trading, or MT4/MT5"
      },
      {
        brokerSlug: "etoro",
        brokerName: "eToro",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "Zero commission on many stocks and ETFs",
              "USD 5 withdrawal fee on all withdrawals",
              "USD 10/month inactivity fee after 12 months",
              "Currency conversion applies — account is USD-denominated"
            ]
          },
          {
            heading: "Regulation",
            points: ["FCA regulated UK entity (eToro (UK) Ltd)", "FSCS protection on eligible balances"]
          },
          {
            heading: "Platform",
            points: [
              "Social feed and CopyTrader — mirror other traders automatically",
              "Smart Portfolios for thematic investing"
            ]
          },
          {
            heading: "Suitability",
            points: ["Beginners who learn by following experienced traders"]
          }
        ],
        whenToAvoid: "If tight FX spread execution or lowest ancillary fees are the priority"
      },
      {
        brokerSlug: "ig",
        brokerName: "IG",
        sections: [
          {
            heading: "Pricing Structure",
            points: [
              "CFD/Spread betting: spread-based",
              "Shares: commission-free online trades; custody and FX fees may apply",
              "ProRealTime charting: free with activity threshold"
            ]
          },
          {
            heading: "Regulation",
            points: ["FCA regulated", "Publicly listed, long UK operating history"]
          },
          {
            heading: "Platform",
            points: [
              "Web and mobile platform",
              "Educational resources and demo account"
            ]
          },
          {
            heading: "Suitability",
            points: ["Beginners who plan to grow into active trading and long-term investing"]
          }
        ],
        whenToAvoid: "If simplicity is more important than breadth at this stage"
      }
    ],
    costComparisonLogic: {
      intro: "For beginners, cost clarity matters more than marginal spread differences:",
      points: [
        {
          title: "Zero Commission (Stocks/ETFs)",
          detail: "Trading 212 and eToro both offer zero commission on stocks — but eToro's withdrawal and inactivity fees add up. Trading 212 is genuinely cheaper for regular ISA investors."
        },
        {
          title: "Spread-Only CFD Pricing",
          detail: "Easier to understand than commission tiers. Capital.com and Plus500 both use this model — suitable for beginners who make occasional trades."
        },
        {
          title: "Overnight Financing",
          detail: "Matters if CFD positions are held past market close. New traders often underestimate this cost."
        }
      ],
      footnote: "Cost transparency and simplicity matter more than marginal spread differences at the beginner stage."
    },
    risks: [
      "CFDs carry leverage risk — losses can exceed deposits",
      "Stock and ETF values can fall as well as rise — capital is at risk",
      "Financing costs accumulate on leveraged CFD positions held overnight",
      "Beginners should start with a demo account and small position sizes",
      "Social and copy trading does not guarantee the copied trader will perform in future"
    ],
    faq: [
      {
        question: "Which broker is best for a first ISA in the UK?",
        answer: "Trading 212 — zero commission, no ISA platform fee, £10 minimum investment, and one of the highest-rated apps for UK retail investors."
      },
      {
        question: "Which is better for a beginner: Trading 212 or eToro?",
        answer: "Trading 212 is cheaper overall (no withdrawal or inactivity fees, lower FX conversion). eToro is better if copy trading or a wider crypto selection is important to you."
      },
      {
        question: "Is Plus500 good for first-time traders?",
        answer: "Yes — the simple interface and clear pricing make it accessible. It is CFD-only, so not suitable for stock investing or ISAs."
      },
      {
        question: "Should beginners use MT4/MT5?",
        answer: "MetaTrader platforms are powerful but have a steep learning curve. Most beginners are better served starting with a proprietary platform before moving to MT4/MT5."
      },
      {
        question: "Are all brokers on this list FCA regulated?",
        answer: "Yes — all listed brokers operate FCA-authorised UK entities with client fund segregation and FSCS protection on eligible deposits."
      }
    ],
    methodology: [
      "Rankings are based on FCA regulation, usability, pricing clarity, minimum deposit accessibility, and platform design suitability for new users.",
      "This is not financial advice.",
      "Affiliate partnerships do not influence evaluation."
    ],
    nextSteps: [
      "Open a demo account before depositing real funds.",
      "Start with a small amount — most brokers on this list have no or very low minimum deposits.",
      "Read the full broker review before committing."
    ]
  },

  // ─────────────────────────────────────────────
  // 3) Best MT5 Brokers (UK, 2026)
  // ─────────────────────────────────────────────
  {
    slug: "best-mt5-brokers",
    title: "Best MT5 Brokers (UK, 2026)",
    intro: "Top MetaTrader 5 brokers for UK traders seeking algorithmic trading, advanced charting, Expert Advisor support and flexible execution under FCA regulation.",
    lastUpdated: "2026-05-26",
    heroPicks: [
      {
        label: "Best MT5 Broker Overall",
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        reason: "FCA regulated, strong execution, Razor raw spread account, and the broadest platform ecosystem — MT4, MT5, cTrader and TradingView."
      },
      {
        label: "Best Low-Cost MT5 Broker (FCA)",
        brokerSlug: "tickmill",
        brokerName: "Tickmill",
        reason: "FCA regulated with MT4 and MT5 support, Raw account at $3/side commission on raw spreads — among the lowest total cost of any FCA-regulated MT5 broker."
      },
      {
        label: "Best Raw Spread MT5 Broker",
        brokerSlug: "fp-markets",
        brokerName: "FP Markets",
        reason: "Competitive raw spreads on MT5 for active traders — note UK clients typically access via ASIC/CySEC entity rather than direct FCA."
      },
      {
        label: "Best MT5 Broker for Beginners",
        brokerSlug: "avatrade",
        brokerName: "AvaTrade",
        reason: "MT5 alongside copy trading (DupliTrade/ZuluTrade) and structured educational resources — accessible entry point to MetaTrader."
      }
    ],
    audience: [
      {
        title: "MetaTrader Users",
        points: [
          "Specifically require MetaTrader 5 (not just MT4)",
          "Use custom indicators, Expert Advisors, or scripts"
        ]
      },
      {
        title: "Algorithmic Traders",
        points: [
          "Run automated trading systems",
          "Require VPS compatibility and fast execution"
        ]
      },
      {
        title: "Advanced Chart Users",
        points: [
          "Need deeper timeframes and additional MT5 analytical tools",
          "Use built-in economic calendar and market depth"
        ]
      },
      {
        title: "Regulation-Focused Traders",
        points: [
          "Want FCA regulation while using MT5",
          "Require FSCS protection on eligible deposits"
        ]
      }
    ],
    evaluationCriteria: {
      points: [
        "FCA regulation (where applicable)",
        "MT5 availability — full functionality including EAs, custom indicators and VPS",
        "Execution quality and latency",
        "Spread and commission model on the MT5 account",
        "Algorithmic trading and automation support",
        "Financing transparency",
        "Risk protections (negative balance protection, FSCS)"
      ],
      footnote: "Not all brokers offering MT4 offer full MT5 functionality. Confirm EA and algo support before opening."
    },
    topPicksOverview: [
      {
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        whyPicked: "FCA regulated, best-in-class execution, full MT5 with Razor pricing",
        limitation: "CFD-only — no investing accounts, ISA or SIPP",
        bestFor: "Active FX and CFD traders using MT5"
      },
      {
        brokerSlug: "tickmill",
        brokerName: "Tickmill",
        whyPicked: "FCA regulated, MT4 and MT5, Raw account at $6 round-turn — highly cost-competitive",
        limitation: "No stocks, ETFs, cTrader, ISA or SIPP",
        bestFor: "High-frequency and algorithmic MT5 traders on a budget"
      },
      {
        brokerSlug: "fp-markets",
        brokerName: "FP Markets",
        whyPicked: "Competitive raw pricing on MT5, ASIC regulated",
        limitation: "UK clients typically not under direct FCA oversight",
        bestFor: "Cost-focused scalpers comfortable with ASIC/CySEC regulation"
      },
      {
        brokerSlug: "avatrade",
        brokerName: "AvaTrade",
        whyPicked: "MT5 alongside copy trading — accessible for learning traders",
        limitation: "Spread-only pricing; no raw account; inactivity fees apply",
        bestFor: "Beginners wanting MetaTrader exposure with copy trading support"
      },
      {
        brokerSlug: "oanda",
        brokerName: "OANDA",
        whyPicked: "FCA regulated with MT4, MT5, TradingView and proprietary platform — rare combination",
        limitation: "Core pricing (tighter spreads + commission) only cost-effective at higher volumes",
        bestFor: "Forex traders who want MT5 alongside a proprietary platform and TradingView"
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
              "Full MT5 support with Expert Advisors and custom indicators",
              "VPS compatible",
              "Also offers MT4, cTrader and TradingView — widest platform range of any reviewed broker"
            ]
          },
          {
            heading: "Pricing Structure",
            points: [
              "Razor account: raw spread + commission (~AU$7 round-turn)",
              "Standard account: spread-only"
            ]
          },
          {
            heading: "Regulation & Safety",
            points: ["FCA regulated UK entity", "FSCS protection on eligible deposits up to £85,000"]
          },
          {
            heading: "Suitability",
            points: ["Algorithmic traders", "Scalpers", "Active technical analysts using MT5"]
          }
        ],
        whenToAvoid: "If you want ISA, SIPP or direct share investing"
      },
      {
        brokerSlug: "tickmill",
        brokerName: "Tickmill",
        sections: [
          {
            heading: "MT5 Availability",
            points: [
              "Full MT4 and MT5 support",
              "Expert Advisors and automation supported",
              "Web trader and mobile also available"
            ]
          },
          {
            heading: "Pricing Structure",
            points: [
              "Raw account: raw spreads from 0.0 pips + $3/side ($6 round-turn)",
              "Classic account: spread-only (wider spreads)"
            ]
          },
          {
            heading: "Regulation & Safety",
            points: ["FCA regulated (Tickmill UK Ltd)", "FSCS protection on eligible deposits"]
          },
          {
            heading: "Suitability",
            points: ["Cost-focused high-frequency MT4/MT5 traders under FCA regulation"]
          }
        ],
        whenToAvoid: "If you need cTrader, stocks, ETFs or ISA/SIPP accounts"
      },
      {
        brokerSlug: "fp-markets",
        brokerName: "FP Markets",
        sections: [
          {
            heading: "MT5 Availability",
            points: [
              "Full MT5 access with automation and EA support"
            ]
          },
          {
            heading: "Pricing Structure",
            points: ["Raw spreads + commission — competitive on major pairs"]
          },
          {
            heading: "Regulation",
            points: ["ASIC/CySEC regulated — UK clients typically not under direct FCA oversight"]
          },
          {
            heading: "Suitability",
            points: ["Cost-focused active traders comfortable with non-FCA regulation"]
          }
        ],
        whenToAvoid: "If FCA UK regulation and FSCS protection are required"
      },
      {
        brokerSlug: "avatrade",
        brokerName: "AvaTrade",
        sections: [
          {
            heading: "MT5 Availability",
            points: [
              "MT5 supported alongside MT4 and proprietary AvaTradeGO",
              "Beginner-accessible with guided setup"
            ]
          },
          {
            heading: "Pricing Structure",
            points: [
              "Spread-only — no raw account",
              "Inactivity fee: $10/quarter after 3 months, $100/year after 12 months"
            ]
          },
          {
            heading: "Regulation",
            points: ["Central Bank of Ireland, ASIC, FSCA — UK clients via European entity"]
          },
          {
            heading: "Suitability",
            points: ["Beginners wanting MT5 experience alongside copy trading"]
          }
        ],
        whenToAvoid: "If raw spread pricing or FCA direct oversight are required"
      },
      {
        brokerSlug: "oanda",
        brokerName: "OANDA",
        sections: [
          {
            heading: "MT5 Availability",
            points: [
              "MT4 and MT5 both supported",
              "Also offers TradingView integration and proprietary OANDA Trade platform"
            ]
          },
          {
            heading: "Pricing Structure",
            points: [
              "Standard account: variable spread-only",
              "Core account: tighter spreads + commission — better value at higher volume"
            ]
          },
          {
            heading: "Regulation",
            points: ["FCA regulated UK entity (OANDA Europe Markets Limited)", "No minimum deposit"]
          },
          {
            heading: "Suitability",
            points: ["Forex traders who want MT5 alongside a proprietary platform and TradingView"]
          }
        ],
        whenToAvoid: "If you specifically need cTrader or the lowest possible raw-spread commission account"
      }
    ],
    costComparisonLogic: {
      intro: "MT5 brokers vary mainly by:",
      points: [
        {
          title: "Spread vs Commission",
          detail: "Raw + commission accounts are almost always cheaper for high-volume MT5 traders. The commission is predictable; the spread is tighter."
        },
        {
          title: "Financing",
          detail: "Overnight swap rates apply across all brokers — critical for swing strategies using automated systems."
        },
        {
          title: "Execution Quality",
          detail: "For algorithmic and high-frequency strategies, latency and fill quality matter as much as headline spread."
        }
      ],
      footnote: "MT5 is a tool — pricing differences matter most for active systems placing many orders per day."
    },
    risks: [
      "Leverage risk applies to all MT5 CFD trading",
      "Algorithmic trading can amplify losses rapidly if systems malfunction or market conditions change",
      "Spread widening during news events affects Expert Advisor performance",
      "Financing costs accumulate on overnight positions held by automated systems",
      "MT5 access does not guarantee profitability — it is an execution tool only"
    ],
    faq: [
      {
        question: "Which FCA-regulated brokers offer full MT5 in the UK?",
        answer: "Pepperstone, Tickmill, and OANDA all offer MT5 via their FCA-regulated UK entities. FP Markets offers MT5 but under ASIC/CySEC regulation for UK clients."
      },
      {
        question: "Is MT5 better than MT4?",
        answer: "MT5 offers additional timeframes, more order types, built-in economic calendar, and multi-asset support. MT4 remains more widely used for pure forex EA trading — check which your existing EAs are built for."
      },
      {
        question: "Which MT5 broker has the lowest commissions?",
        answer: "Tickmill's Raw account ($3/side, $6 round-turn) is marginally cheaper than Pepperstone's Razor (~AU$7 round-turn). Both are highly competitive for FCA-regulated MT5 brokers."
      },
      {
        question: "Does OANDA offer MT5?",
        answer: "Yes — OANDA supports MT4, MT5, TradingView, and its own OANDA Trade platform. It is one of few FCA-regulated brokers offering all four."
      },
      {
        question: "Are MT5 brokers suitable for beginners?",
        answer: "MT5 has a steeper learning curve than proprietary platforms. Beginners are usually better served starting with a simpler interface before transitioning to MetaTrader."
      }
    ],
    methodology: [
      "Rankings are based on platform support (full MT5 functionality), FCA regulatory status, pricing structure, execution quality, and suitability for algorithmic trading.",
      "This is not financial advice.",
      "Affiliate partnerships do not influence evaluation."
    ],
    nextSteps: [
      "Confirm EA and custom indicator compatibility with your broker's MT5 implementation before opening a live account.",
      "Check which regulatory entity governs your account — FCA vs overseas entities differ in client protections.",
      "Model Raw vs Standard account costs against your expected monthly trading volume."
    ]
  },

  // ─────────────────────────────────────────────
  // 4) Best Regulated Brokers (UK, 2026)
  // ─────────────────────────────────────────────
  {
    slug: "best-regulated-brokers",
    title: "Best Regulated Brokers (UK, 2026)",
    intro: "UK brokers with the strongest FCA oversight, client protection credentials, and regulatory transparency — prioritising safety over pricing or features.",
    lastUpdated: "2026-05-26",
    heroPicks: [
      {
        label: "Best Fully FCA-Regulated Broker Overall",
        brokerSlug: "ig",
        brokerName: "IG",
        reason: "Long UK operating history, FCA authorised, publicly listed, combined trading and investing under one regulated entity."
      },
      {
        label: "Best Regulated Broker for Investors",
        brokerSlug: "saxo-bank",
        brokerName: "Saxo Bank",
        reason: "FCA authorised investment bank — the highest regulatory standard of any retail broker on this site, with ISA and SIPP under one professional platform."
      },
      {
        label: "Best FCA-Regulated Broker for Active Traders",
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        reason: "FCA regulated UK entity with segregated funds, FSCS protection, and a focus on transparent execution pricing."
      },
      {
        label: "Best FCA-Regulated Broker for ISA Investors",
        brokerSlug: "trading-212",
        brokerName: "Trading 212",
        reason: "Full FCA authorisation (not a passported European licence), FSCS protection on eligible deposits, and the lowest-cost ISA available from any FCA-regulated platform."
      }
    ],
    audience: [
      {
        title: "Safety-First Investors",
        points: [
          "Prioritise FCA oversight above pricing or features",
          "Want segregated client funds and FSCS protection"
        ]
      },
      {
        title: "Risk-Conscious Traders",
        points: [
          "Require negative balance protection",
          "Want transparent margin and leverage policies"
        ]
      },
      {
        title: "Institutional Trust-Seekers",
        points: [
          "Value public listing and long operating history",
          "Prefer investment bank-grade regulatory structure"
        ]
      },
      {
        title: "Compliance-Focused Users",
        points: [
          "Want UK-based regulatory protection rather than offshore entities",
          "Confirm FCA register numbers before depositing"
        ]
      }
    ],
    evaluationCriteria: {
      points: [
        "FCA authorisation status (direct UK entity, not passported overseas licence)",
        "Client money segregation",
        "Negative balance protection",
        "FSCS eligibility on eligible deposits up to £85,000",
        "Corporate transparency (public listing, investment bank structure)",
        "Years of uninterrupted UK operation",
        "Complaint and enforcement history (public FCA data)"
      ],
      footnote: "This page excludes brokers serving UK clients only through offshore or passported European regulation. All listed brokers hold direct FCA UK entity authorisation."
    },
    topPicksOverview: [
      {
        brokerSlug: "ig",
        brokerName: "IG",
        whyPicked: "FCA regulated, publicly listed, 50+ year operating history",
        limitation: "Costs vary by product; customer service has mixed reviews",
        bestFor: "Trading and investing combined under FCA regulation"
      },
      {
        brokerSlug: "saxo-bank",
        brokerName: "Saxo Bank",
        whyPicked: "FCA authorised investment bank — the highest regulatory standard of any broker reviewed here",
        limitation: "Classic tier pricing is relatively expensive; not suitable for beginners",
        bestFor: "Multi-asset investors who want bank-grade regulation"
      },
      {
        brokerSlug: "cmc-markets",
        brokerName: "CMC Markets",
        whyPicked: "FCA regulated, publicly listed London-based broker since 1989",
        limitation: "Complex platform; no direct share ownership",
        bestFor: "Active CFD and spread betting traders"
      },
      {
        brokerSlug: "pepperstone",
        brokerName: "Pepperstone",
        whyPicked: "FCA regulated UK entity with transparent execution",
        limitation: "CFD-only — no ISA, SIPP or direct share ownership",
        bestFor: "Active FX and CFD traders"
      },
      {
        brokerSlug: "trading-212",
        brokerName: "Trading 212",
        whyPicked: "Full FCA authorisation, FSCS protection, the most accessible ISA in the UK",
        limitation: "No SIPP; limited advanced trading tools",
        bestFor: "ISA investors who want maximum regulatory protection at minimum cost"
      },
      {
        brokerSlug: "interactive-brokers",
        brokerName: "Interactive Brokers",
        whyPicked: "FCA regulated UK entity, NASDAQ-listed US parent, deep global access",
        limitation: "Steep learning curve; fee structure complexity",
        bestFor: "Multi-asset investors wanting global access under FCA regulation"
      },
      {
        brokerSlug: "tickmill",
        brokerName: "Tickmill",
        whyPicked: "FCA regulated (Tickmill UK Ltd) with FSCS protection — clear UK entity for CFD traders",
        limitation: "No stocks, ETFs, ISA or SIPP",
        bestFor: "Active CFD and forex traders who want FCA regulation at low cost"
      },
      {
        brokerSlug: "plus500",
        brokerName: "Plus500",
        whyPicked: "FCA regulated, publicly listed on London Stock Exchange",
        limitation: "CFD-only; limited advanced tools",
        bestFor: "Simple CFD trading under a listed, regulated entity"
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
              "Segregated client funds and negative balance protection",
              "FSCS protection on eligible deposits up to £85,000"
            ]
          },
          {
            heading: "Corporate Transparency",
            points: [
              "Publicly listed on London Stock Exchange",
              "Over 50 years of UK operating history"
            ]
          },
          {
            heading: "Suitability",
            points: ["Traders and investors seeking broad regulated coverage"]
          }
        ],
        whenToAvoid: "If lowest-cost FX execution is the only priority"
      },
      {
        brokerSlug: "saxo-bank",
        brokerName: "Saxo Bank",
        sections: [
          {
            heading: "Regulation",
            points: [
              "Saxo Capital Markets UK Ltd — FCA authorised investment bank",
              "Subsidiary of Saxo Bank A/S, a fully licensed European investment bank",
              "FSCS protection on eligible deposits up to £85,000"
            ]
          },
          {
            heading: "Corporate Structure",
            points: [
              "Investment bank structure — higher regulatory standard than most retail brokers",
              "ISA and SIPP available under full FCA oversight"
            ]
          },
          {
            heading: "Suitability",
            points: ["Sophisticated investors who prioritise regulatory strength alongside product breadth"]
          }
        ],
        whenToAvoid: "Beginners, small accounts, or traders who only need forex and CFDs"
      },
      {
        brokerSlug: "cmc-markets",
        brokerName: "CMC Markets",
        sections: [
          {
            heading: "Regulation",
            points: [
              "FCA regulated UK entity (CMC Markets UK plc)",
              "Segregated client funds and FSCS protection"
            ]
          },
          {
            heading: "Corporate Structure",
            points: [
              "Founded 1989 — long UK operating history",
              "London-based publicly listed company"
            ]
          },
          {
            heading: "Suitability",
            points: ["Active UK CFD and spread betting traders"]
          }
        ],
        whenToAvoid: "Absolute beginners or investors seeking direct share ownership"
      },
      {
        brokerSlug: "trading-212",
        brokerName: "Trading 212",
        sections: [
          {
            heading: "Regulation",
            points: [
              "Trading 212 UK Ltd — full FCA authorisation (not a passported European licence)",
              "Segregated client funds",
              "FSCS protection on eligible deposits up to £85,000"
            ]
          },
          {
            heading: "Account Types",
            points: [
              "Stocks & Shares ISA, Invest, and CFD accounts",
              "The ISA and Invest accounts offer direct share ownership — not CFD exposure"
            ]
          },
          {
            heading: "Suitability",
            points: ["ISA investors who want maximum FCA protection at zero commission"]
          }
        ],
        whenToAvoid: "If you need a SIPP, advanced CFD execution, or professional trading tools"
      },
      {
        brokerSlug: "interactive-brokers",
        brokerName: "Interactive Brokers",
        sections: [
          {
            heading: "Regulation",
            points: [
              "Interactive Brokers (U.K.) Ltd — FCA regulated",
              "FSCS protection on eligible balances"
            ]
          },
          {
            heading: "Corporate Transparency",
            points: ["NASDAQ-listed US parent company (IBKR)", "Strong financial disclosure requirements"]
          },
          {
            heading: "Suitability",
            points: ["Multi-asset professional traders and investors under FCA regulation"]
          }
        ],
        whenToAvoid: "Users wanting a simple retail platform — TWS has a steep learning curve"
      },
      {
        brokerSlug: "plus500",
        brokerName: "Plus500",
        sections: [
          {
            heading: "Regulation",
            points: [
              "Plus500UK Ltd — FCA regulated",
              "Publicly listed on London Stock Exchange"
            ]
          },
          {
            heading: "Suitability",
            points: ["Simple CFD trading under a listed, regulated entity"]
          }
        ],
        whenToAvoid: "Advanced charting, algorithmic trading, or ISA/SIPP investing"
      }
    ],
    costComparisonLogic: {
      intro: "FCA-regulated brokers operate under stricter rules than offshore alternatives:",
      points: [
        {
          title: "Leverage Caps",
          detail: "FCA retail clients are subject to ESMA leverage caps (e.g., 30:1 on major FX). Offshore brokers offer higher leverage — at significantly higher risk."
        },
        {
          title: "Negative Balance Protection",
          detail: "FCA requires negative balance protection for retail clients. Offshore entities may not provide this."
        },
        {
          title: "FSCS Coverage",
          detail: "Eligible cash deposits at FCA-regulated brokers may be covered up to £85,000 if the firm fails. This does not cover trading losses."
        }
      ],
      footnote: "Regulatory protection reduces structural risk. It does not eliminate trading risk — leveraged products remain high risk under any regulation."
    },
    risks: [
      "Even with FCA regulation, CFDs and leveraged products remain high risk",
      "FSCS covers broker insolvency on eligible deposits — not trading losses",
      "Losses can exceed deposits on leveraged positions if negative balance protection limits are not clearly understood",
      "Financing costs apply across all regulated brokers — regulation does not remove this cost",
      "Regulation protects the structure of the relationship — not trading performance"
    ],
    faq: [
      {
        question: "What does FCA regulation actually provide?",
        answer: "The FCA requires segregated client funds, negative balance protection for retail clients, transparent pricing disclosures, AML controls, and FSCS eligibility on eligible cash deposits up to £85,000."
      },
      {
        question: "Which broker has the strongest UK regulatory standing?",
        answer: "Saxo Bank operates as an FCA-authorised investment bank — a higher regulatory standard than most retail brokers. IG and CMC Markets are also publicly listed FCA entities with long UK operating histories."
      },
      {
        question: "Does FCA regulation guarantee my money is safe?",
        answer: "No — it significantly reduces structural risk but does not eliminate market risk. FSCS covers eligible deposits if the broker fails; it does not protect against trading losses."
      },
      {
        question: "Is offshore regulation riskier than FCA?",
        answer: "Generally yes — dispute resolution, fund segregation standards, and compensation schemes differ significantly. UK retail clients are better protected under direct FCA authorisation."
      },
      {
        question: "Are all brokers on this list directly FCA regulated?",
        answer: "Yes — all listed brokers operate UK FCA-authorised entities. This page excludes brokers serving UK clients only through passported European or offshore licences."
      }
    ],
    methodology: [
      "This ranking prioritises FCA authorisation (direct UK entity), client money segregation, FSCS eligibility, corporate transparency, and duration of FCA-regulated UK operation.",
      "This is not financial advice.",
      "Affiliate partnerships do not influence ranking logic."
    ],
    nextSteps: [
      "Verify your broker's FCA registration number directly on the FCA register (register.fca.org.uk).",
      "Confirm which entity will govern your account — group entities differ from UK entities.",
      "Compare product features and pricing after verifying regulatory status."
    ]
  },

  // ─────────────────────────────────────────────
  // 5) Best Crypto Exchanges UK (2026)
  // ─────────────────────────────────────────────
  {
    slug: "best-crypto-exchange-uk",
    title: "Best Crypto Exchanges UK 2026",
    intro: "The top FCA-registered crypto exchanges for UK users buying, selling and holding cryptocurrency — compared on fees, security, coin selection and ease of use.",
    lastUpdated: "2026-05-26",
    heroPicks: [
      {
        label: "Best Crypto Exchange Overall",
        brokerSlug: "coinbase",
        brokerName: "Coinbase",
        reason: "Clearest FCA registration (CB Payments Ltd, FRN 900635), NASDAQ-listed transparency, simplest beginner experience, and Advanced Trade for cost-conscious active buyers."
      },
      {
        label: "Best for Active Traders",
        brokerSlug: "kraken",
        brokerName: "Kraken",
        reason: "Kraken Pro's 0.25%/0.40% base maker-taker fees, a 14-year breach-free security record, and 20% staking commission — lower than Coinbase at every tier."
      },
      {
        label: "Best for Coin Selection & Card Rewards",
        brokerSlug: "crypto-com",
        brokerName: "Crypto.com",
        reason: "350+ cryptocurrencies and Visa card cashback — for experienced users who have researched the platform's customer service record carefully."
      }
    ],
    audience: [
      {
        title: "First-Time Crypto Buyers",
        points: [
          "Want a well-known, credible platform to buy Bitcoin or Ethereum",
          "Prefer a simple, polished app over a full exchange interface"
        ]
      },
      {
        title: "Active Spot Traders",
        points: [
          "Trade regularly and want the lowest maker-taker fees",
          "Comfortable using an exchange-style interface (order books, limit orders)"
        ]
      },
      {
        title: "Long-Term Holders",
        points: [
          "Buy and hold major cryptocurrencies",
          "Prioritise platform security and custody practices over lowest fees"
        ]
      },
      {
        title: "Feature-Focused Users",
        points: [
          "Want staking, earn products, or Visa card cashback",
          "Need access to a wide range of altcoins beyond the top 20"
        ]
      }
    ],
    evaluationCriteria: {
      points: [
        "FCA registration status and what it means for UK users",
        "Security record — history of hacks or breaches",
        "Fee structure — simple mode vs pro/exchange mode",
        "Asset range — number of cryptocurrencies available for UK spot trading",
        "GBP deposit and withdrawal options (Faster Payments)",
        "Customer service quality — Trustpilot and specialist reviews",
        "Staking availability and commission rates"
      ],
      footnote: "FCA registration for crypto exchanges covers AML compliance — it is not the same as full investment firm authorisation. Crypto holdings are not FSCS-protected on any UK exchange."
    },
    topPicksOverview: [
      {
        brokerSlug: "coinbase",
        brokerName: "Coinbase",
        whyPicked: "Clearest FCA registration, strongest beginner UX, NASDAQ-listed financial transparency",
        limitation: "Standard app fees are high — use Advanced Trade for lower costs; staking commission 25-35%",
        bestFor: "Beginners and long-term holders who value credibility and ease of use"
      },
      {
        brokerSlug: "kraken",
        brokerName: "Kraken",
        whyPicked: "14-year breach-free security record, Kraken Pro base fees of 0.25%/0.40%, 20% staking commission",
        limitation: "Not directly FCA-registered as a standalone UK entity; Instant Buy (~1.5-2% all-in) is expensive",
        bestFor: "Security-conscious active traders who will use Kraken Pro"
      },
      {
        brokerSlug: "crypto-com",
        brokerName: "Crypto.com",
        whyPicked: "350+ coins, Visa card with up to 5% cashback, DeFi integration",
        limitation: "Trustpilot score ~1.3/5 — very poor customer service reviews; top card tiers require $500,000 CRO",
        bestFor: "Experienced users who specifically need wide altcoin access or the Visa card programme"
      }
    ],
    brokerBreakdowns: [
      {
        brokerSlug: "coinbase",
        brokerName: "Coinbase",
        sections: [
          {
            heading: "Regulatory Status",
            points: [
              "CB Payments Ltd — FCA-registered VASP (FRN 900635)",
              "Largest FCA-registered crypto firm in the UK",
              "NASDAQ-listed parent (COIN) — US-level financial disclosure",
              "FCA registration is for AML purposes — crypto is not FSCS-protected"
            ]
          },
          {
            heading: "Fees",
            points: [
              "Standard app: ~0.5% spread + 1.49-2.49% transaction fee via bank transfer",
              "Advanced Trade: starts at 0.60%/1.20% maker/taker (new users), drops to 0.25%/0.40% at $10K+/month",
              "Debit card: 3.99%; GBP FPS deposits free; FPS withdrawals: £1 flat",
              "Staking commission: 35% (most PoS assets), ~25% (ETH)"
            ]
          },
          {
            heading: "Security",
            points: [
              "Strong security practices and publicly listed adding accountability",
              "No major platform hacks"
            ]
          },
          {
            heading: "Suitability",
            points: ["Beginners and long-term holders of major cryptocurrencies"]
          }
        ],
        whenToAvoid: "If minimising fees is the priority — use Kraken Pro or Coinbase's own Advanced Trade interface instead of the standard app"
      },
      {
        brokerSlug: "kraken",
        brokerName: "Kraken",
        sections: [
          {
            heading: "Regulatory Status",
            points: [
              "Operates in UK through compliance with FCA requirements",
              "Not separately FCA-registered as a standalone UK entity",
              "Complies with UK AML and financial promotion rules",
              "Crypto holdings not FSCS-protected"
            ]
          },
          {
            heading: "Fees",
            points: [
              "Instant Buy: 1% flat fee + spread (~0.5-1%) — all-in ~1.5-2%",
              "Kraken Pro: 0.25% maker / 0.40% taker at base — significantly cheaper",
              "GBP deposits via Faster Payments: free",
              "Staking commission: 20% on flexible staking — lower than Coinbase"
            ]
          },
          {
            heading: "Security",
            points: [
              "Founded 2011 — no major security breaches in 14+ years",
              "One of the most security-focused exchanges globally"
            ]
          },
          {
            heading: "Suitability",
            points: ["Active spot traders who will use Kraken Pro", "Security-conscious long-term holders"]
          }
        ],
        whenToAvoid: "If you are a beginner who will not use Kraken Pro — Instant Buy fees make it expensive for casual buying"
      },
      {
        brokerSlug: "crypto-com",
        brokerName: "Crypto.com",
        sections: [
          {
            heading: "Regulatory Status",
            points: [
              "FCA-registered as electronic money institution and crypto asset firm",
              "EMI registration provides some protection on GBP fiat balances",
              "Crypto holdings not FSCS-protected"
            ]
          },
          {
            heading: "Fees",
            points: [
              "App buy/sell: approximately 0.29-0.40%",
              "Crypto.com Exchange: competitive maker-taker fees for active traders",
              "GBP deposits via bank transfer: free",
              "Visa card: Ruby Steel (2% cashback, capped $25/month) requires $500 CRO or $4.99/month; Royal Indigo (3%, $75/month cap) requires $5,000 CRO"
            ]
          },
          {
            heading: "Customer Service",
            points: [
              "Trustpilot score ~1.3/5 — very poor",
              "Recurring complaints: account freezes, withdrawal delays, unresponsive support",
              "Research this carefully before depositing significant funds"
            ]
          },
          {
            heading: "Suitability",
            points: ["Experienced users who need 350+ coins or the Visa card programme"]
          }
        ],
        whenToAvoid: "Beginners, or anyone who may need customer support — the service record is a material risk"
      }
    ],
    costComparisonLogic: {
      intro: "The biggest cost mistake on crypto exchanges is using the simple buy mode when a pro interface is available:",
      points: [
        {
          title: "Simple Mode vs Pro Mode",
          detail: "Coinbase standard app and Kraken Instant Buy are 3-10x more expensive than their respective Advanced Trade and Kraken Pro interfaces. Always use the exchange interface for active buying."
        },
        {
          title: "Staking Commission",
          detail: "Kraken charges 20% on flexible staking rewards. Coinbase charges 25-35%. On meaningful staking balances, this difference compounds significantly over time."
        },
        {
          title: "GBP Deposit Method",
          detail: "Always use Faster Payments (free on all three exchanges) rather than debit card — Coinbase charges 3.99% on card purchases."
        }
      ],
      footnote: "None of these platforms offer FSCS protection on crypto holdings. Custody risk is a real consideration — do not hold more on exchange than you are comfortable losing access to."
    },
    risks: [
      "Cryptocurrency prices are highly volatile — significant capital loss can occur rapidly",
      "No FSCS protection on crypto holdings on any UK exchange — statutory compensation does not apply",
      "FCA registration is for AML purposes only — not equivalent to full investment firm regulation",
      "Custody risk: if an exchange fails, recovery of assets is not guaranteed under statutory schemes",
      "Staking involves lock-up periods and the staked asset's own price volatility"
    ],
    faq: [
      {
        question: "Which crypto exchange is safest for UK users?",
        answer: "Coinbase has the clearest FCA registration footprint and NASDAQ-listed transparency. Kraken has the strongest security track record (14 years breach-free). Both are significantly safer than Crypto.com based on customer service reviews."
      },
      {
        question: "Is Coinbase or Kraken cheaper?",
        answer: "Kraken Pro (0.25%/0.40% base) is cheaper than Coinbase Advanced Trade's introductory rates. Even Kraken's Instant Buy (~1.5-2% all-in) undercuts Coinbase's standard app. Use the pro interface on either platform for active buying."
      },
      {
        question: "Is crypto regulated in the UK?",
        answer: "Crypto exchanges can be FCA-registered as crypto asset firms under the Money Laundering Regulations. This covers AML compliance — it is not equivalent to being FCA-regulated as an investment firm. Crypto is not covered by the FSCS."
      },
      {
        question: "Which exchange has the most cryptocurrencies for UK users?",
        answer: "Crypto.com lists 350+ cryptocurrencies. Coinbase and Kraken each list 200+. For major assets (BTC, ETH, SOL, XRP), all three cover them fully."
      },
      {
        question: "Is the Crypto.com Visa card worth it?",
        answer: "Ruby Steel (2% cashback, capped $25/month) only requires $500 CRO staking — accessible for most. Royal Indigo (3%, $75/month cap) needs $5,000 CRO. Top tiers (4-5%) require $500,000 CRO — impractical for most users. All tiers carry CRO price risk."
      }
    ],
    methodology: [
      "Rankings are based on FCA registration status, security track record, fee structure, asset range, customer service reviews, and ease of use for UK retail users.",
      "This is not financial advice.",
      "Crypto assets are highly volatile and not covered by FSCS. Affiliate relationships do not influence rankings."
    ],
    nextSteps: [
      "Use Faster Payments (not debit card) for GBP deposits on any exchange.",
      "Switch to the pro interface (Advanced Trade / Kraken Pro / Crypto.com Exchange) to significantly reduce trading fees.",
      "Research customer service reviews on Trustpilot before depositing significant funds."
    ]
  },

  // ─────────────────────────────────────────────
  // 6) Best ISA Brokers UK (2026)
  // ─────────────────────────────────────────────
  {
    slug: "best-isa-brokers-uk",
    title: "Best ISA Brokers UK 2026",
    intro: "The best Stocks & Shares ISA providers for UK investors — compared on dealing costs, platform quality, asset range, and whether a SIPP is also available.",
    lastUpdated: "2026-05-26",
    heroPicks: [
      {
        label: "Best ISA for Lowest Cost",
        brokerSlug: "trading-212",
        brokerName: "Trading 212",
        reason: "Zero commission on stocks and ETFs, no annual ISA platform fee, £10 minimum investment, and 0.15% FX conversion — the cheapest ISA for buy-and-hold UK investors."
      },
      {
        label: "Best ISA for Trading + Investing Combined",
        brokerSlug: "ig",
        brokerName: "IG",
        reason: "Stocks & Shares ISA alongside CFDs, spread betting and SIPP under one FCA-regulated platform — the broadest combined offering of any reviewed broker."
      },
      {
        label: "Best ISA for Low Dealing Commissions",
        brokerSlug: "interactive-brokers",
        brokerName: "Interactive Brokers",
        reason: "ISA with dealing commissions from 0.05% (min £3) and no annual custody fee — the best combination of access and cost for regular stock and ETF investors."
      },
      {
        label: "Best ISA for Multi-Asset Investors",
        brokerSlug: "saxo-bank",
        brokerName: "Saxo Bank",
        reason: "Stocks & Shares ISA with access to bonds, options, futures, 40,000+ instruments and SaxoTraderPRO — for sophisticated investors who want an ISA alongside professional-grade tools."
      }
    ],
    audience: [
      {
        title: "Buy-and-Hold Investors",
        points: [
          "Making regular monthly contributions to an ISA",
          "Want zero or near-zero commission on stock and ETF purchases",
          "Hold for years — annual custody fees matter as much as dealing costs"
        ]
      },
      {
        title: "Active ISA Investors",
        points: [
          "Trade stocks and ETFs more frequently within the ISA wrapper",
          "Need competitive dealing commissions on each transaction",
          "Want access to a broader asset range including international stocks"
        ]
      },
      {
        title: "Combined Traders and Investors",
        points: [
          "Want CFD or spread betting access alongside a tax-efficient ISA",
          "Need both a trading account and an ISA under one login"
        ]
      },
      {
        title: "Pension-Focused Users",
        points: [
          "Want both ISA and SIPP under the same provider",
          "Looking to consolidate long-term savings with one regulated broker"
        ]
      }
    ],
    evaluationCriteria: {
      points: [
        "FCA authorisation status — direct UK entity only",
        "ISA dealing commissions on UK and international stocks and ETFs",
        "Annual platform or custody fee on ISA holdings",
        "FX conversion fee on non-GBP instruments",
        "Minimum investment amount",
        "Asset range available within the ISA",
        "SIPP availability alongside the ISA",
        "Platform quality for long-term portfolio management"
      ],
      footnote: "The cheapest ISA is not always the one with zero commission — annual custody fees and FX conversion on international holdings can exceed dealing commission savings over time."
    },
    topPicksOverview: [
      {
        brokerSlug: "trading-212",
        brokerName: "Trading 212",
        whyPicked: "Zero commission, no platform fee, 0.15% FX conversion, £10 minimum, free ISA",
        limitation: "No SIPP; limited advanced analytical tools; no bonds, options or futures",
        bestFor: "Cost-sensitive UK investors making regular stock and ETF ISA contributions"
      },
      {
        brokerSlug: "ig",
        brokerName: "IG",
        whyPicked: "ISA with commission-free share trading, SIPP, and CFD/spread betting under one login",
        limitation: "Custody fees apply quarterly unless activity thresholds are met; customer service is mixed",
        bestFor: "Investors who also want to trade CFDs or spread bet alongside their ISA"
      },
      {
        brokerSlug: "interactive-brokers",
        brokerName: "Interactive Brokers",
        whyPicked: "ISA with 0.05% min £3 dealing commissions, no custody fee, 90+ global markets",
        limitation: "Steep platform learning curve; not suitable for complete beginners",
        bestFor: "Frequent stock and ETF investors wanting the lowest ISA dealing commissions"
      },
      {
        brokerSlug: "saxo-bank",
        brokerName: "Saxo Bank",
        whyPicked: "ISA and SIPP with access to stocks, ETFs, bonds, options, futures and forex",
        limitation: "0.15% annual custody fee at Classic tier; pricing improves significantly at Platinum and VIP",
        bestFor: "Sophisticated investors who want ISA access to the broadest possible asset range"
      }
    ],
    brokerBreakdowns: [
      {
        brokerSlug: "trading-212",
        brokerName: "Trading 212",
        sections: [
          {
            heading: "ISA Costs",
            points: [
              "Zero commission on stocks and ETFs",
              "No annual ISA platform fee",
              "0.15% FX conversion on non-GBP instruments",
              "Minimum ISA investment: £10"
            ]
          },
          {
            heading: "Asset Range",
            points: [
              "Thousands of UK, US, and European stocks and ETFs",
              "Fractional shares available in ISA",
              "No bonds, options, futures or forex in ISA"
            ]
          },
          {
            heading: "Regulation & Safety",
            points: [
              "FCA regulated (Trading 212 UK Ltd) — full UK authorisation",
              "FSCS protection on eligible deposits up to £85,000"
            ]
          },
          {
            heading: "Suitability",
            points: ["Buy-and-hold investors making regular ISA contributions at minimum cost"]
          }
        ],
        whenToAvoid: "If you need a SIPP, bonds, options, or advanced charting tools within the ISA"
      },
      {
        brokerSlug: "ig",
        brokerName: "IG",
        sections: [
          {
            heading: "ISA Costs",
            points: [
              "Commission-free online share trades on UK stocks",
              "Custody fee applies quarterly — waivable with sufficient trading activity",
              "FX conversion fee ~0.7% on non-GBP instruments",
              "No minimum investment stated"
            ]
          },
          {
            heading: "Asset Range",
            points: [
              "UK and international stocks and ETFs",
              "SIPP also available alongside ISA"
            ]
          },
          {
            heading: "Regulation & Safety",
            points: [
              "FCA regulated, publicly listed",
              "FSCS protection on eligible deposits"
            ]
          },
          {
            heading: "Suitability",
            points: ["Investors who also want to trade CFDs or spread bet alongside an ISA", "Users who want ISA and SIPP under one login"]
          }
        ],
        whenToAvoid: "If the custody fee is not waived and you make infrequent trades — costs can erode returns"
      },
      {
        brokerSlug: "interactive-brokers",
        brokerName: "Interactive Brokers",
        sections: [
          {
            heading: "ISA Costs",
            points: [
              "Dealing commission: 0.05% min £3 — among the lowest of any ISA provider",
              "No annual custody fee on stock and ETF holdings",
              "FX conversion among the cheapest of any retail broker",
              "One free withdrawal per month"
            ]
          },
          {
            heading: "Asset Range",
            points: [
              "90+ markets — UK, US, European and global stocks and ETFs",
              "SIPP also available"
            ]
          },
          {
            heading: "Regulation & Safety",
            points: [
              "FCA regulated UK entity",
              "NASDAQ-listed US parent with strong financial transparency",
              "FSCS protection on eligible deposits"
            ]
          },
          {
            heading: "Suitability",
            points: ["Frequent ISA investors who want the lowest dealing commissions and broadest international access"]
          }
        ],
        whenToAvoid: "Beginners — Trader Workstation has a steep learning curve not suited to first-time ISA investors"
      },
      {
        brokerSlug: "saxo-bank",
        brokerName: "Saxo Bank",
        sections: [
          {
            heading: "ISA Costs",
            points: [
              "UK stock dealing: 0.10% min £3 at Classic; 0.08% at Platinum; 0.05% min £1.50 at VIP",
              "Annual custody fee: 0.15% (Classic), 0.12% (Platinum), 0.09% (VIP) on stocks, ETFs and bonds",
              "No minimum deposit at Classic tier; Platinum ~$50,000; VIP ~$1,000,000"
            ]
          },
          {
            heading: "Asset Range",
            points: [
              "40,000+ instruments — stocks, ETFs, bonds, forex, options and futures all available within ISA",
              "SIPP also available",
              "Broadest asset range of any ISA provider reviewed here"
            ]
          },
          {
            heading: "Regulation & Safety",
            points: [
              "FCA authorised investment bank",
              "FSCS protection on eligible deposits up to £85,000"
            ]
          },
          {
            heading: "Suitability",
            points: ["Sophisticated investors who want ISA access to bonds, options, and global equities under professional-grade tools"]
          }
        ],
        whenToAvoid: "Small accounts at Classic tier — the 0.15% custody fee compounds on smaller portfolios and pricing is less competitive than zero-commission alternatives"
      }
    ],
    costComparisonLogic: {
      intro: "ISA costs have two components that are easy to confuse:",
      points: [
        {
          title: "Dealing Commission",
          detail: "The cost per trade — Trading 212 charges zero; Interactive Brokers charges 0.05% min £3; Saxo Classic charges 0.10% min £3. For infrequent traders, the difference is small. For active investors, it compounds."
        },
        {
          title: "Annual Custody Fee",
          detail: "An ongoing annual charge on the value of your holdings — Saxo Classic charges 0.15%; IG charges quarterly (waivable); Trading 212 and Interactive Brokers charge nothing. On a £50,000 portfolio, Saxo's 0.15% costs £75/year. This is the most overlooked ISA cost."
        },
        {
          title: "FX Conversion",
          detail: "All four providers charge for converting GBP to foreign currency when buying US or European stocks. Trading 212 charges 0.15% (very low); IG charges ~0.70%; IBKR is among the lowest of any retail broker."
        }
      ],
      footnote: "Model all three costs — dealing, custody, and FX conversion — against your expected portfolio size, trading frequency, and international allocation before choosing."
    },
    risks: [
      "Stock and ETF values can fall as well as rise — capital is at risk within an ISA",
      "An ISA wrapper does not reduce investment risk — it only removes UK tax on gains and income",
      "Annual custody fees and FX conversion charges erode returns on smaller or internationally diversified portfolios",
      "FSCS protection covers broker insolvency on eligible deposits — not investment losses",
      "Saxo's custody fee at Classic tier is an ongoing cost that compounds on larger portfolios — model this carefully"
    ],
    faq: [
      {
        question: "Which ISA broker is cheapest for UK investors?",
        answer: "Trading 212 is the cheapest overall — zero commission, no platform fee, and 0.15% FX conversion. For frequent traders on a larger portfolio, Interactive Brokers (0.05% min £3, no custody fee) becomes more competitive."
      },
      {
        question: "Can I hold international stocks in a Stocks & Shares ISA?",
        answer: "Yes — all four providers on this list allow US and European stocks within the ISA wrapper. FX conversion fees apply on non-GBP instruments."
      },
      {
        question: "Which providers offer both an ISA and a SIPP?",
        answer: "IG, Interactive Brokers, and Saxo Bank all offer both a Stocks & Shares ISA and a SIPP. Trading 212 offers an ISA but not a SIPP."
      },
      {
        question: "Is Saxo Bank's ISA worth the custody fee?",
        answer: "At Classic tier, the 0.15% annual custody fee adds a meaningful ongoing cost — on £100,000 it costs £150/year. The fee reduces at Platinum (0.12%) and VIP (0.09%) tiers. For investors who use Saxo's full platform breadth (bonds, options, futures), the cost-to-feature ratio improves considerably."
      },
      {
        question: "Does the ISA protect me from tax on crypto gains?",
        answer: "Crypto assets are not eligible for inclusion in a Stocks & Shares ISA. An ISA only covers qualifying investments — primarily shares, ETFs, bonds and funds."
      }
    ],
    methodology: [
      "Rankings consider FCA regulation, ISA dealing commissions, annual custody fees, FX conversion rates, asset range available within the ISA, SIPP availability, and platform suitability for long-term investors.",
      "This is not financial advice.",
      "Affiliate relationships do not influence rankings."
    ],
    nextSteps: [
      "Model your expected annual trades, portfolio size, and international allocation to calculate true ISA cost across providers.",
      "Check whether a custody fee applies and at what balance it becomes material.",
      "If you also want a SIPP, confirm availability with your chosen provider before opening the ISA."
    ]
  }
];
