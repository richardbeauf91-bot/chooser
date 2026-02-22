import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Methodology - How We Evaluate and Rank Brokers",
  description:
    "Understand how our broker matching tool, best broker rankings, and comparison pages are structured. Transparent methodology for UK retail traders.",
  canonicalPath: "/methodology",
});

function SectionNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-bold text-sm flex-shrink-0">
      {n}
    </span>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-bold text-slate-900 mt-10 mb-3">{children}</h3>
  );
}

function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-base font-semibold text-slate-800 mt-8 mb-2">{children}</h4>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base text-slate-700 leading-relaxed mb-4">{children}</p>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-outside pl-6 mb-5 space-y-2 text-base text-slate-700 leading-relaxed">
      {children}
    </ul>
  );
}

function Divider() {
  return <hr className="border-t border-slate-200 my-14" />;
}

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Methodology
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            How we evaluate, score, and rank brokers across our tools and
            editorial pages. Transparent criteria, no black boxes.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-14">
        {/* ── Section 1: Broker Chooser ── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <SectionNumber n={1} />
            <h2 className="text-2xl font-bold text-slate-900">
              Broker Chooser Methodology
            </h2>
          </div>

          <H3>How Our Broker Matching Tool Works</H3>
          <P>
            Our broker matching tool uses a structured, rules-based scoring
            system to identify brokers that align with your stated preferences.
            It does not use personal data, behavioural tracking, or predictive
            modelling. Results are generated solely from the inputs you select.
          </P>

          <H4>Step 1: Profile Interpretation</H4>
          <P>
            Your selections (country, instrument, experience level and priority)
            are translated into a trading profile. For example:
          </P>
          <UL>
            <li>
              A beginner selecting &ldquo;regulation&rdquo; is treated as a
              safety-focused new trader.
            </li>
            <li>
              An advanced user selecting &ldquo;low fees&rdquo; for forex is
              treated as a high-frequency trader.
            </li>
            <li>
              A stock investor selecting UK investing options is treated as
              requiring real share ownership.
            </li>
          </UL>
          <P>
            This profile determines which broker attributes are prioritised.
          </P>

          <H4>Step 2: Eligibility Screening</H4>
          <P>
            Before scoring, brokers are screened for structural suitability:
          </P>
          <UL>
            <li>Availability in your selected country</li>
            <li>Instrument availability</li>
            <li>Real share ownership where required</li>
            <li>Regulatory alignment where prioritised</li>
          </UL>
          <P>
            Brokers that are not available in your country are excluded entirely.
            Brokers that partially meet requirements may receive penalties.
          </P>

          <H4>Step 3: Weighted Scoring</H4>
          <P>
            Each eligible broker is evaluated across six dimensions:
          </P>
          <UL>
            <li>Regulation &amp; Client Protection</li>
            <li>Instrument Fit</li>
            <li>Experience Alignment</li>
            <li>Priority Match</li>
            <li>Pricing Model</li>
            <li>Platform Compatibility</li>
          </UL>
          <P>
            Each dimension is scored on a 0&ndash;10 scale and weighted
            according to relevance. Regulation and instrument suitability carry
            greater weight than secondary features.
          </P>

          <H4>Step 4: Persona Adjustment</H4>
          <P>
            The system applies small positive or negative adjustments based on
            how closely a broker aligns with your trading profile (for example,
            &ldquo;beginner-friendly&rdquo; or
            &ldquo;professional-grade&rdquo;).
          </P>

          <H4>Step 5: Ranking</H4>
          <P>
            Brokers are ranked by total weighted score. The top results are
            labelled &ldquo;Strong Match,&rdquo; &ldquo;Good Match,&rdquo; or
            &ldquo;Fair Match&rdquo; based on how closely they align with your
            selected criteria.
          </P>

          <H4>Important Limitations</H4>
          <UL>
            <li>The tool does not account for your financial situation.</li>
            <li>It does not provide personalised financial advice.</li>
            <li>It does not predict performance.</li>
            <li>It does not evaluate real-time spread changes.</li>
            <li>
              The results are designed to assist comparison&nbsp;&mdash; not
              replace independent research.
            </li>
          </UL>
          <div className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 mt-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              Affiliate partnerships may exist with some brokers listed. These
              relationships do not alter eligibility screening or scoring
              criteria.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── Section 2: Best Broker Pages ── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <SectionNumber n={2} />
            <h2 className="text-2xl font-bold text-slate-900">
              Best Broker Pages Methodology
            </h2>
          </div>

          <P>
            The brokers featured on our &ldquo;best&rdquo; pages were selected
            and ranked using a structured evaluation framework designed for UK
            retail traders.
          </P>

          <H3>Evaluation Framework</H3>
          <P>Each broker was assessed across the following criteria:</P>
          <UL>
            <li>FCA regulation status and client protection structure</li>
            <li>
              Pricing transparency (spread structure, commission model,
              financing charges)
            </li>
            <li>Platform quality and execution tools</li>
            <li>
              Product coverage (CFDs, shares, ISA/SIPP where applicable)
            </li>
            <li>Suitability for the target audience of the page</li>
            <li>Publicly available customer feedback trends</li>
          </UL>
          <P>
            The weight assigned to each factor depends on the theme of the page.
            For example:
          </P>
          <UL>
            <li>
              On &ldquo;Best Low-Cost Brokers,&rdquo; pricing carries greater
              weight than platform aesthetics.
            </li>
            <li>
              On &ldquo;Best Regulated Brokers,&rdquo; regulatory structure and
              corporate transparency take priority over cost.
            </li>
            <li>
              On &ldquo;Best Brokers for Beginners,&rdquo; usability and
              onboarding clarity are prioritised.
            </li>
          </UL>

          <H3>Inclusion Criteria</H3>
          <P>
            All brokers listed operate UK-accessible accounts. Where regulation
            differs by entity, this is stated clearly.
          </P>
          <P>
            We do not rank brokers based solely on headline spreads. Total cost
            of trading includes:
          </P>
          <UL>
            <li>Spread + commission</li>
            <li>Financing charges</li>
            <li>Currency conversion</li>
            <li>Account type differences</li>
          </UL>

          <H3>Rankings and Commercial Relationships</H3>
          <P>
            Some brokers may pay affiliate commissions. These relationships do
            not influence scoring criteria or ranking logic. Rankings reflect
            structural suitability for the page&apos;s target audience.
          </P>
          <div className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 mt-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              This content is informational and does not constitute financial
              advice.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── Section 3: Compare Pages ── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <SectionNumber n={3} />
            <h2 className="text-2xl font-bold text-slate-900">
              Compare Pages Methodology
            </h2>
          </div>

          <P>
            Each broker comparison is based on publicly available information
            and structured evaluation criteria. The goal is to highlight
            practical differences rather than declare a universal
            &ldquo;winner.&rdquo;
          </P>

          <H3>What We Compare</H3>
          <P>Each head-to-head comparison examines:</P>
          <UL>
            <li>
              Regulatory structure (FCA status, client fund segregation,
              protections)
            </li>
            <li>Pricing model (spread-only vs commission + spread)</li>
            <li>
              Platform availability (MetaTrader, proprietary platforms, advanced
              tools)
            </li>
            <li>
              Product coverage (CFDs, shares, ISA/SIPP where available)
            </li>
            <li>Suitability for different trader types</li>
            <li>Known structural limitations</li>
          </UL>
          <P>
            We do not compare promotional offers, temporary incentives, or
            short-term campaigns.
          </P>

          <H3>Cost Comparisons</H3>
          <P>
            Pricing analysis focuses on structure rather than marketing claims.
            For example:
          </P>
          <UL>
            <li>Whether raw-spread accounts are available</li>
            <li>Whether commission is charged</li>
            <li>Whether real share investing is supported</li>
            <li>Whether financing applies</li>
          </UL>
          <P>
            Actual trading costs vary by instrument, account type and market
            conditions.
          </P>

          <H3>No Universal Winner</H3>
          <P>
            Most comparisons do not produce a single &ldquo;best&rdquo; broker.
            Instead, the outcome depends on:
          </P>
          <UL>
            <li>Trading frequency</li>
            <li>Preferred instruments</li>
            <li>Experience level</li>
            <li>Need for investing accounts vs derivatives</li>
          </UL>
          <P>
            Where regulatory protections are comparable, this is stated clearly.
          </P>

          <H3>Independence</H3>
          <P>
            Affiliate partnerships may exist with brokers referenced. These
            partnerships do not influence the evaluation structure or outcome
            logic.
          </P>
          <div className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 mt-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              This content is informational and does not constitute financial
              advice.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}