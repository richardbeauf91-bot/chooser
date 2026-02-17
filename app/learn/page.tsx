import type { Metadata } from "next";
import { guides } from "@/lib/data/guides";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Trading Guides & Tutorials - Learn About Brokers",
  description:
    "Educational guides to help you understand trading brokers, platforms, regulations, and how to choose the right broker for your needs.",
  canonicalPath: "/learn",
});

/** Group guides by category for display */
const CATEGORIES = [
  {
    label: "Decision Guides",
    colour: "blue",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    description: "Choose the right broker based on your needs",
    slugs: [
      "how-to-choose-a-forex-broker",
      "how-to-choose-a-cfd-broker",
      "how-to-choose-a-stock-broker-uk",
      "how-to-choose-a-crypto-broker",
      "how-to-choose-a-broker-in-the-uk",
      "how-to-choose-a-low-cost-broker",
      "how-to-compare-trading-fees-properly",
      "how-to-evaluate-broker-regulation",
      "how-to-choose-between-spread-only-and-commission-accounts",
      "how-to-compare-brokers-side-by-side",
    ],
  },
  {
    label: "Risk & Structure",
    colour: "green",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
    description: "Understand regulation, pricing and execution",
    slugs: [
      "how-broker-regulation-works-fca-vs-offshore",
      "how-margin-and-leverage-really-work",
      "how-broker-pricing-models-differ",
      "how-order-execution-works",
      "how-to-check-if-a-broker-is-safe",
    ],
  },
  {
    label: "Strategy & Broker Fit",
    colour: "purple",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
    description: "Match your trading style to broker features",
    slugs: [
      "how-to-choose-a-broker-for-scalping",
      "how-to-choose-a-broker-for-day-trading",
      "how-to-choose-a-broker-for-swing-trading",
      "how-to-choose-a-broker-for-mt5",
      "how-to-trade-commodities-and-choose-the-right-broker",
    ],
  },
] as const;

const colourMap: Record<string, { bg: string; ring: string; iconBg: string; iconText: string }> = {
  blue: {
    bg: "bg-blue-50",
    ring: "border-blue-200",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
  },
  green: {
    bg: "bg-green-50",
    ring: "border-green-200",
    iconBg: "bg-green-100",
    iconText: "text-green-600",
  },
  purple: {
    bg: "bg-purple-50",
    ring: "border-purple-200",
    iconBg: "bg-purple-100",
    iconText: "text-purple-600",
  },
};

export default function LearnHubPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-sm font-medium mb-6">
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
              {guides.length} Educational Guides
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Trading Guides & Tutorials
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Learn everything you need to know about trading brokers,
              platforms, regulations, and how to make informed decisions when
              choosing a broker.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CATEGORIES.map((cat) => {
            const c = colourMap[cat.colour];
            return (
              <div
                key={cat.label}
                className="bg-white rounded-xl border-2 border-slate-200 p-6"
              >
                <div
                  className={`w-12 h-12 rounded-full ${c.iconBg} flex items-center justify-center mb-4`}
                >
                  <svg
                    className={`w-6 h-6 ${c.iconText}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {cat.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {cat.label}
                </h3>
                <p className="text-sm text-slate-600">{cat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Guides grouped by category */}
        {CATEGORIES.map((cat) => {
          const catGuides = cat.slugs
            .map((s) => guides.find((g) => g.slug === s))
            .filter(Boolean);

          const c = colourMap[cat.colour];

          return (
            <section key={cat.label} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-8 h-8 rounded-full ${c.iconBg} flex items-center justify-center`}
                >
                  <svg
                    className={`w-4 h-4 ${c.iconText}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {cat.icon}
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {cat.label}
                </h2>
              </div>

              <div className="space-y-4">
                {catGuides.map((guide, index) => {
                  if (!guide) return null;
                  return (
                    <a
                      key={guide.slug}
                      href={`/learn/${guide.slug}`}
                      className="group block bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 p-6 transition-all duration-200 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                            {guide.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                            {guide.directAnswer}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
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
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Broker?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Use our broker chooser tool to get personalised recommendations
              based on your needs and preferences.
            </p>
            <a
              href="/chooser"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-slate-900 hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Broker Chooser
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
    </div>
  );
}