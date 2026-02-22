import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Find A Broker - Compare Trading Brokers & Find Your Perfect Platform",
    template: "%s | Find A Broker"
  },
  description:
    "Compare regulated trading brokers, read expert reviews, and find the best platform for your needs. Unbiased comparisons of fees, features, and regulations.",
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body>
      <SpeedInsights />
      <GoogleTagManager gtmId="GTM-MTKQZK72" />
        <Navigation />
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          
          {/* Footer */}
          <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                {/* Brand */}
                <div className="md:col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      FB
                    </div>
                    <span className="font-bold text-white">Find A Broker</span>
                  </div>
                  <p className="text-sm text-slate-400">
                    Independent broker comparisons and reviews to help you make informed trading decisions.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/brokers" className="hover:text-white transition-colors">
                        All Brokers
                      </a>
                    </li>
                    <li>
                      <a href="/best" className="hover:text-white transition-colors">
                        Best Brokers
                      </a>
                    </li>
                    <li>
                      <a href="/compare" className="hover:text-white transition-colors">
                        Compare Brokers
                      </a>
                    </li>
                    <li>
                      <a href="/chooser" className="hover:text-white transition-colors">
                        Find A Broker
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="font-semibold text-white mb-4">Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/reviews" className="hover:text-white transition-colors">
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a href="/learn" className="hover:text-white transition-colors">
                        Learn
                      </a>
                    </li>
                    <li>
                      <a href="/glossary" className="hover:text-white transition-colors">
                        Glossary
                      </a>
                    </li>
                    <li>
                      <a href="/methodology" className="hover:text-white transition-colors">
                        Methodology
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h3 className="font-semibold text-white mb-4">Legal</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/disclosure" className="hover:text-white transition-colors">
                        Affiliate Disclosure
                      </a>
                    </li>
                    <li>
                      <a href="/privacy" className="hover:text-white transition-colors">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="hover:text-white transition-colors">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="hover:text-white transition-colors">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="border-t border-slate-800 pt-8">
                <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-300">Risk Warning:</strong> Trading involves substantial risk of loss. 
                    This website does not provide financial advice. All content is for educational and informational purposes only. 
                    We may earn a commission from affiliate links.{" "}
                    <a href="/disclosure" className="text-blue-400 hover:text-blue-300 underline">
                      See our disclosure
                    </a>.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                  <p>
                    © {new Date().getFullYear()} Find A Broker. All rights reserved.
                  </p>
                  <div className="flex gap-4">
                    <a href="/sitemap.xml" className="hover:text-white transition-colors">
                      Sitemap
                    </a>
                    <span>•</span>
                    <a href="/rss" className="hover:text-white transition-colors">
                      RSS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}