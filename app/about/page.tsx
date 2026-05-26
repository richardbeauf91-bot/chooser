import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildOrganizationSchema } from "@/lib/seo/organization";
import { brokers } from "@/lib/data/brokers";

export const metadata: Metadata = buildMetadata({
  title: "About Find A Broker — Who We Are & How We Review",
  description:
    "Find A Broker is an independent broker comparison site run by traders with finance industry backgrounds. We test accounts, verify regulation, and publish honest reviews — no pay-to-rank.",
  canonicalPath: "/about",
});

const criteria = [
  {
    icon: "🛡️",
    title: "Regulation & Safety",
    body: "We verify FCA registration directly, check whether UK clients are served under the full FCA licence or a passported/offshore entity, and confirm FSCS eligibility where applicable.",
  },
  {
    icon: "💰",
    title: "Fees & Total Cost",
    body: "We calculate the true cost of trading across spread, commission, overnight financing, currency conversion, and withdrawal fees — not just the headline spread number.",
  },
  {
    icon: "⚙️",
    title: "Platforms & Execution",
    body: "We open real accounts and test order execution, platform stability, charting tools, and mobile experience under normal and volatile market conditions.",
  },
  {
    icon: "📊",
    title: "Instruments & Markets",
    body: "We catalogue the full range of tradeable assets — forex pairs, indices, shares, commodities, ETFs, and crypto — and flag restrictions that apply to UK retail clients.",
  },
  {
    icon: "📚",
    title: "Education & Support",
    body: "We assess the quality of educational resources, onboarding clarity, and customer support responsiveness — particularly important for less experienced traders.",
  },
  {
    icon: "⚖️",
    title: "Affiliate Independence",
    body: "We earn commissions from some brokers when users sign up. We document every relationship in our disclosure and apply identical review criteria regardless of commercial arrangement.",
  },
];

const process = [
  {
    step: "01",
    title: "Open a real account",
    body: "Every broker we review has been tested with a live or demo account opened under standard UK retail conditions.",
  },
  {
    step: "02",
    title: "Verify regulation directly",
    body: "We check the FCA register, confirm the entity serving UK clients, and note any gap between the brand name and the regulated entity.",
  },
  {
    step: "03",
    title: "Calculate true costs",
    body: "We benchmark spreads, commissions, and financing costs across comparable instruments — not just the broker's own marketing figures.",
  },
  {
    step: "04",
    title: "Score against fixed criteria",
    body: "Every broker is assessed against the same criteria in the same order. Scores are not adjusted post-hoc based on affiliate status.",
  },
  {
    step: "05",
    title: "Review and update",
    body: "Broker conditions change. We revisit every review when fee structures, regulation, or platform features change materially.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6">
            About Find A Broker
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Honest broker comparisons.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              No pay-to-rank.
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            Find A Broker exists because most broker comparison sites are funded
            by the brokers they rank. We are not. Our reviews are based on
            real accounts, verified regulation data, and fixed scoring criteria
            — applied identically to every broker we cover.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900">{brokers.length}</div>
              <div className="mt-1 text-slate-600">Brokers reviewed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900">FCA</div>
              <div className="mt-1 text-slate-600">Regulated brokers only</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900">0</div>
              <div className="mt-1 text-slate-600">Pay-to-rank placements</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Who we are</h2>
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 space-y-5 text-slate-700 leading-relaxed">
          <p>
            Find A Broker is run by a revenue operations and marketing
            specialist with a fintech background. Having spent years inside
            financial services companies — understanding how brokers acquire
            customers, structure their pricing, and position their products —
            the motivation for this site was simple: use that inside knowledge
            to give retail traders the honest comparison most sites won't.
          </p>
          <p>
            Most broker comparison sites are built by SEO teams, not people who
            understand how financial products work or how brokers make money.
            That background matters: knowing how brokers structure spreads,
            what their affiliate incentive structures look like, and how
            onboarding funnels are designed makes it much easier to spot
            what is marketing and what is substance.
          </p>
          <p>
            We have opened real accounts with every broker we review and tested
            them as a UK retail client would — from onboarding through to
            execution. Our focus is the UK market and FCA regulation. We
            explicitly flag where UK clients are served under non-FCA entities,
            even when the brand is well-known.
          </p>
        </div>
      </section>

      {/* Review Criteria */}
      <section className="bg-white border-t border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What we assess
          </h2>
          <p className="text-slate-600 mb-10">
            Every broker is evaluated against six criteria, in this order,
            with identical weighting regardless of affiliate status.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {criteria.map((c) => (
              <div
                key={c.title}
                className="flex gap-4 p-6 rounded-xl border-2 border-slate-200 bg-slate-50"
              >
                <div className="text-2xl flex-shrink-0">{c.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{c.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="/methodology"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Read our full methodology
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">How we review</h2>
        <div className="space-y-6">
          {process.map((p) => (
            <div key={p.step} className="flex gap-6 bg-white rounded-xl border-2 border-slate-200 p-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-700">{p.step}</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Independence & Disclosure */}
      <section className="bg-amber-50 border-t border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-amber-900 mb-3">Affiliate disclosure</h2>
              <p className="text-amber-800 leading-relaxed">
                Some brokers on this site pay us a commission when a user signs
                up via our links. These relationships are documented in full on
                our{" "}
                <a href="/disclosure" className="underline hover:text-amber-900 font-medium">
                  affiliate disclosure page
                </a>
                . Commercial relationships do not determine rankings, review
                scores, or which brokers we cover. We apply the same criteria
                to affiliate and non-affiliate brokers identically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-100 rounded-xl p-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-800">Risk warning:</strong> Trading
            CFDs and leveraged products carries a high risk of loss and is not
            suitable for all investors. The information on this site is for
            educational and comparison purposes only and does not constitute
            financial advice. Past performance is not indicative of future
            results. Always consider your financial situation and objectives
            before trading, and seek independent financial advice if needed.
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-600 mb-4">Have a question or want to get in touch?</p>
          <a
            href="mailto:hello@findabroker.xyz"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact us
          </a>
        </div>
      </section>
    </div>
  );
}
