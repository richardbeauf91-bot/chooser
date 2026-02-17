import type { Metadata } from "next";
import { bestPages } from "@/lib/data/best";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Best Trading Brokers by Category - Expert Picks 2026",
  description: "Best trading brokers by category, country, and trading style. Expert-selected brokers for beginners, day trading, forex, options, and more.",
  canonicalPath: "/best"
});

export default function BestHubPage() {
  const categories = [
    {
      title: "By Cost & Fees",
      icon: "💰",
      pages: bestPages.filter(p =>
        p.slug.includes('low-cost') ||
        p.slug.includes('low-fee')
      )
    },
    {
      title: "By Experience",
      icon: "📚",
      pages: bestPages.filter(p =>
        p.slug.includes('beginner')
      )
    },
    {
      title: "By Platform",
      icon: "⚡",
      pages: bestPages.filter(p =>
        p.slug.includes('mt5') ||
        p.slug.includes('mt4') ||
        p.slug.includes('platform')
      )
    },
    {
      title: "By Regulation & Safety",
      icon: "🛡️",
      pages: bestPages.filter(p =>
        p.slug.includes('regulated')
      )
    }
  ];

  // Any remaining pages not categorized
  const categorizedSlugs = new Set(
    categories.flatMap(cat => cat.pages.map(p => p.slug))
  );
  const otherPages = bestPages.filter(p => !categorizedSlugs.has(p.slug));

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Expert-Selected Brokers
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Best Trading Brokers 2026
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Discover the best trading brokers by category, market, experience level, and trading style.
              Expert-selected based on extensive testing and analysis.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Sections */}
        {categories.map((category) => (
          category.pages.length > 0 && (
            <section key={category.title} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">{category.icon}</div>
                <h2 className="text-3xl font-bold text-slate-900">
                  {category.title}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.pages.map(page => (
                  <a
                    key={page.slug}
                    href={`/best/${page.slug}`}
                    className="group bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 p-6 transition-all duration-200 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {page.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {page.intro}
                    </p>
                    {/* Show hero pick names as a preview */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {page.heroPicks.slice(0, 3).map((pick) => (
                        <span
                          key={pick.brokerSlug}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700"
                        >
                          {pick.brokerName}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      View Picks
                      <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )
        ))}

        {/* Other/Uncategorized */}
        {otherPages.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              More Categories
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPages.map(page => (
                <a
                  key={page.slug}
                  href={`/best/${page.slug}`}
                  className="group bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 p-6 transition-all duration-200 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {page.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                    {page.intro}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {page.heroPicks.slice(0, 3).map((pick) => (
                      <span
                        key={pick.brokerSlug}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700"
                      >
                        {pick.brokerName}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm">
                    View Picks
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* How We Choose */}
        <section className="bg-white rounded-2xl border-2 border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            How We Choose the Best Brokers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Testing</h3>
                <p className="text-sm text-slate-600">Hands-on experience with each platform</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Regulation</h3>
                <p className="text-sm text-slate-600">Only top-tier regulated brokers</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Fees</h3>
                <p className="text-sm text-slate-600">Comprehensive cost analysis</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Features</h3>
                <p className="text-sm text-slate-600">Platform tools and capabilities</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-700">
              Learn more about our evaluation process in our{" "}
              <a href="/methodology" className="text-blue-600 hover:text-blue-700 underline font-medium">
                methodology guide
              </a>.
            </p>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Find Your Perfect Broker
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Not sure which category fits you best? Use our broker chooser to get personalized recommendations.
            </p>
            <a
              href="/chooser"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-slate-900 hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Use Broker Chooser
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}