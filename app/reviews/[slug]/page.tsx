import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { brokers } from "@/lib/data/brokers";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/article";
import { buildBreadcrumbs } from "@/lib/seo/breadcrumbs";

import BrokerCard from "@/components/BrokerCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclosureFooter from "@/components/DisclosureFooter";

type Props = {
  params: { slug: string };
};

export const revalidate = 604800; // weekly

export function generateMetadata({ params }: Props): Metadata {
  const broker = brokers.find(b => b.slug === params.slug);
  if (!broker) return {};

  return buildMetadata({
    title: `${broker.name} Review`,
    description: broker.shortDescription,
    canonicalPath: `/reviews/${broker.slug}`
  });
}

export default function ReviewPage({ params }: Props) {
  const broker = brokers.find(b => b.slug === params.slug);
  if (!broker) notFound();

  const alternatives = brokers
    .filter(b => b.slug !== broker.slug)
    .slice(0, 3);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/reviews" },
    { name: broker.name, url: `/reviews/${broker.slug}` }
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
              title: `${broker.name} Review`,
              description: broker.shortDescription,
              url: `https://example.com/reviews/${broker.slug}`,
              dateModified: broker.lastUpdated
            })
          )
        }}
      />

      <Breadcrumbs
        items={breadcrumbItems.map(b => ({ name: b.name, href: b.url }))}
      />

      {/* Verdict */}
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">
            {broker.name} Review
          </h1>
          <p className="text-slate-700 mb-4">
            {broker.longDescription}
          </p>

          <p className="bg-slate-50 border p-4 rounded">
            <strong>Who it’s for:</strong>{" "}
            Traders looking for {broker.bestForTags.join(", ")}.
          </p>
        </div>

        <BrokerCard broker={broker} />
      </section>

      {/* Evidence-based sections */}
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Fees</h2>
          <p>{broker.feeModel}. Minimum deposit: {broker.minDeposit}.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Platforms & tools</h2>
          <ul className="list-disc ml-6">
            {broker.platforms.map(p => <li key={p}>{p}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Markets</h2>
          <ul className="list-disc ml-6">
            {broker.instruments.map(i => <li key={i}>{i}</li>)}
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
      </section>

      {/* Alternatives */}
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

      <DisclosureFooter />

      <p className="mt-6 text-xs text-slate-500">
        Last updated: {broker.lastUpdated}
      </p>
    </div>
  );
}
