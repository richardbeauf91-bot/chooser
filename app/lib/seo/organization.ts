import { SITE_URL } from "@/lib/config";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Find A Broker",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 200,
      height: 60
    },
    description: "Independent comparisons and reviews of regulated trading brokers for UK retail traders."
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Find A Broker",
    url: SITE_URL,
    description: "Compare FCA-regulated brokers, read expert reviews, and find the best trading platform for your needs.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/brokers?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}
