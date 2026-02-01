import { MetadataRoute } from "next";
import { brokers } from "@/lib/data/brokers";
import { bestPages } from "@/lib/data/best";
import { comparePages } from "@/lib/data/compare";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";

  const staticRoutes = [
    "",
    "/brokers",
    "/chooser",
    "/best",
    "/compare",
    "/reviews",
    "/learn",
    "/glossary",
    "/tools",
    "/about",
    "/contact",
    "/disclosure",
    "/methodology",
    "/privacy",
    "/terms",
    "/disclaimer"
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));

  const brokerRoutes = brokers.map(broker => ({
    url: `${baseUrl}/brokers/${broker.slug}`,
    lastModified: broker.lastUpdated
  }));

  const bestRoutes = bestPages.map(page => ({
    url: `${baseUrl}/best/${page.slug}`,
    lastModified: page.lastUpdated
  }));

  const compareRoutes = comparePages.map(page => ({
    url: `${baseUrl}/compare/${page.aSlug}-vs-${page.bSlug}`,
    lastModified: page.lastUpdated
  }));

  return [...staticRoutes, ...brokerRoutes, ...bestRoutes, ...compareRoutes];
}
