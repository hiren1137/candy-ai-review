import Link from "next/link";
import { SITE, affiliateHref } from "@/lib/affiliate";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--ink)]">
          {SITE.name}
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <a href="#pricing" className="hidden text-[var(--muted)] hover:text-[var(--ink)] sm:inline">
            Pricing
          </a>
          <a href="#faq" className="hidden text-[var(--muted)] hover:text-[var(--ink)] sm:inline">
            FAQ
          </a>
          <a
            href={affiliateHref()}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="rounded-md bg-[var(--accent)] px-3 py-1.5 font-medium text-[var(--accent-fg)] hover:opacity-90"
          >
            Try Candy AI
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--line)] bg-[var(--paper-deep)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 text-sm text-[var(--muted)] sm:px-6">
        <p className="font-[family-name:var(--font-display)] text-lg text-[var(--ink)]">{SITE.name}</p>
        <p>
          Independent review site. We may earn a commission when you buy through our links. That fee never
          changes the product price you pay. 18+ only.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy-policy" className="hover:text-[var(--ink)]">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[var(--ink)]">
            Terms
          </Link>
          <a href={affiliateHref()} target="_blank" rel="nofollow sponsored noopener" className="hover:text-[var(--ink)]">
            Visit Candy AI
          </a>
        </div>
        <p>© {new Date().getFullYear()} {SITE.name}</p>
      </div>
    </footer>
  );
}

export function CtaButton({
  children = "Try Candy AI",
  className,
  size = "md",
}: {
  children?: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <a
      href={affiliateHref()}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-[var(--accent)] font-semibold text-[var(--accent-fg)] hover:opacity-90 transition-opacity",
        size === "lg" ? "px-6 py-3 text-base" : "px-4 py-2 text-sm",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function ScreenshotSlot({
  id,
  caption,
}: {
  id: string;
  caption: string;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-dashed border-[var(--line)] bg-[var(--paper-deep)]">
      <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 px-6 text-center">
        <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Screenshot needed · {id}</p>
        <p className="max-w-md text-sm text-[var(--ink)]">{caption}</p>
      </div>
      <figcaption className="border-t border-[var(--line)] px-4 py-2 text-xs text-[var(--muted)]">
        Replace with real capture from candy.ai. See README for the full shot list.
      </figcaption>
    </figure>
  );
}
