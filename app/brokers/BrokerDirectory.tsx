"use client";

import { useState } from "react";
import { Broker } from "@/lib/types/broker";
import BrokerCard from "@/components/BrokerCard";

type Props = {
  brokers: Broker[];
};

export default function BrokerDirectory({ brokers }: Props) {
  const [country, setCountry] = useState("UK");
  const [instrument, setInstrument] = useState("all");

  const filtered = brokers.filter(broker => {
    const countryMatch = broker.availabilityCountries.includes(country);
    const instrumentMatch =
      instrument === "all" || broker.instruments.includes(instrument);

    return countryMatch && instrumentMatch;
  });

  return (
    <>
      {/* Filters */}
      <div className="bg-white rounded-xl border-2 border-slate-200 p-6 mb-8 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Filter Brokers
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Country
            </label>
            <select
              value={country}
              onChange={e => setCountry(e.target.value)}
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              <option value="UK">United Kingdom</option>
              <option value="EU">European Union</option>
            </select>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              Markets
            </label>
            <select
              value={instrument}
              onChange={e => setInstrument(e.target.value)}
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              <option value="all">All Markets</option>
              <option value="forex">Forex</option>
              <option value="commodities">Commodities</option>
              <option value="indices">Indices</option>
              <option value="stocks">Stocks</option>
              <option value="crypto">Crypto</option>
            </select>
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-600">
          Showing {filtered.length} of {brokers.length} brokers
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            No brokers found
          </h3>
          <p className="text-slate-600">
            Try adjusting your filters to see more results.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(broker => (
            <BrokerCard key={broker.slug} broker={broker} />
          ))}
        </div>
      )}
    </>
  );
}