
## What We're Building

A complete redesign of `src/pages/Index.tsx` — the Folds of Grace homepage — replacing the current 5-section layout with a focused, conversion-oriented 7-section page that guides overwhelmed families straight to scheduling a pickup.

## Page Structure (top to bottom)

```
1. HERO          — Full-width, navy overlay, new headline + sub-headline + CTA
2. PROMISE STRIP — 3-column icon strip (Done For You | 24-48 Hours | Flat-Rate)
3. HOW IT WORKS  — 3-step visual: Porch → Wash & Fold → Back at Door
4. THE DIFFERENCE — Centered text block, "We Wash, We Fold... and We Pray."
5. TESTIMONIALS  — 5 named reviews in a 2-col + 1-col grid (no carousel needed)
6. FOUNDER       — Dana section: avatar placeholder + quote + link to Our Story
7. FINAL CTA     — Full-width navy banner "You Deserve a Little Grace."
```

## Key Changes vs. Current Page

| Current | New |
|---|---|
| Headline "Your Laundry, Done Right." | "Finally, a Solution for Your Laundry." |
| Problem cards section (3 emoji cards) | Replaced by the Promise Strip (icon strip) |
| 4-step process with connector lines | 3-step process: Porch → Wash → Door |
| 3 testimonials in a grid | 5 named testimonials (5th spans full width on mobile) |
| No faith section | "We Wash, We Fold... and We Pray." centered section added |
| No founder section | Dana founder section with quote + link |
| CTA: "Ready to reclaim your weekend?" | CTA: "You Deserve a Little Grace." |

## Implementation Details

**File changed:** `src/pages/Index.tsx` only — no other files need modification.

**Promise Strip icons:** Use Lucide icons already installed:
- `Sparkles` → Done For You
- `Clock` → 24-48 Hours  
- `Tag` → Flat-Rate Pricing

**How It Works (3 steps):** Large numbered circles connected by dashed gold lines. Single row on desktop (`grid-cols-3`), stacked on mobile. Step icons use Lucide `DoorOpen`, `WashingMachine` (fallback `Shirt`), `Home`.

**The Difference section:** Sage-light background (`bg-secondary`), centered, italic Playfair Display quote, gold divider above and below.

**Testimonials:** 5 reviews in a responsive grid — `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`. 5th card centered on the last row using `col-span` trick or `mx-auto`. All 5 reviews are named with real locations.

**Founder section:** Two-column layout (image left, text right). Uses a soft circular placeholder div (navy bg with initials "D") since no photo is available yet. Includes a warm quote and an arrow link to `/our-story`.

**Animations:** Hero text uses existing `animate-fade-up`. Promise icons get staggered `animation-delay` via inline styles.

**No new dependencies** — uses only installed packages (lucide-react, react-router-dom, existing design tokens).
