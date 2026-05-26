import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { brokers } from "@/lib/data/brokers";
import { bestPages } from "@/lib/data/best";
import { comparePages } from "@/lib/data/compare";
import { guides } from "@/lib/data/guides";
import { glossary } from "@/lib/data/glossary";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, priority: 1.0, changeFrequency: "weekly" as const, lastModified: now },
    { url: `${SITE_URL}/brokers`, priority: 0.9, changeFrequency: "weekly" as const, lastModified: now },
    { url: `${SITE_URL}/reviews`, priority: 0.9, changeFrequency: "weekly" as const, lastModified: now },
    { url: `${SITE_URL}/best`, priority: 0.9, changeFrequency: "weekly" as const, lastModified: now },
    { url: `${SITE_URL}/compare`, priority: 0.8, changeFrequency: "weekly" as const, lastModified: now },
    { url: `${SITE_URL}/learn`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${SITE_URL}/glossary`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${SITE_URL}/chooser`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${SITE_URL}/about`, priority: 0.7, changeFrequency: "yearly" as const, lastModified: now },
    { url: `${SITE_URL}/methodology`, priority: 0.6, changeFrequency: "yearly" as const, lastModified: now },
    { url: `${SITE_URL}/disclosure`, priority: 0.4, changeFrequency: "yearly" as const, lastModified: now },
    { url: `${SITE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const, lastModified: now },
    { url: `${SITE_URL}/terms`, priority: 0.3, changeFrequency: "yearly" as const, lastModified: now },
  ];

  const brokerRoutes: MetadataRoute.Sitemap = brokers.map(broker => ({
    url: `${SITE_URL}/brokers/${broker.slug}`,
    lastModified: broker.lastUpdated,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  const reviewRoutes: MetadataRoute.Sitemap = brokers.map(broker => ({
    url: `${SITE_URL}/reviews/${broker.slug}`,
    lastModified: broker.lastUpdated,
    priority: 0.9,
    changeFrequency: "weekly" as const,
  }));

  const bestRoutes: MetadataRoute.Sitemap = bestPages.map(page => ({
    url: `${SITE_URL}/best/${page.slug}`,
    lastModified: page.lastUpdated,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  const compareRoutes: MetadataRoute.Sitemap = comparePages.map(page => ({
    url: `${SITE_URL}/compare/${page.aSlug}-vs-${page.bSlug}`,
    lastModified: page.lastUpdated,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const learnRoutes: MetadataRoute.Sitemap = guides.map(guide => ({
    url: `${SITE_URL}/learn/${guide.slug}`,
    lastModified: guide.lastUpdated,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const glossaryRoutes: MetadataRoute.Sitemap = glossary.map(entry => ({
    url: `${SITE_URL}/glossary/${entry.slug}`,
    lastModified: new Date("2025-01-15"),
    priority: 0.6,
    changeFrequency: "yearly" as const,
  }));

  return [
    ...staticRoutes,
    ...brokerRoutes,
    ...reviewRoutes,
    ...bestRoutes,
    ...compareRoutes,
    ...learnRoutes,
    ...glossaryRoutes,
  ];
}
