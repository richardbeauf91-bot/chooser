export type BestPage = {
  slug: string;
  title: string;
  intro: string;
  criteria: string[];
  recommendedBrokerSlugs: string[];
  faq: { question: string; answer: string }[];
  lastUpdated: string;
};
