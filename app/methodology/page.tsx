import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Methodology - How We Evaluate and Rank Brokers",
  description:
    "How we actually evaluate UK brokers — what we test, what genuinely differentiates platforms, and why we don't score the things every FCA-regulated broker does the same way.",
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

function CalloutBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg px-5 py-4 mt-6 mb-2">
      <p className="text-sm text-blue-900 leading-relaxed">{children}</p>
    </div>
  );
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
            Most broker reviews score things that don&apos;t actually differ between platforms.
            This page explains what we look for instead — and why.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-14">

        {/* ── Section 1: Onboarding ── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <SectionNumber n={1} />
            <h2 className="text-2xl font-bold text-slate-900">
              The standard onboarding flow — and why we don&apos;t score it
            </h2>
          </div>

          <P>
            Every FCA-regulated broker requires the same onboarding process. This
            isn&apos;t a broker design choice — it&apos;s a legal requirement. Before a broker
            can give you access to a live account, they must collect and verify the
            following:
          </P>

          <UL>
            <li>
              <strong>Identity:</strong> passport or driving licence
            </li>
            <li>
              <strong>Address:</strong> utility bill or bank statement dated within 3 months
            </li>
            <li>
              <strong>Employment and income:</strong> FCA Know Your Customer (KYC) requirement
            </li>
            <li>
              <strong>Appropriateness test:</strong> questions about leverage, margin, and risk
              — required before accessing CFD or spread betting accounts
            </li>
            <li>
              <strong>Bank account ownership:</strong> a bank statement confirming the account
              is in your name, because no FCA-regulated broker accepts third-party deposits
            </li>
          </UL>

          <P>
            The process takes 10–30 minutes to complete. Verification speed varies — some
            brokers use automated document checks that approve in minutes; others involve a
            manual review that takes a working day. That variation is the only meaningful
            difference in the onboarding experience between platforms.
          </P>

          <P>
            We don&apos;t score onboarding per broker because there is nothing substantive
            to score. When a review says &ldquo;onboarding was smooth&rdquo; it means the
            broker met their regulatory obligations. That&apos;s the floor, not a feature.
            We note whether verification was fast or slow where it was genuinely notable,
            and we leave it there.
          </P>

          <CalloutBox>
            The same logic applies to deposits and withdrawals. FCA-regulated brokers use
            the same underlying payment infrastructure. The process feels consistent because
            it is — the same card processors, the same bank transfer rails, the same
            prohibition on third-party payments. Smooth deposits are not a differentiator.
          </CalloutBox>
        </section>

        <Divider />

        {/* ── Section 2: Real criteria ── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <SectionNumber n={2} />
            <h2 className="text-2xl font-bold text-slate-900">
              What actually differentiates brokers
            </h2>
          </div>

          <P>
            Spreads on major forex pairs cluster within a competitive range across most
            UK retail brokers — the market enforces that. The things that genuinely differ
            are structural, and most comparison sites either ignore them or bury them in
            bullet points. Here is what we actually evaluate:
          </P>

          <H3>Execution policy</H3>
          <P>
            How a broker routes your orders matters more than most traders realise.
            Straight-through processing (STP) and ECN models pass your orders directly to
            liquidity providers. Market makers take the other side of your trade. Neither
            is inherently problematic — but knowing which model applies, and reading the
            broker&apos;s best execution policy, tells you more about actual fill quality
            than their spread marketing does. We read the execution policy for every broker
            we review and note the model clearly.
          </P>

          <H3>FSCS eligibility</H3>
          <P>
            Binary. Either the entity holding your account is directly FCA authorised —
            making eligible deposits protected by the Financial Services Compensation
            Scheme up to £85,000 — or it isn&apos;t. Brokers operating under European
            licences (CySEC, Central Bank of Ireland) or offshore licences for UK clients
            do not provide FSCS coverage. This is not a technicality. If a broker fails,
            the difference between FSCS eligibility and no FSCS eligibility is the
            difference between recovering your funds and not. We state this clearly for
            every broker.
          </P>

          <H3>Spread betting vs CFD — what &ldquo;tax-free&rdquo; actually means</H3>
          <P>
            When a broker advertises &ldquo;trade tax-free,&rdquo; they mean a spread
            betting account, not a CFD account. Spread betting profits are exempt from
            Capital Gains Tax and income tax in the UK. CFD profits are not — they are
            subject to CGT above the annual allowance. The two account types can look
            similar on a platform but carry meaningfully different tax treatment.
          </P>
          <P>
            Not every broker offers spread betting. It is a UK-specific product and
            requires a separate FCA permission. IG and CMC Markets offer it alongside
            CFDs; Capital.com and Pepperstone do not. If tax efficiency is a consideration
            in your trading strategy, this distinction matters and we note it in every
            relevant review.
          </P>

          <H3>24/7 trading availability</H3>
          <P>
            Crypto markets don&apos;t close. Some brokers also offer weekend trading on
            major indices. Others go dark from Friday evening to Sunday night, leaving
            positions exposed to gap risk over the weekend with no way to act on news.
            If you trade outside standard market hours, or want the option to manage
            positions at the weekend, check this before opening an account. We note
            actual trading hours per broker rather than assuming &ldquo;standard
            hours&rdquo; across the board.
          </P>

          <H3>Customer support hours</H3>
          <P>
            Support hours matter most when something goes wrong at 2am — a position
            stuck open, a withdrawal delayed, a platform issue during volatile markets.
            A lot of &ldquo;24/7 support&rdquo; in broker marketing means a chatbot
            overnight and a human during business hours. We note what&apos;s actually
            available and through which channels, rather than restating the marketing claim.
          </P>
        </section>

        <Divider />

        {/* ── Section 3: Platform UI ── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <SectionNumber n={3} />
            <h2 className="text-2xl font-bold text-slate-900">
              Platform UI and charting — the most underrated differentiator
            </h2>
          </div>

          <P>
            This is the criterion that gets the least editorial attention in broker
            comparisons and the one that has the most practical impact on daily trading.
            If you are actively trading — watching for setups, monitoring positions,
            waiting for entry points — you are looking at the platform for hours at a time.
          </P>
          <P>
            A cluttered interface, a deal ticket buried three clicks from the chart, tools
            that require a separate tab or a second screen: these are not minor annoyances.
            They are friction on every trade. A clean UI that puts execution where you
            expect it, charting you can read without concentrating on the interface itself,
            and tools that are integrated rather than bolted on — that is a genuine edge
            in a session where you are making time-sensitive decisions.
          </P>

          <H4>What we evaluate on platform</H4>
          <UL>
            <li>
              Whether charting is native to the platform or powered by TradingView
              integration — and whether TradingView allows multi-broker trading within
              the same interface
            </li>
            <li>
              Whether deal tickets are accessible directly from the chart or require
              navigating away
            </li>
            <li>
              Whether tools (news, signals, analysis) are integrated within the platform
              or require opening something separately
            </li>
            <li>
              How the platform handles multiple instruments — whether switching between
              markets adds friction
            </li>
            <li>
              Mobile vs desktop vs web experience — these can differ significantly on
              the same broker
            </li>
            <li>
              Cognitive load — how much attention the interface itself demands versus
              the market
            </li>
          </UL>

          <P>
            MetaTrader 4 and MT5 are powerful platforms with a large plugin ecosystem
            and strong automated trading support. The desktop UI also looks and feels
            like it was designed in the late 1990s. That is a real trade-off worth
            stating, and we state it. The web and mobile versions of MT4/MT5 are
            materially better than desktop — that distinction matters for how you plan
            to use the platform.
          </P>

          <CalloutBox>
            TradingView as a broker integration is worth specific attention: beyond clean
            charting and community trade ideas, it allows you to connect multiple brokers
            within the same interface. Trading one instrument through a broker with better
            spreads on that asset, and another through a different broker, all without
            switching platforms — that is a practical capability most platform comparisons
            don&apos;t mention.
          </CalloutBox>
        </section>

        <Divider />

        {/* ── Section 4: Testing standard ── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <SectionNumber n={4} />
            <h2 className="text-2xl font-bold text-slate-900">
              How we test — and what that means for these reviews
            </h2>
          </div>

          <P>
            We don&apos;t review brokers from a spec sheet. Every broker reviewed on
            this site has been tested with a real account opened under standard UK
            retail conditions — going through the onboarding process, depositing funds,
            executing trades, and testing withdrawals.
          </P>
          <P>
            The reason this matters: a lot of what is genuinely interesting about a
            broker only becomes visible when you are actually using it. The way
            Capital.com&apos;s interface reduces friction is not something you can
            convey in a feature bullet point. The way IBKR&apos;s complexity is
            clearly intentional — built for experienced traders, not an accident of
            poor design — only becomes clear when you have used both it and something
            simpler. The difference between how MetaTrader feels on desktop versus web
            versus mobile is not in the spec sheet at all.
          </P>
          <P>
            We do not write reviews for brokers we haven&apos;t traded on. If a
            broker appears in the database without a full review, testing is pending.
            First-hand observations are labelled as such in reviews — these are the
            parts that AI content and spec-sheet comparisons cannot replicate.
          </P>

          <H4>What first-hand testing covers</H4>
          <UL>
            <li>Full onboarding under UK retail conditions (to confirm the process, not to score it)</li>
            <li>Live or demo account execution across representative instruments</li>
            <li>Platform usability across mobile, web, and desktop where available</li>
            <li>Deposit and withdrawal process (to confirm it functions, not to treat it as a differentiator)</li>
            <li>Tool and charting integration — what is in-platform versus what requires something external</li>
            <li>Support accessibility — what channel, what hours, what quality of response</li>
          </UL>
        </section>

        <Divider />

        {/* ── Section 5: Matching Tool ── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <SectionNumber n={5} />
            <h2 className="text-2xl font-bold text-slate-900">
              Broker matching tool methodology
            </h2>
          </div>

          <P>
            The broker matching tool uses a structured, rules-based scoring system to
            identify brokers that align with your stated preferences. It does not use
            personal data, behavioural tracking, or predictive modelling. Results are
            generated solely from the inputs you select.
          </P>

          <H4>How it works</H4>
          <P>
            Your selections — country, instrument, experience level, and priority — are
            translated into a trading profile. That profile determines which broker
            attributes are weighted most heavily. For example:
          </P>
          <UL>
            <li>
              A beginner prioritising regulation is treated as a safety-focused new trader
              — FSCS eligibility and direct FCA authorisation carry greater weight.
            </li>
            <li>
              An advanced user prioritising low fees for forex is treated as a
              high-frequency trader — raw spread accounts and commission structure are
              foregrounded.
            </li>
            <li>
              A stock investor selecting UK investing options is screened for real share
              ownership — CFD-only brokers are excluded or penalised.
            </li>
          </UL>

          <H4>Eligibility screening</H4>
          <P>
            Before scoring, brokers are screened for structural suitability: availability
            in your selected country, instrument availability, real share ownership where
            required, and regulatory alignment where prioritised. Brokers that don&apos;t
            meet structural requirements are excluded before scoring begins.
          </P>

          <H4>Scoring dimensions</H4>
          <UL>
            <li>Regulation and client protection (FCA direct, FSCS eligibility)</li>
            <li>Instrument fit</li>
            <li>Experience alignment</li>
            <li>Priority match (cost vs platform vs regulation)</li>
            <li>Pricing model and account structure</li>
            <li>Platform compatibility</li>
          </UL>

          <H4>Limitations</H4>
          <UL>
            <li>The tool does not account for your financial situation.</li>
            <li>It does not provide personalised financial advice.</li>
            <li>It does not predict performance or evaluate real-time spread changes.</li>
            <li>Results are designed to assist comparison — not replace independent research.</li>
          </UL>

          <div className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 mt-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              Affiliate partnerships may exist with some brokers listed. These relationships
              do not alter eligibility screening or scoring criteria.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── Section 6: Best Pages ── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <SectionNumber n={6} />
            <h2 className="text-2xl font-bold text-slate-900">
              Best broker pages methodology
            </h2>
          </div>

          <P>
            Brokers featured on our best pages were selected and ranked using the
            criteria described above — with weight adjusted for the specific audience
            of each page. For example:
          </P>
          <UL>
            <li>
              On best low-cost brokers, pricing structure (raw spread account availability,
              commission model) carries greater weight than platform design.
            </li>
            <li>
              On best brokers for beginners, platform usability and support quality are
              prioritised over professional-grade execution features.
            </li>
            <li>
              On best regulated brokers, FSCS eligibility and direct FCA authorisation
              take priority — brokers without full UK FCA authorisation are excluded
              or ranked lower.
            </li>
          </UL>

          <P>
            Total cost of trading — not just headline spread — is used for pricing
            comparisons. This means spread plus commission, financing charges, currency
            conversion fees, and account type differences. A 0.6 pip spread without
            commission may be cheaper or more expensive than a 0.0 pip raw spread with
            commission depending on trade size and frequency.
          </P>

          <P>
            Rankings are not adjusted based on affiliate status. Several brokers ranked
            well on this site have no affiliate programme.
          </P>

          <div className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 mt-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              This content is informational and does not constitute financial advice.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── Section 7: Compare Pages ── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <SectionNumber n={7} />
            <h2 className="text-2xl font-bold text-slate-900">
              Compare pages methodology
            </h2>
          </div>

          <P>
            Head-to-head comparisons are designed to highlight structural differences —
            the things that actually change which broker is the right choice — rather
            than declare a universal winner. Most comparisons don&apos;t produce one,
            because the right answer depends on what you are trading, how often, and
            what you need the platform to do.
          </P>

          <H4>What we compare</H4>
          <UL>
            <li>Regulatory structure — direct FCA authorisation, FSCS eligibility, entity structure</li>
            <li>Pricing model — spread-only vs commission plus raw spread, and which account types carry which structure</li>
            <li>Platform and charting — what&apos;s native, what&apos;s integrated, how the experience differs</li>
            <li>Product coverage — CFDs, direct ownership, ISA, SIPP, spread betting availability</li>
            <li>24/7 trading and support availability</li>
            <li>Known structural limitations — the things each broker doesn&apos;t do</li>
          </UL>

          <P>
            We do not compare promotional offers, temporary spreads, or short-term
            incentives. Those change. Structural differences between brokers don&apos;t.
          </P>

          <H4>Independence</H4>
          <P>
            Affiliate partnerships may exist with brokers referenced. These
            partnerships do not influence the evaluation structure or outcome.
          </P>

          <div className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 mt-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              This content is informational and does not constitute financial advice.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
