"use client";

import { useState, useMemo } from "react";
import { brokers } from "@/lib/data/brokers";
import { runChooser, ChooserInput, ScoredBroker, PersonaProfile } from "@/lib/chooser/scoring";
import BrokerCard from "@/components/BrokerCard";

// ═══════════════════════════════════════════════════════
// ICONS (inline SVG to avoid dependency)
// ═══════════════════════════════════════════════════════

function IconShield() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconAlert() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.5 6A3 3 0 004.5 9v.75a3 3 0 003 3H9v.75A2.25 2.25 0 0011.25 15.75h1.5A2.25 2.25 0 0015 13.5v-.75h1.5a3 3 0 003-3V9a3 3 0 00-3-3h-9z" />
      <path d="M9.75 17.25v.75a2.25 2.25 0 002.25 2.25h0a2.25 2.25 0 002.25-2.25v-.75h-4.5z" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════
// MATCH STRENGTH BADGE
// ═══════════════════════════════════════════════════════

function MatchBadge({ strength }: { strength: "strong" | "good" | "fair" }) {
  const styles = {
    strong: "bg-emerald-100 text-emerald-800 border-emerald-200",
    good: "bg-blue-100 text-blue-800 border-blue-200",
    fair: "bg-amber-100 text-amber-800 border-amber-200",
  };
  const labels = {
    strong: "Strong Match",
    good: "Good Match",
    fair: "Fair Match",
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${styles[strength]}`}>
      {strength === "strong" && "●"}
      {strength === "good" && "◐"}
      {strength === "fair" && "○"}
      {" "}{labels[strength]}
    </span>
  );
}

// ═══════════════════════════════════════════════════════
// PERSONA CARD
// ═══════════════════════════════════════════════════════

function PersonaCard({ persona }: { persona: PersonaProfile }) {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 mb-8 text-white shadow-xl">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <IconUser />
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
            Your Trading Profile
          </p>
          <h3 className="text-xl font-bold mb-1">{persona.label}</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {persona.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// ENRICHED BROKER CARD — wraps BrokerCard with reasons
// ═══════════════════════════════════════════════════════

function EnrichedBrokerCard({
  scored,
  rank,
}: {
  scored: ScoredBroker;
  rank?: number;
}) {
  const { broker, reasons, warnings, matchStrength } = scored;

  return (
    <div className="relative group">
      {/* Rank badge */}
      {rank === 1 && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg">
            <IconTrophy /> Best Match
          </span>
        </div>
      )}
      {rank === 2 && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-700 text-white shadow-md">
            #2 Runner Up
          </span>
        </div>
      )}
      {rank === 3 && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-500 text-white shadow-md">
            #3 Strong Option
          </span>
        </div>
      )}

      <div className={`rounded-xl border-2 transition-all ${
        rank === 1
          ? "border-blue-300 shadow-lg shadow-blue-100"
          : "border-slate-200 shadow-sm hover:shadow-md"
      } bg-white overflow-hidden`}>
        {/* Broker core card */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900">{broker.name}</h3>
              <p className="text-sm text-slate-600 mt-0.5">{broker.shortDescription}</p>
            </div>
            <MatchBadge strength={matchStrength} />
          </div>

          {/* Key facts row */}
          <div className="flex flex-wrap gap-2 mb-4">
            {broker.regulators.map(r => (
              <span key={r} className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                <IconShield /> {r}
              </span>
            ))}
            <span className="inline-flex items-center px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium">
              {broker.feeModel === "spread-only" && "Spread Only"}
              {broker.feeModel === "commission+spread" && "Raw Spread + Commission"}
              {broker.feeModel === "commission-based" && "Commission Based"}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium">
              Min {broker.minDeposit}
            </span>
          </div>

          {/* Match reasons */}
          {reasons.length > 0 && (
            <div className="mb-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Why this broker</p>
              <ul className="space-y-1">
                {reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="flex-shrink-0 mt-0.5 text-emerald-600"><IconCheck /></span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Warnings */}
          {warnings.length > 0 && (
            <div className="mb-3">
              <ul className="space-y-1">
                {warnings.map((warning, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-amber-700 bg-amber-50 rounded-lg px-3 py-1.5">
                    <span className="flex-shrink-0 mt-0.5"><IconAlert /></span>
                    {warning}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Products / Platforms */}
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
            {broker.platforms.map(p => (
              <span key={p} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                {p}
              </span>
            ))}
            {broker.products.slice(0, 4).map(p => (
              <span key={p} className="px-2 py-0.5 bg-slate-50 text-slate-600 rounded text-xs">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* CTA footer */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex items-center justify-between">
          <a
            href={`/reviews/${broker.slug}`}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Read Full Review →
          </a>
          <a
            href={broker.affiliate.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all ${
              rank === 1
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            {broker.affiliate.primaryCtaText}
          </a>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// MAIN CHOOSER CLIENT
// ═══════════════════════════════════════════════════════

export default function ChooserClient() {
  const [input, setInput] = useState<ChooserInput>({
    country: "UK",
    instrument: "forex",
    experience: "beginner",
    priority: "low-fees",
  });

  const result = useMemo(() => runChooser(brokers, input), [input]);

  return (
    <>
      {/* Input Controls */}
      <div className="bg-white rounded-xl border-2 border-slate-200 p-6 mb-8 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-1">
          Tell us about your trading needs
        </h2>
        <p className="text-sm text-slate-500 mb-5">
          We&apos;ll match you with the most suitable brokers based on your answers.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Your Country
            </label>
            <select
              value={input.country}
              onChange={e => setInput({ ...input, country: e.target.value })}
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
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
              onChange={e => setInput({ ...input, instrument: e.target.value })}
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              <option value="forex">Forex</option>
              <option value="commodities">Commodities</option>
              <option value="indices">Indices</option>
              <option value="stocks">Stocks &amp; Shares</option>
              <option value="crypto">Crypto</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Experience Level
            </label>
            <select
              value={input.experience}
              onChange={e => setInput({ ...input, experience: e.target.value as ChooserInput["experience"] })}
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
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
              onChange={e => setInput({ ...input, priority: e.target.value as ChooserInput["priority"] })}
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              <option value="low-fees">Low Fees</option>
              <option value="simplicity">Simplicity</option>
              <option value="advanced-tools">Advanced Tools</option>
              <option value="regulation">Regulation &amp; Safety</option>
              <option value="social-trading">Social / Copy Trading</option>
            </select>
          </div>

          {/* Visual score indicator */}
          <div className="flex items-end">
            <div className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg px-4 py-2.5 text-center">
              <span className="text-xs font-medium opacity-80 block">Matching</span>
              <span className="text-lg font-bold">{result.topPicks.length + result.alternatives.length}</span>
              <span className="text-xs font-medium opacity-80"> brokers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Persona Profile */}
      <PersonaCard persona={result.persona} />

      {/* Top Picks */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <IconTrophy />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Your Top Matches</h2>
            <p className="text-sm text-slate-500">Ranked by relevance to your profile</p>
          </div>
        </div>
        {result.topPicks.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {result.topPicks.map((scored, index) => (
              <EnrichedBrokerCard
                key={scored.broker.slug}
                scored={scored}
                rank={index + 1}
              />
            ))}
          </div>
        ) : (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
            <p className="text-amber-800 font-medium">
              No strong matches found for your criteria. Try adjusting your selections above.
            </p>
          </div>
        )}
      </section>

      {/* Alternatives */}
      {result.alternatives.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Good Alternatives</h2>
          <p className="text-sm text-slate-500 mb-6">
            These brokers are solid options but scored slightly lower for your specific profile.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {result.alternatives.map((scored) => (
              <EnrichedBrokerCard
                key={scored.broker.slug}
                scored={scored}
              />
            ))}
          </div>
        </section>
      )}

      {/* Scoring Breakdown (transparency) */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
              <IconInfo />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">How We Matched These Brokers</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              Results are generated using a multi-factor weighted scoring system. Each broker is evaluated across six dimensions:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
              {[
                { label: "Regulation", weight: "5×" },
                { label: "Instrument Fit", weight: "4×" },
                { label: "Experience Match", weight: "3×" },
                { label: "Priority Alignment", weight: "3×" },
                { label: "Pricing Model", weight: "2×" },
                { label: "Platform Match", weight: "2×" },
              ].map((dim) => (
                <div key={dim.label} className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2">
                  <span className="text-xs font-bold text-blue-600 bg-blue-100 rounded px-1.5 py-0.5">{dim.weight}</span>
                  <span className="text-xs font-medium text-slate-700">{dim.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Brokers that are structurally unsuitable (e.g. CFD-only when you need share ownership, or non-FCA when regulation is your priority) 
              receive significant penalties or exclusions. This tool does not provide personalised financial advice. 
              Always conduct your own research before choosing a broker.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="bg-slate-50 rounded-xl border border-slate-200 p-5">
        <p className="text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-800">Risk Warning:</strong> CFDs are complex instruments and come with a high risk of losing money 
          rapidly due to leverage. Between 51-89% of retail investor accounts lose money when trading CFDs. You should consider whether 
          you understand how CFDs work and whether you can afford to take the high risk of losing your money. This tool does not constitute 
          financial advice. Affiliate links may be used — this does not influence scoring logic.
        </p>
      </section>
    </>
  );
}