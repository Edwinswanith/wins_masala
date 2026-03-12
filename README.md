# WINS Chilli Powder — Parallax Website

A cinematic single-page parallax website for **WINS Chilli Powder**, a Tamil-rooted spice brand established in 1996.

## Live preview

> Run locally — see setup below.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Playfair Display + DM Sans (Google Fonts via `next/font`) |
| Animation | CSS scroll-driven + `IntersectionObserver` |
| Testing | Playwright |

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run lint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Font loading, metadata
│   ├── page.tsx          # 8-section page assembly
│   └── globals.css       # Tailwind v4 @theme tokens, reveal animations
└── components/
    ├── HeroParallax.tsx  # Scroll-scrubbed WebM + 4-phase dynamic text
    ├── TrustStrip.tsx    # 4 proof stat cards
    ├── SpecialSection.tsx# Colour / Heat / Depth pillars
    ├── ChilliJourney.tsx # Historical timeline
    ├── UsesGrid.tsx      # 3×2 use-case grid with SVG icons
    ├── AboutWins.tsx     # Brand story
    ├── FAQ.tsx           # Animated accordion
    └── FinalCTA.tsx      # Closing CTA + footer

public/
└── video/
    └── wins-hero.webm    # Scroll-scrubbed hero video
```

## Key features

### Scroll-driven hero
The hero spans 240vh. As the user scrolls, two things happen simultaneously:
- The WebM video scrubs forward via `video.currentTime = progress * video.duration`
- The supporting copy crossfades through 4 narrative phases (Introduction → Colour → Heat → Call to act)

### 4-phase dynamic text
Each phase has its own badge, tagline, sub-line, and body copy. Overlapping opacity windows create smooth crossfades with no hard cuts.

| Phase | Scroll | Story beat |
|---|---|---|
| 0 | 0–28% | Introduction — Since 1996 |
| 1 | 25–52% | The colour story |
| 2 | 50–77% | The heat story |
| 3 | 75–100% | Ready for your kitchen |

### Accessibility
- `prefers-reduced-motion` detected on mount — disables scroll-scrub and phase transitions, shows static Phase 0 copy only
- All CTAs keyboard-accessible
- Phase text blocks use `aria-hidden` when opacity < 0.1

## Pending (needs real assets)
- `public/images/wins-hero-poster.webp` — static fallback poster for reduced-motion
- `public/images/wins-pack-shot.webp` — product photo for About section
- Wire CTA `href` values to actual shop/wholesale URLs
- Update `mailto:` in FinalCTA to real contact email
- Add Testimonials component once verified reviews exist

## Brand colours

| Token | Hex |
|---|---|
| Chilli red | `#C1380E` |
| Maroon | `#8B1A1A` |
| Gold | `#D4A843` |
| Off-white | `#FAF6F0` |
| Ink | `#0D0604` |
