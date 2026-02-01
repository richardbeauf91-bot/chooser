import { Broker } from "@/lib/types/broker";

export type ChooserInput = {
  country: string;
  instrument: string;
  experience: "beginner" | "intermediate" | "advanced";
  priority: "low-fees" | "simplicity" | "advanced-tools" | "regulation";
};

export function scoreBroker(
  broker: Broker,
  input: ChooserInput
): number {
  let score = 0;

  // Country availability (hard filter elsewhere, but still weighted)
  if (broker.availabilityCountries.includes(input.country)) {
    score += 3;
  }

  // Instrument match
  if (broker.instruments.includes(input.instrument)) {
    score += 3;
  }

  // Experience fit
  if (broker.bestForTags.includes(input.experience)) {
    score += 2;
  }

  // Priority weighting
  if (broker.bestForTags.includes(input.priority)) {
    score += 3;
  }

  // Regulation priority
  if (
    input.priority === "regulation" &&
    broker.regulators.length > 0
  ) {
    score += 2;
  }

  return score;
}
