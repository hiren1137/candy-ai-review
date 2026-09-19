export const SITE = {
  name: "Candy AI Review",
  domain: "https://candyaireview.com",
  title: "Candy AI Review (2026) — Photos, Token Costs & Who Should Subscribe",
  description:
    "Paid-seat Candy AI review from six weeks of daily use: V2 stills, Live Action clips, plan math from free to annual, token burn, and a clear buy or skip call.",
  // Temporary site ref until affiliate approval. Override with NEXT_PUBLIC_AFFILIATE_URL.
  affiliateUrl:
    process.env.NEXT_PUBLIC_AFFILIATE_URL ||
    "https://candy.ai/?ref=candyaireview",
} as const;

export function affiliateHref() {
  return SITE.affiliateUrl;
}
