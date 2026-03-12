
## What We're Building

A full refactor of `src/pages/OurStory.tsx` — stripping the card/box layout and replacing it with a single-column long-form magazine article layout. One file changed only.

## Page Structure

```
1. HERO              — Charcoal banner (unchanged structure, slight copy polish)
2. ARTICLE BODY      — bg-background, max-w-2xl centered editorial column
   ├── Section heading + opening paragraphs
   ├── LIFESTYLE IMAGE 1 — full-width placeholder strip (hands folding blanket)
   ├── Continued narrative paragraphs
   ├── PULL-QUOTE — large centered Lora italic quote, gold divider above/below
   ├── LIFESTYLE IMAGE 2 — full-width placeholder strip (family in living room)
   ├── "What We're About" section
   └── Closing tagline + CTA
```

## Section Details

**Hero** — Keep `bg-primary py-24`, eyebrow, H1 "Born from a Full Basket", subhead. No changes needed.

**Article Body** (`bg-background py-24 px-4`) — `max-w-2xl mx-auto` column, magazine-style:

- **Opening**: Small gold all-caps section label "It Started at Home", then `h2` removed — narrative flows directly into large body copy. First paragraph slightly enlarged (`text-lg`) as a magazine "deck."
- **Lifestyle Image 1** — `w-full h-72 md:h-96` div, `bg-secondary` warm tone with `hero-laundry.jpg` object-cover. Gold italic caption below: *"Close-up: hands folding a soft baby blanket"* — styled small, right-aligned, muted.
- **More narrative** — 2 paragraphs continuing the story
- **Pull-Quote** — Breaking out of the `max-w-2xl` container via negative margins (`-mx-8 md:-mx-20 lg:-mx-40`), centered block:
  - Thin gold divider line
  - Large Lora italic quote: `text-2xl md:text-3xl lg:text-4xl font-display italic text-primary/80 text-center leading-relaxed py-10 max-w-3xl mx-auto px-8`
  - Attribution: `— Dana, Founder` small gold Lato
  - Thin gold divider line
- **Lifestyle Image 2** — Same strip technique, caption: *"A family, present again — because the laundry's handled."*
- **"What We're About"** section — gold label, no card, just open paragraphs
- **Closing** — Gold divider, italic tagline "We wash, we fold… and we pray.", gold CTA button

## Key Design Details

- No `bg-card`, no `bg-sage-light`, no `shadow-card`, no `rounded-xl` boxes anywhere in the body
- Body text: `font-body text-base text-foreground/75 leading-[1.85]` — generous line-height like a magazine
- Section labels: `font-body text-xs tracking-[0.2em] uppercase text-gold` — same eyebrow style used site-wide
- Section headings (`h2`): `font-display text-3xl font-semibold text-primary mt-16 mb-6` — first usage only; "What We're About" gets the same treatment
- Vertical rhythm: `space-y-6` between paragraphs, `mt-16` before new section headings, `my-16` around the pull-quote
- Pull-quote uses `style={{ borderColor: "hsl(var(--deep-gold))" }}` for the divider lines (consistent with existing pattern in the file)

## Imports

No new imports needed — same `Link`, `ArrowRight` from existing file.

## File Changed

`src/pages/OurStory.tsx` only.
