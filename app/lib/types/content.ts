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
