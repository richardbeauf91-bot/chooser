import type { Metadata } from "next";
import { comparePages } from "@/lib/data/compare";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Broker Comparisons",
  description: "Side-by-side broker comparisons to help you choose the right trading platform.",
  canonicalPath: "/compare"
});

export default function CompareHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Broker Comparisons</h1>

      <ul className="space-y-4">
        {comparePages.map(page => (
          <li key={`${page.aSlug}-vs-${page.bSlug}`}>
            <a
              href={`/compare/${page.aSlug}-vs-${page.bSlug}`}
              className="text-lg font-medium underline"
            >
              {page.title}
            </a>
            <p className="text-slate-600 mt-1">{page.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
