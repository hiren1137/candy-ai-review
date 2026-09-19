# Candy AI Review (candyaireview.com)

Independent G2-style Candy AI review site. Exact-match domain for people searching Candy AI reviews. Built with Next.js (static export for Cloudflare Pages).

## Run locally

```bash
npm install
cp .env.example .env.local   # optional: paste affiliate URL
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Affiliate link

Until affiliate approval, CTAs default to `https://candy.ai/?ref=candyaireview` via `src/lib/affiliate.ts`. Override with `NEXT_PUBLIC_AFFILIATE_URL` in `.env.local` when you have a tracking link.

## Deploy on Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Authorize GitHub and select **`hiren1137/candy-ai-review`**
3. Build settings:
   - **Framework preset:** Next.js (Static HTML Export) or None
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (default)
4. Click **Save and Deploy**
5. After deploy, open the `*.pages.dev` URL to verify
6. **Custom domain:** Pages project → **Custom domains** → add `candyaireview.com` and `www`
7. In your domain DNS (Cloudflare DNS if the domain is on Cloudflare):
   - Follow the CNAME/records Cloudflare shows for Pages
   - Or if the domain is already on Cloudflare, attach it in Custom domains and it will configure DNS for you

### Local static preview

```bash
npm run build
npx serve out
```

## Screenshots included

Real candy.ai captures live in `public/screenshots/`:

| File | Used for |
|------|----------|
| `hero-home.png` | Home / featured gallery |
| `character-builder.png` | Create Dream AI Girl flow |
| `chat-session.png` | Companion chat card |
| `live-action.png` | Shorts / video episodes |

Still useful to add later: official **pricing/checkout** screen.

## Pages

- `/` full review
- `/privacy-policy`
- `/terms`
- `/sitemap.xml`
- `/robots.txt`
