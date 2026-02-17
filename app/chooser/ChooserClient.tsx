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
      <div className="bg-white rounded-xl border-2 border-slate-200 p-6 mb-12 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Tell us about your trading needs
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Your Country
            </label>
            <select
              value={input.country}
              onChange={e => setInput({ ...input, country: e.target.value })}
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              <option value="UK">United Kingdom</option>
              <option value="EU">European Union</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              What to Trade
            </label>
            <select
              value={input.instrument}
              onChange={e =>
                setInput({ ...input, instrument: e.target.value })
              }
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              <option value="forex">Forex</option>
              <option value="commodities">Commodities</option>
              <option value="indices">Indices</option>
              <option value="stocks">Stocks</option>
              <option value="crypto">Crypto</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Experience Level
            </label>
            <select
              value={input.experience}
              onChange={e =>
                setInput({
                  ...input,
                  experience: e.target.value as any
                })
              }
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Priority
            </label>
            <select
              value={input.priority}
              onChange={e =>
                setInput({
                  ...input,
                  priority: e.target.value as any
                })
              }
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              <option value="low-fees">Low Fees</option>
              <option value="simplicity">Simplicity</option>
              <option value="advanced-tools">Advanced Tools</option>
              <option value="regulation">Regulation</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Your Top Matches
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {top.map(({ broker }, index) => (
            <div key={broker.slug} className="relative">
              {index === 0 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg">
                    🏆 Best Match
                  </span>
                </div>
              )}
              <BrokerCard
                broker={broker}
                reason={`Perfect match for ${input.experience} traders in ${input.country} prioritizing ${input.priority.replace('-', ' ')}.`}
              />
            </div>
          ))}
        </div>
      </section>

      {alternatives.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            Good Alternatives
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {alternatives.map(({ broker }) => (
              <BrokerCard key={broker.slug} broker={broker} />
            ))}
          </div>
        </section>
      )}

      {/* Trust explanation */}
      <section className="bg-slate-50 rounded-xl border border-slate-200 p-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">
              How We Matched These Brokers
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Results are generated using a rules-based scoring system that considers broker availability in your country, 
              supported markets, suitability for your experience level, and alignment with your stated priorities. 
              This tool does not provide personalized financial advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}