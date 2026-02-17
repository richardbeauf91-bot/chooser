import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { guides } from "@/lib/data/guides";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/article";
import { buildFaqSchema } from "@/lib/seo/faq";

import FAQBlock from "@/components/FAQBlock";
import DisclosureFooter from "@/components/DisclosureFooter";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 604800;

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};

  return buildMetadata({
    title: guide.title,
    description: guide.directAnswer.slice(0, 160),
    canonicalPath: `/learn/${guide.slug}`,
  });
}

/** Ordered content sections with their headings */
const SECTIONS = [
  { key: "directAnswer", heading: "Quick Answer" },
  { key: "coreProblem", heading: "The Core Problem" },
  { key: "howBrokersDiffer", heading: "How Brokers Differ" },
  { key: "feesAndCosts", heading: "Fees & Cost Structures" },
  { key: "regulationAndSafety", heading: "Regulation & Safety" },
  { key: "platformsAndExecution", heading: "Platforms & Execution" },
  { key: "riskConsiderations", heading: "Risk Considerations" },
  { key: "whoShouldAvoid", heading: "Who Should Avoid This" },
  { key: "decisionFramework", heading: "Decision Framework" },
  { key: "nextStep", heading: "Next Step" },
] as const;

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleSchema({
              title: guide.title,
              description: guide.directAnswer.slice(0, 160),
              url: `https://example.com/learn/${guide.slug}`,
              dateModified: guide.lastUpdated,
            })
          ),
        }}
      />
      {guide.faq && guide.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFaqSchema(guide.faq)),
          }}
        />
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6">
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Educational Guide
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{guide.title}</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            {guide.intent}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Table of Contents */}
        <nav className="bg-white rounded-xl border-2 border-slate-200 p-6 mb-12">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {SECTIONS.map((section) => (
              <li key={section.key}>
                <a
                  href={`#${section.key}`}
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  {section.heading}
                </a>
              </li>
            ))}
            {guide.faq && guide.faq.length > 0 && (
              <li>
                <a
                  href="#faq"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Frequently Asked Questions
                </a>
              </li>
            )}
          </ul>
        </nav>

        {/* Content Sections */}
        <div className="space-y-12">
          {SECTIONS.map((section) => {
            const content = guide[section.key as keyof typeof guide] as string;
            if (!content) return null;

            return (
              <section
                key={section.key}
                id={section.key}
                className="scroll-mt-8"
              >
                <div className="bg-white rounded-xl border-2 border-slate-200 p-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    {section.heading}
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {content}
                    </p>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* FAQ Section */}
        {guide.faq && guide.faq.length > 0 && (
          <div id="faq">
            <FAQBlock faq={guide.faq} />
          </div>
        )}

        {/* Related Guides */}
        <section className="mt-16">
          <div className="bg-blue-50 rounded-xl border-2 border-blue-200 p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">
              Continue Learning
            </h3>
            <p className="text-blue-800 mb-4">
              Explore more guides to deepen your understanding of brokers and
              trading platforms.
            </p>
            <a
              href="/learn"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Guides
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </section>

        <DisclosureFooter />

        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <p>Last updated: {guide.lastUpdated}</p>
          <a href="/learn" className="hover:text-slate-700">
            ← Back to Guides
          </a>
        </div>
      </article>
    </div>
  );
}