import Link from "next/link";
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
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export function generateStaticParams() {
  return brokers.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const broker = brokers.find((b) => b.slug === slug);
  if (!broker) return {};

  return buildMetadata({
    title: `${broker.name} - Fees, Platforms & Regulation`,
    description: broker.shortDescription,
    canonicalPath: `/brokers/${broker.slug}`,
  });
}

export default async function BrokerPage({ params }: Props) {
  const { slug } = await params;
  const broker = brokers.find((b) => b.slug === slug);
  if (!broker) notFound();

  const alternatives = brokers
    .filter(
      (b) =>
        b.slug !== broker.slug &&
        b.bestForTags.some((tag) => broker.bestForTags.includes(tag))
    )
    .slice(0, 3);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Brokers", url: "/brokers" },
    { name: broker.name, url: `/brokers/${broker.slug}` },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbs(
              breadcrumbItems.map((b) => ({
                name: b.name,
                url: `https://example.com${b.url}`,
              }))
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleSchema({
              title: broker.name,
              description: broker.shortDescription,
              url: `https://example.com/brokers/${broker.slug}`,
              dateModified: broker.lastUpdated,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={breadcrumbItems.map((b) => ({ name: b.name, href: b.url }))}
      />

      {/* Overview */}
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">
            <Link href={`/brokers/${broker.slug}`} className="hover:underline">
              {broker.name}
            </Link>
          </h1>
          <p className="text-slate-700 mb-4">{broker.longDescription}</p>

          <p className="bg-slate-50 border p-4 rounded">
            <strong>Who it&apos;s for:</strong>{" "}
            Traders looking for {broker.bestForTags.join(", ")}.
          </p>
        </div>

        <BrokerCard broker={broker} />
      </section>

      {/* Broker details */}
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Fees</h2>
          <p>
            {broker.feeModel}. Minimum deposit: {broker.minDeposit}.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Platforms &amp; tools
          </h2>
          <ul className="list-disc ml-6">
            {broker.platforms.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Markets</h2>
          <ul className="list-disc ml-6">
            {broker.instruments.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Pros</h2>
            <ul className="list-disc ml-6">
              {broker.pros.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cons</h2>
            <ul className="list-disc ml-6">
              {broker.cons.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Alternatives */}
      {alternatives.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">
            Alternatives to {broker.name}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {alternatives.map((b) => (
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