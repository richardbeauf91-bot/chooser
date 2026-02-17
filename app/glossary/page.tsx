import type { Metadata } from "next";
import { glossary } from "@/lib/data/glossary";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Trading Glossary - Broker & Trading Terms Explained",
  description: "Clear definitions of trading and broker-related terms. Understand the terminology used in the trading industry.",
  canonicalPath: "/glossary"
});

export default function GlossaryHubPage() {
  // Group terms by first letter
  const groupedTerms = glossary.reduce((acc, term: any) => {
    // Get title from either new or old structure
    const title = term.term || term.seoTitle || term.slug;
    const firstLetter = title[0].toUpperCase();
    
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, typeof glossary>);

  const letters = Object.keys(groupedTerms).sort();

  // Helper function to get term display data
  const getTermDisplay = (term: any) => {
    const title = term.term 
      ? `${term.term} (Trading Definition)`
      : term.seoTitle || term.slug;
    
    const description = term.directAnswer 
      ? term.directAnswer.substring(0, 160) + '...'
      : term.seoDescription || 'Trading term definition';
    
    return { title, description };
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {glossary.length} Terms Defined
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Trading Glossary
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              Clear, concise definitions of trading and broker-related terminology. 
              Understand the language of the trading industry.
            </p>
          </div>
        </div>
      </section>

      {/* Alphabet Navigation */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {letters.map(letter => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white font-semibold text-slate-700 transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {letters.map(letter => (
            <section key={letter} id={`letter-${letter}`} className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {letter}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Terms starting with {letter}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {groupedTerms[letter].map((term: any) => {
                  const { title, description } = getTermDisplay(term);
                  
                  return (
                    <a
                      key={term.slug}
                      href={`/glossary/${term.slug}`}
                      className="group bg-white rounded-lg border-2 border-slate-200 hover:border-blue-500 p-4 transition-all duration-200 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                            {title}
                          </h3>
                          <p className="text-sm text-slate-600 line-clamp-2">
                            {description}
                          </p>
                        </div>
                        <svg 
                          className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-slate-100 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Want to Learn More?
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Check out our comprehensive guides to understand brokers, platforms, and the trading industry.
            </p>
            <a
              href="/learn"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Browse Guides
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}