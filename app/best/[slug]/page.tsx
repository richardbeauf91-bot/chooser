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
  params: Promise<{ slug: string }>;
};

export const revalidate = 604800; // weekly

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = bestPages.find(p => p.slug === slug);
  if (!page) return {};

  return buildMetadata({
    title: page.title,
    description: page.intro,
    canonicalPath: `/best/${page.slug}`
  });
}

export default async function BestPage({ params }: Props) {
  const { slug } = await params;
  const page = bestPages.find(p => p.slug === slug);
  if (!page) notFound();

  // Resolve broker data for top picks overview
  const resolvedBrokers = page.topPicksOverview
    .map(pick => ({
      ...pick,
      broker: brokers.find(b => b.slug === pick.brokerSlug)
    }));

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Best Brokers", url: "/best" },
    { name: page.title, url: `/best/${page.slug}` }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs
            items={breadcrumbItems.map(b => ({ name: b.name, href: b.url }))}
          />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Expert Picks
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {page.title}
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              {page.intro}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Picks – Direct Answer */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-white font-bold">
              ★
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Top Picks
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {page.heroPicks.map((pick, index) => {
              const broker = brokers.find(b => b.slug === pick.brokerSlug);
              return (
                <div
                  key={`${pick.brokerSlug}-${index}`}
                  className={`relative bg-white rounded-xl border-2 p-6 ${
                    index === 0 ? "border-yellow-400 shadow-lg" : "border-slate-200"
                  }`}
                >
                  {index === 0 && (
                    <div className="absolute -top-3 left-6">
                      <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg">
                        🏆 #1 Choice
                      </span>
                    </div>
                  )}
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    {pick.label}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {pick.brokerName}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {pick.reason}
                  </p>
                  {broker && (
                    <a
                      href={`/brokers/${broker.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      Read Full Review
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Who This Page Is For */}
        <section className="mb-16">
          <div className="bg-white rounded-xl border-2 border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Who This Page Is For
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {page.audience.map((segment) => (
                <div key={segment.title}>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {segment.title}
                  </h3>
                  <ul className="space-y-1">
                    {segment.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section className="mb-16">
          <div className="bg-white rounded-xl border-2 border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Evaluation Criteria
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {page.evaluationCriteria.points.map((criterion, index) => (
                <div key={criterion} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-slate-700">{criterion}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 italic border-t border-slate-100 pt-4">
              {page.evaluationCriteria.footnote}
            </p>
          </div>
        </section>

        {/* Top Picks Overview Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border-2 border-slate-200 text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left p-4 font-semibold text-slate-900">Broker</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Why Picked</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Best For</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Limitation</th>
                </tr>
              </thead>
              <tbody>
                {page.topPicksOverview.map((pick) => (
                  <tr key={pick.brokerSlug} className="border-b border-slate-100 last:border-b-0">
                    <td className="p-4 font-semibold text-slate-900">
                      <a href={`/brokers/${pick.brokerSlug}`} className="text-blue-600 hover:text-blue-700">
                        {pick.brokerName}
                      </a>
                    </td>
                    <td className="p-4 text-slate-700">{pick.whyPicked}</td>
                    <td className="p-4 text-slate-700">{pick.bestFor}</td>
                    <td className="p-4 text-slate-500">{pick.limitation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Broker Breakdowns */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Detailed Analysis
          </h2>
          <div className="space-y-8">
            {page.brokerBreakdowns.map((breakdown, index) => {
              const broker = brokers.find(b => b.slug === breakdown.brokerSlug);
              return (
                <div key={breakdown.brokerSlug} className="bg-white rounded-xl border-2 border-slate-200 p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {breakdown.brokerName}
                      </h3>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    {breakdown.sections.map((section) => (
                      <div key={section.heading}>
                        <h4 className="font-semibold text-slate-900 mb-2 text-sm uppercase tracking-wide">
                          {section.heading}
                        </h4>
                        <ul className="space-y-1">
                          {section.points.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                              <span className="text-blue-500 mt-1">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <p className="text-sm text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                      ⚠️ When to avoid: {breakdown.whenToAvoid}
                    </p>
                    {broker && (
                      <a
                        href={`/brokers/${broker.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        Full Review
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cost Comparison Logic */}
        <section className="mb-16">
          <div className="bg-white rounded-xl border-2 border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Cost Comparison
            </h2>
            {page.costComparisonLogic.intro && (
              <p className="text-slate-600 mb-6">{page.costComparisonLogic.intro}</p>
            )}
            <div className="grid sm:grid-cols-2 gap-6">
              {page.costComparisonLogic.points.map((point) => (
                <div key={point.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{point.title}</h4>
                    <p className="text-sm text-slate-600">{point.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            {page.costComparisonLogic.footnote && (
              <p className="text-sm text-slate-500 italic border-t border-slate-100 pt-4 mt-6">
                {page.costComparisonLogic.footnote}
              </p>
            )}
          </div>
        </section>

        {/* Risks & Considerations */}
        <section className="mb-16">
          <div className="bg-red-50 rounded-xl border-2 border-red-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Risks & Considerations
            </h2>
            <ul className="space-y-3">
              {page.risks.map((risk) => (
                <li key={risk} className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  {risk}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        {page.faq.length > 0 && <FAQBlock faq={page.faq} />}

        {/* Methodology */}
        <section className="mt-16">
          <div className="bg-slate-100 rounded-xl border border-slate-200 p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Methodology & Disclosure</h3>
                <ul className="space-y-1">
                  {page.methodology.map((point) => (
                    <li key={point} className="text-sm text-slate-700">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-8 mb-12">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Next Steps</h3>
            <ul className="space-y-2">
              {page.nextSteps.map((step) => (
                <li key={step} className="flex items-center gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <DisclosureFooter />

        <p className="mt-6 text-xs text-slate-500 text-center">
          Last updated: {page.lastUpdated}
        </p>
      </div>
    </div>
  );
}