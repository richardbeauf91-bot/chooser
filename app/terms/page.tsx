import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms governing your use of this broker comparison and educational website, including disclaimers, liability limitations, and intellectual property.",
  canonicalPath: "/terms",
});

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
  return <hr className="border-t border-slate-200 my-12" />;
}

function SectionNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex-shrink-0">
      {n}
    </span>
  );
}

function SectionHeading({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <SectionNumber n={n} />
      <h2 className="text-2xl font-bold text-slate-900">{children}</h2>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            The terms governing your use of this website, including important
            disclaimers and limitations of liability.
          </p>
          <p className="text-sm text-slate-400 mt-4">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-14">
        {/* Intro */}
        <P>
          Welcome to this website (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
          &ldquo;us&rdquo;).
        </P>
        <P>
          By accessing or using this website, you agree to be bound by these
          Terms of Service. If you do not agree, please do not use this website.
        </P>

        <Divider />

        {/* 1 */}
        <section>
          <SectionHeading n={1}>Nature of This Website</SectionHeading>
          <P>This website provides:</P>
          <UL>
            <li>Broker comparisons</li>
            <li>Educational content</li>
            <li>Informational articles</li>
            <li>General market information</li>
          </UL>
          <P>We do not:</P>
          <UL>
            <li>Provide financial advice</li>
            <li>Provide personalised investment recommendations</li>
            <li>Operate as a broker</li>
            <li>Manage trading accounts</li>
            <li>Execute trades on behalf of users</li>
          </UL>
          <P>
            Nothing on this website should be interpreted as financial, legal, or
            investment advice.
          </P>
        </section>

        <Divider />

        {/* 2 */}
        <section>
          <SectionHeading n={2}>No Financial Advice</SectionHeading>
          <P>
            All content is provided for informational and educational purposes
            only.
          </P>
          <P>
            You are solely responsible for your trading and investment decisions.
            We do not assess your financial situation, objectives, or risk
            tolerance.
          </P>
          <P>
            You should consult a qualified financial adviser before making
            investment decisions.
          </P>
        </section>

        <Divider />

        {/* 3 */}
        <section>
          <SectionHeading n={3}>Risk Warning</SectionHeading>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Warning:</strong> Trading financial instruments such as
              CFDs, forex, crypto, stocks, and derivatives carries a high level
              of risk. You may lose some or all of your invested capital. Past
              performance does not guarantee future results.
            </p>
          </div>
          <P>
            We are not responsible for any financial losses resulting from the
            use of information on this website.
          </P>
        </section>

        <Divider />

        {/* 4 */}
        <section>
          <SectionHeading n={4}>Affiliate Relationships</SectionHeading>
          <P>
            Some links on this website are affiliate links. This means:
          </P>
          <UL>
            <li>
              We may receive compensation if you open an account with a broker
              through our link.
            </li>
            <li>
              Compensation does not influence our scoring methodology.
            </li>
            <li>
              We do not receive access to your personal or trading data.
            </li>
          </UL>
          <P>
            Our content is created independently and is not financial advice.
          </P>
        </section>

        <Divider />

        {/* 5 */}
        <section>
          <SectionHeading n={5}>Accuracy of Information</SectionHeading>
          <P>
            We aim to keep information accurate and up to date. However:
          </P>
          <UL>
            <li>Broker fees may change.</li>
            <li>Platform features may change.</li>
            <li>Regulatory status may change.</li>
          </UL>
          <P>
            We do not guarantee the completeness or accuracy of any information.
            You are responsible for verifying details directly with the broker.
          </P>
        </section>

        <Divider />

        {/* 6 */}
        <section>
          <SectionHeading n={6}>External Links</SectionHeading>
          <P>This website contains links to third-party websites.</P>
          <P>We are not responsible for:</P>
          <UL>
            <li>The content of external websites</li>
            <li>Their privacy policies</li>
            <li>Their terms and conditions</li>
            <li>Their services</li>
          </UL>
          <P>Your use of third-party websites is at your own risk.</P>
        </section>

        <Divider />

        {/* 7 */}
        <section>
          <SectionHeading n={7}>Limitation of Liability</SectionHeading>
          <P>To the fullest extent permitted by law, we shall not be liable for:</P>
          <UL>
            <li>Any direct or indirect financial losses</li>
            <li>Trading losses</li>
            <li>Loss of profits</li>
            <li>Loss of data</li>
            <li>Business interruption</li>
          </UL>
          <P>
            arising from your use of this website. Your use of this website is
            entirely at your own risk.
          </P>
        </section>

        <Divider />

        {/* 8 */}
        <section>
          <SectionHeading n={8}>Intellectual Property</SectionHeading>
          <P>
            All content on this website, including:
          </P>
          <UL>
            <li>Text</li>
            <li>Structure</li>
            <li>Comparison methodology</li>
            <li>Graphics</li>
            <li>Branding</li>
          </UL>
          <P>
            is the intellectual property of the website operator, unless
            otherwise stated. You may not reproduce, copy, or redistribute
            content without written permission.
          </P>
        </section>

        <Divider />

        {/* 9 */}
        <section>
          <SectionHeading n={9}>User Conduct</SectionHeading>
          <P>You agree not to:</P>
          <UL>
            <li>Attempt to interfere with website functionality</li>
            <li>Attempt to access restricted areas</li>
            <li>Use automated scraping tools without permission</li>
            <li>Use this website for unlawful purposes</li>
          </UL>
        </section>

        <Divider />

        {/* 10 */}
        <section>
          <SectionHeading n={10}>No Regulatory Authorisation</SectionHeading>
          <P>
            This website is not authorised or regulated by the Financial Conduct
            Authority (FCA). We do not provide regulated financial services.
          </P>
        </section>

        <Divider />

        {/* 11 */}
        <section>
          <SectionHeading n={11}>Changes to These Terms</SectionHeading>
          <P>We may update these Terms of Service at any time.</P>
          <P>
            The updated version will be published on this page with a revised
            &ldquo;Last updated&rdquo; date. Continued use of the website
            constitutes acceptance of the updated terms.
          </P>
        </section>

        <Divider />

        {/* 12 */}
        <section>
          <SectionHeading n={12}>Governing Law</SectionHeading>
          <P>
            These Terms shall be governed by and interpreted in accordance with
            the laws of England and Wales.
          </P>
        </section>
      </div>
    </div>
  );
}