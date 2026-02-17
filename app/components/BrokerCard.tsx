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
          <div className="mb-6 pt-4 border-t border-slate-200">
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