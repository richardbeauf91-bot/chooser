import type { Metadata } from "next";
import { guides } from "@/lib/data/guides";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Trading Guides",
  description: "Educational guides to help you understand brokers and trading platforms.",
  canonicalPath: "/learn"
});

export default function LearnHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Trading Guides</h1>

      <ul className="space-y-4">
        {guides.map(guide => (
          <li key={guide.slug}>
            <a
              href={`/learn/${guide.slug}`}
              className="text-lg font-medium underline"
            >
              {guide.seoTitle}
            </a>
            <p className="text-slate-600 mt-1">
              {guide.seoDescription}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
