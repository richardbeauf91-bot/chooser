import { SITE_URL } from "@/lib/config";

export function buildArticleSchema({
  title,
  description,
  url,
  dateModified,
  datePublished,
}: {
  title: string;
  description: string;
  url: string;
  dateModified: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    datePublished: datePublished ?? dateModified,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Find A Broker",
      url: SITE_URL
    },
    publisher: {
      "@type": "Organization",
      name: "Find A Broker",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`
      }
    }
  };
}
