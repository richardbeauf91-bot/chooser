import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import ChooserClient from "./ChooserClient";

export const metadata: Metadata = buildMetadata({
  title: "Broker Chooser",
  description: "Answer a few questions to find brokers that match your trading needs.",
  canonicalPath: "/chooser"
});

export default function ChooserPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">
        Broker Chooser
      </h1>
      <p className="text-slate-700 max-w-2xl mb-8">
        Answer a few questions to see brokers that match your preferences.
        This tool does not provide financial advice.
      </p>

      <ChooserClient />
    </div>
  );
}
