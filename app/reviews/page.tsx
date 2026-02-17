import type { Metadata } from "next";
import { brokers } from "@/lib/data/brokers";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Broker Reviews - In-Depth Analysis & Ratings",
  description: "Independent, in-depth reviews of trading brokers, platforms, and fees. Read expert analysis before choosing your broker.",
  canonicalPath: "/reviews"
});

export default function ReviewsHubPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {brokers.length} Detailed Reviews
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Broker Reviews</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Independent, in-depth reviews of trading brokers based on hands-on testing,
              regulatory analysis, and extensive research.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6">
          {brokers.map((broker, index) => (
            <a
              key={broker.slug}
              href={`/reviews/${broker.slug}`}
              className="group bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 p-6 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {index < 3 && (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 text-white text-xs font-bold">
                        {index + 1}
                      </span>
                    )}
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {broker.name} Review
                    </h2>
                  </div>
                  <p className="text-slate-600 mb-4">{broker.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {broker.bestForTags.slice(0, 3).map(tag => (
                      <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <svg className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      <section className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Use our broker chooser tool to get personalized recommendations based on your needs.
            </p>
            <a href="/chooser" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Broker Chooser
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