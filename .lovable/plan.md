
## What We're Changing

Three sections in `src/pages/Index.tsx` only, inspired by the three reference screenshots. All Folds of Grace branding, colors, and copy are preserved.

---

## Section 1 — Hero → Full-Bleed Dark Overlay (ref: screenshot 8.53.10)

Replace the asymmetric 50/50 split with a full-viewport hero: `hero-laundry.jpg` fills the entire screen, `--gradient-hero` overlay darkens it, text and CTA sit over the image.

Layout:
```
[ hero-laundry.jpg — full screen ]
  gradient overlay: hsl(20 10% 15% / 0.75) → 0.45
  TOP LEFT: navbar (handled by Navbar component)
  CENTER-LEFT: eyebrow · H1 · subtext · gold CTA button
```

- `min-h-screen relative` wrapper, `object-cover` image
- Text col: `absolute inset-0 flex items-center` → inner `max-w-xl` left-aligned at `px-8 md:px-16 lg:px-24`
- H1 stays `text-5xl md:text-6xl font-display font-semibold` but color becomes `text-primary-foreground` (white)
- Gold "for Your Laundry." accent line stays gold
- CTA button stays gold gradient, now has a circular arrow icon (matching the reference's pill-button feel) — keep existing `ArrowRight` icon

---

## Section 2 — How It Works → Image-Left + Numbered List Right (ref: screenshot 8.53.19)

Replace the centered single-column list with a two-column layout:
- **Left column** (`lg:w-2/5`): tall `hero-laundry.jpg` panel, `rounded-2xl overflow-hidden`, `object-cover`, height `min-h-[520px]`
- **Right column** (`lg:w-3/5`): eyebrow + section title + the 3 numbered steps as a clean list separated by `border-b border-border`

Each step row:
```
[ 01 ]   Set It on the Porch
         Leave your bag out at your scheduled pickup time.
         ──────────────────────────────────────────────────
```
- Number: `font-display text-5xl font-semibold` in gold at `text-gold opacity-60`, `w-16 shrink-0`
- Title: `font-display text-xl font-semibold text-primary`
- Description: `font-body text-sm text-muted-foreground`
- Tags (optional pill row): small borderless pills `font-body text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1` — not in the reference but would add: "Wash & Fold", "24–48 hrs", "Doorstep Delivery" per step
- Steps separated by `py-8 border-b border-border/40`

On mobile: image stacks above, `h-64`, full width.

---

## Section 3 — Testimonials → Grid with Featured Central Card (ref: screenshot 8.53.32)

Replace the full-width slider with a three-column grid layout on a light `bg-background` (or soft secondary) background:

```
[ photo ] [ FEATURED CARD: logo · quote · name · stars ] [ photo ]
[ photo ]                                                  [ photo ]
[ photo ]                                                  [ photo ]
```

**Layout:** `grid grid-cols-3 gap-4` on desktop, single column on mobile:
- **Col 1** (left): 3 stacked name+photo placeholder cards, each `rounded-xl overflow-hidden relative h-44` with `bg-secondary` gradient + `User` icon + name label bottom-left
- **Col 2** (center): tall featured card spanning rows, `bg-primary rounded-2xl p-8 flex flex-col justify-between` — contains:
  - Eyebrow label "Testimonial" in gold
  - Section heading "Praised by families across DFW." (adapted from reference)
  - Large `"` opener in gold Lora  
  - Quote text in `font-display text-lg italic text-primary-foreground`
  - Reviewer name + location + 5 gold stars
  - Clicking name cards on left/right switches the featured quote (via `useState activeIndex`)
- **Col 3** (right): 3 stacked photo placeholder cards (same as left column)

The name cards on left/right have a `+` button icon (circle with plus) which on click selects that testimonial as the featured one. Active card gets a gold ring.

**On mobile:** Show a simple stacked list — headline + one featured quote card + dot navigation (simplified back to the slider pattern).

The section background changes from `bg-primary` (dark) to `bg-background` (warm beige) since the featured card itself is the dark element.

---

## Summary of Changes

| Section | Before | After |
|---|---|---|
| Hero | Asymmetric split (text left, image right) | Full-bleed dark overlay |
| How It Works | Centered numbered list | Image left + numbered list right |
| Testimonials | Full-width dark slider | Grid with featured central card |

**File changed:** `src/pages/Index.tsx` only. No new dependencies, no CSS changes.

**Imports added:** No new imports — `User`, `Plus` from lucide-react needed; `User` is already imported.
