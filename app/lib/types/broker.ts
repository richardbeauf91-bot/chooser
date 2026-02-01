export type BrokerAffiliate = {
  primaryCtaText: string;
  affiliateUrl: string;
  termsText?: string;
};

export type Broker = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  logo?: string;
  availabilityCountries: string[];
  regulators: string[];
  instruments: string[];
  products: string[];
  platforms: string[];
  feeModel: string;
  minDeposit: string;
  pros: string[];
  cons: string[];
  bestForTags: string[];
  riskNotes: string[];
  lastUpdated: string;
  affiliate: BrokerAffiliate;
  rating?: number;
};
