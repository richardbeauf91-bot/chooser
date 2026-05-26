import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import ContactForm from "./ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Find A Broker",
  description:
    "Get in touch with the Find A Broker team. We welcome broker data corrections, partnership enquiries, and content feedback.",
  canonicalPath: "/contact",
});

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "We aim to respond within 1–2 business days.",
  },
  {
    q: "Can brokers request to be reviewed?",
    a: "Yes. We review brokers based on our standard criteria regardless of how contact is initiated. Being featured does not require an affiliate arrangement.",
  },
  {
    q: "How do I report incorrect broker data?",
    a: "Use the form above and select 'Broker data correction'. Include the broker name and the specific data point that needs updating. We verify and update promptly.",
  },
  {
    q: "Do you accept guest posts or sponsored content?",
    a: "No. All content on Find A Broker is written and edited by our own team. We do not publish sponsored articles or paid placements.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Get in touch
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We welcome partnership enquiries, broker data corrections,
            and content feedback. We do not accept paid placements or
            sponsored content.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
              <h2 className="font-bold text-slate-900 mb-4">What we can help with</h2>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  { icon: "🤝", label: "Affiliate & partnership enquiries" },
                  { icon: "📋", label: "Broker data corrections" },
                  { icon: "💬", label: "Content feedback" },
                  { icon: "📰", label: "Press & media requests" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-2">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Please note:</strong> We do not provide personal financial
                advice, broker recommendations for specific trades, or customer
                support for broker accounts. For account issues please contact
                your broker directly.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Common questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
