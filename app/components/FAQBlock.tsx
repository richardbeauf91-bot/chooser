"use client";

import { useState } from "react";

type Props = {
  faq: { question: string; answer: string }[];
};

export default function FAQBlock({ faq }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faq.length) return null;

  return (
    <section className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faq.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 pr-8">
                {item.question}
              </h3>
              <svg
                className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}