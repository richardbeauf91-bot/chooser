import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildFaqSchema } from "@/lib/seo/faq";
import FAQBlock from "@/components/FAQBlock";
import FeeCalculatorClient from "./FeeCalculatorClient";

export const metadata: Metadata = buildMetadata({
  title: "Broker Fee Calculator — Compare True Trading Costs (2026)",
  description:
    "Calculate and compare the true cost of trading across UK brokers. Enter your trade size, instrument, and holding period to see spread costs, overnight financing, and monthly totals side by side.",
  canonicalPath: "/calculator",
});

const faq = [
  {
    question: "What does the calculator include in the cost?",
    answer:
      "The calculator includes spread cost (the bid-ask difference paid on every trade) and overnight financing (the daily cost of holding a leveraged position past market close). It does not include inactivity fees, withdrawal fees, or currency conversion charges, which vary and are less predictable.",
  },
  {
    question: "Why are the costs shown as indicative?",
    answer:
      "Broker spreads are variable — they widen during volatile markets, low-liquidity periods, and around major news events like NFP or central bank announcements. The figures shown are representative of typical conditions on standard accounts. Your actual cost may be higher or lower.",
  },
  {
    question: "What is overnight financing?",
    answer:
      "Overnight financing (also called swap or rollover) is the cost of holding a leveraged CFD or spread bet position past the daily market close. It is calculated as a daily proportion of an annual rate, which is typically linked to central bank interest rates plus a broker margin. Holding positions for multiple nights compounds this cost significantly.",
  },
  {
    question: "Which broker is cheapest for forex trading?",
    answer:
      "For forex, Interactive Brokers and Capital.com typically have the lowest all-in costs on standard accounts. Pepperstone's Razor account can be competitive for high-volume traders due to raw spreads, but includes a per-lot commission. The cheapest option depends on your trade size, frequency, and whether you hold overnight.",
  },
  {
    question: "Does a low spread always mean a low cost?",
    answer:
      "Not always. Some brokers advertise very low or zero spreads but charge an explicit commission per lot, or earn through wider spreads at certain times of day. A complete cost comparison should include spread, commission, and overnight financing — not just the headline spread figure.",
  },
  {
    question: "Are raw or commission accounts worth it?",
    answer:
      "For active traders placing 20+ trades per month, a raw spread account with per-lot commission (like Pepperstone Razor or FP Markets Raw) can be cheaper overall. For lower-frequency traders, a standard spread-only account is usually simpler and often comparable in cost.",
  },
];

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(faq)) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Broker Fee Calculator
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            What does your trade{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              actually cost?
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            Compare the true all-in cost of trading across 10 UK brokers.
            Enter your instrument, trade size, and holding period — see spread costs,
            overnight financing, and monthly totals side by side.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FeeCalculatorClient />
      </section>

      {/* Context */}
      <section className="bg-white border-t">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            How to use these results
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-semibold text-slate-900 mb-2">Intraday traders</h3>
              <p className="text-sm text-slate-600">
                Set nights to zero and focus on spread cost per trade. With 20+ trades per month,
                even a small per-trade difference compounds significantly.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-2xl mb-3">🌙</div>
              <h3 className="font-semibold text-slate-900 mb-2">Swing traders</h3>
              <p className="text-sm text-slate-600">
                Set nights to 3–10 to see the full impact of overnight financing.
                For longer holds, financing often exceeds spread cost.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-2xl mb-3">⚖️</div>
              <h3 className="font-semibold text-slate-900 mb-2">Comparing accounts</h3>
              <p className="text-sm text-slate-600">
                Brokers with commission notes offer raw spread alternatives.
                Check the broker&apos;s own site for exact commission rates before deciding.
              </p>
            </div>
          </div>

          <FAQBlock faq={faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Not sure which broker to open?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Use our Find A Broker tool to get a personalised match based on
            your trading style, experience, and priorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/chooser"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-lg"
            >
              Use Find A Broker
            </a>
            <a
              href="/reviews"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-200"
            >
              Read broker reviews
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
