import { brokers } from "@/lib/data/brokers";
import BrokerCard from "@/components/BrokerCard";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Find Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Trading Broker
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              Compare FCA-regulated brokers, trading platforms, and fees side-by-side.
              Honest reviews and structured comparisons for UK retail traders.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/chooser"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                🎯 Use Find A Broker
              </a>
              <a
                href="/best"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                View Best Brokers →
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Independent &amp; Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>FCA-Regulated Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Pay-to-Rank</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">10</div>
              <div className="mt-1 text-sm text-slate-600">Brokers Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">5</div>
              <div className="mt-1 text-sm text-slate-600">Head-to-Head Comparisons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">FCA</div>
              <div className="mt-1 text-sm text-slate-600">Regulated Brokers Focus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="mt-1 text-sm text-slate-600">Transparent Methodology</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brokers */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Featured Brokers
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              FCA-regulated brokers reviewed for UK retail traders
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {brokers.slice(0, 3).map(broker => (
              <BrokerCard key={broker.slug} broker={broker} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/brokers"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Brokers
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Find the right broker in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Answer Questions
              </h3>
              <p className="text-slate-600">
                Tell us your experience level, preferred instruments, and what matters most — fees, regulation, or platform features.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Get Matched
              </h3>
              <p className="text-slate-600">
                Our scoring system compares your needs against broker features, pricing models, and regulatory status.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Compare &amp; Choose
              </h3>
              <p className="text-slate-600">
                Review detailed breakdowns, read structured reviews, and compare brokers head-to-head before deciding.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/chooser"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Find A Broker
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Browse by Category
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Curated broker lists based on what matters to you
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/best/best-low-cost-brokers" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Best Low-Cost
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Lowest total trading cost for UK traders
              </p>
            </a>

            <a href="/best/best-brokers-for-beginners" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Best for Beginners
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Simple platforms with clear pricing
              </p>
            </a>

            <a href="/best/best-mt5-brokers" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Best MT5 Brokers
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                MetaTrader 5 with algo and EA support
              </p>
            </a>

            <a href="/best/best-regulated-brokers" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Best Regulated
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                FCA oversight and client protections first
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="bg-white border-t py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Structured Reviews
                </h3>
                <p className="text-slate-600">
                  Every broker is assessed against the same criteria: regulation, pricing, platforms, asset coverage, and user feedback.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Regulation First
                </h3>
                <p className="text-slate-600">
                  We prioritise FCA-regulated brokers and clearly flag where UK clients are served under offshore entities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Affiliate Disclosure
                </h3>
                <p className="text-slate-600">
                  Some brokers listed pay affiliate commissions. These relationships never influence scoring, rankings, or review content.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Open Methodology
                </h3>
                <p className="text-slate-600">
                  Our evaluation criteria and scoring logic are published in full. No black boxes.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Disclaimer:</strong> This site does not provide financial advice.
              All information is for educational and comparison purposes only. CFDs and leveraged products carry a high risk of loss.
              Read our{" "}
              <a href="/methodology" className="text-blue-600 underline hover:text-blue-700">
                methodology
              </a>{" "}
              and{" "}
              <a href="/disclosure" className="text-blue-600 underline hover:text-blue-700">
                affiliate disclosure
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}