export const SITE = {
  name: "Candy AI Review",
  domain: "https://candyaireview.com",
  title: "Candy AI Review 2026: Features, Pricing & Is It Worth It?",
  description:
    "Candy AI review 2026 after 6 weeks of testing: image generation, Live Action video, pricing from $3.99/mo, real costs, safety and the best alternatives.",
  // Temporary site ref until affiliate approval. Override with NEXT_PUBLIC_AFFILIATE_URL.
  affiliateUrl:
    process.env.NEXT_PUBLIC_AFFILIATE_URL ||
    "https://candy.ai/?ref=candyaireview",
} as const;

export function affiliateHref() {
  return SITE.affiliateUrl;
}
