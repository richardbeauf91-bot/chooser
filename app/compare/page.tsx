import type { Metadata } from "next";
import { comparePages } from "@/lib/data/compare";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Broker Comparisons - Side-by-Side Analysis",
  description: "Side-by-side broker comparisons to help you choose the right trading platform. Compare fees, features, platforms, and regulations.",
  canonicalPath: "/compare"
});

export default function CompareHubPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {comparePages.length} Detailed Comparisons
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Broker Comparisons
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              In-depth, side-by-side broker comparisons. Compare fees, platforms, regulations, 
              and features to make the right choice for your trading needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Comparisons */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-white font-bold">
              ★
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Popular Comparisons
            </h2>
          </div>

          <div className="grid gap-6">
            {comparePages.slice(0, 3).map((page, index) => (
              <a
                key={`${page.aSlug}-vs-${page.bSlug}`}
                href={`/compare/${page.aSlug}-vs-${page.bSlug}`}
                className="group bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 text-white hover:shadow-xl transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-3">
                      #{index + 1} Most Compared
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform">
                      {page.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {page.summary}
                    </p>
                  </div>
                  <svg 
                    className="w-8 h-8 flex-shrink-0 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* All Comparisons */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            All Comparisons
          </h2>
          <div className="grid gap-4">
            {comparePages.slice(3).map(page => (
              <a
                key={`${page.aSlug}-vs-${page.bSlug}`}
                href={`/compare/${page.aSlug}-vs-${page.bSlug}`}
                className="group bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 p-6 transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {page.title}
                    </h3>
                    <p className="text-slate-600">
                      {page.summary}
                    </p>
                  </div>
                  <svg 
                    className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-slate-100 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Need Help Deciding?
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Answer a few questions to get personalized broker recommendations based on your trading style and preferences.
            </p>
            <a
              href="/chooser"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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