import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { brokers } from "@/lib/data/brokers";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/article";
import { buildBreadcrumbs } from "@/lib/seo/breadcrumbs";

import BrokerCard from "@/components/BrokerCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclosureFooter from "@/components/DisclosureFooter";
import FAQBlock from "@/components/FAQBlock";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 604800; // weekly

export function generateStaticParams() {
  return brokers.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const broker = brokers.find((b) => b.slug === slug);
  if (!broker) return {};

  return buildMetadata({
    title: `${broker.name} Review 2026 — Fees, Platforms & Regulation`,
    description: broker.shortDescription,
    canonicalPath: `/reviews/${broker.slug}`,
  });
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const broker = brokers.find((b) => b.slug === slug);
  if (!broker || !broker.review) notFound();

  const review = broker.review;

  const alternatives = brokers
    .filter((b) => b.slug !== broker.slug)
    .slice(0, 3);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/reviews" },
    { name: broker.name, url: `/reviews/${broker.slug}` },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── Structured data ────────────────────────────── */}
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
              title: `${broker.name} Review`,
              description: broker.shortDescription,
              url: `https://example.com/reviews/${broker.slug}`,
              dateModified: broker.lastUpdated,
            })
          ),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={breadcrumbItems.map((b) => ({ name: b.name, href: b.url }))}
        />

        {/* ── 1. Verdict (At a Glance) ─────────────────── */}
        <section className="grid gap-8 lg:grid-cols-3 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              {broker.name} Review
            </h1>

            <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Verdict (At a Glance)
              </h2>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-2">
                  Best for
                </h3>
                <ul className="space-y-2">
                  {review.verdict.bestFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-2">
                  Not ideal for
                </h3>
                <ul className="space-y-2">
                  {review.verdict.notIdealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <BrokerCard broker={broker} />
          </div>
        </section>

        {/* ── 2. Who This Review Is For ────────────────── */}
        <section className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Who This Review Is For
          </h2>
          <p className="text-slate-700 mb-4">
            This review is for UK-based traders and investors who:
          </p>
          <ul className="space-y-2">
            {review.whoFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 3. Evaluation Criteria ───────────────────── */}
        <section className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Evaluation Criteria
          </h2>
          <p className="text-slate-700 mb-4">
            We assessed {broker.name} on:
          </p>
          <ul className="space-y-2">
            {review.evaluationCriteria.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <div className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0 mt-2"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 4. Overview + Strengths & Limitations ────── */}
        <section className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Overview: {broker.name} at a Glance
          </h2>
          <p className="text-slate-700 mb-6">{review.overview}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-green-800 mb-3">Strengths</h3>
              <ul className="space-y-2">
                {review.strengths.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <span className="text-green-600 font-bold flex-shrink-0">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-800 mb-3">Limitations</h3>
              <ul className="space-y-2">
                {review.limitations.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <span className="text-red-600 font-bold flex-shrink-0">✘</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. Detailed Breakdown ────────────────────── */}
        <div className="space-y-8 mb-8">
          {/* Regulation & Safety */}
          <section className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Regulation &amp; Safety
            </h2>
            <p className="text-slate-700 mb-4">{review.regulation}</p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-900">
                <strong>When to avoid:</strong> {review.whenToAvoid}
              </p>
            </div>
          </section>

          {/* Platforms & Tools */}
          <section className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Platforms &amp; Tools
            </h2>
            <p className="text-slate-700">{review.platforms}</p>
          </section>

          {/* Costs & Fees */}
          <section className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Costs &amp; Fees
            </h2>
            <p className="text-slate-700">{review.costs}</p>
          </section>

          {/* Asset Coverage */}
          <section className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Asset Coverage
            </h2>
            <p className="text-slate-700">{review.assetCoverage}</p>
          </section>

          {/* Customer Feedback */}
          <section className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Customer Feedback Snapshot
            </h2>
            <p className="text-slate-700">{review.customerFeedback}</p>
          </section>
        </div>

        {/* ── 6. Cost Comparison Logic ─────────────────── */}
        <section className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Cost Comparison Logic
          </h2>
          <p className="text-slate-700">{review.costComparison}</p>
        </section>

        {/* ── 7. Risks & Considerations ────────────────── */}
        <section className="bg-red-50 rounded-xl border border-red-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Risks &amp; Considerations
          </h2>
          <ul className="space-y-3">
            {review.risks.map((risk) => (
              <li key={risk} className="flex items-start gap-3 text-red-900">
                <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 8. FAQ ───────────────────────────────────── */}
        <FAQBlock faq={review.faq} />

        {/* ── 9. Methodology & Disclosure ───────────────── */}
        <section className="bg-slate-100 rounded-xl border border-slate-200 p-8 mt-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Methodology &amp; Disclosure
          </h2>
          <p className="text-slate-700">{review.methodology}</p>
        </section>

        {/* ── Alternatives ─────────────────────────────── */}
        {alternatives.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Alternatives to {broker.name}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {alternatives.map((b) => (
                <BrokerCard key={b.slug} broker={b} />
              ))}
            </div>
          </section>
        )}

        <DisclosureFooter />

        <p className="mt-6 text-xs text-slate-500 text-center">
          Last updated: {broker.lastUpdated}
        </p>
      </div>
    </div>
  );
}