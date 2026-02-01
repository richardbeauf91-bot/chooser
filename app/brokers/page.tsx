import { Metadata } from "next";
import { brokers } from "@/lib/data/brokers";
import { buildMetadata } from "@/lib/seo/metadata";
import BrokerDirectory from "./BrokerDirectory";

export const revalidate = 3600; // 1 hour ISR

export const metadata: Metadata = buildMetadata({
  title: "Broker Directory",
  description: "Browse and compare regulated trading brokers by market, platform, and availability.",
  canonicalPath: "/brokers"
});

export default function BrokersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Broker Directory</h1>
      <p className="max-w-2xl text-slate-700 mb-8">
        Browse trading brokers and filter by availability and the markets you want to trade.
      </p>

      <BrokerDirectory brokers={brokers} />
    </div>
  );
}
