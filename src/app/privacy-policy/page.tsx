import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE.name}`,
  description: `Privacy policy for ${SITE.name}.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 prose-review">
      <Link href="/" className="text-sm text-[var(--accent)] hover:underline">
        ← Back to review
      </Link>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl">Privacy Policy</h1>
      <p className="text-[var(--muted)]">Last updated: September 2026</p>
      <p>
        {SITE.name} ({SITE.domain}) publishes product reviews. We collect minimal data needed to run the
        site.
      </p>
      <h2>Information we collect</h2>
      <p>
        Standard server logs may include IP address, browser type, and pages viewed. If we add analytics,
        that tool may set cookies. We do not sell personal contact lists.
      </p>
      <h2>Affiliate links</h2>
      <p>
        Outbound links to Candy AI and related offers may include tracking parameters so partners can credit
        referrals. Those partners process data under their own policies.
      </p>
      <h2>Cookies</h2>
      <p>
        Essential cookies keep the site working. Optional analytics cookies, if enabled later, help us see
        which pages get traffic.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy: use the contact method published on the live domain once email is
        configured.
      </p>
    </div>
  );
}
