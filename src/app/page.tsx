import Image from "next/image";
import { CtaButton, ScreenshotSlot } from "@/components/site";
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

      <article className="mx-auto max-w-5xl px-4 pb-24 pt-8 sm:px-6">
        <p className="text-sm uppercase tracking-[0.14em] text-[var(--muted)]">
          Hands-on review · Updated 2026
        </p>

        <div className="mt-3 max-w-3xl">
          <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--accent)] sm:text-4xl">
            Candy AI Review
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--ink)] sm:text-5xl">
            Candy AI Review 2026: 6 Weeks With the AI Girlfriend App
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">{prose.intro}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CtaButton size="lg">Try Candy AI Free</CtaButton>
            <a href="#pricing" className="text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline">
              See 2026 pricing
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-[180px_1fr] sm:items-center">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--paper-deep)] px-5 py-6 text-center">
            <p className="font-[family-name:var(--font-display)] text-5xl text-[var(--score)]">
              {verdict.score}
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">/ 10</p>
            <p className="mt-3 text-xs text-[var(--muted)]">{verdict.label}</p>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-[var(--line)] bg-[var(--paper)]/70 p-4">
            <Image
              src={author.image}
              alt={author.name}
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-full object-cover"
              priority
            />
            <div>
              <p className="font-medium">Reviewed by {author.name}</p>
              <p className="text-sm text-[var(--muted)]">{author.role}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{author.bio}</p>
            </div>
          </div>
        </div>

        <ScreenshotSlot
          id="hero-home"
          caption="Candy AI home / character gallery with the companion builder visible"
        />

        <section className="prose-review">
          <h2 id="alternatives">Candy AI Alternatives</h2>
          <p>{prose.alternativesLead}</p>
        </section>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {alternatives.map((alt) => (
            <div
              key={alt.name}
              className="rounded-xl border border-[var(--line)] bg-[var(--paper)]/80 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--accent)]">{alt.badge}</p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl">{alt.name}</h3>
                </div>
                <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--score)]">
                  {alt.score}
                </p>
              </div>
              <p className="mt-2 text-sm text-[var(--muted)]">{alt.summary}</p>
              <ul className="mt-3 space-y-1 text-sm">
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
            <div key={row.label} className="rounded-lg border border-[var(--line)] bg-[var(--paper)]/60 px-4 py-3">
              <dt className="text-xs uppercase tracking-wide text-[var(--muted)]">{row.label}</dt>
              <dd className="mt-1 text-sm font-medium">{row.value}</dd>
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
                <span>{row.label}</span>
                <span className="font-medium">{row.score.toFixed(1)}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[var(--paper-deep)]">
                <div
                  className="h-full rounded-full bg-[var(--accent)]"
                  style={{ width: `${row.score * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <section className="prose-review">
          <h2 id="overview">Candy AI Overview</h2>
          <p>{prose.overview}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <strong>Overall score:</strong> {verdict.score} / 10
            </li>
            <li>
              <strong>Best for:</strong> {verdict.bestFor}
            </li>
            <li>
              <strong>Biggest weakness:</strong> {verdict.weakest}
            </li>
            <li>
              <strong>Real monthly cost:</strong> {verdict.realMonthly}
            </li>
            <li>
              <strong>Top alternative:</strong> {verdict.topAlt}
            </li>
          </ul>

          <h2 id="what-is">What is Candy AI?</h2>
          <p>{prose.whatIs}</p>

          <h2 id="legit">Is Candy AI Legit?</h2>
          <p>{prose.legit}</p>
          <h3 id="safe">Is Candy AI Safe?</h3>
          <p>{prose.safe}</p>

          <h2 id="how-to">How to Use Candy AI?</h2>
        </section>

        <ol className="mt-4 space-y-3">
          {howToSteps.map((step, i) => (
            <li key={step} className="flex gap-3 rounded-lg border border-[var(--line)] bg-[var(--paper)]/70 px-4 py-3">
              <span className="font-[family-name:var(--font-display)] text-lg text-[var(--accent)]">{i + 1}</span>
              <span className="text-sm leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>

        <ScreenshotSlot
          id="character-builder"
          caption="Character builder screen showing appearance, personality, and voice controls"
        />

        <section className="prose-review">
          <h3 id="free">How to Use Candy AI for Free?</h3>
          <p>{prose.howToFree}</p>

          <h2 id="how-works">How Does Candy AI Work?</h2>
          <p>{prose.howWorks}</p>
        </section>

        <ScreenshotSlot
          id="chat-session"
          caption="Live chat session with a companion reply and media prompt visible"
        />

        <section className="prose-review">
          <h2 id="features">What Can Candy AI Do?</h2>
        </section>
        <div className="mt-4 space-y-5">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-[var(--line)] bg-[var(--paper)]/70 p-5">
              <h3 className="font-[family-name:var(--font-display)] text-xl">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{feature.body}</p>
            </div>
          ))}
        </div>

        <ScreenshotSlot
          id="image-output"
          caption="On-model photorealistic image output from the V2 generator"
        />
        <ScreenshotSlot
          id="live-action"
          caption="Live Action / video generation UI or a short clip frame of a character"
        />

        <section className="prose-review">
          <h2 id="good">Is Candy AI Good?</h2>
          <p>{prose.isGood}</p>
          <h3 id="pros">Pros</h3>
        </section>
        <ul className="mt-2 space-y-2 text-sm">
          {pros.map((item) => (
            <li key={item} className="rounded-md bg-[var(--paper-deep)] px-3 py-2">
              + {item}
            </li>
          ))}
        </ul>
        <section className="prose-review">
          <h3 id="cons">Cons</h3>
        </section>
        <ul className="mt-2 space-y-2 text-sm">
          {cons.map((item) => (
            <li key={item} className="rounded-md border border-[var(--line)] px-3 py-2">
              − {item}
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

        <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--line)]">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[var(--paper-deep)] text-xs uppercase tracking-wide text-[var(--muted)]">
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
                  className={row.highlight ? "bg-[var(--hero-glow)]" : "bg-[var(--paper)]/50"}
                >
                  <td className="px-4 py-3 font-medium">
                    {row.plan}
                    {row.highlight ? " · Best value" : ""}
                  </td>
                  <td className="px-4 py-3">{row.price}</td>
                  <td className="px-4 py-3">{row.tokens}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ScreenshotSlot
          id="pricing-screen"
          caption="Official Candy AI pricing screen with monthly / quarterly / annual plans"
        />

        <section className="prose-review">
          <h2 id="promo">Candy AI Promo Codes</h2>
          <p>{prose.promo}</p>

          <h2 id="reviews">Candy AI Reviews</h2>
          <p>{prose.reviewsLead}</p>
        </section>

        <div className="mt-4 space-y-4">
          {userThemes.map((item) => (
            <blockquote
              key={item.quote}
              className="rounded-xl border border-[var(--line)] bg-[var(--paper)]/80 p-5"
            >
              <p className="text-sm leading-relaxed">“{item.quote}”</p>
              <footer className="mt-3 text-xs text-[var(--muted)]">
                {"★".repeat(item.stars)}
                {"☆".repeat(5 - item.stars)} · {item.source}
              </footer>
            </blockquote>
          ))}
        </div>

        <section className="prose-review">
          <h2 id="faq">FAQ</h2>
        </section>
        <div className="mt-4 space-y-3">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-[var(--line)] bg-[var(--paper)]/70 px-4 py-3"
            >
              <summary className="cursor-pointer list-none font-medium marker:content-none">
                {item.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.a}</p>
            </details>
          ))}
        </div>

        <section className="prose-review">
          <h2 id="ready">Ready to try Candy AI?</h2>
          <p>{prose.cta}</p>
        </section>

        <div className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--paper-deep)] p-6 sm:p-8">
          <p className="font-[family-name:var(--font-display)] text-2xl">Open Candy AI and build a companion</p>
          <p className="mt-2 max-w-xl text-sm text-[var(--muted)]">
            Free tier for text sampling. Annual plan for the lowest sticker price. Media features use tokens.
          </p>
          <div className="mt-5">
            <CtaButton size="lg">Try Candy AI Now</CtaButton>
          </div>
        </div>
      </article>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--paper)]/95 p-3 backdrop-blur sm:hidden">
        <CtaButton className="w-full" size="lg">
          Try Candy AI
        </CtaButton>
      </div>
    </>
  );
}
