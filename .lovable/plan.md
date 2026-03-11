
## What We're Building

A complete redesign of `src/pages/PrayerWall.tsx` — replacing the current marketing-style layout with a sanctuary-like page that feels personal, quiet, and sacred. No loud colors, no card shadows competing for attention. Everything is centered, breathable, and text-led.

## Page Structure

```
1. HERO          — Warm white background, centered italic headline, scripture anchor
2. INVITATION    — Heartfelt paragraph + 1 Peter 5:7 verse, narrow max-width
3. FORM          — Ultra-clean 3-field form + long submit button
4. TESTIMONIES   — Placeholder "handwritten notes" section (stubbed for later)
5. CLOSING       — "We wash, we fold… and we pray." quiet tagline
```

## Design Direction (key departure from current page)

The current page uses navy hero banners, shadow cards, and the same visual language as the service pages. The new version:
- **Background**: `bg-background` (warm white `#FAFAF7`) throughout — no navy hero section
- **Hero headline**: Large italic Playfair Display, soft foreground/70, no eyebrow label
- **No card containers**: Form fields sit directly on the warm white background — minimal borders, very light `bg-muted/40` on focus
- **Scripture**: Italic serif, centered, small, soft — styled like a pull-quote not a callout box
- **Generous vertical spacing**: Sections separated by `py-24+` so the page breathes
- **Submit button**: Full-width, gold gradient, long label text as specified

## Section Details

**1. Hero** — `bg-background`, `py-32`, centered
- Small `Heart` icon (gold, 28px) centered above headline
- H1 italic Playfair: "You Don't Have to Carry This Alone."
- Short subhead: "Whatever you're facing — big, small, unspeakable — we'd be honored to pray with you."
- No navy background, no eyebrow chip

**2. Invitation** — `max-w-xl mx-auto text-center`, `py-0 pb-20`
- Gold divider above
- Two sentences of warm invitation copy
- Scripture block: `"Cast all your anxiety on him because he cares for you."` — italic, then `— 1 Peter 5:7` on next line, both muted/60
- Gold divider below

**3. Form** — `max-w-lg mx-auto`, centered, no card wrapper
- Three fields, each with a simple `<label>` + borderless-ish input (light border, no `bg-card` wrapper):
  - **First Name** (optional)
  - **Email** (optional, small helper "Only used if you'd like a personal response")
  - **Your Prayer Request** (required, 6-row textarea, placeholder "Share what's on your heart…")
- Submit button: full-width, gold gradient, text exactly: `"Send My Request — We Are Honored to Pray With You"`, `Heart` icon left
- Submitted state: centered, no card — just `Heart` icon + italic Playfair "We've received your request." + warm body copy + gold divider

**4. Testimonies Section** — `bg-secondary` (sage light), `section-padding`
- Eyebrow: "Answered Prayers" 
- H2: "Stories of Hope"
- Subtext: "This space is reserved for stories of answered prayer. We'll share them here — anonymized, with permission — as a quiet reminder that you are heard."
- Three placeholder "note" blocks styled as handwritten-style cards: soft cream bg (`bg-background`), italicized Playfair body text, no strong shadows — just `border border-border/50`
- Each placeholder says something like: *"Coming soon — your story could be here."*

**5. Closing** — `py-16 text-center`
- `font-display italic text-sm text-muted-foreground`
- "We wash, we fold… and we pray."

## Validation
- `name`: optional string, max 100 chars — trim
- `email`: optional, valid email format if provided, max 255 — use simple regex check
- `request`: required, min 10 chars, max 1000 chars
- Show inline error messages below fields (no toast)

## File Changed
`src/pages/PrayerWall.tsx` only. No new dependencies.

## Imports
```
lucide-react: Heart, Send
useState from react
```

No UI components needed — form is raw HTML inputs styled with Tailwind tokens to keep it minimal and sanctuary-like. No `react-hook-form` overhead for a 3-field form.
