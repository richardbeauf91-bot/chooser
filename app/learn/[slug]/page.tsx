import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { guides } from "@/lib/data/guides";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/article";
import { buildFaqSchema } from "@/lib/seo/faq";

import FAQBlock from "@/components/FAQBlock";
import DisclosureFooter from "@/components/DisclosureFooter";

type Props = {
  params: { slug: string };
};

export const revalidate = 604800;

export function generateMetadata({ params }: Props): Metadata {
  const guide = guides.find(g => g.slug === params.slug);
  if (!guide) return {};

  return buildMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    canonicalPath: `/learn/${guide.slug}`
  });
}

export default function GuidePage({ params }: Props) {
  const guide = guides.find(g => g.slug === params.slug);
  if (!guide) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleSchema({
              title: guide.seoTitle,
              description: guide.seoDescription,
              url: `https://example.com/learn/${guide.slug}`,
              dateModified: guide.lastUpdated
            })
          )
        }}
      />
      {guide.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFaqSchema(guide.faq))
          }}
        />
      )}

      <h1 className="text-3xl font-bold mb-6">{guide.seoTitle}</h1>

      <div className="space-y-8">
        {guide.body.map(section => (
          <section key={section.heading}>
            <h2 className="text-2xl font-semibold mb-2">
              {section.heading}
            </h2>
            <p className="text-slate-700">{section.content}</p>
          </section>
        ))}
      </div>

      {guide.faq && <FAQBlock faq={guide.faq} />}

      <DisclosureFooter />

      <p className="mt-6 text-xs text-slate-500">
        Last updated: {guide.lastUpdated}
      </p>
    </div>
  );
}
