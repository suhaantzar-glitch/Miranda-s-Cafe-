/**
 * Testimonials shown on the homepage.
 * TODO: These are PARAPHRASED themes, not verbatim quotes. Replace with real
 * Google reviews (with the reviewer's permission) when available.
 */

export interface Review {
  id: string;
  quote: string;
  author: string;
  theme: string;
}

export const reviews: Review[] = [
  {
    id: "friendly-owners",
    theme: "Friendly owners",
    quote:
      "Rob and Miranda greet you like you've been coming in for years. By the second visit they knew my name and my order.",
    author: "Local regular",
  },
  {
    id: "allergen-friendly",
    theme: "Allergy-friendly",
    quote:
      "I have food allergies and they happily let me look over the bread and sauce ingredients before ordering. That kind of care is rare.",
    author: "Canton visitor",
  },
  {
    id: "mac-and-cheese",
    theme: "Generous portions",
    quote:
      "Fresh, made-to-order sandwiches — and the Vermont cheddar mac & cheese is a seriously generous portion. Worth the trip.",
    author: "St. Lawrence County diner",
  },
];

export const ratingSummary = {
  score: 4.9,
  source: "Google",
};
