import { ComparePage } from "../types/compare";

export const comparePages: ComparePage[] = [
  // ═══════════════════════════════════════════════════════
  // 1. Capital.com vs Pepperstone
  // ═══════════════════════════════════════════════════════
  {
    aSlug: "capital-com",
    bSlug: "pepperstone",
    title: "Capital.com vs Pepperstone",
    summary:
      "Capital.com offers a beginner-friendly platform with simple pricing, while Pepperstone delivers tighter raw spreads and MetaTrader access for active traders.",
    verdict:
      "Choose Capital.com for simplicity and built-in education. Choose Pepperstone for tighter spreads, MetaTrader support, and more execution flexibility. Both are FCA-regulated — your choice should depend on trading style, not branding.",
    lastUpdated: "2026-01-15",
    chooseAIf: [
      "You want a beginner-friendly platform with simple pricing and integrated education",
      "You prefer a clean, intuitive interface with minimal setup",
      "You value built-in educational content",
    ],
    chooseBIf: [
      "You want tighter raw spreads via a Razor account",
      "You need MetaTrader 4, MetaTrader 5, or cTrader access",
      "You are an active or algorithmic trader seeking execution flexibility",
    ],
    sections: [
      {
        title: "Regulation & Safety",
        brokerAPoints: [
          "Regulated by the FCA (UK entity)",
          "Client funds segregated",
          "Negative balance protection for retail clients",
        ],
        brokerBPoints: [
          "Pepperstone Limited is authorised and regulated by the FCA",
          "Segregated funds and negative balance protection apply",
        ],
        verdict:
          "Both meet UK regulatory standards. No major differentiation here for UK retail clients.",
      },
      {
        title: "Pricing & Costs",
        brokerAPoints: [
          "Spread-only model — no commission on standard trades",
          "Financing charges apply overnight",
          "Good for simplicity, but spreads include broker markup",
        ],
        brokerBPoints: [
          "Standard Account: spread-only pricing",
          "Razor Account: raw spread + commission — often lower total cost on major FX pairs",
          "More cost-efficient for high-volume forex trading",
        ],
        verdict:
          "Pepperstone is usually more cost-efficient for active traders. Capital.com is simpler for occasional users.",
      },
      {
        title: "Platforms & Tools",
        brokerAPoints: [
          "Proprietary web & mobile platform",
          "Clean, intuitive interface with strong beginner experience",
          "Educational content built-in",
          "No MT4/MT5 support",
        ],
        brokerBPoints: [
          "MetaTrader 4 and MetaTrader 5",
          "cTrader",
          "TradingView integration",
          "Better suited to technical traders and automation users",
        ],
        verdict:
          "Beginners → Capital.com. MetaTrader and algorithmic traders → Pepperstone.",
      },
      {
        title: "Asset Coverage",
        sharedPoints: [
          "Both offer CFDs on forex, indices, commodities, and share CFDs",
          "Neither offers direct share ownership in their UK CFD entities",
        ],
        verdict: "Similar coverage across both brokers.",
      },
      {
        title: "Fees Beyond Spreads",
        sharedPoints: [
          "Overnight financing on leveraged positions",
          "Currency conversion where applicable",
          "Possible inactivity fees after extended dormancy",
          "Neither is a 'zero cost' broker — spreads and swaps matter",
        ],
      },
      {
        title: "Risks & Considerations",
        sharedPoints: [
          "CFDs are leveraged — losses can exceed deposits",
          "Spread widening during volatility",
          "Financing costs accumulate on longer holds",
          "Neither is suitable for passive long-term investing",
        ],
      },
    ],
    suitability: [
      { traderType: "Beginner", betterChoice: "Capital.com" },
      { traderType: "Casual trader", betterChoice: "Capital.com" },
      { traderType: "Day trader", betterChoice: "Pepperstone" },
      { traderType: "Scalper", betterChoice: "Pepperstone" },
      { traderType: "Algorithmic trader", betterChoice: "Pepperstone" },
      { traderType: "Education-focused", betterChoice: "Capital.com" },
    ],
    faqs: [
      {
        question: "Is Capital.com cheaper than Pepperstone?",
        answer:
          "It depends on trade frequency and account type. Pepperstone Razor accounts can be cheaper for active FX trading.",
      },
      {
        question: "Which broker is better for MT5?",
        answer: "Pepperstone supports MT5. Capital.com does not.",
      },
      {
        question: "Are both FCA regulated?",
        answer: "Yes — both operate FCA-regulated UK entities.",
      },
      {
        question: "Which is better for beginners?",
        answer:
          "Capital.com's platform is generally more beginner-friendly.",
      },
      {
        question: "Which is safer?",
        answer:
          "Both operate under FCA regulation with segregated client funds.",
      },
    ],
    methodology:
      "This comparison is based on publicly available fee schedules, FCA regulatory status, platform features and general user feedback patterns. It is not financial advice. Affiliate relationships do not influence the structure of this comparison.",
  },

  // ═══════════════════════════════════════════════════════
  // 2. IG vs CMC Markets
  // ═══════════════════════════════════════════════════════
  {
    aSlug: "ig",
    bSlug: "cmc-markets",
    title: "IG vs CMC Markets",
    summary:
      "IG is the stronger all-round UK broker for trading and investing, while CMC Markets appeals to serious active traders with advanced charting and competitive spreads.",
    verdict:
      "IG is the best all-round UK broker for combined trading and investing. CMC Markets is the stronger choice for dedicated active traders who prioritise advanced charting and tighter spreads. There is no universal winner — the right choice depends on how you trade.",
    lastUpdated: "2026-01-15",
    chooseAIf: [
      "You want a broad, all-round UK broker combining CFDs, spread betting, and longer-term investing (shares, ISA/SIPP)",
      "You are a beginner looking for a gentler learning curve",
      "You want investing and trading in one place",
    ],
    chooseBIf: [
      "You are an active trader who values advanced charting and research tools",
      "You want a powerful proprietary platform for CFDs and spread betting",
      "You prioritise tighter spreads on core trading markets",
    ],
    sections: [
      {
        title: "Regulation & Safety",
        brokerAPoints: [
          "FCA authorised with segregated client funds",
          "Negative balance protection and FSCS protection on eligible cash",
          "Publicly listed company",
        ],
        brokerBPoints: [
          "FCA authorised with segregated client funds",
          "Negative balance protection and FSCS protection on eligible cash",
          "London-based with long operating history",
        ],
        verdict:
          "Regulatory protection is comparable. Safety is not a differentiator here.",
      },
      {
        title: "Pricing & Costs",
        brokerAPoints: [
          "CFDs / Spread betting: spread-based pricing",
          "Shares & ETFs: commission-free online trades, but custody and FX fees may apply",
          "Overnight funding on leveraged positions",
          "Some advanced tools incur fees unless activity thresholds are met",
        ],
        brokerBPoints: [
          "Generally competitive spreads on FX and indices",
          "Commission applies on share CFDs",
          "Overnight funding on leveraged positions",
          "No minimum deposit",
        ],
        verdict:
          "CMC Markets often wins on pure trading costs. IG wins on product flexibility, not raw pricing.",
      },
      {
        title: "Platforms & Tools",
        brokerAPoints: [
          "Web platform with advanced charting",
          "Mobile trading app",
          "ProRealTime (advanced charting — fee applies unless activity thresholds met)",
          "MetaTrader 4 (limited availability)",
          "Strength: breadth and stability. Limitation: tool ecosystem can feel fragmented",
        ],
        brokerBPoints: [
          "Next Generation platform (flagship) — highly advanced charting and technical tools",
          "MetaTrader 4 available",
          "Strong in-platform research and pattern recognition",
          "Strength: one of the strongest proprietary trading platforms in the UK. Limitation: can feel complex for beginners",
        ],
      },
      {
        title: "Market & Product Coverage",
        brokerAPoints: [
          "Forex & CFDs, Spread Betting, Share CFDs",
          "Real Shares & ETFs — direct ownership available",
          "ISA / SIPP accounts available",
        ],
        brokerBPoints: [
          "Forex & CFDs, Spread Betting, Share CFDs",
          "No real shares or ETFs — trading-focused only",
          "No ISA / SIPP accounts",
        ],
        verdict:
          "IG offers broader product coverage. CMC is trading-focused, not investing-focused.",
      },
      {
        title: "Fees Beyond Spreads",
        sharedPoints: [
          "Overnight financing on leveraged positions",
          "Currency conversion fees",
          "Inactivity fees after long dormancy",
        ],
        verdict:
          "IG has more moving parts due to investing products. CMC is simpler but narrower in scope.",
      },
      {
        title: "Risks & Considerations",
        sharedPoints: [
          "CFDs and spread betting are leveraged — losses can exceed deposits",
          "Financing costs accumulate on longer holds",
          "Spread widening can occur in volatile markets",
          "Neither broker is suitable for passive buy-and-hold investing via CFDs",
        ],
      },
    ],
    suitability: [
      { traderType: "Beginner", betterChoice: "IG" },
      { traderType: "Casual trader", betterChoice: "IG" },
      { traderType: "Active day trader", betterChoice: "CMC Markets" },
      { traderType: "Technical analyst", betterChoice: "CMC Markets" },
      { traderType: "Swing trader", betterChoice: "Tie" },
      { traderType: "Investor + trader", betterChoice: "IG" },
    ],
    faqs: [
      {
        question: "Which is cheaper: IG or CMC Markets?",
        answer:
          "For active CFD trading, CMC is often cheaper. For mixed investing and trading, IG may offer better overall value.",
      },
      {
        question: "Which has the better trading platform?",
        answer:
          "CMC Markets' Next Generation platform is generally more advanced for technical traders.",
      },
      {
        question: "Are both FCA regulated?",
        answer: "Yes — both are fully FCA regulated in the UK.",
      },
      {
        question: "Can I invest long-term with CMC Markets?",
        answer:
          "Only via CFDs. IG supports real share investing, ISAs and SIPPs.",
      },
      {
        question: "Which is better for beginners?",
        answer: "IG is usually easier to start with.",
      },
    ],
    methodology:
      "This comparison is based on FCA regulatory status, public fee schedules, platform capabilities, product coverage, and consistent user-feedback themes. It is not financial advice. Affiliate relationships do not influence rankings.",
  },

  // ═══════════════════════════════════════════════════════
  // 3. Pepperstone vs IG
  // ═══════════════════════════════════════════════════════
  {
    aSlug: "pepperstone",
    bSlug: "ig",
    title: "Pepperstone vs IG",
    summary:
      "Pepperstone offers tight spreads and MetaTrader flexibility for active forex and CFD trading, while IG provides broader product coverage including shares, ISAs, and SIPPs.",
    verdict:
      "Choose Pepperstone for pricing efficiency and platform flexibility. Choose IG for product breadth and integrated investing tools. There is no universal winner — the right choice depends on how you trade.",
    lastUpdated: "2026-01-15",
    chooseAIf: [
      "You want tight spreads and flexible execution for active forex or CFD trading",
      "You need MetaTrader 4, MetaTrader 5, or cTrader",
      "You are a day trader, scalper, or algorithmic trader",
    ],
    chooseBIf: [
      "You want a broad UK broker that supports trading and longer-term investing",
      "You need shares, ISA, or SIPP accounts",
      "You are a beginner looking for a gentler onboarding experience",
    ],
    sections: [
      {
        title: "Regulation & Safety",
        brokerAPoints: [
          "FCA regulated (UK entity)",
          "Segregated client funds and negative balance protection",
          "Eligible FSCS coverage",
        ],
        brokerBPoints: [
          "FCA regulated with segregated client funds",
          "Negative balance protection and eligible FSCS coverage",
          "Publicly listed company",
        ],
        verdict:
          "From a UK retail protection perspective, safety is comparable.",
      },
      {
        title: "Pricing & Trading Costs",
        brokerAPoints: [
          "Standard Account: spread-only pricing",
          "Razor Account: raw spreads + commission — often lower all-in costs for active FX traders",
        ],
        brokerBPoints: [
          "Spread-based pricing for CFDs & spread betting",
          "Commission-free share trading (with custody/FX fees)",
          "Financing charges on leveraged positions",
          "No raw-spread + commission model like Pepperstone",
        ],
        verdict:
          "Pepperstone is generally more cost-efficient for short-term FX trading. IG is more versatile but not typically the cheapest for pure execution.",
      },
      {
        title: "Platforms & Execution",
        brokerAPoints: [
          "MetaTrader 4 and MetaTrader 5",
          "cTrader",
          "TradingView integration",
          "Strong for algorithmic trading, Expert Advisors, scalping, and advanced charting",
        ],
        brokerBPoints: [
          "Proprietary web platform and mobile trading app",
          "ProRealTime (advanced charting)",
          "Limited MT4 access",
          "Strong for multi-asset management, integrated research, and long-term usage",
        ],
        verdict:
          "If you rely on MT5 → Pepperstone. If you want an all-in-one ecosystem → IG.",
      },
      {
        title: "Product Coverage",
        brokerAPoints: [
          "Forex CFDs, Indices, Commodities, Share CFDs",
          "No real shares — no ISA / SIPP",
          "Focuses on trading efficiency",
        ],
        brokerBPoints: [
          "Forex CFDs, Indices, Commodities, Share CFDs",
          "Real Shares available with direct ownership",
          "ISA / SIPP accounts available",
        ],
        verdict:
          "IG clearly wins on product breadth. Pepperstone focuses on trading efficiency.",
      },
      {
        title: "Fees Beyond Spreads",
        sharedPoints: [
          "Overnight financing on leveraged positions",
          "Currency conversion fees",
          "Possible inactivity fees",
        ],
        verdict:
          "Pepperstone's cost structure is more transparent for FX-focused traders. IG's structure is broader due to investing features.",
      },
      {
        title: "Risks & Considerations",
        sharedPoints: [
          "CFDs are leveraged — losses can exceed deposits",
          "Spread widening can occur in volatile markets",
          "Financing costs accumulate on longer positions",
        ],
        verdict:
          "IG's investing accounts reduce leverage risk for direct share purchases. Pepperstone is more derivative-focused.",
      },
    ],
    suitability: [
      { traderType: "Beginner", betterChoice: "IG" },
      { traderType: "Casual trader", betterChoice: "IG" },
      { traderType: "Day trader", betterChoice: "Pepperstone" },
      { traderType: "Scalper", betterChoice: "Pepperstone" },
      { traderType: "Algorithmic trader", betterChoice: "Pepperstone" },
      { traderType: "Long-term investor", betterChoice: "IG" },
      { traderType: "Mixed trading + investing", betterChoice: "IG" },
    ],
    faqs: [
      {
        question: "Which is cheaper: Pepperstone or IG?",
        answer:
          "For active FX traders, Pepperstone (Razor) is typically cheaper.",
      },
      {
        question: "Which is better for beginners?",
        answer:
          "IG's broader ecosystem and investing options make it easier for new users.",
      },
      {
        question: "Is Pepperstone safer than IG?",
        answer:
          "Both are FCA regulated in the UK with similar protections.",
      },
      {
        question: "Can I open an ISA with Pepperstone?",
        answer: "No. IG offers ISA accounts.",
      },
      {
        question: "Which supports MT5?",
        answer:
          "Pepperstone does. IG generally does not focus on MT5 in the UK.",
      },
    ],
    methodology:
      "This comparison is based on FCA regulatory status, public pricing schedules, platform capabilities, product coverage, and user feedback patterns. It is not financial advice. Affiliate partnerships do not influence ranking logic.",
  },

  // ═══════════════════════════════════════════════════════
  // 4. XTB vs Plus500
  // ═══════════════════════════════════════════════════════
  {
    aSlug: "xtb",
    bSlug: "plus500",
    title: "XTB vs Plus500",
    summary:
      "XTB offers more research tools and pricing transparency, while Plus500 provides a simpler, beginner-friendly CFD platform with minimal setup friction.",
    verdict:
      "XTB is best for traders who value research, in-platform tools, and visibility into market analytics. Plus500 is best for traders who want simple, intuitive execution with minimal setup friction. Your choice should reflect how much tool complexity and research support you value versus simplicity of execution.",
    lastUpdated: "2026-01-15",
    chooseAIf: [
      "You want more tools, research resources, and pricing transparency",
      "You are an intermediate or research-focused trader",
      "You value integrated charting, risk management, and market research",
    ],
    chooseBIf: [
      "You want a simple, beginner-friendly CFD platform",
      "You prefer intuitive interfaces with minimal setup friction",
      "You want quick execution with a clean, simple layout",
    ],
    sections: [
      {
        title: "Regulation & Safety",
        brokerAPoints: [
          "UK-regulated by the FCA",
          "Segregated client funds",
          "Negative balance protection and FSCS protection on eligible cash",
        ],
        brokerBPoints: [
          "Plus500UK Ltd authorised and regulated by the FCA",
          "Segregated client funds",
          "Negative balance protection and FSCS protection on eligible cash",
        ],
        verdict:
          "Regulatory protection is comparable between both brokers for UK users.",
      },
      {
        title: "Pricing & Trading Costs",
        brokerAPoints: [
          "Spread-based pricing with transparent spreads",
          "Financing (swap) on leveraged positions",
          "No raw-spread + commission tier (spread-only model)",
          "No inactivity fees in many regions (check UK terms)",
        ],
        brokerBPoints: [
          "Spread-based pricing (commission-free on CFDs)",
          "Currency conversion fee if trade currency differs",
          "Financing (swap) on leveraged CFDs",
          "No deposit fees",
        ],
        verdict:
          "Overall cost profiles are competitive and similar for typical CFD trading. XTB may edge Plus500 slightly on spread transparency and research-linked pricing.",
      },
      {
        title: "Platforms & Tools",
        brokerAPoints: [
          "Proprietary xStation platform (web, desktop, mobile)",
          "Integrated charting, risk management, and market research",
          "Economic calendar and trading ideas",
          "Some access to MetaTrader 4 (region dependent)",
          "Strengths: more tools, analytics, and insights built in",
        ],
        brokerBPoints: [
          "Web and mobile proprietary platform",
          "Simple layout focused on quick execution",
          "Watchlists, alerts, basic charting",
          "Strengths: very user-friendly and minimal setup friction",
          "Limitations: limited advanced charting and market research",
        ],
      },
      {
        title: "Asset Coverage",
        sharedPoints: [
          "Both offer CFDs on forex, indices, commodities, and share CFDs",
          "Crypto CFDs available where permitted",
          "Neither offers direct share ownership or ISA/SIPP accounts",
          "Both focus on CFD products for UK retail clients",
        ],
      },
      {
        title: "Fees Beyond Spreads",
        sharedPoints: [
          "Overnight financing on leveraged positions",
          "Possible currency conversion fees",
          "Possible inactivity fees (Plus500 has standard dormancy charging; XTB may vary)",
          "Both have transparent fee structures but require monitoring of financing and spread behaviour during market events",
        ],
      },
      {
        title: "Risks & Considerations",
        sharedPoints: [
          "CFDs are leveraged products — can magnify losses",
          "Spread widening can occur during low liquidity or macro events",
          "Overnight financing costs can accumulate on swing positions",
          "CFD contracts do not confer ownership of underlying assets",
        ],
        verdict:
          "Plus500 operates as principal counterparty to client trades as part of its CFD model; XTB operates standard execution systems with direct market connectivity.",
      },
    ],
    suitability: [
      { traderType: "Beginner", betterChoice: "Plus500" },
      { traderType: "Casual trader", betterChoice: "Plus500" },
      { traderType: "Intermediate trader", betterChoice: "XTB" },
      { traderType: "Research-focused trader", betterChoice: "XTB" },
      { traderType: "Technical analyst", betterChoice: "XTB" },
      { traderType: "Quick execution", betterChoice: "Plus500" },
    ],
    faqs: [
      {
        question: "Which broker is cheaper: XTB or Plus500?",
        answer:
          "For most CFD products, spreads are comparable. Traders should check live spreads for their preferred instruments; pricing can vary by session and instrument.",
      },
      {
        question: "Is XTB harder to use than Plus500?",
        answer:
          "XTB has more tools and features, which benefit active traders but may feel more complex to absolute beginners. Plus500 is simpler and more intuitive.",
      },
      {
        question: "Do both brokers offer MT4?",
        answer:
          "XTB offers MetaTrader access only in some regions; Plus500 uses only proprietary platforms.",
      },
      {
        question: "Are both brokers FCA regulated?",
        answer:
          "Yes — both are authorised by the FCA for UK retail clients.",
      },
      {
        question: "Can I buy real shares with either broker?",
        answer: "No — UK clients trade CFDs only.",
      },
    ],
    methodology:
      "This comparison is based on FCA regulatory status, public fee and spread schedules, platform capabilities, product coverage, and representative user feedback. This is not financial advice. Affiliate relationships do not influence analysis.",
  },

  // ═══════════════════════════════════════════════════════
  // 5. Interactive Brokers vs IG
  // ═══════════════════════════════════════════════════════
  {
    aSlug: "interactive-brokers",
    bSlug: "ig",
    title: "Interactive Brokers vs IG",
    summary:
      "Interactive Brokers suits experienced traders and investors seeking low fees and global market access, while IG offers a broader, easier-to-navigate ecosystem with integrated investing.",
    verdict:
      "Interactive Brokers is best for experienced, multi-asset traders and investors prioritising low execution costs and global access. IG is best for retail traders and investors seeking a balanced ecosystem with simplicity and breadth. Choose based on how you trade and what you value most.",
    lastUpdated: "2026-01-15",
    chooseAIf: [
      "You are an experienced trader or investor who wants low fees and global market access",
      "You need advanced execution tools including options, futures, and bonds",
      "You want institutional-grade order types and API/algo execution support",
    ],
    chooseBIf: [
      "You want a broader, easier-to-navigate UK broker",
      "You want trading and investment options under one roof with ISA/SIPP",
      "You are a beginner or casual trader looking for simpler onboarding",
    ],
    sections: [
      {
        title: "Regulation & Safety",
        brokerAPoints: [
          "UK clients served through Interactive Brokers (U.K.) Ltd, regulated by the FCA",
          "Client funds segregated with FSCS protection up to applicable limits",
        ],
        brokerBPoints: [
          "FCA authorised UK broker with segregated funds",
          "FSCS protection on eligible cash balances",
          "Publicly listed broker with disclosure requirements",
        ],
        verdict:
          "Both are FCA regulated with comparable client safeguards in the UK.",
      },
      {
        title: "Platforms & Execution Tools",
        brokerAPoints: [
          "Trader Workstation (TWS) — comprehensive desktop platform",
          "Client Portal — web-based trading & account management",
          "IBKR Mobile — robust mobile app",
          "API + algo execution support",
          "Institutional-grade order types with advanced execution and connectivity",
          "Steeper learning curve — not ideal for pure beginners",
        ],
        brokerBPoints: [
          "Web and Desktop — intuitive but less professional-focused",
          "Mobile App — user-friendly",
          "ProRealTime — advanced charting (fee or trading activity requirement)",
          "Easy onboarding with comprehensive tools and built-in research",
          "Less advanced than TWS for pro execution",
        ],
        verdict:
          "Interactive Brokers leads for professional execution tools and breadth. IG leads for simplicity and ease of use.",
      },
      {
        title: "Product Coverage",
        brokerAPoints: [
          "UK Stocks (direct ownership), International Stocks, ETFs",
          "Options, Futures, Bonds — broad derivatives access",
          "FX/Forex via execution + CFDs",
          "CFDs and spread betting equivalent",
        ],
        brokerBPoints: [
          "UK Stocks (direct/ISA/SIPP), International Stocks, ETFs",
          "No options or futures via mainstream retail platform",
          "FX/Forex via CFDs & Spread Betting",
          "CFDs and Spread Betting",
        ],
        verdict:
          "Interactive Brokers offers broader raw market access, especially for derivatives and futures. IG's product set is broader than many retail brokers but not as extensive as IBKR's.",
      },
      {
        title: "Costs & Pricing",
        brokerAPoints: [
          "Stocks/ETFs: very low commissions (tiered or fixed depending on region)",
          "FX: tight spreads and low FX conversion costs",
          "Options/Futures: highly competitive exchange-linked fees",
          "No minimum deposit required",
          "Fee structure is transparent but complex",
        ],
        brokerBPoints: [
          "CFDs/Spread Betting: spread-based pricing",
          "Shares/ETFs: commission-free online trades with custody/FX fees where relevant",
          "ProRealTime charting may carry fees unless thresholds met",
          "Financing on leveraged products",
          "Costs vary by product; simpler but not always the lowest",
        ],
        verdict:
          "IBKR generally has lower execution costs on direct tradable products. IG is simpler for retail investors and leveraged products.",
      },
      {
        title: "Usability & Learning Curve",
        brokerAPoints: [
          "Professional focus with wide feature set",
          "Higher learning curve",
          "Excellent for multi-market professionals",
        ],
        brokerBPoints: [
          "More intuitive for broader users",
          "Lower learning curve",
          "Educational resources built-in",
        ],
        verdict:
          "IG is easier for beginners and retail traders; IBKR suits serious traders.",
      },
      {
        title: "Fees Beyond Spreads",
        sharedPoints: [
          "Overnight financing on leveraged positions",
          "Currency conversion fees",
          "Possible inactivity or platform fees (varies)",
          "Charges for margin usage",
        ],
        brokerAPoints: [
          "One free withdrawal per month — additional may incur fees",
          "Unique fee bundles depending on product",
        ],
        brokerBPoints: [
          "ISA/SIPP custody fees may apply",
          "Some advanced charting tools may carry fees",
        ],
      },
      {
        title: "Risks & Considerations",
        sharedPoints: [
          "Leverage risk: CFDs and derivatives can magnify losses",
          "Spread widening in low-liquidity or news events",
          "Execution costs vary by product and session",
          "Interactive Brokers is not inherently safer than IG — regulatory protections are comparable",
        ],
      },
    ],
    suitability: [
      { traderType: "Beginner", betterChoice: "IG" },
      { traderType: "Casual trader", betterChoice: "IG" },
      { traderType: "Frequent stock trader", betterChoice: "Interactive Brokers" },
      { traderType: "Options/futures trader", betterChoice: "Interactive Brokers" },
      { traderType: "Day trading FX", betterChoice: "Tied" },
      { traderType: "Casual CFD trading", betterChoice: "IG" },
      { traderType: "Long-term investor", betterChoice: "IG (ISA/SIPP)" },
    ],
    faqs: [
      {
        question: "Which broker is cheaper overall?",
        answer:
          "For direct trading (stocks, ETFs, options, futures), Interactive Brokers often has lower fees. For casual leveraged CFD trading, IG's spread model may feel simpler and competitive.",
      },
      {
        question: "Is IG easier to use than IBKR?",
        answer:
          "Yes — IG's platform suite targets broader retail users. IBKR's tools are deeper but more complex.",
      },
      {
        question: "Which is better for beginners?",
        answer: "IG typically has a gentler learning curve.",
      },
      {
        question: "Can I trade options/futures with IG?",
        answer:
          "Not directly via IG's mainstream retail platform; IBKR offers broader derivatives execution.",
      },
      {
        question: "Are both FCA regulated?",
        answer:
          "Yes — both have FCA authorisation for UK clients.",
      },
    ],
    methodology:
      "This comparison is based on FCA regulatory status, fee schedules and public pricing sheets, platform capabilities, product scopes, and common user experience feedback patterns. This is not financial advice. Affiliate partnerships do not influence the logic.",
  },


];