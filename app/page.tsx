import { brokers } from "@/lib/data/brokers";
import BrokerCard from "@/components/BrokerCard";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold max-w-3xl">
            Compare Trading Brokers & Find the Right Platform
          </h1>
          <p className="mt-4 max-w-2xl text-slate-700">
            Compare regulated brokers, platforms, and fees. Use our broker
            chooser or explore detailed reviews and comparisons.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/chooser"
              className="bg-slate-900 text-white px-6 py-3 rounded"
            >
              Use Broker Chooser
            </a>
            <a
              href="/best"
              className="border px-6 py-3 rounded"
            >
              View Best Brokers
            </a>
          </div>
        </div>
      </section>

      {/* Featured brokers */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">
          Popular brokers
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {brokers.slice(0, 3).map(broker => (
            <BrokerCard key={broker.slug} broker={broker} />
          ))}
        </div>
      </section>

      {/* Trust block */}
      <section className="bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-4 py-16 text-sm text-slate-700">
          <p>
            We compare brokers using objective criteria including regulation,
            fees, platforms, and market access. This site does not provide
            financial advice.
          </p>
          <p className="mt-2">
            Learn more about how we rank brokers in our{" "}
            <a href="/methodology" className="underline">
              methodology
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
