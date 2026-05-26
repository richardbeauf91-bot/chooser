// Indicative trading costs per broker — standard accounts, round-turn (open + close).
// All spread costs expressed as £ per £10,000 of notional exposure.
// Overnight financing expressed as annual % applied daily.
// Figures are representative typical values — actual costs vary by market conditions.

export type Instrument = "eurusd" | "gbpusd" | "gold" | "ftse100" | "us500";

export const INSTRUMENTS: Record<Instrument, { label: string; description: string }> = {
  eurusd: { label: "EUR/USD", description: "Most traded forex pair" },
  gbpusd: { label: "GBP/USD", description: "Popular for UK traders" },
  gold:   { label: "Gold (XAU/USD)", description: "Commodity CFD" },
  ftse100: { label: "FTSE 100", description: "UK index CFD" },
  us500:  { label: "S&P 500", description: "US index CFD" },
};

export type BrokerFeeData = {
  slug: string;
  name: string;
  feeModel: string;
  // Spread cost in £ per £10,000 notional (round-turn)
  spread: Record<Instrument, number>;
  // Annual overnight financing rate (%)
  overnightRate: number;
  // Commission note for display (empty string if spread-only)
  commissionNote: string;
};

export const brokerFees: BrokerFeeData[] = [
  {
    slug: "capital-com",
    name: "Capital.com",
    feeModel: "Spread-only",
    spread: { eurusd: 0.60, gbpusd: 0.90, gold: 1.25, ftse100: 1.25, us500: 0.70 },
    overnightRate: 6.5,
    commissionNote: "",
  },
  {
    slug: "pepperstone",
    name: "Pepperstone",
    feeModel: "Spread-only (Razor: spread + commission)",
    spread: { eurusd: 1.00, gbpusd: 1.20, gold: 1.75, ftse100: 1.25, us500: 0.70 },
    overnightRate: 6.5,
    commissionNote: "Razor account offers tighter spreads + ~£3.50/lot commission",
  },
  {
    slug: "ig",
    name: "IG",
    feeModel: "Spread-only",
    spread: { eurusd: 0.60, gbpusd: 0.90, gold: 1.50, ftse100: 1.25, us500: 0.70 },
    overnightRate: 6.5,
    commissionNote: "",
  },
  {
    slug: "cmc-markets",
    name: "CMC Markets",
    feeModel: "Spread-only",
    spread: { eurusd: 0.70, gbpusd: 1.00, gold: 1.50, ftse100: 1.25, us500: 0.88 },
    overnightRate: 6.5,
    commissionNote: "",
  },
  {
    slug: "plus500",
    name: "Plus500",
    feeModel: "Spread-only",
    spread: { eurusd: 0.80, gbpusd: 1.00, gold: 1.70, ftse100: 2.50, us500: 1.40 },
    overnightRate: 7.0,
    commissionNote: "",
  },
  {
    slug: "etoro",
    name: "eToro",
    feeModel: "Spread-only",
    spread: { eurusd: 1.00, gbpusd: 1.50, gold: 2.25, ftse100: 3.75, us500: 1.32 },
    overnightRate: 6.5,
    commissionNote: "",
  },
  {
    slug: "interactive-brokers",
    name: "Interactive Brokers",
    feeModel: "Commission + tight spread",
    spread: { eurusd: 0.55, gbpusd: 0.55, gold: 0.75, ftse100: 0.63, us500: 0.18 },
    overnightRate: 5.5,
    commissionNote: "Commission-based model — costs shown include typical commission",
  },
  {
    slug: "xtb",
    name: "XTB",
    feeModel: "Spread-only (Pro: spread + commission)",
    spread: { eurusd: 0.80, gbpusd: 1.00, gold: 1.25, ftse100: 1.50, us500: 0.88 },
    overnightRate: 7.0,
    commissionNote: "Pro account offers tighter spreads + commission",
  },
  {
    slug: "avatrade",
    name: "AvaTrade",
    feeModel: "Spread-only",
    spread: { eurusd: 0.90, gbpusd: 1.20, gold: 1.70, ftse100: 1.88, us500: 0.88 },
    overnightRate: 6.0,
    commissionNote: "",
  },
  {
    slug: "fp-markets",
    name: "FP Markets",
    feeModel: "Spread-only (Raw: spread + commission)",
    spread: { eurusd: 1.20, gbpusd: 1.40, gold: 1.25, ftse100: 1.88, us500: 0.70 },
    overnightRate: 6.5,
    commissionNote: "Raw account offers tighter spreads + ~£3/lot commission",
  },
  {
    slug: "trading-212",
    name: "Trading 212",
    feeModel: "Zero commission (0.15% FX fee on non-GBP)",
    spread: { eurusd: 0.90, gbpusd: 0.80, gold: 1.80, ftse100: 1.50, us500: 0.90 },
    overnightRate: 6.5,
    commissionNote: "0.15% currency conversion fee applies on non-GBP instruments",
  },
  {
    slug: "oanda",
    name: "OANDA",
    feeModel: "Variable spread (Core: spread + commission)",
    spread: { eurusd: 1.00, gbpusd: 1.20, gold: 1.60, ftse100: 1.25, us500: 0.80 },
    overnightRate: 6.5,
    commissionNote: "Core account offers tighter spreads + commission for active traders",
  },
  {
    slug: "saxo-bank",
    name: "Saxo Bank",
    feeModel: "Commission-based (tiered Classic/Platinum/VIP)",
    spread: { eurusd: 0.80, gbpusd: 1.00, gold: 1.50, ftse100: 1.50, us500: 0.80 },
    overnightRate: 6.5,
    commissionNote: "Classic tier — pricing improves significantly at Platinum/VIP levels",
  },
  {
    slug: "tickmill",
    name: "Tickmill",
    feeModel: "Classic (spread-only) or Pro (raw + commission)",
    spread: { eurusd: 1.60, gbpusd: 1.80, gold: 2.00, ftse100: 1.50, us500: 0.80 },
    overnightRate: 6.5,
    commissionNote: "Raw account: raw spreads from 0.0 pips + $6/lot round-turn ($3/side) — much cheaper for active traders",
  },
];
