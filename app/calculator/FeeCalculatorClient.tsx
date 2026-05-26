"use client";

import { useState, useMemo } from "react";
import { brokerFees, INSTRUMENTS, type Instrument } from "@/lib/data/calculator";

const TRADE_SIZES = [1000, 5000, 10000, 25000, 50000];

function formatGBP(n: number) {
  return n < 0.01 ? "<£0.01" : `£${n.toFixed(2)}`;
}

export default function FeeCalculatorClient() {
  const [instrument, setInstrument] = useState<Instrument>("eurusd");
  const [tradeSize, setTradeSize] = useState(10000);
  const [customSize, setCustomSize] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const [nights, setNights] = useState(0);
  const [tradesPerMonth, setTradesPerMonth] = useState(10);

  const notional = useCustom
    ? Math.max(0, Number(customSize.replace(/[^0-9.]/g, "")) || 0)
    : tradeSize;

  const results = useMemo(() => {
    return brokerFees
      .map((b) => {
        const spreadCost = (notional / 10000) * b.spread[instrument];
        const overnightCost =
          nights > 0
            ? (notional * (b.overnightRate / 100) * nights) / 365
            : 0;
        const totalPerTrade = spreadCost + overnightCost;
        const monthlyTotal = spreadCost * tradesPerMonth + overnightCost;
        return { ...b, spreadCost, overnightCost, totalPerTrade, monthlyTotal };
      })
      .sort((a, b) => a.totalPerTrade - b.totalPerTrade);
  }, [instrument, notional, nights, tradesPerMonth]);

  const cheapest = results[0]?.totalPerTrade ?? 0;

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-slate-900 mb-6">Configure your trade</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Instrument */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Instrument
            </label>
            <div className="grid grid-cols-1 gap-2">
              {(Object.keys(INSTRUMENTS) as Instrument[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setInstrument(key)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg border-2 text-sm font-medium transition-colors ${
                    instrument === key
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <span>{INSTRUMENTS[key].label}</span>
                  <span className="text-xs font-normal text-slate-400">
                    {INSTRUMENTS[key].description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Trade Size */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Trade size (notional)
              </label>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {TRADE_SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setTradeSize(s); setUseCustom(false); }}
                    className={`py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
                      !useCustom && tradeSize === s
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    £{s >= 1000 ? `${s / 1000}k` : s}
                  </button>
                ))}
                <button
                  onClick={() => setUseCustom(true)}
                  className={`py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
                    useCustom
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  Custom
                </button>
              </div>
              {useCustom && (
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">£</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 15000"
                    value={customSize}
                    onChange={(e) => setCustomSize(e.target.value)}
                    className="w-full pl-7 pr-4 py-2.5 border-2 border-blue-500 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              )}
            </div>

            {/* Overnight */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Nights held overnight
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={0}
                  max={30}
                  value={nights}
                  onChange={(e) => setNights(Number(e.target.value))}
                  className="flex-1 accent-blue-600"
                />
                <span className="w-16 text-center text-sm font-semibold text-slate-900 bg-slate-100 rounded-lg py-1">
                  {nights === 0 ? "None" : `${nights}n`}
                </span>
              </div>
              {nights > 0 && (
                <p className="mt-1 text-xs text-slate-500">
                  Overnight financing applies at each broker&apos;s typical annual rate
                </p>
              )}
            </div>

            {/* Trades per month */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Trades per month
              </label>
              <div className="flex gap-2 flex-wrap">
                {[1, 5, 10, 20, 50].map((n) => (
                  <button
                    key={n}
                    onClick={() => setTradesPerMonth(n)}
                    className={`px-3 py-1.5 rounded-lg border-2 text-sm font-medium transition-colors ${
                      tradesPerMonth === n
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {notional > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">
              Cost comparison — {INSTRUMENTS[instrument].label}
            </h2>
            <span className="text-sm text-slate-500">
              £{notional.toLocaleString()} trade · {nights === 0 ? "intraday" : `${nights} night${nights > 1 ? "s" : ""}`}
            </span>
          </div>

          <div className="space-y-3">
            {results.map((r, i) => {
              const barWidth = cheapest > 0
                ? Math.max(8, Math.round((r.totalPerTrade / results[results.length - 1].totalPerTrade) * 100))
                : 8;
              const isCheapest = i === 0;

              return (
                <div
                  key={r.slug}
                  className={`bg-white rounded-xl border-2 p-4 sm:p-5 transition-colors ${
                    isCheapest ? "border-green-400" : "border-slate-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      {isCheapest && (
                        <span className="flex-shrink-0 text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                          Cheapest
                        </span>
                      )}
                      <a
                        href={`/brokers/${r.slug}`}
                        className="font-semibold text-slate-900 hover:text-blue-600 truncate"
                      >
                        {r.name}
                      </a>
                      <span className="flex-shrink-0 text-xs text-slate-400">{r.feeModel}</span>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <div className="text-lg font-bold text-slate-900">
                        {formatGBP(r.totalPerTrade)}
                        <span className="text-sm font-normal text-slate-500"> /trade</span>
                      </div>
                      <div className="text-xs text-slate-500">
                        {formatGBP(r.monthlyTotal)}/month ({tradesPerMonth} trades)
                      </div>
                    </div>
                  </div>

                  {/* Cost bar */}
                  <div className="h-2 bg-slate-100 rounded-full mb-3">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isCheapest ? "bg-green-400" : "bg-blue-300"
                      }`}
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>

                  {/* Breakdown */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                    <span>Spread: {formatGBP(r.spreadCost)}</span>
                    {r.overnightCost > 0 && (
                      <span>Overnight ({nights}n @ {r.overnightRate}% p.a.): {formatGBP(r.overnightCost)}</span>
                    )}
                    {r.commissionNote && (
                      <span className="text-amber-600">ℹ️ {r.commissionNote}</span>
                    )}
                    {i > 0 && (
                      <span className="text-slate-400">
                        +{formatGBP(r.totalPerTrade - cheapest)} vs cheapest
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 leading-relaxed">
            <strong>Indicative costs only.</strong> Spread and financing figures are representative
            typical values based on standard accounts under normal market conditions. Actual costs
            vary by time of day, volatility, account type, and instrument. Overnight financing rates
            change with central bank rates. Always check current rates on the broker&apos;s own site
            before trading. This is not financial advice.
          </div>
        </div>
      )}
    </div>
  );
}
