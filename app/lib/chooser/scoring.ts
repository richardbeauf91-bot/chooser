import { Broker } from "../types/broker";

// ═══════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════

export interface ChooserInput {
  country: string;
  instrument: string;
  experience: "beginner" | "intermediate" | "advanced";
  priority: "low-fees" | "simplicity" | "advanced-tools" | "regulation" | "social-trading";
}

export interface ScoredBroker {
  broker: Broker;
  score: number;
  reasons: string[];
  warnings: string[];
  excluded: boolean;
  excludeReason?: string;
  matchStrength: "strong" | "good" | "fair";
  personaMatch: string;
}

export interface PersonaProfile {
  label: string;
  description: string;
  boostTags: string[];
  penaliseTags: string[];
  requiresFCA: boolean;
  requiresRealOwnership: boolean;
  prefersMT: boolean;
  prefersSimple: boolean;
}

// ═══════════════════════════════════════════════════════
// WEIGHTS — Controls how much each dimension matters
// ═══════════════════════════════════════════════════════

const WEIGHTS = {
  instrument: 4,
  experience: 3,
  priority: 3,
  regulation: 5,
  pricing: 2,
  platformMatch: 2,
} as const;

// ═══════════════════════════════════════════════════════
// COMMERCIAL WEIGHTS — Subtle tie-breaking, not override
// Max 0.10 to avoid distorting relevance
// ═══════════════════════════════════════════════════════

const COMMERCIAL_WEIGHTS: Record<string, number> = {
  "capital-com": 0.06,
  "pepperstone": 0.08,
  "ig": 0.05,
  "cmc-markets": 0.04,
  "plus500": 0.05,
  "etoro": 0.07,
  "interactive-brokers": 0.03,
  "xtb": 0.06,
  "avatrade": 0.04,
  "fp-markets": 0.05,
};

// ═══════════════════════════════════════════════════════
// PERSONA DETECTION
// Translates raw input into a meaningful trader persona
// ═══════════════════════════════════════════════════════

export function detectPersona(input: ChooserInput): PersonaProfile {
  const { instrument, experience, priority } = input;

  // Beginner personas
  if (experience === "beginner") {
    if (instrument === "stocks") {
      return {
        label: "New Investor Seeking Safety",
        description: "You're looking to start investing in stocks with strong regulatory protection and simple tools.",
        boostTags: ["beginners", "regulated", "multi-asset"],
        penaliseTags: ["professionals", "advanced"],
        requiresFCA: true,
        requiresRealOwnership: true,
        prefersMT: false,
        prefersSimple: true,
      };
    }
    if (priority === "social-trading") {
      return {
        label: "Social Learner",
        description: "You want to learn by following experienced traders with copy-trading features.",
        boostTags: ["beginners", "social-trading"],
        penaliseTags: ["professionals"],
        requiresFCA: false,
        requiresRealOwnership: false,
        prefersMT: false,
        prefersSimple: true,
      };
    }
    if (priority === "low-fees") {
      return {
        label: "Cost-Sensitive New Trader",
        description: "You're starting out and want competitive pricing without complex commission tiers.",
        boostTags: ["beginners", "low-fees"],
        penaliseTags: ["professionals"],
        requiresFCA: false,
        requiresRealOwnership: false,
        prefersMT: false,
        prefersSimple: true,
      };
    }
    if (priority === "regulation") {
      return {
        label: "Safety-First Beginner",
        description: "You prioritise FCA regulation and fund protection above all else.",
        boostTags: ["beginners", "regulated"],
        penaliseTags: ["professionals"],
        requiresFCA: true,
        requiresRealOwnership: false,
        prefersMT: false,
        prefersSimple: true,
      };
    }
    return {
      label: "New Trader Getting Started",
      description: "You want a simple, intuitive platform to learn the basics of trading.",
      boostTags: ["beginners", "simplicity"],
      penaliseTags: ["professionals"],
      requiresFCA: false,
      requiresRealOwnership: false,
      prefersMT: false,
      prefersSimple: true,
    };
  }

  // Advanced personas
  if (experience === "advanced") {
    if (instrument === "forex" && (priority === "low-fees" || priority === "advanced-tools")) {
      return {
        label: "High-Frequency Technical Trader",
        description: "You need raw spreads, MetaTrader access, and fast execution for active FX trading.",
        boostTags: ["advanced", "low-fees"],
        penaliseTags: ["simplicity", "beginners"],
        requiresFCA: false,
        requiresRealOwnership: false,
        prefersMT: true,
        prefersSimple: false,
      };
    }
    if (instrument === "stocks") {
      return {
        label: "Serious Multi-Asset Investor",
        description: "You want deep market access, low fees, and real ownership across global exchanges.",
        boostTags: ["advanced", "professionals", "multi-asset"],
        penaliseTags: ["simplicity"],
        requiresFCA: false,
        requiresRealOwnership: true,
        prefersMT: false,
        prefersSimple: false,
      };
    }
    if (priority === "advanced-tools") {
      return {
        label: "Professional Execution Trader",
        description: "You need advanced platforms, algorithmic support, and professional-grade tools.",
        boostTags: ["advanced", "professionals"],
        penaliseTags: ["simplicity", "beginners"],
        requiresFCA: false,
        requiresRealOwnership: false,
        prefersMT: true,
        prefersSimple: false,
      };
    }
    return {
      label: "Experienced Active Trader",
      description: "You have deep market knowledge and want efficient execution with competitive pricing.",
      boostTags: ["advanced", "low-fees"],
      penaliseTags: ["simplicity"],
      requiresFCA: false,
      requiresRealOwnership: false,
      prefersMT: false,
      prefersSimple: false,
    };
  }

  // Intermediate personas
  if (instrument === "forex") {
    return {
      label: "Growing FX Trader",
      description: "You understand the basics and want better pricing and platform tools to level up.",
      boostTags: ["low-fees"],
      penaliseTags: [],
      requiresFCA: false,
      requiresRealOwnership: false,
      prefersMT: priority === "advanced-tools",
      prefersSimple: false,
    };
  }
  if (instrument === "crypto") {
    return {
      label: "Crypto-Interested Trader",
      description: "You want exposure to crypto markets alongside traditional instruments.",
      boostTags: ["social-trading"],
      penaliseTags: [],
      requiresFCA: false,
      requiresRealOwnership: false,
      prefersMT: false,
      prefersSimple: false,
    };
  }
  if (instrument === "stocks") {
    return {
      label: "Intermediate Investor",
      description: "You want real share ownership with competitive pricing and solid tools.",
      boostTags: ["multi-asset", "regulated"],
      penaliseTags: [],
      requiresFCA: false,
      requiresRealOwnership: true,
      prefersMT: false,
      prefersSimple: false,
    };
  }

  return {
    label: "Balanced Trader",
    description: "You want a well-rounded broker that fits your current needs and lets you grow.",
    boostTags: [],
    penaliseTags: [],
    requiresFCA: priority === "regulation",
    requiresRealOwnership: false,
    prefersMT: false,
    prefersSimple: priority === "simplicity",
  };
}

// ═══════════════════════════════════════════════════════
// HARD EXCLUSION CHECKS
// These prevent structurally wrong brokers from ranking
// ═══════════════════════════════════════════════════════

function checkExclusion(broker: Broker, input: ChooserInput, persona: PersonaProfile): { excluded: boolean; reason?: string } {
  // Country availability is absolute
  if (!broker.availabilityCountries.includes(input.country)) {
    return { excluded: true, reason: "Not available in your country." };
  }

  // Stocks priority + real ownership required + broker has no real shares
  if (persona.requiresRealOwnership) {
    const hasRealShares = broker.products.some(p =>
      ["stocks", "shares", "ISA", "SIPP", "ETFs"].includes(p)
    );
    if (!hasRealShares) {
      // Don't fully exclude CFD-only brokers for stocks, but flag them
      // They'll get heavy penalty instead
    }
  }

  return { excluded: false };
}

// ═══════════════════════════════════════════════════════
// SCORING DIMENSIONS
// Each returns 0-10 score for its category
// ═══════════════════════════════════════════════════════

function scoreInstrument(broker: Broker, input: ChooserInput, persona: PersonaProfile): { score: number; reasons: string[]; warnings: string[] } {
  const reasons: string[] = [];
  const warnings: string[] = [];
  let score = 0;

  const hasInstrument = broker.instruments.includes(input.instrument);

  if (!hasInstrument) {
    return { score: 0, reasons: [], warnings: [`Does not offer ${input.instrument} trading.`] };
  }

  score += 3; // Base: instrument available (kept at 3 to leave headroom for depth bonuses)
  reasons.push(`Offers ${input.instrument} trading.`);

  // Instrument-specific depth scoring
  switch (input.instrument) {
    case "forex":
      // Forex traders care about spread model and MT access
      if (broker.feeModel === "commission+spread") {
        score += 3;
        reasons.push("Raw spread + commission model suits active FX traders.");
      } else if (broker.feeModel === "spread-only") {
        score += 1;
      }
      if (broker.platforms.includes("MT4") || broker.platforms.includes("MT5")) {
        score += 2;
        reasons.push("MetaTrader platform available for FX execution.");
      }
      if (broker.bestForTags.includes("low-fees")) {
        score += 1;
      }
      break;

    case "stocks":
      // Stock investors care about real ownership
      const hasRealStocks = broker.products.includes("stocks") || broker.products.includes("shares");
      const hasISA = broker.products.includes("ISA");
      const hasSIPP = broker.products.includes("SIPP");

      if (hasRealStocks) {
        score += 3;
        reasons.push("Offers direct share ownership.");
      } else {
        // Base penalty for no real stocks
        score -= 2;
        warnings.push("Only CFD exposure to stocks — no real ownership.");
        // Heavy additional penalty when persona explicitly needs ownership
        if (persona.requiresRealOwnership) {
          score -= 4;
          warnings.push("Your profile requires real share ownership — this broker only offers CFDs.");
        }
      }
      if (hasISA) {
        score += 2;
        reasons.push("ISA available for tax-efficient investing.");
      }
      if (hasSIPP) {
        score += 1;
        reasons.push("SIPP pension investing available.");
      }
      break;

    case "crypto":
      // Crypto traders: check if spot or just CFD
      const hasCryptoProduct = broker.products.includes("crypto");
      if (hasCryptoProduct) {
        score += 3;
        reasons.push("Offers crypto trading (check if CFD or spot).");
      } else {
        score += 1;
        warnings.push("Crypto available as CFDs only — not spot ownership.");
      }
      if (broker.bestForTags.includes("social-trading")) {
        score += 1;
        reasons.push("Social trading features complement crypto interest.");
      }
      break;

    case "commodities":
      if (broker.feeModel === "commission+spread") {
        score += 2;
        reasons.push("Competitive pricing model for commodity CFDs.");
      } else {
        score += 1;
      }
      break;

    case "indices":
      // Most brokers handle indices similarly
      score += 2;
      if (broker.bestForTags.includes("low-fees")) {
        score += 1;
        reasons.push("Competitive index trading costs.");
      }
      break;
  }

  return { score: Math.min(score, 10), reasons, warnings };
}

function scoreExperience(broker: Broker, input: ChooserInput): { score: number; reasons: string[]; warnings: string[] } {
  const reasons: string[] = [];
  const warnings: string[] = [];
  let score = 5; // Neutral start

  const tags = broker.bestForTags;

  switch (input.experience) {
    case "beginner":
      if (tags.includes("beginners")) {
        score += 4;
        reasons.push("Designed with beginners in mind.");
      }
      if (tags.includes("simplicity")) {
        score += 2;
        reasons.push("Simple, intuitive interface.");
      }
      // Hard penalty for pro-focused brokers
      if (tags.includes("professionals")) {
        score -= 6;
        warnings.push("Steep learning curve — may overwhelm new traders.");
      }
      if (tags.includes("advanced")) {
        score -= 3;
        warnings.push("Advanced platform may be complex for beginners.");
      }
      // Penalise complex fee models
      if (broker.feeModel === "commission-based") {
        score -= 2;
        warnings.push("Commission-based pricing can confuse new traders.");
      }
      break;

    case "intermediate":
      // Intermediate traders benefit from growth room
      if (tags.includes("beginners") && tags.includes("low-fees")) {
        score += 2;
      }
      if (tags.includes("advanced")) {
        score += 1;
      }
      if (tags.includes("multi-asset")) {
        score += 1;
        reasons.push("Broad asset range supports growing experience.");
      }
      break;

    case "advanced":
      if (tags.includes("advanced") || tags.includes("professionals")) {
        score += 4;
        reasons.push("Professional-grade tools and execution.");
      }
      // Penalty for overly simple platforms
      if (tags.includes("simplicity") && !tags.includes("low-fees")) {
        score -= 3;
        warnings.push("Limited advanced features may not satisfy experienced traders.");
      }
      if (broker.platforms.includes("MT4") || broker.platforms.includes("MT5")) {
        score += 2;
        reasons.push("MetaTrader support for advanced strategies.");
      }
      if (broker.feeModel === "commission+spread" || broker.feeModel === "commission-based") {
        score += 1;
        reasons.push("Transparent commission model for cost-aware traders.");
      }
      break;
  }

  return { score: Math.max(0, Math.min(score, 10)), reasons, warnings };
}

function scorePriority(broker: Broker, input: ChooserInput): { score: number; reasons: string[]; warnings: string[] } {
  const reasons: string[] = [];
  const warnings: string[] = [];
  let score = 3; // Neutral base

  switch (input.priority) {
    case "low-fees":
      if (broker.bestForTags.includes("low-fees")) {
        score += 4;
        reasons.push("Competitive pricing structure.");
      }
      if (broker.feeModel === "commission+spread") {
        score += 2;
        reasons.push("Raw spread + commission often cheaper for active traders.");
      }
      if (broker.feeModel === "spread-only") {
        score += 1;
      }
      if (broker.minDeposit === "£0") {
        score += 1;
        reasons.push("No minimum deposit requirement.");
      }
      break;

    case "simplicity":
      if (broker.bestForTags.includes("simplicity") || broker.bestForTags.includes("beginners")) {
        score += 4;
        reasons.push("Clean, simple platform design.");
      }
      if (broker.platforms.includes("Web") && broker.platforms.includes("Mobile")) {
        score += 2;
        reasons.push("Web and mobile platforms available.");
      }
      // Penalise complex platforms
      if (broker.bestForTags.includes("professionals")) {
        score -= 3;
      }
      break;

    case "advanced-tools":
      if (broker.bestForTags.includes("advanced") || broker.bestForTags.includes("professionals")) {
        score += 4;
        reasons.push("Advanced trading tools and execution.");
      }
      if (broker.platforms.includes("MT4") || broker.platforms.includes("MT5")) {
        score += 2;
        reasons.push("MetaTrader platform support.");
      }
      if (broker.products.includes("options") || broker.products.includes("futures")) {
        score += 2;
        reasons.push("Derivatives access for advanced strategies.");
      }
      break;

    case "regulation":
      // Handled separately in scoreRegulation — but boost FCA here too
      if (broker.regulators.includes("FCA")) {
        score += 4;
        reasons.push("FCA regulated — strong UK oversight.");
      }
      if (broker.products.includes("ISA") || broker.products.includes("SIPP")) {
        score += 1;
        reasons.push("UK investment account options available.");
      }
      break;

    case "social-trading":
      if (broker.bestForTags.includes("social-trading")) {
        score += 5;
        reasons.push("Social and copy-trading features available.");
      }
      if (broker.products.includes("crypto") || broker.products.includes("stocks")) {
        score += 1;
      }
      break;
  }

  return { score: Math.max(0, Math.min(score, 10)), reasons, warnings };
}

function scoreRegulation(broker: Broker, input: ChooserInput, persona: PersonaProfile): { score: number; reasons: string[]; warnings: string[] } {
  const reasons: string[] = [];
  const warnings: string[] = [];
  let score = 3;

  const hasFCA = broker.regulators.includes("FCA");

  if (hasFCA) {
    score += 5;
    reasons.push("FCA regulated with segregated client funds.");
  } else {
    // Structural UK trust penalty — always applies for a UK-positioned site
    // Non-FCA brokers sit lower by default, not just when user picks "regulation"
    score -= 3;
    warnings.push("Not directly FCA regulated — check which entity governs your account.");
  }

  // Extra weight when regulation is explicitly prioritised
  if (input.priority === "regulation" || persona.requiresFCA) {
    if (hasFCA) {
      score += 2;
    } else {
      score -= 4; // Heavy penalty stacks on top of structural -3
      warnings.push("FCA regulation is your stated priority — this broker operates under overseas regulation.");
    }
  }

  return { score: Math.max(0, Math.min(score, 10)), reasons, warnings };
}

function scorePricing(broker: Broker, input: ChooserInput): { score: number; reasons: string[] } {
  const reasons: string[] = [];
  let score = 5;

  if (input.priority === "low-fees" || input.experience === "advanced") {
    if (broker.feeModel === "commission+spread") {
      score += 3;
      reasons.push("Raw spread + commission — typically lower total cost.");
    }
    if (broker.feeModel === "commission-based") {
      score += 2;
      reasons.push("Transparent commission-based pricing.");
    }
  }

  if (input.experience === "beginner" && broker.feeModel === "spread-only") {
    score += 2;
    reasons.push("Spread-only pricing — simpler to understand.");
  }

  if (broker.minDeposit === "£0") {
    score += 1;
  }

  return { score: Math.min(score, 10), reasons };
}

function scorePlatformMatch(broker: Broker, persona: PersonaProfile): { score: number; reasons: string[] } {
  const reasons: string[] = [];
  let score = 5;

  if (persona.prefersMT) {
    if (broker.platforms.includes("MT4") || broker.platforms.includes("MT5")) {
      score += 4;
      reasons.push("MetaTrader platform matches your trading style.");
    } else {
      score -= 3;
    }
  }

  if (persona.prefersSimple) {
    if (broker.platforms.includes("Web") && broker.platforms.includes("Mobile")) {
      if (!broker.bestForTags.includes("professionals")) {
        score += 3;
        reasons.push("Simple web and mobile platform.");
      }
    }
  }

  return { score: Math.min(score, 10), reasons };
}

// ═══════════════════════════════════════════════════════
// MAIN SCORING FUNCTION
// ═══════════════════════════════════════════════════════

export function scoreBroker(broker: Broker, input: ChooserInput): ScoredBroker {
  const persona = detectPersona(input);

  // Step 1: Hard exclusion
  const exclusion = checkExclusion(broker, input, persona);
  if (exclusion.excluded) {
    return {
      broker,
      score: -1,
      reasons: [],
      warnings: [exclusion.reason!],
      excluded: true,
      excludeReason: exclusion.reason,
      matchStrength: "fair",
      personaMatch: persona.label,
    };
  }

  // Step 2: Score each dimension
  const instrumentResult = scoreInstrument(broker, input, persona);
  const experienceResult = scoreExperience(broker, input);
  const priorityResult = scorePriority(broker, input);
  const regulationResult = scoreRegulation(broker, input, persona);
  const pricingResult = scorePricing(broker, input);
  const platformResult = scorePlatformMatch(broker, persona);

  // Step 3: Weighted total
  const rawScore =
    instrumentResult.score * WEIGHTS.instrument +
    experienceResult.score * WEIGHTS.experience +
    priorityResult.score * WEIGHTS.priority +
    regulationResult.score * WEIGHTS.regulation +
    pricingResult.score * WEIGHTS.pricing +
    platformResult.score * WEIGHTS.platformMatch;

  // Step 4: Persona tag boost / penalty
  let personaAdjust = 0;
  for (const tag of persona.boostTags) {
    if (broker.bestForTags.includes(tag)) personaAdjust += 3;
  }
  for (const tag of persona.penaliseTags) {
    if (broker.bestForTags.includes(tag)) personaAdjust -= 4;
  }

  // Step 5: Final score is relevance-based (no commercial weight here)
  // Commercial weight is applied as tie-breaker in runChooser only
  const finalScore = rawScore + personaAdjust;

  // Step 6: Aggregate reasons and warnings (deduplicated)
  const allReasons = [
    ...instrumentResult.reasons,
    ...experienceResult.reasons,
    ...priorityResult.reasons,
    ...regulationResult.reasons,
    ...pricingResult.reasons,
    ...platformResult.reasons,
  ];
  const allWarnings = [
    ...instrumentResult.warnings,
    ...experienceResult.warnings,
    ...priorityResult.warnings,
    ...regulationResult.warnings,
  ];

  const uniqueReasons = [...new Set(allReasons)].slice(0, 4);
  const uniqueWarnings = [...new Set(allWarnings)].slice(0, 2);

  // Step 7: Determine match strength
  // Uses relevance score (raw + persona) WITHOUT commercial weight — keeps badge honest
  const maxPossible = (10 * WEIGHTS.instrument + 10 * WEIGHTS.experience + 10 * WEIGHTS.priority + 10 * WEIGHTS.regulation + 10 * WEIGHTS.pricing + 10 * WEIGHTS.platformMatch);
  const relevanceScore = rawScore + personaAdjust;
  const ratio = relevanceScore / maxPossible;

  let matchStrength: "strong" | "good" | "fair" = "fair";
  if (ratio > 0.7) matchStrength = "strong";
  else if (ratio > 0.5) matchStrength = "good";

  return {
    broker,
    score: Math.round(finalScore * 100) / 100,
    reasons: uniqueReasons,
    warnings: uniqueWarnings,
    excluded: false,
    matchStrength,
    personaMatch: persona.label,
  };
}

// ═══════════════════════════════════════════════════════
// FULL CHOOSER PIPELINE
// Returns sorted, filtered, annotated results
// ═══════════════════════════════════════════════════════

export interface ChooserResult {
  persona: PersonaProfile;
  topPicks: ScoredBroker[];
  alternatives: ScoredBroker[];
  excluded: ScoredBroker[];
}

export function runChooser(allBrokers: Broker[], input: ChooserInput): ChooserResult {
  const persona = detectPersona(input);

  const scored = allBrokers
    .map(broker => scoreBroker(broker, input))
    .sort((a, b) => {
      // Excluded brokers go to the bottom
      if (a.excluded && !b.excluded) return 1;
      if (!a.excluded && b.excluded) return -1;
      return b.score - a.score;
    });

  // Commercial tie-break pass: only swap adjacent brokers if their
  // relevance scores are within THRESHOLD. This keeps it as a genuine
  // tie-breaker rather than a ranking booster.
  const TIE_THRESHOLD = 8;
  const eligible = scored.filter(s => !s.excluded);
  for (let i = 0; i < eligible.length - 1; i++) {
    const a = eligible[i];
    const b = eligible[i + 1];
    const gap = Math.abs(a.score - b.score);
    if (gap < TIE_THRESHOLD) {
      const aCommercial = a.score * (1 + (COMMERCIAL_WEIGHTS[a.broker.slug] || 0));
      const bCommercial = b.score * (1 + (COMMERCIAL_WEIGHTS[b.broker.slug] || 0));
      if (bCommercial > aCommercial) {
        eligible[i] = b;
        eligible[i + 1] = a;
      }
    }
  }

  const excluded = scored.filter(s => s.excluded);

  return {
    persona,
    topPicks: eligible.slice(0, 3),
    alternatives: eligible.slice(3, 6),
    excluded,
  };
}