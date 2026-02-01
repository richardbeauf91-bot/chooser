"use client";

import { useState } from "react";
import { brokers } from "@/lib/data/brokers";
import { scoreBroker, ChooserInput } from "@/lib/chooser/scoring";
import BrokerCard from "@/components/BrokerCard";

export default function ChooserClient() {
  const [input, setInput] = useState<ChooserInput>({
    country: "UK",
    instrument: "forex",
    experience: "beginner",
    priority: "low-fees"
  });

  const scored = brokers
    .filter(b => b.availabilityCountries.includes(input.country))
    .map(broker => ({
      broker,
      score: scoreBroker(broker, input)
    }))
    .sort((a, b) => b.score - a.score);

  const top = scored.slice(0, 3);
  const alternatives = scored.slice(3, 6);

  return (
    <>
      {/* Inputs */}
      <div className="grid gap-4 md:grid-cols-4 mb-12">
        <select
          value={input.country}
          onChange={e => setInput({ ...input, country: e.target.value })}
          className="border rounded px-3 py-2"
        >
          <option value="UK">UK</option>
          <option value="EU">EU</option>
        </select>

        <select
          value={input.instrument}
          onChange={e =>
            setInput({ ...input, instrument: e.target.value })
          }
          className="border rounded px-3 py-2"
        >
          <option value="forex">Forex</option>
          <option value="commodities">Commodities</option>
          <option value="indices">Indices</option>
          <option value="stocks">Stocks</option>
          <option value="crypto">Crypto</option>
        </select>

        <select
          value={input.experience}
          onChange={e =>
            setInput({
              ...input,
              experience: e.target.value as any
            })
          }
          className="border rounded px-3 py-2"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <select
          value={input.priority}
          onChange={e =>
            setInput({
              ...input,
              priority: e.target.value as any
            })
          }
          className="border rounded px-3 py-2"
        >
          <option value="low-fees">Low fees</option>
          <option value="simplicity">Simplicity</option>
          <option value="advanced-tools">Advanced tools</option>
          <option value="regulation">Regulation</option>
        </select>
      </div>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Top matches
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {top.map(({ broker }) => (
            <BrokerCard
              key={broker.slug}
              broker={broker}
              reason={`Matched based on your selected country, market, experience level, and priority.`}
            />
          ))}
        </div>
      </section>

      {alternatives.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-4">
            Good alternatives
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {alternatives.map(({ broker }) => (
              <BrokerCard key={broker.slug} broker={broker} />
            ))}
          </div>
        </section>
      )}

      {/* Trust explanation */}
      <section className="text-sm text-slate-600 max-w-3xl">
        <h3 className="font-semibold mb-2">
          How we matched these brokers
        </h3>
        <p>
          Results are generated using a rules-based scoring system that
          considers availability, supported markets, experience level, and
          stated priorities. This tool does not provide personalised financial
          advice.
        </p>
      </section>
    </>
  );
}
