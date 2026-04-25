# aadarshrauniyar.com.np

Personal portfolio and case study site. Next.js 14 + Tailwind, statically exported, deployed to GitHub Pages with a custom domain.

## What's here

**Home page** — hero, about, three case study cards, process, full skill stack with magnetic hover pills grouped by category, contact. Hero includes a hidden "Side effects:" row with a Thanos-snap effect — hover it and the whole row disintegrates, implying "no side effects" with this approach to problem-solving.

**Case study pages** at `/work/[slug]/`, each a full narrative (problem → insight → approach → outcomes → under the hood) with a custom SVG diagram:

- `student-analytics` — "formats don't drift" insight, five-sheet mapping diagram
- `ir-connect` — "around the role, not the data" insight, tablet diagram with 7 named tabs, plus a compass mascot callout
- `lead-management` — "fill the gaps, don't replace" insight, two-systems diagram

**SEO**
- Per-page `metadata` via Next.js's metadata API
- `Person` JSON-LD structured data in `<head>`
- `sitemap.xml` auto-generated at build from `app/sitemap.ts`
- `robots.txt` explicitly allows major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)

**Design system**
- Warm paper palette (`#F5F4F1` / `#ECEAE6` / brown accent `#8B7355`)
- Newsreader (serif, headings) + DM Sans (sans, body), loaded from Google Fonts
- Subtle noise texture overlay
- CSS variables for photo-sidebar collapse math, Tailwind for everything else
- Custom italic-to-roman spacing rule so `em` transitions render cleanly regardless of font fallback

## Local dev

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Production build

```bash
npm run build
# → static site exported to ./out/
```

`out/` is a fully static folder you can serve with any HTTP server. It's what the GitHub Actions workflow uploads to Pages.

## Deployment — GitHub Pages

The included `.github/workflows/deploy.yml` workflow rebuilds and publishes to GitHub Pages on every push to `main`. To set it up:

1. Push this repo to `github.com/<your-user>/<your-user>.github.io` (or any repo you'd like to publish from).
2. In the repo's **Settings → Pages**, set **Source** to "GitHub Actions".
3. Push to `main`. The workflow builds, exports, and deploys.
4. The `public/CNAME` file keeps your custom domain `aadarshrauniyar.com.np` wired up.

## Project structure

```
app/
  layout.tsx                 ← root layout, fonts, metadata, JSON-LD
  page.tsx                   ← home page
  globals.css                ← base styles, Tailwind, noise texture, em spacing
  sitemap.ts                 ← dynamic sitemap generator
  work/
    student-analytics/page.tsx    ← full case study
    ir-connect/page.tsx           ← full case study + compass mascot
    lead-management/page.tsx      ← full case study

components/
  PhotoSlideshow.tsx            ← rotating portrait sidebar
  Navigation.tsx                ← 3-section sticky nav
  Magnetic.tsx                  ← spring-physics hover wrapper
  SnapText.tsx                  ← Thanos-snap letter effect (reusable primitive)
  SideEffectsRow.tsx            ← the Thanos-snap side effects row in the hero
  CompassMascot.tsx             ← static compass mascot for IR Connect case study
  StudentAnalyticsDiagram.tsx   ← three-panel mapping diagram
  IRConnectDiagram.tsx          ← tablet frame with 7 tabs + compass
  LeadDashboardDiagram.tsx      ← two-systems complement diagram

public/
  portraits/                 ← JPEG portraits used by the slideshow
  CNAME                      ← custom domain binding
  robots.txt                 ← crawler allowlist
```

## Adding a portrait to the slideshow

Drop a new JPEG into `public/portraits/`, then add an entry to the `PORTRAITS` array in `components/PhotoSlideshow.tsx`:

```tsx
const PORTRAITS: Portrait[] = [
  { src: '/portraits/portrait-studio.jpg', alt: '...', position: 'center 30%' },
  { src: '/portraits/portrait-trek.jpg',   alt: '...', position: 'center 35%' },
  { src: '/portraits/new-photo.jpg',       alt: '...', position: 'center 40%' },
];
```

Keep orientation portrait and image tone in the same palette family. Three or four frames is the sweet spot — rotating two feels like a toggle.

## Writing a new case study

Structure to follow (see `app/work/student-analytics/page.tsx` for the full pattern):

1. **Hero** — one-line hook, role/timeline/stack meta box
2. **01 — The problem** — narrative, grounded in specifics
3. **02 — The insight** — what you understood that others didn't; use `<blockquote className="pull-insight">` for the key line
4. **03 — The approach** — what you built, with a diagram
5. **04 — What it changed** — outcomes, ideally with a 3-number grid
6. **05 — Under the hood** — compact `<dl>` tech notes box for engineer readers
7. **Next/Prev case study nav** at the bottom

Diagrams go in `components/` as their own `'use client'` SVG components. Use the brown accent (`#8B7355`) and the rough filter for a hand-drawn feel — don't let them look like generic architecture diagrams.

## Cloudflare AI-crawl note

Beyond `robots.txt`, if your Cloudflare dashboard has the "Block AI Bots" toggle enabled, it overrides `robots.txt` entirely. Turn it off under **Security → Settings → Bots → Configure → AI Scrapers and Crawlers**, or it doesn't matter what `robots.txt` says.
