import type { Metadata } from "next";
import { glossary } from "@/lib/data/glossary";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Trading Glossary",
  description: "Clear definitions of trading and broker-related terms.",
  canonicalPath: "/glossary"
});

export default function GlossaryHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Trading Glossary</h1>

      <ul className="grid gap-4 md:grid-cols-2">
        {glossary.map(term => (
          <li key={term.slug}>
            <a
              href={`/glossary/${term.slug}`}
              className="underline font-medium"
            >
              {term.seoTitle}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
