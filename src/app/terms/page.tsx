import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: `Terms | ${SITE.name}`,
  description: `Terms of use for ${SITE.name}.`,
  alternates: { canonical: `${SITE.domain}/terms` },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 prose-review">
      <Link href="/" className="text-sm text-[var(--pink)] hover:underline">
        ← Back to review
      </Link>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white">Terms and Conditions</h1>
      <p className="text-[var(--muted)]">Last updated: September 2026</p>
      <h2>Editorial purpose</h2>
      <p>
        {SITE.name} publishes independent opinions about Candy AI and related apps. Content is for adults
        18 years or older.
      </p>
      <h2>Affiliate disclosure</h2>
      <p>
        We may earn a commission when you buy through links on this site. Commissions do not raise the price
        you pay on the partner site.
      </p>
      <h2>No warranty</h2>
      <p>
        Features, prices, and policies change. Confirm details on the official Candy AI site before you
        subscribe. We are not EverAI Limited and do not control the Candy AI product.
      </p>
      <h2>User reviews</h2>
      <p>
        On-page user themes paraphrase public discussion. They are not endorsed statements from named
        individuals unless we receive written permission to quote a person by name.
      </p>
    </div>
  );
}
