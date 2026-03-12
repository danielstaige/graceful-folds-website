
## Scope

Six files: `HowItWorks.tsx`, `Pricing.tsx`, `TheFold.tsx`, `PrayerWall.tsx`, `FAQ.tsx`, `Contact.tsx`.

---

## HowItWorks.tsx — major refactor

**Process section (steps):** Replace the alternating card/zigzag layout with a clean left-anchored vertical timeline. Each step:
- Large ghost number (`font-display text-7xl font-semibold` at `text-gold/15`) floats top-left
- A thin continuous gold vertical line (`w-px bg-gold/20`) runs down the left column
- Gold dot on the line at each step
- Step title (`font-display text-2xl`) + body + bullet details to the right
- `max-w-3xl mx-auto`, generous `py-12` between steps, no cards, no shadows

**Tabs section:** Keep structure, update visual:
- Container: `bg-background` (not `bg-muted`), `max-w-3xl mx-auto`
- `TabsList`: remove box-styled container, replace with a simple row of underline-style tabs using `border-b border-border`, active tab gets a `border-b-2` gold underline
- `TabsContent`: no card wrapping — bare open content with `pt-8 pb-4`

**Topanga Scents section:** Give it a distinct premium feel:
- Background: `bg-primary` (charcoal) — a strong dark section break
- Three scent cards: strip the box entirely — just icon (warm gold tint circle), name in `font-display text-2xl`, and description. On the dark background, text becomes `text-primary-foreground/80`
- The "+$5 per bag" badge becomes a small inline gold text label, not a rounded pill
- More vertical padding: `py-28`

**Special items table:** Keep structure, remove redundant `rounded-xl shadow-card` wrapper since table has its own border. Increase row `py-5`, use `font-display` for the price column.

---

## Pricing.tsx — elevation pass

**Rate display:** Already large at `text-9xl`. Make it more editorial:
- Remove the `section-padding` section wrapper and replace with `py-32` for more drama
- Add a subtle gold rule above the number (`gold-divider` before the rate)
- Scale `/ lb` up to `text-4xl font-display`
- "Included" strip: replace `CheckCircle2` icons with small gold circles (`w-1.5 h-1.5 rounded-full bg-gold`), cleaner and flatter

**Weekly Estimates:** Remove the 3-column card grid entirely. Replace with a clean horizontal rule-separated list:
- Each row: `flex justify-between items-baseline py-6 border-b border-border/40`
- Left: household label (`font-display text-xl`) + description (`font-body text-sm text-muted-foreground`)
- Right: price range large (`font-display text-3xl font-semibold text-gold`)
- No cards, no shadows, no rounded boxes
- Section background: `bg-background`

**Special items table:** Increase padding (`py-5` per row), make price column use `font-display text-base font-semibold text-gold`. Keep existing table structure but remove the drop-shadow box; let the `border border-border/50` do the work.

**Gift Cards:** Give it a proper premium two-column layout (not just centered text):
- Left: full-height warm image placeholder (`bg-secondary h-full min-h-64 rounded-xl`, CSS background with `hero-laundry.jpg` crop)
- Right: Gift icon, headline, copy, CTA button
- Background: `bg-primary` (charcoal) for a strong section break
- Text becomes `text-primary-foreground`

---

## TheFold.tsx — folder cards + join section

**Folder profiles:** Keep the grid, upgrade each card:
- Remove old gradient avatar circles — replace with a `w-28 h-28 rounded-full` photo placeholder using `bg-secondary` + a `User` icon in gold center + ring (`ring-2 ring-gold/20`)
- Add a heartfelt short quote from each folder below the bio, styled as a small italic `font-display text-sm text-gold/70` pull-quote prefixed with `"`
- Add the quote field to each folder object in the data array
- Keep `shadow-card` but reduce card padding to `p-7` (was `p-8`)

**Testimonial pull-quote:** Already fine — keep as-is.

**Join the Fold section:** Simplify:
- Qualifications box (`bg-secondary rounded-xl`): keep the structure, but remove old `hsl(var(--gold-dark))` inline style (broken token) → replace with `style={{ color: "hsl(var(--deep-gold))" }}`
- Benefits list: replace `CheckCircle2` with `style={{ color: "hsl(var(--deep-gold))" }}` since `text-sage` token is gone
- Shield icon at bottom: replace `hsl(var(--sage))` → `hsl(var(--deep-gold) / 0.7)`

---

## PrayerWall.tsx — token cleanup only

The page layout is already excellent. Only changes:
- `text-gold` and `focus:ring-gold/30` already resolve correctly via the `gold` alias in Tailwind — no changes needed there
- Placeholder note cards (`bg-background rounded-xl`) — strip `rounded-xl` to `rounded-lg`, no other changes
- Closing section font tweak: already uses `font-display italic` correctly

**Verdict:** No structural changes. Just confirm no broken token references. The file already uses semantic classes that resolve correctly.

---

## FAQ.tsx — card removal + token fix

- Remove the `bg-card rounded-xl shadow-card divide-y` wrapper div around the FAQ list. Instead render the `FAQItem`s directly inside `max-w-3xl mx-auto` with `divide-y divide-border`
- Add `px-0` so questions run edge-to-edge of the column (no inner padding box)
- The "Still have questions?" section: change `text-gold-dark` → `text-gold` (the `gold-dark` token isn't in Tailwind config, only `gold` alias is)
- Everything else already uses correct semantic tokens

---

## Contact.tsx — token cleanup only

- Phone/Email cards (`bg-card rounded-xl shadow-[var(--shadow-card)]`): The layout is good. Just update `hover:-translate-y-1` cards to use `shadow-card` class directly
- `text-accent` is correctly mapped to `--deep-gold` via the Tailwind config so it resolves fine
- No structural changes needed — the form, cards, and closing quote are already well-designed

---

## Summary Table

| File | Effort | Key Changes |
|---|---|---|
| `HowItWorks.tsx` | Major | Vertical timeline, underline tabs, charcoal Topanga section |
| `Pricing.tsx` | Medium | List-style estimates, premium Gift Cards with dark bg |
| `TheFold.tsx` | Medium | Photo placeholder avatars + quotes, broken token fixes |
| `PrayerWall.tsx` | Minimal | No changes needed — already clean |
| `FAQ.tsx` | Minor | Remove card wrapper, fix `gold-dark` token |
| `Contact.tsx` | None | Already correctly styled — no changes |
