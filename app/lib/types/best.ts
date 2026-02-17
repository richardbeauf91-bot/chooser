export type BestPage = {
  slug: string;
  title: string;
  intro: string;
  lastUpdated: string;
  heroPicks: {
    label: string;
    brokerSlug: string;
    brokerName: string;
    reason: string;
  }[];
  audience: {
    title: string;
    points: string[];
  }[];
  evaluationCriteria: {
    points: string[];
    footnote: string;
  };
  topPicksOverview: {
    brokerSlug: string;
    brokerName: string;
    whyPicked: string;
    limitation: string;
    bestFor: string;
  }[];
  brokerBreakdowns: {
    brokerSlug: string;
    brokerName: string;
    sections: {
      heading: string;
      points: string[];
    }[];
    whenToAvoid: string;
  }[];
  costComparisonLogic: {
    intro?: string;
    points: {
      title: string;
      detail: string;
    }[];
    footnote?: string;
  };
  risks: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  methodology: string[];
  nextSteps: string[];
};