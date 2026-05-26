import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

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
  const absoluteUrl = `${SITE_URL}${canonicalPath}`;
  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      type: "website",
      siteName: "Find A Broker"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@findabrokerxyz"
    }
  };
}
