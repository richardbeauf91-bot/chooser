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
  params: Promise<{ slug: string }>;
};

export const revalidate = 604800; // weekly

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = comparePages.find(
    (p) => `${p.aSlug}-vs-${p.bSlug}` === slug
  );
  if (!page) return {};

  return buildMetadata({
    title: page.title,
    description: page.summary,
    canonicalPath: `/compare/${slug}`,
  });
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const page = comparePages.find(
    (p) => `${p.aSlug}-vs-${p.bSlug}` === slug
  );
  if (!page) notFound();

  const brokerA = brokers.find((b) => b.slug === page.aSlug);
  const brokerB = brokers.find((b) => b.slug === page.bSlug);
  if (!brokerA || !brokerB) notFound();

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Compare", url: "/compare" },
    { name: page.title, url: `/compare/${slug}` },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
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
              title: page.title,
              description: page.summary,
              url: `https://example.com/compare/${slug}`,
              dateModified: page.lastUpdated,
            })
          ),
        }}
      />

      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs
            items={breadcrumbItems.map((b) => ({ name: b.name, href: b.url }))}
          />

          <div className="mt-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-sm font-medium text-slate-700 mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Head-to-Head Comparison
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              {page.title}
            </h1>

            <p className="text-xl text-slate-700 max-w-3xl leading-relaxed mb-6">
              {page.summary}
            </p>

            {/* Verdict Box */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-blue-900 mb-2">
                    Our Verdict
                  </h2>
                  <p className="text-blue-800 leading-relaxed">
                    {page.verdict}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Verdict — Choose A / Choose B */}
        {(page.chooseAIf.length > 0 || page.chooseBIf.length > 0) && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Quick Verdict
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {page.chooseAIf.length > 0 && (
                <div className="bg-white rounded-xl border-2 border-green-200 p-6">
                  <h3 className="text-lg font-bold text-green-900 mb-3">
                    Choose {brokerA.name} if&hellip;
                  </h3>
                  <ul className="space-y-2">
                    {page.chooseAIf.map((reason) => (
                      <li key={reason} className="flex items-start gap-2 text-sm">
                        <svg
                          className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-slate-700">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {page.chooseBIf.length > 0 && (
                <div className="bg-white rounded-xl border-2 border-blue-200 p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
                    Choose {brokerB.name} if&hellip;
                  </h3>
                  <ul className="space-y-2">
                    {page.chooseBIf.map((reason) => (
                      <li key={reason} className="flex items-start gap-2 text-sm">
                        <svg
                          className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-slate-700">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Quick Compare Cards — At a Glance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">At a Glance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Broker A Card */}
            <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {brokerA.name}
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-600">Min. Deposit</span>
                  <span className="font-semibold text-slate-900">
                    {brokerA.minDeposit}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Fee Model</span>
                  <span className="font-semibold text-slate-900">
                    {brokerA.feeModel.split(" ")[0]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Platforms</span>
                  <span className="font-semibold text-slate-900">
                    {brokerA.platforms.length}
                  </span>
                </div>
              </div>
              <CTAButton
                href={brokerA.affiliate.affiliateUrl}
                text={brokerA.affiliate.primaryCtaText}
              />
            </div>

            {/* Broker B Card */}
            <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {brokerB.name}
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-600">Min. Deposit</span>
                  <span className="font-semibold text-slate-900">
                    {brokerB.minDeposit}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Fee Model</span>
                  <span className="font-semibold text-slate-900">
                    {brokerB.feeModel.split(" ")[0]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Platforms</span>
                  <span className="font-semibold text-slate-900">
                    {brokerB.platforms.length}
                  </span>
                </div>
              </div>
              <CTAButton
                href={brokerB.affiliate.affiliateUrl}
                text={brokerB.affiliate.primaryCtaText}
              />
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Detailed Comparison
          </h2>
          <BrokerTable
            brokers={[brokerA, brokerB]}
            fields={[
              { key: "feeModel", label: "Fees" },
              { key: "platforms", label: "Platforms" },
              { key: "instruments", label: "Markets" },
              { key: "regulators", label: "Regulation" },
              { key: "minDeposit", label: "Minimum Deposit" },
            ]}
          />
        </section>

        {/* Content Sections from comparison data */}
        {page.sections.length > 0 && (
          <div className="space-y-12 mb-16">
            {page.sections.map((section, idx) => (
              <section key={idx} className="bg-white rounded-xl border-2 border-slate-200 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {section.title}
                </h2>

                {/* Shared points */}
                {section.sharedPoints && section.sharedPoints.length > 0 && (
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {section.sharedPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm">
                          <svg
                            className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-slate-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Broker-specific points */}
                {(section.brokerAPoints || section.brokerBPoints) && (
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {section.brokerAPoints && section.brokerAPoints.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                          {brokerA.name}
                        </h3>
                        <ul className="space-y-2">
                          {section.brokerAPoints.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-1.5" />
                              <span className="text-slate-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {section.brokerBPoints && section.brokerBPoints.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                          {brokerB.name}
                        </h3>
                        <ul className="space-y-2">
                          {section.brokerBPoints.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                              <span className="text-slate-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Section verdict */}
                {section.verdict && (
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="text-sm font-medium text-slate-800">
                      <span className="font-bold">Verdict:</span>{" "}
                      {section.verdict}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>
        )}

        {/* Suitability Table */}
        {page.suitability.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Trading Style Suitability
            </h2>
            <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                      Trader Type
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                      Better Choice
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {page.suitability.map((row, idx) => (
                    <tr
                      key={row.traderType}
                      className={
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }
                    >
                      <td className="px-6 py-3 text-sm text-slate-700">
                        {row.traderType}
                      </td>
                      <td className="px-6 py-3 text-sm font-semibold text-slate-900">
                        {row.betterChoice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Pros & Cons Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Strengths & Weaknesses
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Broker A */}
            <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {brokerA.name}
              </h3>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-green-900 mb-3">
                  Strengths
                </h4>
                <ul className="space-y-2">
                  {brokerA.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-green-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-red-900 mb-3">
                  Weaknesses
                </h4>
                <ul className="space-y-2">
                  {brokerA.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-red-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Broker B */}
            <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {brokerB.name}
              </h3>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-green-900 mb-3">
                  Strengths
                </h4>
                <ul className="space-y-2">
                  {brokerB.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-green-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-red-900 mb-3">
                  Weaknesses
                </h4>
                <ul className="space-y-2">
                  {brokerB.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-red-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {page.faqs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white rounded-xl border-2 border-slate-200 p-6"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTAs */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Choose?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Visit either broker to open an account and start trading.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={brokerA.affiliate.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-slate-900 hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Visit {brokerA.name}
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href={brokerB.affiliate.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-slate-900 hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Visit {brokerB.name}
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Methodology */}
        {page.methodology && (
          <section className="mb-8">
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Methodology & Disclosure
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {page.methodology}
              </p>
            </div>
          </section>
        )}

        <DisclosureFooter />

        <p className="mt-6 text-xs text-slate-500 text-center">
          Last updated: {page.lastUpdated}
        </p>
      </div>
    </div>
  );
}