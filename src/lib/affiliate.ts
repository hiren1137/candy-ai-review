export const SITE = {
  name: "Candy AI Review",
  domain: "https://candyaireview.com",
  title: "Candy AI Review 2026: 3 Months on a Paid Account (Photos, Price, Verdict)",
  description:
    "Independent Candy AI review after three months on a paid plan. Face-locked stills, Live Action spend, Reddit billing themes, and whether the annual tier is worth keeping.",
  // Temporary site ref until affiliate approval. Override with NEXT_PUBLIC_AFFILIATE_URL.
  affiliateUrl:
    process.env.NEXT_PUBLIC_AFFILIATE_URL ||
    "https://candy.ai/?ref=candyaireview",
} as const;

export function affiliateHref() {
  return SITE.affiliateUrl;
}
