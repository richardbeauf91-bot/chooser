import type { Metadata } from "next";

type MetaInput = {
  title: string;
  description: string;
  canonicalPath: string;
};

export function buildMetadata({
  title,
  description,
  canonicalPath
}: MetaInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      type: "website"
    },
    twitter: {
      card: "summary",
      title,
      description
    }
  };
}
