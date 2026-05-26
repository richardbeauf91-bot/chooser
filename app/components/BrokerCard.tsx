import Link from "next/link";
import CTAButton from "./CTAButton";
import { Broker } from "@/lib/types/broker";

type Props = {
  broker: Broker;
  reason?: string;
};

export default function BrokerCard({ broker, reason }: Props) {
  return (
    <div className="group relative bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-200 flex flex-col h-full">
      {/* Top badge if it's highly ranked */}
      {broker.rank && broker.rank <= 3 && (
        <div className="absolute -top-3 left-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md">
            #{broker.rank} Top Rated
          </span>
        </div>
      )}

      <div className="flex-1">
        {/* Broker Name & Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            <Link href={`/brokers/${broker.slug}`} className="hover:underline">
              {broker.name}
            </Link>
          </h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            {broker.shortDescription}
          </p>
        </div>

        {/* Why We Picked It */}
        {reason && (
          <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-blue-900">Why we picked it:</span>{" "}
              {reason}
            </p>
          </div>
        )}

        {/* Key Features/Tags */}
        {broker.bestForTags && broker.bestForTags.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {broker.bestForTags.slice(0, 4).map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats (if available) */}
        {(broker.minDeposit || broker.regulation) && (
          <div className="mb-4 pt-4 border-t border-slate-200">
            <dl className="grid grid-cols-2 gap-4 text-sm">
              {broker.minDeposit && (
                <div>
                  <dt className="text-slate-500 text-xs font-medium uppercase tracking-wider">Min. Deposit</dt>
                  <dd className="mt-1 text-slate-900 font-semibold">{broker.minDeposit}</dd>
                </div>
              )}
              {broker.regulation && (
                <div>
                  <dt className="text-slate-500 text-xs font-medium uppercase tracking-wider">Regulated By</dt>
                  <dd className="mt-1 text-slate-900 font-semibold">{broker.regulation}</dd>
                </div>
              )}
            </dl>
          </div>
        )}

        {/* Key indicators */}
        {(broker.fscs || broker.spreadBetting || broker.trading24h || broker.support24h) && (
          <div className="mb-6 flex flex-wrap gap-1.5">
            {broker.fscs && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-800 border border-green-200">
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                FSCS protected
              </span>
            )}
            {broker.spreadBetting && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-800 border border-blue-200">
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Spread betting
              </span>
            )}
            {broker.trading24h && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24/7 trading
              </span>
            )}
            {broker.support24h && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                24/7 support
              </span>
            )}
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className="mt-auto">
        <CTAButton
          href={broker.affiliate?.affiliateUrl || `/${broker.slug}`}
          text={broker.affiliate?.primaryCtaText || "Visit Broker"}
        />
        
        {/* Affiliate Disclosure */}
        <p className="mt-3 text-xs text-slate-500 text-center">
          Affiliate link ·{" "}
          <a href="/disclosure" className="underline hover:text-slate-700">
            Disclosure
          </a>
        </p>
      </div>
    </div>
  );
}