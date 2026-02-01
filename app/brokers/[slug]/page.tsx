import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { brokers } from "@/lib/data/brokers";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { buildArticleSchema } from "@/lib/seo/article";

import BrokerCard from "@/components/BrokerCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclosureFooter from "@/components/DisclosureFooter";

type Props = {
  params: { slug: string };
};

export const revalidate = 3600; // 1 hour

export function generateMetadata({ params }: Props): Metadata {
  const broker = brokers.find(b => b.slug === params.slug);
  if (!broker) return {};

  return buildMetadata({
    title: `${broker.name} Review`,
    description: broker.shortDescription,
    canonicalPath: `/brokers/${broker.slug}`
  });
}

export default function BrokerPage({ params }: Props) {
  const broker = brokers.find(b => b.slug === params.slug);
  if (!broker) notFound();

  const alternatives = brokers.filter(
    b => b.slug !== broker.slug && b.bestForTags.some(tag => broker.bestForTags.includes(tag))
  ).slice(0, 3);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Brokers", url: "/brokers" },
    { name: broker.name, url: `/brokers/${broker.slug}` }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbs(
              breadcrumbItems.map(b => ({ name: b.name, url: `https://example.com${b.url}` }))
            )
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleSchema({
              title: `${broker.name} Review`,
              description: broker.shortDescription,
              url: `https://example.com/brokers/${broker.slug}`,
              dateModified: broker.lastUpdated
            })
          )
        }}
      />

      <Breadcrumbs
        items={breadcrumbItems.map(b => ({ name: b.name, href: b.url }))}
      />

      {/* Above the fold */}
      <section className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">
            {broker.name} Review
          </h1>
          <p className="text-slate-700">
            {broker.longDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {broker.bestForTags.map(tag => (
              <span
                key={tag}
                className="text-xs bg-slate-100 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <BrokerCard broker={broker} />
      </section>

      {/* Key sections */}
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Fees</h2>
          <p>{broker.feeModel}. Minimum deposit: {broker.minDeposit}.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Platforms</h2>
          <ul className="list-disc ml-6">
            {broker.platforms.map(p => <li key={p}>{p}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Markets & Instruments</h2>
          <ul className="list-disc ml-6">
            {broker.instruments.map(i => <li key={i}>{i}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Regulation</h2>
          <ul className="list-disc ml-6">
            {broker.regulators.map(r => <li key={r}>{r}</li>)}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Pros</h2>
            <ul className="list-disc ml-6">
              {broker.pros.map(p => <li key={p}>{p}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cons</h2>
            <ul className="list-disc ml-6">
              {broker.cons.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Who this broker is for</h2>
          <p>
            This broker is best suited for traders interested in{" "}
            {broker.bestForTags.join(", ")}.
          </p>
        </div>
      </section>

      {/* Alternatives */}
      {alternatives.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">
            Alternatives to {broker.name}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {alternatives.map(b => (
              <BrokerCard key={b.slug} broker={b} />
            ))}
          </div>
        </section>
      )}

      <DisclosureFooter />

      <p className="mt-6 text-xs text-slate-500">
        Last updated: {broker.lastUpdated}
      </p>
    </div>
  );
}
