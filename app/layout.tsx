import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Broker Chooser",
    template: "%s | Broker Chooser"
  },
  description:
    "Compare brokers, read reviews, and choose the best trading platform for your needs.",
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <footer className="border-t text-sm text-slate-600">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <p>
                We may earn a commission from affiliate links. See our{" "}
                <a href="/disclosure" className="underline">
                  disclosure
                </a>.
              </p>
              <p className="mt-2">
                This site does not provide financial advice.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
