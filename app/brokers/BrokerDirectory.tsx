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
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          value={country}
          onChange={e => setCountry(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="UK">UK</option>
          <option value="EU">EU</option>
        </select>

        <select
          value={instrument}
          onChange={e => setInstrument(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="all">All markets</option>
          <option value="forex">Forex</option>
          <option value="commodities">Commodities</option>
          <option value="indices">Indices</option>
          <option value="stocks">Stocks</option>
          <option value="crypto">Crypto</option>
        </select>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p>No brokers match your filters.</p>
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
