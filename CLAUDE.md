# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Parallex** is a single-page parallax storytelling website for **WINS Chilli Powder** — a Tamil-rooted spice brand. The site opens with a scroll-driven hero video transition and progresses through 8 content sections aimed at building trust and driving purchase intent.

This is a **pre-development project** — the PRD is complete but no frontend code has been written yet. The full specification lives in `PRD.md`.

---

## Recommended Stack

- **Framework**: React / Next.js (or Vite + React)
- **Styling**: Tailwind CSS
- **Scroll animation**: CSS scroll-driven animations (browser-native first, JS fallback)
- **Testing**: Playwright MCP for E2E tests
- **Video format**: MP4 primary + WebM optional

---

## Commands

These commands apply once the project is initialized:

```bash
# Initialize (Next.js)
npx create-next-app@latest . --typescript --tailwind --app

# Dev server
npm run dev

# Build
npm run build

# Lint
npm run lint

# E2E tests (after Playwright setup)
npx playwright test
npx playwright test --headed          # with browser UI
npx playwright test tests/hero.spec.ts # single test file
```

---

## Architecture

**Single-page layout — 8 sections (MVP):**

1. **HeroParallax** — scroll-synced video (`video/wins-chilli-parallax.mp4`). Hero container is 200–240vh tall; left copy is sticky at 100vh; product composition is right-weighted in the final frame.
2. **TrustStrip** — 3–4 proof cards
3. **SpecialSection** — what makes WINS different
4. **UsesGrid** — 6 meal/use contexts
5. **AboutWins** — brand story
6. **FAQ** — 5–7 expandable questions
7. **Testimonials** — hidden until verified reviews exist (FR-9)
8. **FinalCTA** — closing section with primary purchase/wholesale CTA

**Planned component files:**
```
/components
  HeroParallax.tsx
  TrustStrip.tsx
  SpecialSection.tsx
  UsesGrid.tsx
  Testimonials.tsx
  AboutWins.tsx
  FAQ.tsx
  FinalCTA.tsx
```

**Asset folders:**
```
/video
  wins-chilli-parallax.mp4       ← primary hero video
  ezgif-5fc2deb1be10ee82.webm   ← existing WebM (rename/convert to MP4)
/images
  wins-hero-poster.webp
  wins-pack-shot.webp
  wins-uses-1.webp … wins-uses-N.webp
```

---

## Key Technical Constraints

**Hero scroll implementation (FR-2):**
- Map `window.scrollY` → `video.currentTime` smoothly; do not bind heavy work to raw scroll events
- Use CSS `position: sticky` for the hero wrapper; inner video covers viewport
- Prefer `ScrollTimeline` / CSS `animation-timeline: scroll()` where supported

**Performance (section 10.4):**
- Preload only the hero video; lazy-load everything below the fold
- Compress video aggressively — hero text must be HTML, not baked into video frames

**Accessibility (FR-7):**
- `@media (prefers-reduced-motion: reduce)` must show a static poster frame, no scroll-scrub
- All CTAs must be keyboard-accessible with visible focus states

**Analytics hooks (FR-10):**
Track: hero impression, scroll depth at 25/50/75/100%, primary/secondary CTA clicks, FAQ expand, testimonial view, wholesale form open/submit.

**Claims compliance (section 12):**
- Do not add copy that claims "100% pure", "healthiest", "adulteration-free", or any medical benefit
- Only use verified customer reviews; hide testimonial section until real reviews exist

---

## Design Tokens

| Token | Value direction |
|-------|----------------|
| Primary | Deep chilli red |
| Secondary | Maroon |
| Accent | Muted gold |
| Background | Warm off-white |
| Shadow | Dark brown / shadow black |
| Typography | Bold display serif/slab for headings, readable sans-serif for body |

Composition rule: **right = product intensity, left = copy clarity**. Negative space on the left is intentional.

---

## E2E Test Cases (Playwright)

See `PRD.md §17` for the full test plan. Core cases:
1. Hero video element exists + poster fallback present
2. Scroll progression — hero stays sticky, no layout shift, final right-weighted frame visible
3. Primary CTA visible before full scroll completion
4. `prefers-reduced-motion: reduce` → static hero, no scrub required
5. Left-side copy contrast ratio maintained throughout hero states
6. Responsive: desktop / tablet / mobile breakpoints
7. Keyboard navigation through all interactive elements
