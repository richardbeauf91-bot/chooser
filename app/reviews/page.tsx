import type { Metadata } from "next";
import { brokers } from "@/lib/data/brokers";
import { buildMetadata } from "@/lib/seo/metadata";
import { Broker } from "@/lib/types/broker";

export const metadata: Metadata = buildMetadata({
  title: "Broker Reviews - In-Depth Analysis & Ratings",
  description: "Independent broker reviews based on real accounts opened and tested under UK retail conditions. FCA regulation verified directly, not just accepted.",
  canonicalPath: "/reviews"
});

const GROUPS: { label: string; description: string; slugs: string[] }[] = [
  {
    label: "CFD & Forex Brokers",
    description: "Active trading — leveraged products, tight spreads, platform-first",
    slugs: ["capital-com", "pepperstone", "cmc-markets", "plus500", "xtb", "avatrade", "fp-markets", "oanda", "tickmill"],
  },
  {
    label: "Multi-Asset & Investing",
    description: "Broader product range — shares, ISA, SIPP alongside derivatives",
    slugs: ["ig", "interactive-brokers", "trading-212", "saxo-bank", "etoro"],
  },
  {
    label: "Crypto Exchanges",
    description: "Spot crypto, staking, and earn products for UK clients",
    slugs: ["coinbase", "kraken", "crypto-com"],
  },
];

function Badge({ label, colour }: { label: string; colour: "green" | "blue" | "slate" }) {
  const styles = {
    green: "bg-green-50 text-green-800 border-green-200",
    blue: "bg-blue-50 text-blue-800 border-blue-200",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${styles[colour]}`}>
      {label}
    </span>
  );
}

function BrokerRow({ broker }: { broker: Broker }) {
  return (
    <a
      href={`/reviews/${broker.slug}`}
      className="group bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 p-5 transition-all duration-200 hover:shadow-md flex items-start gap-5"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {broker.name}
          </h2>
          {broker.fscs && <Badge label="FSCS protected" colour="green" />}
          {broker.spreadBetting && <Badge label="Spread betting" colour="blue" />}
          {broker.trading24h && <Badge label="24/7 trading" colour="slate" />}
          {broker.support24h && <Badge label="24/7 support" colour="slate" />}
        </div>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">{broker.shortDescription}</p>
        <div className="flex flex-wrap gap-1.5">
          {broker.bestForTags.slice(0, 3).map(tag => (
            <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}

export default function ReviewsHubPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Broker Reviews</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Every broker reviewed here has been tested with a real account opened under standard UK retail conditions.
            FCA registration is verified directly against the register — not just the badge on the homepage.
            FSCS status, spread betting availability, and 24/7 trading access are flagged clearly for each broker.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {GROUPS.map(group => {
          const groupBrokers = group.slugs
            .map(slug => brokers.find(b => b.slug === slug))
            .filter((b): b is Broker => !!b);

          return (
            <section key={group.label}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">{group.label}</h2>
                <p className="text-slate-600 mt-1">{group.description}</p>
              </div>
              <div className="space-y-3">
                {groupBrokers.map(broker => (
                  <BrokerRow key={broker.slug} broker={broker} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="bg-white border-t mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Not sure which to read first?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Answer a few questions and get a shortlist of brokers matched to your needs.
            </p>
            <a href="/chooser" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              Find my broker
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
