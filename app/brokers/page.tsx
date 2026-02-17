import { Metadata } from "next";
import { brokers } from "@/lib/data/brokers";
import { buildMetadata } from "@/lib/seo/metadata";
import BrokerDirectory from "./BrokerDirectory";

export const revalidate = 3600; // 1 hour ISR

export const metadata: Metadata = buildMetadata({
  title: "Broker Directory - Compare All Trading Brokers",
  description: "Browse and compare regulated trading brokers by market, platform, and availability. Find detailed reviews and comparisons.",
  canonicalPath: "/brokers"
});

export default function BrokersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Broker Directory
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              Browse and compare {brokers.length} regulated trading brokers. 
              Filter by availability, markets, and features to find the perfect platform for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BrokerDirectory brokers={brokers} />
      </div>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Broker to Choose?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Answer a few quick questions and get personalized broker recommendations 
            tailored to your trading needs.
          </p>
          <a
            href="/chooser"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Use Broker Chooser
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}