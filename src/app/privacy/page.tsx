import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  robots: { index: false, follow: true },
};

export default function PrivacyRedirectPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <p className="text-[var(--muted)]">Moved to the privacy policy page.</p>
      <Link href="/privacy-policy/" className="mt-4 inline-block text-[var(--pink)] hover:underline">
        Continue to Privacy Policy →
      </Link>
      <meta httpEquiv="refresh" content="0;url=/privacy-policy/" />
    </div>
  );
}
