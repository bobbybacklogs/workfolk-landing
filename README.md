# Workfolk — Landing Page

Marketing/early-access landing page for **Workfolk** (the artist formerly known as Gateway Workers): an autonomous team built to move complex work forward.

- Next.js 16 + Tailwind CSS v4, fully static (`next build` prerenders everything).
- Dark workshop aesthetic, amber accent, scroll-reveal sections, animated handoff diagram (pure SVG).
- Early-access form composes a `mailto:` to the inbox in `src/components/access-form.tsx` — point `EARLY_ACCESS_EMAIL` at the real inbox before launch.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub and import into Vercel, or:

```bash
npx vercel --prod
```
