import CTAButton from "./CTAButton";
import { Broker } from "@/lib/types/broker";

type Props = {
  broker: Broker;
  reason?: string;
};

export default function BrokerCard({ broker, reason }: Props) {
  return (
    <div className="border rounded-lg p-6 flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold">{broker.name}</h3>
        <p className="text-sm text-slate-600 mt-1">
          {broker.shortDescription}
        </p>
      </div>

      {reason && (
        <p className="text-sm bg-slate-50 border p-3 rounded">
          <strong>Why we picked it:</strong> {reason}
        </p>
      )}

      <ul className="flex flex-wrap gap-2">
        {broker.bestForTags.map(tag => (
          <li
            key={tag}
            className="text-xs bg-slate-100 px-2 py-1 rounded"
          >
            {tag}
          </li>
        ))}
      </ul>

      <CTAButton
        href={broker.affiliate.affiliateUrl}
        text={broker.affiliate.primaryCtaText}
      />

      <p className="text-xs text-slate-500">
        Affiliate link · <a href="/disclosure" className="underline">Disclosure</a>
      </p>
    </div>
  );
}
