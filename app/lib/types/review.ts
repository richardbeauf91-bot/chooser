export type ReviewPage = {
  slug: string;
  title: string;
  sections: {
    heading: string;
    body: string;
  }[];
  lastUpdated: string;
};
