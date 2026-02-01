import type { Metadata } from "next";
import { bestPages } from "@/lib/data/best";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Best Trading Brokers",
  description: "Best trading brokers by category, country, and trading style.",
  canonicalPath: "/best"
});

export default function BestHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Best Trading Brokers</h1>

      <ul className="space-y-4">
        {bestPages.map(page => (
          <li key={page.slug}>
            <a
              href={`/best/${page.slug}`}
              className="text-lg font-medium underline"
            >
              {page.title}
            </a>
            <p className="text-slate-600 mt-1">{page.intro}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
