import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description:
    "How affiliate partnerships work on this site, our editorial independence policy, and important disclaimers about financial content.",
  canonicalPath: "/disclosure",
});

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-bold text-slate-900 mt-10 mb-3">{children}</h3>
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

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 my-6">
      <p className="text-sm text-slate-600 leading-relaxed">{children}</p>
    </div>
  );
}

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Affiliate Disclosure
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            Transparency about how this site is funded, how affiliate links
            work, and how editorial independence is maintained.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-14">
        {/* Intro */}
        <section>
          <P>
            This website is an independent broker comparison and educational
            resource.
          </P>
          <P>
            We may enter into affiliate partnerships with some of the brokers
            featured on this site. This means that if you click on certain links
            and open or fund an account, we may receive a commission at no
            additional cost to you.
          </P>
          <P>
            At the time of publishing, affiliate partnerships may not yet be
            active for all brokers mentioned. However, this disclosure applies
            to all future commercial relationships.
          </P>
          <Callout>
            Where affiliate links are used, they may be identified within the
            page or included within broker call-to-action buttons.
          </Callout>
        </section>

        <Divider />

        {/* How Affiliate Links Work */}
        <section>
          <H3>How Affiliate Links Work</H3>
          <P>If you choose to open an account through an affiliate link:</P>
          <UL>
            <li>
              The broker may track the referral using a unique link or
              identifier.
            </li>
            <li>
              We may receive a fixed commission (CPA) or a revenue share.
            </li>
            <li>
              Your trading costs are not increased as a result of using our
              link.
            </li>
          </UL>
          <P>
            Affiliate relationships help support the operation of this website,
            including research, platform maintenance and content updates.
          </P>
        </section>

        <Divider />

        {/* Editorial Independence */}
        <section>
          <H3>Editorial Independence</H3>
          <P>Affiliate partnerships do not determine:</P>
          <UL>
            <li>Which brokers are included on this site</li>
            <li>How brokers are evaluated</li>
            <li>How rankings are calculated</li>
            <li>The outcome of comparisons or scoring tools</li>
          </UL>
          <P>
            All broker evaluations are based on publicly available information,
            regulatory status, pricing structure, platform capabilities and
            suitability for different trader types.
          </P>
          <P>
            Where relevant, risks and limitations are clearly stated&nbsp;&mdash;
            including for brokers with whom we may have commercial
            relationships.
          </P>
        </section>

        <Divider />

        {/* No Financial Advice */}
        <section>
          <H3>No Financial Advice</H3>
          <P>
            The content on this website is for informational and educational
            purposes only. We do not provide:
          </P>
          <UL>
            <li>Personalised investment advice</li>
            <li>Portfolio recommendations</li>
            <li>Trading signals</li>
            <li>Financial planning services</li>
          </UL>
          <P>
            You should conduct your own research and, where appropriate, seek
            independent financial advice before making investment decisions.
          </P>
        </section>

        <Divider />

        {/* Regulatory Context */}
        <section>
          <H3>Regulatory Context</H3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 my-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Risk Warning:</strong> Trading leveraged products such as
              CFDs carries significant risk. A large percentage of retail
              investor accounts lose money when trading CFDs. Always consider
              whether you understand how these products work and whether you can
              afford to take the high risk of losing your capital.
            </p>
          </div>
        </section>

        <Divider />

        {/* Contact */}
        <section>
          <H3>Contact</H3>
          <P>
            If you have questions about our affiliate relationships or editorial
            process, please contact us via the{" "}
            <a
              href="/contact"
              className="text-blue-600 font-medium hover:text-blue-800 underline underline-offset-2"
            >
              contact page
            </a>
            .
          </P>
        </section>
      </div>
    </div>
  );
}