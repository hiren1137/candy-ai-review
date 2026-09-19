import Image from "next/image";
import type { Metadata } from "next";
import { CtaButton, ReviewImage } from "@/components/site";
import {
  alternatives,
  author,
  cons,
  faq,
  features,
  glance,
  howToSteps,
  pricing,
  pros,
  scoreBreakdown,
  userThemes,
  verdict,
} from "@/content/review";
import { prose } from "@/content/prose";
import { SITE } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: `${SITE.domain}/` },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: `${SITE.domain}/`,
    type: "article",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "SoftwareApplication",
          name: "Candy AI",
          applicationCategory: "EntertainmentApplication",
          operatingSystem: "Web, Android",
        },
        author: {
          "@type": "Person",
          name: author.name,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: verdict.score,
          bestRating: 10,
        },
        name: SITE.title,
        reviewBody: prose.intro,
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-5xl px-4 pb-24 pt-8 sm:px-6 sm:pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--pink)]">
          Hands-on review · Updated 2026
        </p>

        <div className="mt-3 max-w-3xl">
          <p className="mb-2 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--pink)]">
            candy<span className="text-white">.</span>ai review
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            Candy AI Review 2026: 6 Weeks With the AI Girlfriend App
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] text-[var(--text)] sm:text-lg">{prose.intro}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CtaButton size="lg">Try Candy AI Free</CtaButton>
            <a
              href="#pricing"
              className="rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-white hover:border-[var(--pink)] hover:text-[var(--pink)]"
            >
              See 2026 pricing
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-[160px_1fr] sm:items-stretch">
          <div className="card-dark flex flex-col items-center justify-center px-4 py-6 pink-glow">
            <p className="font-[family-name:var(--font-display)] text-5xl font-extrabold text-[var(--score)]">
              {verdict.score}
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">/ 10</p>
            <p className="mt-3 text-center text-xs text-[var(--muted)]">{verdict.label}</p>
          </div>
          <div className="card-dark flex items-center gap-4 p-4">
            <Image
              src={author.image}
              alt={author.name}
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-full object-cover ring-2 ring-[var(--pink)]"
              priority
            />
            <div>
              <p className="font-semibold text-white">Reviewed by {author.name}</p>
              <p className="text-sm text-[var(--pink)]">{author.role}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{author.bio}</p>
            </div>
          </div>
        </div>

        <ReviewImage
          src="/screenshots/hero-home.png"
          alt="Candy AI home screen with featured characters gallery"
          caption="Candy AI home: featured characters, filters, and the companion gallery"
          priority
        />

        <section className="prose-review">
          <h2 id="alternatives">Candy AI Alternatives</h2>
          <p>{prose.alternativesLead}</p>
        </section>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {alternatives.map((alt) => (
            <div
              key={alt.name}
              className={`card-dark p-5 ${alt.cta === "primary" ? "pink-glow border-[var(--pink)]/40" : ""}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--pink)]">{alt.badge}</p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold">{alt.name}</h3>
                </div>
                <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--score)]">
                  {alt.score}
                </p>
              </div>
              <p className="mt-2 text-sm text-[var(--text)]">{alt.summary}</p>
              <ul className="mt-3 space-y-1 text-sm text-[var(--text)]">
                {alt.points.map((point) => (
                  <li key={point}>· {point}</li>
                ))}
              </ul>
              {alt.cta === "primary" ? (
                <div className="mt-4">
                  <CtaButton>Visit Candy AI</CtaButton>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <section className="prose-review">
          <h2 id="glance">Candy AI at a glance</h2>
        </section>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {glance.map((row) => (
            <div key={row.label} className="card-dark px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{row.label}</dt>
              <dd className="mt-1 text-sm font-medium text-white">{row.value}</dd>
            </div>
          ))}
        </dl>

        <section className="prose-review">
          <h2 id="scores">Score breakdown</h2>
        </section>
        <div className="mt-4 space-y-3">
          {scoreBreakdown.map((row) => (
            <div key={row.key}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-[var(--text)]">{row.label}</span>
                <span className="font-semibold text-white">{row.score.toFixed(1)}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[var(--bg-soft)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--pink-deep)] to-[var(--pink)]"
                  style={{ width: `${row.score * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <section className="prose-review">
          <h2 id="overview">Candy AI Overview</h2>
          <p>{prose.overview}</p>
          <ul className="mt-4 space-y-2 text-[17px] text-[var(--text)]">
            <li>
              <strong className="text-white">Overall score:</strong> {verdict.score} / 10
            </li>
            <li>
              <strong className="text-white">Best for:</strong> {verdict.bestFor}
            </li>
            <li>
              <strong className="text-white">Biggest weakness:</strong> {verdict.weakest}
            </li>
            <li>
              <strong className="text-white">Real monthly cost:</strong> {verdict.realMonthly}
            </li>
            <li>
              <strong className="text-white">Top alternative:</strong> {verdict.topAlt}
            </li>
          </ul>

          <h2 id="what-is">What is Candy AI?</h2>
          <p>{prose.whatIs}</p>

          <h2 id="legit">Is Candy AI Legit?</h2>
          <p>{prose.legit}</p>
          <h3 id="safe">Is Candy AI Safe?</h3>
          <p>{prose.safe}</p>

          <h2 id="how-to">How to Use Candy AI?</h2>
          <p>{prose.howToLead}</p>
        </section>

        <ol className="mt-4 space-y-3">
          {howToSteps.map((step, i) => (
            <li key={step} className="card-dark flex gap-3 px-4 py-3">
              <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--pink)]">
                {i + 1}
              </span>
              <span className="text-[15px] leading-relaxed text-[var(--text)]">{step}</span>
            </li>
          ))}
        </ol>

        <ReviewImage
          src="/screenshots/character-builder.png"
          alt="Candy AI character creator with realistic and anime style options"
          caption="Create your AI girl: realistic or anime style, then customize looks and personality"
        />

        <section className="prose-review">
          <h3 id="free">How to Use Candy AI for Free?</h3>
          <p>{prose.howToFree}</p>

          <h2 id="how-works">How Does Candy AI Work?</h2>
          <p>{prose.howWorks}</p>
        </section>

        <ReviewImage
          src="/screenshots/chat-session.png"
          alt="Candy AI chat session with a photorealistic companion"
          caption="Live chat with a companion — consistent face, Chat Now entry, and like count"
        />

        <section className="prose-review">
          <h2 id="features">What Can Candy AI Do?</h2>
          <p>{prose.featuresLead}</p>
        </section>
        <div className="mt-4 space-y-4">
          {features.map((feature) => (
            <div key={feature.title} className="card-dark p-5">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--text)]">{feature.body}</p>
            </div>
          ))}
        </div>

        <ReviewImage
          src="/screenshots/live-action.png"
          alt="Candy AI Shorts and Live Action style video episode player"
          caption="Shorts / Live Action style video: episodic clips with locked premium episodes"
        />

        <section className="prose-review">
          <h2 id="good">Is Candy AI Good?</h2>
          <p>{prose.isGood}</p>
          <h3 id="pros">Pros</h3>
        </section>
        <ul className="mt-2 space-y-2 text-sm">
          {pros.map((item) => (
            <li key={item} className="rounded-xl bg-[var(--bg-soft)] px-3 py-2 text-[var(--text)]">
              <span className="text-[var(--pink)]">+</span> {item}
            </li>
          ))}
        </ul>
        <section className="prose-review">
          <h3 id="cons">Cons</h3>
        </section>
        <ul className="mt-2 space-y-2 text-sm">
          {cons.map((item) => (
            <li key={item} className="card-dark px-3 py-2 text-[var(--text)]">
              <span className="text-[var(--muted)]">−</span> {item}
            </li>
          ))}
        </ul>

        <section className="prose-review">
          <h3 id="worth-it">Is Candy AI Worth It?</h3>
          <p>{prose.worthIt}</p>
          <div className="my-6">
            <CtaButton size="lg">Start on Candy AI</CtaButton>
          </div>

          <h2 id="pricing">How Much Does Candy AI Cost?</h2>
          <p>{prose.costExtra}</p>
        </section>

        <div className="mt-4 overflow-x-auto rounded-2xl border border-[var(--line)]">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[var(--bg-soft)] text-xs uppercase tracking-wide text-[var(--muted)]">
              <tr>
                <th className="px-4 py-3">Plan</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Tokens</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((row) => (
                <tr
                  key={row.plan}
                  className={
                    row.highlight
                      ? "border-t border-[var(--pink)]/30 bg-[rgba(255,45,120,0.08)]"
                      : "border-t border-[var(--line)] bg-[var(--bg-card)]"
                  }
                >
                  <td className="px-4 py-3 font-medium text-white">
                    {row.plan}
                    {row.highlight ? (
                      <span className="ml-2 rounded-full bg-[var(--pink)] px-2 py-0.5 text-[10px] font-bold uppercase">
                        Best value
                      </span>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-[#d4d4d4]">{row.price}</td>
                  <td className="px-4 py-3 text-[#d4d4d4]">{row.tokens}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[var(--muted)]">
          Pricing screenshot still needed from checkout. Numbers above reflect the 2026 consensus used in this review.
        </p>

        <section className="prose-review">
          <h2 id="promo">Candy AI Promo Codes</h2>
          <p>{prose.promo}</p>

          <h2 id="reviews">Candy AI Reviews</h2>
          <p>{prose.reviewsLead}</p>
        </section>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {userThemes.map((item) => (
            <blockquote key={item.handle} className="card-dark flex flex-col p-5">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f0506e] to-[#5b46e0]"
                    aria-hidden
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2h19.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </span>
                  <cite className="not-italic text-[15px] font-semibold text-white">{item.handle}</cite>
                </div>
                <span className="shrink-0 text-[13px] tracking-tight text-[var(--pink)]" aria-label={`${item.stars} out of 5 stars`}>
                  {"★".repeat(item.stars)}
                  <span className="text-[#3a3a44]">{"★".repeat(5 - item.stars)}</span>
                </span>
              </div>
              <p className="text-[15px] leading-[1.65] text-[var(--text)]">{item.quote}</p>
            </blockquote>
          ))}
        </div>

        <section className="prose-review">
          <h2 id="faq">FAQ</h2>
        </section>
        <div className="mt-4 space-y-3">
          {faq.map((item) => (
            <details key={item.q} className="card-dark group px-4 py-3">
              <summary className="cursor-pointer list-none font-semibold text-white marker:content-none">
                {item.q}
              </summary>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--text)]">{item.a}</p>
            </details>
          ))}
        </div>

        <section className="prose-review">
          <h2 id="ready">Ready to try Candy AI?</h2>
          <p>{prose.cta}</p>
        </section>

        <div className="mt-6 rounded-3xl border border-[var(--pink)]/40 bg-gradient-to-br from-[rgba(255,45,120,0.18)] to-[var(--bg-card)] p-6 pink-glow sm:p-8">
          <p className="font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
            Open candy<span className="text-[var(--pink)]">.</span>ai and build a companion
          </p>
          <p className="mt-2 max-w-xl text-sm text-[var(--muted)]">
            Sample free text first. Switch to the annual plan if the stills convince you. Media draws from tokens.
          </p>
          <div className="mt-5">
            <CtaButton size="lg">Try Candy AI Now</CtaButton>
          </div>
        </div>
      </article>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-black/90 p-3 backdrop-blur sm:hidden">
        <CtaButton className="w-full" size="lg">
          Try Candy AI
        </CtaButton>
      </div>
    </>
  );
}
