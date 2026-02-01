export function buildArticleSchema({
  title,
  description,
  url,
  dateModified
}: {
  title: string;
  description: string;
  url: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: url,
    dateModified
  };
}
