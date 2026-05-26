import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-05-26"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/brokers`,
      lastModified: new Date("2026-05-26"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}