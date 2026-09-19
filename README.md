# Candy AI Review (candyaireview.com)

Independent G2-style Candy AI review site. Exact-match domain for people searching Candy AI reviews. Built with Next.js.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional: paste affiliate URL
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Affiliate link

Set `NEXT_PUBLIC_AFFILIATE_URL` in `.env.local` to your CrakRevenue / Candy AI tracking URL. All CTAs read from `src/lib/affiliate.ts`.

## Screenshots to capture from candy.ai

Drop files into `public/screenshots/` then swap the `ScreenshotSlot` placeholders in `src/app/page.tsx`.

| ID | Capture this |
|----|----------------|
| `hero-home` | Home / character gallery with builder entry |
| `character-builder` | Create character: appearance + personality + voice |
| `chat-session` | Chat thread with a normal reply |
| `image-output` | Photorealistic selfie / scene of one consistent character |
| `live-action` | Live Action / video UI or clip frame |
| `pricing-screen` | Official pricing (monthly / quarterly / annual) |

Tips: desktop width ~1280px, crop UI chrome only, blur any personal email if visible, keep SFW marketing-safe crops if you want ad networks later.

## Content rules

See `content/writing/stop-slop/` and `content/writing/ai-ban-list.md`. Research notes (not public): `content/research/candy-ai-signals.md`.

## Pages

- `/` full review
- `/privacy-policy`
- `/terms`
- `/sitemap.xml`
- `/robots.txt`

## Deploy

Deploy to Vercel (or similar), then point `candyaireview.com` DNS to the host. Create a **private** GitHub repo from the Cursor “Create repo” control if you want GitHub hosting separate from this cloud workspace.
