import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { brokers } from "@/lib/data/brokers";
import { bestPages } from "@/lib/data/best";
import { comparePages } from "@/lib/data/compare";
import { guides } from "@/lib/data/guides";
import { glossary } from "@/lib/data/glossary";

const baseUrl = SITE_URL.replace(/\/$/, "");

const safeDate = (date: string | Date | undefined) => {
  const parsed = date ? new Date(date) : new Date();
  return isNaN(parsed.getTime()) ? new Date() : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly", lastModified: now },
    { url: `${baseUrl}/brokers`, priority: 0.9, changeFrequency: "weekly", lastModified: now },
    { url: `${baseUrl}/reviews`, priority: 0.9, changeFrequency: "weekly", lastModified: now },
    { url: `${baseUrl}/best`, priority: 0.9, changeFrequency: "weekly", lastModified: now },
    { url: `${baseUrl}/compare`, priority: 0.8, changeFrequency: "weekly", lastModified: now },
    { url: `${baseUrl}/learn`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/glossary`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/calculator`, priority: 0.9, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/chooser`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "yearly", lastModified: now },
    { url: `${baseUrl}/contact`, priority: 0.5, changeFrequency: "yearly", lastModified: now },
    { url: `${baseUrl}/methodology`, priority: 0.6, changeFrequency: "yearly", lastModified: now },
    { url: `${baseUrl}/disclosure`, priority: 0.4, changeFrequency: "yearly", lastModified: now },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: "yearly", lastModified: now },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: "yearly", lastModified: now },

    ...brokers.filter(b => b.slug).map(broker => ({
      url: `${baseUrl}/brokers/${broker.slug}`,
      lastModified: safeDate(broker.lastUpdated),
      priority: 0.8,
      changeFrequency: "weekly" as const,
    })),

    ...brokers.filter(b => b.slug).map(broker => ({
      url: `${baseUrl}/reviews/${broker.slug}`,
      lastModified: safeDate(broker.lastUpdated),
      priority: 0.9,
      changeFrequency: "weekly" as const,
    })),

    ...bestPages.filter(p => p.slug).map(page => ({
      url: `${baseUrl}/best/${page.slug}`,
      lastModified: safeDate(page.lastUpdated),
      priority: 0.8,
      changeFrequency: "weekly" as const,
    })),

    ...comparePages.filter(p => p.aSlug && p.bSlug).map(page => ({
      url: `${baseUrl}/compare/${page.aSlug}-vs-${page.bSlug}`,
      lastModified: safeDate(page.lastUpdated),
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),

    ...guides.filter(g => g.slug).map(guide => ({
      url: `${baseUrl}/learn/${guide.slug}`,
      lastModified: safeDate(guide.lastUpdated),
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),

    ...glossary.filter(e => e.slug).map(entry => ({
      url: `${baseUrl}/glossary/${entry.slug}`,
      lastModified: new Date("2025-01-15"),
      priority: 0.6,
      changeFrequency: "yearly" as const,
    })),
  ];
}