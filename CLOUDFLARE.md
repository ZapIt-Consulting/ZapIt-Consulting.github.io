# Deploying to Cloudflare Pages

This project is a Vite SPA and deploys to Cloudflare Pages as static assets. The Supabase backend (DB + `send-contact-email` edge function) remains unchanged and is called from the browser.

## One-time setup

1. Install Wrangler: `npm i -g wrangler`
2. Authenticate: `wrangler login`
3. Create a Pages project (first deploy will prompt): `wrangler pages project create zapit-website --production-branch main`

## Deploy

```bash
npm run build
wrangler pages deploy dist --project-name zapit-website
```

## Git-based deploys (recommended)

In the Cloudflare dashboard → Pages → Create project → Connect to Git:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Environment variables:** copy from `.env`
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_PUBLISHABLE_KEY`
  - `VITE_SUPABASE_PROJECT_ID`

## Files

- `wrangler.toml` — Pages project config
- `public/_redirects` — SPA fallback so client routes (e.g. `/services`) work on refresh
- `public/_headers` — long cache for hashed assets, basic security headers

## Notes

- No code changes were made; the app continues to work on Lovable hosting.
- The Supabase edge function still deploys via Lovable/Supabase automatically — Cloudflare hosts only the frontend.
