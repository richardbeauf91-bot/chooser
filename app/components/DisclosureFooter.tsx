export default function DisclosureFooter() {
  return (
    <div className="mt-16 border-t border-slate-200 pt-8">
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <svg 
              className="w-6 h-6 text-slate-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          <div className="text-sm text-slate-700 space-y-3">
            <p>
              <strong className="font-semibold text-slate-900">Affiliate Disclosure:</strong>{" "}
              We may receive compensation when you click on links to brokers and products featured on this site. 
              This compensation does not influence our rankings, reviews, or recommendations. 
              We maintain editorial independence and provide objective comparisons.{" "}
              <a 
                href="/disclosure" 
                className="text-blue-600 hover:text-blue-700 underline font-medium"
              >
                Read our full disclosure policy
              </a>.
            </p>
            <p>
              <strong className="font-semibold text-slate-900">Risk Warning:</strong>{" "}
              This website does not provide financial, investment, or trading advice. 
              All information is for educational purposes only. Trading and investing involve substantial risk of loss. 
              You should carefully consider your financial situation and consult with qualified professionals before making any financial decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}