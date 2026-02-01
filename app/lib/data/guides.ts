import { ContentPage } from "../types/content";

export const guides: ContentPage[] = [
  {
    slug: "how-to-choose-a-broker",
    seoTitle: "How to Choose a Trading Broker",
    seoDescription: "Learn how to choose a trading broker based on fees, regulation, and platforms.",
    body: [
      {
        heading: "Regulation",
        content:
          "Always check whether a broker is regulated by a recognised authority such as the FCA."
      },
      {
        heading: "Fees",
        content:
          "Compare spreads, commissions, and non-trading fees before opening an account."
      }
    ],
    faq: [
      {
        question: "Is a regulated broker safer?",
        answer: "Regulation provides oversight but does not eliminate trading risk."
      }
    ],
    lastUpdated: "2025-01-15"
  },
  {
    slug: "cfds-explained",
    seoTitle: "What Are CFDs?",
    seoDescription: "Understand how CFDs work, including risks and costs.",
    body: [
      {
        heading: "What is a CFD?",
        content:
          "A Contract for Difference allows you to speculate on price movements without owning the asset."
      }
    ],
    lastUpdated: "2025-01-15"
  },
  {
    slug: "spread-vs-commission",
    seoTitle: "Spread vs Commission Trading",
    seoDescription: "Learn the difference between spread-only and commission-based brokers.",
    body: [
      {
        heading: "Spread-only pricing",
        content:
          "The broker earns through the spread between bid and ask prices."
      }
    ],
    lastUpdated: "2025-01-15"
  }
];
