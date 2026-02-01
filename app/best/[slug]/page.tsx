import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { bestPages } from "@/lib/data/best";
import { brokers } from "@/lib/data/brokers";

import { buildMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/article";
import { buildBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { buildFaqSchema } from "@/lib/seo/faq";

import BrokerCard from "@/components/BrokerCard";
import BrokerTable from "@/components/BrokerTable";
import FAQBlock from "@/components/FAQBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclosureFooter from "@/components/DisclosureFooter";

type Props = {
  params: { slug: string };
};

export const revalidate = 604800; // weekly

export function generateMetadata({ params }: Props): Metadata {
  const page = bestPages.find(p => p.slug === params.slug);
  if (!page) return {};

  return buildMetadata({
    title: page.title,
    description: page.intro,
    canonicalPath: `/best/${page.slug}`
  });
}

export default function BestPage({ params }: Props) {
  const page = bestPages.find(p => p.slug === params.slug);
  if (!page) notFound();

  const picks = page.recommendedBrokerSlugs
    .map(slug => brokers.find(b => b.slug === slug))
    .filter(Boolean);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Best Brokers", url: "/best" },
    { name: page.title, url: `/best/${page.slug}` }
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
              description: page.intro,
              url: `https://example.com/best/${page.slug}`,
              dateModified: page.lastUpdated
            })
          )
        }}
      />
      {page.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFaqSchema(page.faq))
          }}
        />
      )}

      <Breadcrumbs
        items={breadcrumbItems.map(b => ({ name: b.name, href: b.url }))}
      />

      {/* Above the fold */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
        <p className="text-slate-700 max-w-3xl">{page.intro}</p>
      </section>

      {/* Top picks */}
      <section className="grid gap-6 md:grid-cols-3 mb-16">
        {picks.map(broker => (
          <BrokerCard
            key={broker!.slug}
            broker={broker!}
            reason={`Selected based on ${page.criteria.join(", ").toLowerCase()}.`}
          />
        ))}
      </section>

      {/* Criteria */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">How we chose the best brokers</h2>
        <ul className="list-disc ml-6">
          {page.criteria.map(c => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      {/* Comparison table */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Comparison</h2>
        <BrokerTable
          brokers={picks as any}
          fields={[
            { key: "feeModel", label: "Fees" },
            { key: "platforms", label: "Platforms" },
            { key: "instruments", label: "Markets" },
            { key: "regulators", label: "Regulation" }
          ]}
        />
      </section>

      {/* Detailed breakdown */}
      <section className="space-y-12">
        {picks.map(broker => (
          <div key={broker!.slug}>
            <h3 className="text-xl font-semibold mb-2">
              {broker!.name}
            </h3>
            <p className="text-slate-700 mb-4">
              {broker!.longDescription}
            </p>
            <a
              href={`/brokers/${broker!.slug}`}
              className="underline"
            >
              Read full {broker!.name} review
            </a>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <FAQBlock faq={page.faq} />

      {/* Methodology snippet */}
      <section className="mt-16 text-sm text-slate-600">
        <p>
          Rankings are based on objective criteria including regulation, fees,
          platform quality, and market access. Learn more in our{" "}
          <a href="/methodology" className="underline">
            methodology
          </a>.
        </p>
      </section>

      <DisclosureFooter />

      <p className="mt-6 text-xs text-slate-500">
        Last updated: {page.lastUpdated}
      </p>
    </div>
  );
}
