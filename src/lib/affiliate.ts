export const SITE = {
  name: "Candy AI Review",
  domain: "https://candyaireview.com",
  title: "Candy AI Review 2026: Features, Pricing & Is It Worth It?",
  description:
    "Candy AI review 2026 after 6 weeks of testing: image generation, Live Action video, pricing from $3.99/mo, real costs, safety and the best alternatives.",
  affiliateUrl:
    process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://candy.ai/?via=PLACEHOLDER",
} as const;

export function affiliateHref(path = "") {
  const base = SITE.affiliateUrl;
  if (!path) return base;
  try {
    const url = new URL(base);
    // keep tracking params; path unused for now
    return url.toString();
  } catch {
    return base;
  }
}
