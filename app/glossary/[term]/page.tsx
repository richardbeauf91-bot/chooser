import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { glossary } from "@/lib/data/glossary";
import { buildMetadata } from "@/lib/seo/metadata";
import DisclosureFooter from "@/components/DisclosureFooter";

type Props = {
  params: { term: string };
};

export const revalidate = 1209600; // 2 weeks

export function generateMetadata({ params }: Props): Metadata {
  const term = glossary.find(t => t.slug === params.term);
  if (!term) return {};

  return buildMetadata({
    title: term.seoTitle,
    description: term.seoDescription,
    canonicalPath: `/glossary/${term.slug}`
  });
}

export default function GlossaryTermPage({ params }: Props) {
  const term = glossary.find(t => t.slug === params.term);
  if (!term) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">{term.seoTitle}</h1>

      {term.body.map(section => (
        <section key={section.heading} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {section.heading}
          </h2>
          <p className="text-slate-700">{section.content}</p>
        </section>
      ))}

      <DisclosureFooter />

      <p className="mt-6 text-xs text-slate-500">
        Last updated: {term.lastUpdated}
      </p>
    </div>
  );
}
