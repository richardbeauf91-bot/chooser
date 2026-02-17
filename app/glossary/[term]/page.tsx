import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import { glossary } from "@/lib/data/glossary";
import { buildMetadata } from "@/lib/seo/metadata";
import DisclosureFooter from "@/components/DisclosureFooter";

type Props = {
  params: Promise<{ term: string }>;
};

export const revalidate = 1209600; // 2 weeks

/* ------------------------------------------------------------------ */
/*  Resolve a relatedConcept term → glossary slug (if it exists)      */
/* ------------------------------------------------------------------ */
function termToSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/\(.*?\)/g, "")          // strip parentheticals
    .replace(/[–—]/g, "-")            // en/em dashes → hyphens
    .replace(/[^a-z0-9\s-]/g, "")     // remove special chars
    .trim()
    .replace(/\s+/g, "-");            // spaces → hyphens
}

function findRelatedSlug(relatedTerm: string): string | null {
  // 1. Direct slug match on the term field
  const direct = glossary.find(
    g => g.term.toLowerCase() === relatedTerm.toLowerCase()
  );
  if (direct) return direct.slug;

  // 2. Slugified match
  const slugified = termToSlug(relatedTerm);
  const bySlug = glossary.find(g => g.slug === slugified);
  if (bySlug) return bySlug.slug;

  // 3. Partial / contains match (e.g. "Market maker vs STP/ECN" → "market-maker-vs-stp")
  const normLower = relatedTerm.toLowerCase();
  const partial = glossary.find(
    g =>
      normLower.includes(g.term.toLowerCase()) ||
      g.term.toLowerCase().includes(normLower)
  );
  if (partial) return partial.slug;

  return null;
}

/* ------------------------------------------------------------------ */
/*  SEO metadata                                                      */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return glossary.map(t => ({ term: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term: termSlug } = await params;
  const entry = glossary.find(t => t.slug === termSlug);
  if (!entry) return {};

  return buildMetadata({
    title: `${entry.term} – Trading Definition`,
    description: entry.directAnswer.slice(0, 160),
    canonicalPath: `/glossary/${entry.slug}`
  });
}

/* ------------------------------------------------------------------ */
/*  Helper: render multi-line string content (bullet / numbered)      */
/* ------------------------------------------------------------------ */
function ContentBlock({ text }: { text: string }) {
  const lines = text.split("\n").filter(Boolean);

  // If every line looks like a bullet or numbered item, render as a list
  const isList = lines.length > 1 && lines.every(l => /^(\d+\)|•|-)/.test(l.trim()));

  if (isList) {
    return (
      <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700">
        {lines.map((line, i) => (
          <li key={i}>{line.replace(/^(\d+\)|•|-)\s*/, "")}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-3 text-slate-700">
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default async function GlossaryTermPage({ params }: Props) {
  const { term: termSlug } = await params;
  const entry = glossary.find(t => t.slug === termSlug);
  if (!entry) notFound();

  const sections: { heading: string; content: string }[] = [
    { heading: "Definition", content: entry.directAnswer },
    { heading: "In Plain English", content: entry.plainEnglishDefinition },
    { heading: "How It Works", content: entry.howItWorks },
    { heading: "Why This Matters for Traders", content: entry.whyThisMattersForTraders },
    { heading: "Common Misunderstandings", content: entry.commonMisunderstandings },
    { heading: "How This Affects Broker Choice", content: entry.howThisAffectsBrokerChoice },
    { heading: "Risks & Common Mistakes", content: entry.risksAndCommonMistakes },
    { heading: "Real-World Example", content: entry.realWorldExample },
    { heading: "What to Check Before Trading", content: entry.whatToCheckBeforeTradingChecklist },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">{entry.term}</h1>

      {sections.map(section => (
        <section key={section.heading} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
          <ContentBlock text={section.content} />
        </section>
      ))}

      {/* ---- Related Concepts with internal links ---- */}
      {entry.relatedConcepts && entry.relatedConcepts.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Related Concepts</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {entry.relatedConcepts.map(rc => {
              const slug = findRelatedSlug(rc.term);
              return (
                <div
                  key={rc.term}
                  className="border border-slate-200 rounded-lg p-4"
                >
                  {slug ? (
                    <Link
                      href={`/glossary/${slug}`}
                      className="text-blue-700 font-medium hover:underline"
                    >
                      {rc.term}
                    </Link>
                  ) : (
                    <span className="font-medium text-slate-900">
                      {rc.term}
                    </span>
                  )}
                  <p className="text-sm text-slate-600 mt-1">
                    {rc.whyItMatters}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <DisclosureFooter />
    </div>
  );
}