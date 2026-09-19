import Image from "next/image";
import Link from "next/link";
import { SITE, affiliateHref } from "@/lib/affiliate";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight sm:text-xl">
          candy<span className="text-[var(--pink)]">.</span>ai <span className="font-medium text-[var(--muted)]">review</span>
        </Link>
        <nav className="flex items-center gap-2 text-sm sm:gap-3">
          <a href="#pricing" className="hidden text-[var(--muted)] hover:text-white sm:inline">
            Pricing
          </a>
          <a href="#faq" className="hidden text-[var(--muted)] hover:text-white sm:inline">
            FAQ
          </a>
          <a
            href={affiliateHref()}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="btn-pink rounded-full px-4 py-2 text-sm font-semibold"
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
    <footer className="mt-0 border-t border-[var(--line)] bg-black">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-[var(--muted)] sm:px-6">
        <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
          candy<span className="text-[var(--pink)]">.</span>ai review
        </p>
        <p>
          Independent review site. We may earn a commission when you buy through our links. That fee never
          changes the product price you pay. 18+ only.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
          <a href={affiliateHref()} target="_blank" rel="nofollow sponsored noopener" className="hover:text-white">
            Visit Candy AI
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} {SITE.name}
        </p>
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
        "btn-pink inline-flex items-center justify-center rounded-full font-semibold transition",
        size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function ReviewImage({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-card)] pink-glow">
      <div className="relative aspect-[16/10] w-full bg-black">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 960px"
          priority={priority}
        />
      </div>
      <figcaption className="border-t border-[var(--line)] px-4 py-3 text-xs text-[var(--muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}
