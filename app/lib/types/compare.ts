export interface CompareSection {
  title: string;
  brokerAPoints?: string[];
  brokerBPoints?: string[];
  sharedPoints?: string[];
  verdict?: string;
}

export interface CompareFAQ {
  question: string;
  answer: string;
}

export interface SuitabilityRow {
  traderType: string;
  betterChoice: string;
}

export interface ComparePage {
  aSlug: string;
  bSlug: string;
  title: string;
  summary: string;
  verdict: string;
  lastUpdated: string;
  chooseAIf: string[];
  chooseBIf: string[];
  sections: CompareSection[];
  suitability: SuitabilityRow[];
  faqs: CompareFAQ[];
  methodology: string;
}