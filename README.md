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

Until affiliate approval, CTAs default to `https://candy.ai/?ref=candyaireview` via `src/lib/affiliate.ts`. Override with `NEXT_PUBLIC_AFFILIATE_URL` in `.env.local` when you have a tracking link.

## Screenshots included

Real candy.ai captures live in `public/screenshots/`:

| File | Used for |
|------|----------|
| `hero-home.png` | Home / featured gallery |
| `character-builder.png` | Create Dream AI Girl flow |
| `chat-session.png` | Companion chat card |
| `live-action.png` | Shorts / video episodes |

Still useful to add later: official **pricing/checkout** screen.

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
