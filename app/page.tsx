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
              Compare regulated brokers, trading platforms, and fees side-by-side. 
              Get expert reviews and find the best broker for your trading needs in minutes.
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
                <span>100% Independent</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Regulated Brokers Only</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Updated Daily</span>
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
              <div className="text-3xl font-bold text-slate-900">50+</div>
              <div className="mt-1 text-sm text-slate-600">Brokers Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">1000+</div>
              <div className="mt-1 text-sm text-slate-600">Hours of Research</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">25+</div>
              <div className="mt-1 text-sm text-slate-600">Comparison Criteria</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="mt-1 text-sm text-slate-600">Transparent Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brokers */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Top Rated Brokers
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Compare the most popular and trusted trading platforms
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
              Find the perfect broker in three simple steps
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
                Tell us about your trading experience, goals, and preferences through our guided questionnaire.
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
                Our algorithm compares your needs with broker features, fees, and regulations to find the best matches.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Compare & Choose
              </h3>
              <p className="text-slate-600">
                Review detailed comparisons, read expert reviews, and make an informed decision with confidence.
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
              Find Brokers by Category
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/best/beginners" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Best for Beginners
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                User-friendly platforms with educational resources
              </p>
            </a>

            <a href="/best/day-trading" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Best for Day Trading
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Low fees and advanced charting tools
              </p>
            </a>

            <a href="/best/forex" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl mb-3">💱</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Best for Forex
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Tight spreads and currency pair selection
              </p>
            </a>

            <a href="/best/options" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Best for Options
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Advanced options tools and analytics
              </p>
            </a>

            <a href="/best/low-fees" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Lowest Fees
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Commission-free trading and low costs
              </p>
            </a>

            <a href="/best/international" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                International Trading
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Global market access and multi-currency
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
              Our Commitment to You
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
                  Objective Reviews
                </h3>
                <p className="text-slate-600">
                  We use consistent criteria across all brokers including regulation, fees, platforms, and customer service.
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
                  Regulated Only
                </h3>
                <p className="text-slate-600">
                  We only feature brokers regulated by top-tier authorities like FCA, SEC, ASIC, and CySEC.
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
                  Full Transparency
                </h3>
                <p className="text-slate-600">
                  We clearly disclose affiliate relationships and never let them influence our rankings or reviews.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Always Updated
                </h3>
                <p className="text-slate-600">
                  Our team continuously monitors broker changes to ensure you get the most current information.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Disclaimer:</strong> This site does not provide financial advice. 
              All information is for educational purposes only. Trading involves risk of loss. 
              Learn more about{" "}
              <a href="/methodology" className="text-blue-600 underline hover:text-blue-700">
                our methodology
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