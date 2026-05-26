import { brokers } from "@/lib/data/brokers";
import { bestPages } from "@/lib/data/best";
import { comparePages } from "@/lib/data/compare";
import { guides } from "@/lib/data/guides";
import { glossary } from "@/lib/data/glossary";

const SITE_URL = "https://findabroker.xyz";

function url(loc: string, lastmod: string, changefreq: string, priority: number) {
  return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

export async function GET() {
  const today = "2026-05-26";

  const staticUrls = [
    url(SITE_URL, today, "weekly", 1.0),
    url(`${SITE_URL}/brokers`, today, "weekly", 0.9),
    url(`${SITE_URL}/reviews`, today, "weekly", 0.9),
    url(`${SITE_URL}/best`, today, "weekly", 0.9),
    url(`${SITE_URL}/compare`, today, "weekly", 0.8),
    url(`${SITE_URL}/learn`, today, "monthly", 0.8),
    url(`${SITE_URL}/glossary`, today, "monthly", 0.7),
    url(`${SITE_URL}/calculator`, today, "monthly", 0.9),
    url(`${SITE_URL}/chooser`, today, "monthly", 0.7),
    url(`${SITE_URL}/about`, today, "yearly", 0.7),
    url(`${SITE_URL}/contact`, today, "yearly", 0.5),
    url(`${SITE_URL}/methodology`, today, "yearly", 0.6),
    url(`${SITE_URL}/disclosure`, today, "yearly", 0.4),
    url(`${SITE_URL}/privacy`, today, "yearly", 0.3),
    url(`${SITE_URL}/terms`, today, "yearly", 0.3),
  ];

  const brokerUrls = brokers.map(b =>
    url(`${SITE_URL}/brokers/${b.slug}`, typeof b.lastUpdated === "string" ? b.lastUpdated : today, "weekly", 0.8)
  );

  const reviewUrls = brokers.map(b =>
    url(`${SITE_URL}/reviews/${b.slug}`, typeof b.lastUpdated === "string" ? b.lastUpdated : today, "weekly", 0.9)
  );

  const bestUrls = bestPages.map(p =>
    url(`${SITE_URL}/best/${p.slug}`, typeof p.lastUpdated === "string" ? p.lastUpdated : today, "weekly", 0.8)
  );

  const compareUrls = comparePages.map(p =>
    url(`${SITE_URL}/compare/${p.aSlug}-vs-${p.bSlug}`, typeof p.lastUpdated === "string" ? p.lastUpdated : today, "monthly", 0.7)
  );

  const learnUrls = guides.map(g =>
    url(`${SITE_URL}/learn/${g.slug}`, typeof g.lastUpdated === "string" ? g.lastUpdated : today, "monthly", 0.7)
  );

  const glossaryUrls = glossary.map(e =>
    url(`${SITE_URL}/glossary/${e.slug}`, "2025-01-15", "yearly", 0.6)
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...brokerUrls, ...reviewUrls, ...bestUrls, ...compareUrls, ...learnUrls, ...glossaryUrls].join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
