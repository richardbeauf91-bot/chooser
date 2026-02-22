export type ContentPage = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  body: {
    heading: string;
    content: string;
  }[];
  faq?: { question: string; answer: string }[];
  lastUpdated: string;
};

export type RelatedConcept = {
  term: string;
  whyItMatters: string;
};

export type GlossaryEntry = {
  slug: string;
  term: string;
  intent: string;
  directAnswer: string;
  plainEnglishDefinition: string;
  howItWorks: string;
  whyThisMattersForTraders: string;
  commonMisunderstandings: string;
  howThisAffectsBrokerChoice: string;
  risksAndCommonMistakes: string;
  realWorldExample: string;
  whatToCheckBeforeTradingChecklist: string;
  relatedConcepts?: RelatedConcept[];
};