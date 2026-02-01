import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { comparePages } from "@/lib/data/compare";
import { brokers } from "@/lib/data/brokers";

import { buildMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/article";
import { buildBreadcrumbs } from "@/lib/seo/breadcrumbs";

import BrokerTable from "@/components/BrokerTable";
import CTAButton from "@/components/CTAButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclosureFooter from "@/components/DisclosureFooter";

type Props = {
  params: { slug: string };
};

export const revalidate = 604800; // weekly

export function generateMetadata({ params }: Props): Metadata {
  const page = comparePages.find(
    p => `${p.aSlug}-vs-${p.bSlug}` === params.slug
  );
  if (!page) return {};

  return buildMetadata({
    title: page.title,
    description: page.summary,
    canonicalPath: `/compare/${params.slug}`
  });
}

export default function ComparePage({ params }: Props) {
  const page = comparePages.find(
    p => `${p.aSlug}-vs-${p.bSlug}` === params.slug
  );
  if (!page) notFound();

  const brokerA = brokers.find(b => b.slug === page.aSlug);
  const brokerB = brokers.find(b => b.slug === page.bSlug);
  if (!brokerA || !brokerB) notFound();

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Compare", url: "/compare" },
    { name: page.title, url: `/compare/${params.slug}` }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbs(
              breadcrumbItems.map(b => ({
                name: b.name,
                url: `https://example.com${b.url}`
              }))
            )
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleSchema({
              title: page.title,
              description: page.summary,
              url: `https://example.com/compare/${params.slug}`,
              dateModified: page.lastUpdated
            })
          )
        }}
      />

      <Breadcrumbs
        items={breadcrumbItems.map(b => ({ name: b.name, href: b.url }))}
      />

      {/* Summary verdict */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
        <p className="text-slate-700 max-w-3xl mb-4">{page.summary}</p>
        <p className="bg-slate-50 border p-4 rounded">
          <strong>Verdict:</strong> {page.verdict}
        </p>
      </section>

      {/* Comparison table */}
      <section className="mb-16">
        <BrokerTable
          brokers={[brokerA, brokerB]}
          fields={[
            { key: "feeModel", label: "Fees" },
            { key: "platforms", label: "Platforms" },
            { key: "instruments", label: "Markets" },
            { key: "regulators", label: "Regulation" },
            { key: "minDeposit", label: "Minimum deposit" }
          ]}
        />
      </section>

      {/* Pros / Cons */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {brokerA.name} pros & cons
          </h2>
          <ul className="list-disc ml-6">
            {brokerA.pros.map(p => <li key={p}>{p}</li>)}
            {brokerA.cons.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            {brokerB.name} pros & cons
          </h2>
          <ul className="list-disc ml-6">
            {brokerB.pros.map(p => <li key={p}>{p}</li>)}
            {brokerB.cons.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      {/* CTAs */}
      <section className="flex flex-wrap gap-6 mb-16">
        <CTAButton
          href={brokerA.affiliate.affiliateUrl}
          text={brokerA.affiliate.primaryCtaText}
        />
        <CTAButton
          href={brokerB.affiliate.affiliateUrl}
          text={brokerB.affiliate.primaryCtaText}
        />
      </section>

      <DisclosureFooter />

      <p className="mt-6 text-xs text-slate-500">
        Last updated: {page.lastUpdated}
      </p>
    </div>
  );
}
