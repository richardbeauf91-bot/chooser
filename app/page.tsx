import type { Metadata } from "next";
import { brokers } from "@/lib/data/brokers";
import BrokerCard from "@/components/BrokerCard";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/seo/organization";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Find A Broker — Compare FCA-Regulated Trading Brokers",
  description: "Compare FCA-regulated trading brokers, read expert reviews, and find the best platform for your needs. Unbiased comparisons of fees, features, and regulation for UK retail traders.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Find A Broker — Compare FCA-Regulated Trading Brokers",
    description: "Compare FCA-regulated trading brokers, read expert reviews, and find the best platform for your needs.",
    url: SITE_URL,
    type: "website",
    siteName: "Find A Broker"
  },
  twitter: {
    card: "summary_large_image",
    title: "Find A Broker — Compare FCA-Regulated Trading Brokers",
    description: "Compare FCA-regulated trading brokers, read expert reviews, and find the best platform for your needs.",
    site: "@findabrokerxyz"
  }
};

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebSiteSchema()) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Broker comparisons
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                worth trusting.
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Most comparison sites are run by affiliate teams who've never opened a trading account.
              This one is run by someone who spent years inside fintech, knows how broker rankings
              get shaped by commission rates, and got tired of watching it happen.
              Every broker here has been tested with a real account. Rankings reflect that, not CPA rates.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/chooser"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Find my broker
              </a>
              <a
                href="/brokers"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                Browse all brokers
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Real accounts tested — not spec sheets
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                FCA register checked directly
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                0 pay-to-rank placements
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">{brokers.length}</div>
              <div className="mt-1 text-sm text-slate-600">Brokers reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">0</div>
              <div className="mt-1 text-sm text-slate-600">Pay-to-rank placements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">FCA</div>
              <div className="mt-1 text-sm text-slate-600">Register verified, not just claimed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">Every</div>
              <div className="mt-1 text-sm text-slate-600">Account opened and tested firsthand</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brokers */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Top-rated brokers
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              FCA-regulated brokers reviewed and tested for UK retail traders. Ranked on what actually matters — platform, execution, costs, and regulatory structure.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {brokers.slice(0, 3).map(broker => (
              <BrokerCard key={broker.slug} broker={broker} />
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="/brokers"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              View all {brokers.length} brokers
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/reviews"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-700 font-semibold"
            >
              Read full reviews
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How we review */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              How the reviews actually work
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Not what comparison sites usually tell you about their process — what this one actually does.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Real accounts, not spec sheets
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Every broker reviewed here has been tested with a live account under standard UK retail conditions — onboarding, depositing, trading, withdrawing. If an account hasn't been opened, the broker doesn't get a review.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-green-100 mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Regulation checked directly
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We check the FCA register at fca.org.uk — not just the badge on the broker's homepage. That means verifying which entity serves UK clients, whether FSCS protection applies, and whether what the marketing says matches what the register says.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-100 mb-6">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Platform over promises
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Spreads cluster within a range. Onboarding is FCA-mandated and structurally identical. What actually differs between brokers is the platform — UI, charting quality, whether the tools you need are integrated or require three open tabs. That's what we assess.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/methodology"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Read the full methodology
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Browse by what matters to you
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Different traders need different things. Find the list that fits your situation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/best/best-low-cost-brokers" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Best low-cost brokers
              </h3>
              <p className="text-sm text-slate-600">
                Raw spread accounts, tight execution, minimum friction on costs
              </p>
            </a>

            <a href="/best/best-brokers-for-beginners" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Best for beginners
              </h3>
              <p className="text-sm text-slate-600">
                Clean platforms, clear pricing, no overwhelming complexity on day one
              </p>
            </a>

            <a href="/best/best-mt5-brokers" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Best MT5 brokers
              </h3>
              <p className="text-sm text-slate-600">
                MetaTrader 5 with EA support, algo trading, and FCA regulation
              </p>
            </a>

            <a href="/best/best-regulated-brokers" className="group p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Best regulated brokers
              </h3>
              <p className="text-sm text-slate-600">
                Direct FCA authorisation, FSCS protection, and full client fund segregation
              </p>
            </a>
          </div>

          <div className="mt-8">
            <a
              href="/best"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              See all categories
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Not sure where to start */}
      <section className="bg-white border-t py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 sm:p-14">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Not sure where to start?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Answer a few questions — what you want to trade, how much experience you have,
                whether you care more about cost or platform — and get a shortlist of brokers
                that actually fit. Takes under two minutes.
              </p>
              <a
                href="/chooser"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-slate-900 hover:bg-slate-100 transition-all duration-200 shadow-lg"
              >
                Find my broker
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Risk warning:</strong> Trading CFDs and leveraged products carries a high risk of loss and is not suitable for all investors. The information on this site is for educational and comparison purposes only and does not constitute financial advice. Read our{" "}
              <a href="/methodology" className="text-blue-600 underline hover:text-blue-700">methodology</a>{" "}
              and{" "}
              <a href="/disclosure" className="text-blue-600 underline hover:text-blue-700">affiliate disclosure</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
