export interface BrokerAffiliate {
  primaryCtaText: string;
  affiliateUrl: string;
}

export interface BrokerFAQ {
  question: string;
  answer: string;
}

export interface BrokerReview {
  /** Section 1 — Verdict */
  verdict: {
    bestFor: string[];
    notIdealFor: string[];
  };
  /** Section 2 — Who this review is for */
  whoFor: string[];
  /** Section 3 — How we evaluated */
  evaluationCriteria: string[];
  /** Section 4 — Overview paragraph */
  overview: string;
  /** Section 4 — Strengths */
  strengths: string[];
  /** Section 4 — Limitations */
  limitations: string[];
  /** Section 5 — Regulation detail */
  regulation: string;
  /** Section 5 — When to avoid */
  whenToAvoid: string;
  /** Section 5 — Platform detail */
  platforms: string;
  /** Section 5 — Cost detail */
  costs: string;
  /** Section 5 — Asset coverage */
  assetCoverage: string;
  /** Section 5 — Customer feedback */
  customerFeedback: string;
  /** Section 6 — Cost comparison logic */
  costComparison: string;
  /** Section 7 — Risks */
  risks: string[];
  /** Section 8 — FAQ */
  faq: BrokerFAQ[];
  /** Section 9 — Methodology */
  methodology: string;
}

export interface Broker {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  availabilityCountries: string[];
  regulators: string[];
  instruments: string[];
  products: string[];
  platforms: string[];
  feeModel: string;
  minDeposit: string;
  pros: string[];
  cons: string[];
  bestForTags: string[];
  riskNotes: string[];
  lastUpdated: string;
  affiliate: BrokerAffiliate;
  /** Full structured review content */
  review: BrokerReview;
  /** Optional ranking position for "best of" pages */
  rank?: number;
  /** Optional display string for regulation (used by BrokerCard) */
  regulation?: string;
}