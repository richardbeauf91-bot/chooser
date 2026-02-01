import type { Metadata } from "next";
import { brokers } from "@/lib/data/brokers";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Broker Reviews",
  description: "In-depth reviews of trading brokers, platforms, and fees.",
  canonicalPath: "/reviews"
});

export default function ReviewsHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Broker Reviews</h1>

      <ul className="space-y-4">
        {brokers.map(broker => (
          <li key={broker.slug}>
            <a
              href={`/reviews/${broker.slug}`}
              className="text-lg font-medium underline"
            >
              {broker.name} review
            </a>
            <p className="text-slate-600 mt-1">
              {broker.shortDescription}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
