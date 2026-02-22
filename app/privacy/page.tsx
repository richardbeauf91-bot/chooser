import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How we handle data, cookies, analytics, and affiliate tracking on this broker comparison website.",
  canonicalPath: "/privacy",
});

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
  return <hr className="border-t border-slate-200 my-12" />;
}

function SectionNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex-shrink-0">
      {n}
    </span>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            How we handle data, cookies, and third-party services on this
            website.
          </p>
          <p className="text-sm text-slate-400 mt-4">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-14">
        {/* 1. Who We Are */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <SectionNumber n={1} />
            <h2 className="text-2xl font-bold text-slate-900">Who We Are</h2>
          </div>
          <P>
            This website (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
            &ldquo;us&rdquo;) is an independent broker comparison and
            educational website based in the United Kingdom.
          </P>
          <P>
            We do not provide financial advice and we do not operate as a
            broker.
          </P>
          <P>
            If you have any questions about this policy, you can contact us via
            the{" "}
            <a
              href="/contact"
              className="text-blue-600 font-medium hover:text-blue-800 underline underline-offset-2"
            >
              contact page
            </a>
            .
          </P>
        </section>

        <Divider />

        {/* 2. Information We Collect */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <SectionNumber n={2} />
            <h2 className="text-2xl font-bold text-slate-900">
              Information We Collect
            </h2>
          </div>
          <P>
            We do not collect personal financial data. We do not collect or
            process sensitive financial information, trading data, or identity
            verification documents.
          </P>
          <P>
            The only data collected through this website falls into the
            following categories:
          </P>

          <H4>A. Analytics Data</H4>
          <P>
            We use Google Analytics to understand how visitors use our website.
            This may include:
          </P>
          <UL>
            <li>IP address (anonymised where applicable)</li>
            <li>Device type</li>
            <li>Browser type</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Referral source</li>
            <li>General geographic location (country-level)</li>
          </UL>
          <P>
            This information is used only to improve website performance and
            user experience. We do not use analytics data to personally identify
            visitors.
          </P>

          <H4>B. Affiliate Link Tracking</H4>
          <P>Some links on this website are affiliate links.</P>
          <P>When you click on an affiliate link:</P>
          <UL>
            <li>You may be redirected through a tracking URL</li>
            <li>A cookie may be placed by the broker or affiliate network</li>
            <li>
              The broker may track that you were referred from our website
            </li>
          </UL>
          <P>
            We do not receive access to your trading account data. We do not
            receive access to your financial information.
          </P>
          <P>
            We may receive compensation if you open an account or meet certain
            conditions with a broker.
          </P>

          <H4>C. Contact Form Data</H4>
          <P>
            If you contact us via our contact page, we will receive:
          </P>
          <UL>
            <li>Your name (if provided)</li>
            <li>Your email address</li>
            <li>Your message</li>
          </UL>
          <P>
            This information is used solely to respond to your enquiry. We do
            not sell or share contact data.
          </P>
        </section>

        <Divider />

        {/* 3. Cookies */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <SectionNumber n={3} />
            <h2 className="text-2xl font-bold text-slate-900">Cookies</h2>
          </div>
          <P>This website may use cookies for:</P>
          <UL>
            <li>Website functionality</li>
            <li>Google Analytics tracking</li>
            <li>Affiliate referral tracking</li>
          </UL>
          <P>
            You can disable cookies in your browser settings at any time. Please
            note that some parts of the website may not function properly if
            cookies are disabled.
          </P>
        </section>

        <Divider />

        {/* 4. Third-Party Services */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <SectionNumber n={4} />
            <h2 className="text-2xl font-bold text-slate-900">
              Third-Party Services
            </h2>
          </div>
          <P>
            We use third-party services that may collect information in
            accordance with their own privacy policies:
          </P>
          <UL>
            <li>Google Analytics</li>
            <li>Affiliate partners and broker platforms</li>
          </UL>
          <P>
            We are not responsible for the privacy practices of external
            websites linked from our site. We encourage you to review their
            privacy policies before providing personal data.
          </P>
        </section>

        <Divider />

        {/* 5. Data Sharing */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <SectionNumber n={5} />
            <h2 className="text-2xl font-bold text-slate-900">
              Data Sharing
            </h2>
          </div>
          <P>We do not sell personal data. We do not rent personal data.</P>
          <P>We only share data:</P>
          <UL>
            <li>
              With service providers necessary to operate the website (e.g.,
              analytics tools)
            </li>
            <li>When legally required to do so</li>
          </UL>
        </section>

        <Divider />

        {/* 6. Data Retention */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <SectionNumber n={6} />
            <h2 className="text-2xl font-bold text-slate-900">
              Data Retention
            </h2>
          </div>
          <P>
            Analytics data is retained according to Google Analytics settings.
          </P>
          <P>
            Email correspondence is retained only as long as necessary to
            respond to enquiries or maintain records.
          </P>
        </section>

        <Divider />

        {/* 7. Your Rights */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <SectionNumber n={7} />
            <h2 className="text-2xl font-bold text-slate-900">
              Your Rights (UK &amp; EU Visitors)
            </h2>
          </div>
          <P>
            If you are located in the United Kingdom or European Union, you may
            have rights under applicable data protection laws, including:
          </P>
          <UL>
            <li>The right to access your personal data</li>
            <li>The right to request correction</li>
            <li>The right to request deletion</li>
            <li>The right to object to certain processing</li>
          </UL>
          <P>
            To exercise any rights, please contact us via the{" "}
            <a
              href="/contact"
              className="text-blue-600 font-medium hover:text-blue-800 underline underline-offset-2"
            >
              contact page
            </a>
            .
          </P>
        </section>

        <Divider />

        {/* 8. Data Security */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <SectionNumber n={8} />
            <h2 className="text-2xl font-bold text-slate-900">
              Data Security
            </h2>
          </div>
          <P>
            We take reasonable technical and organisational measures to protect
            the security of this website.
          </P>
          <P>
            However, no method of transmission over the internet is completely
            secure.
          </P>
        </section>

        <Divider />

        {/* 9. Changes */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <SectionNumber n={9} />
            <h2 className="text-2xl font-bold text-slate-900">
              Changes to This Policy
            </h2>
          </div>
          <P>We may update this Privacy Policy from time to time.</P>
          <P>
            The updated version will be posted on this page with a revised
            &ldquo;Last updated&rdquo; date.
          </P>
        </section>
      </div>
    </div>
  );
}