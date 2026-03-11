
## What We're Building

A complete replacement of `src/pages/Pricing.tsx` — replacing the old 3-tier subscription card layout with a transparent, per-pound pricing page built around a single bold rate display, a cost estimator, special items table, gift cards section, and a final CTA.

## Page Structure

```
1. HERO            — Navy banner, "Simple, Honest Pricing." + 1-line subhead
2. STANDARD RATE   — Large visual centerpiece: "$1.75 / lb" + $35 minimum note
3. COST ESTIMATOR  — 3 estimate cards (Individual, Couple, Family of 4) + "Less than a dinner out"
4. SPECIAL ITEMS   — Clean price table: Comforters, Duvets, Blankets, Throws, Pillows, Bathmats
5. GIFT CARDS      — Warm callout: "Give the Gift of Grace" + purchase CTA button
6. FINAL CTA       — Full-width navy banner: "You Know the Price. Now Know the Peace."
```

## Section Details

**1. Hero** — matches existing page heroes (navy `bg-primary`, centered, `py-24`)
- Eyebrow: "Transparent Pricing"
- H1: "Simple, Honest Pricing."
- Subhead: "No hidden fees. No surprises. Just clean laundry at a fair, per-pound rate."

**2. Standard Rate — Visual Centerpiece**
- `bg-background`, `section-padding`, centered
- Large display: `font-display text-8xl font-semibold` in gold: `$1.75`
- `/lb` in muted foreground, smaller
- Gold divider below
- Note below: `$35 minimum per order (approximately 20 lbs)` — muted, small
- What's included: 3-column icon strip (Pickup & Delivery included, Washed/Dried/Folded, 48-hr turnaround) using `CheckCircle2` icons in sage

**3. Cost Estimator**
- `bg-secondary` (sage light background), `section-padding`
- Eyebrow: "What to Expect"
- H2: "How Much Will It Cost?"
- 3 cards in a `grid-cols-1 md:grid-cols-3` layout:
  - **Individual**: ~$35–$45 / week
  - **Couple**: ~$45–$55 / week
  - **Family of 4**: ~$55–$75 / week
- Each card: `bg-background` rounded-xl shadow-card, name in Playfair, price range in gold, small description
- Below grid: centered italic note — *"Less than a dinner out — and one less thing on your plate."*

**4. Special Items Table**
- `bg-background`, `section-padding`
- H2: "Special Items" + subtext
- Table wrapped in `rounded-xl shadow-card overflow-hidden`:

| Item | Price |
|---|---|
| Comforter | $35 |
| Duvet Insert | $20–$35 |
| Blanket | $15–$20 |
| Large Throw | $8 |
| Pillow | $5–$15 |
| Bathmat | $5–$8 |

- Use existing `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell` components
- Header row: gold text on navy bg (`bg-primary`)
- Alternating rows: odd `bg-background`, even `bg-muted/30`

**5. Gift Cards**
- `bg-secondary` (sage light), `section-padding`, centered layout
- `Gift` icon from lucide-react (gold, 32px)
- H2: "Give the Gift of Grace"
- Body: "The perfect gift for new moms, friends recovering from surgery, or anyone who needs their load lightened."
- Gold gradient CTA button: "Purchase a Gift Card" with `ArrowRight` icon — links to `/contact` for now

**6. Final CTA**
- `bg-primary` (navy), centered, `py-24`
- H2 italic Playfair: "You Know the Price. Now Know the Peace."
- Gold gradient button: "Schedule My First Pickup" → `/contact`

## File Changed
`src/pages/Pricing.tsx` only.

## Imports
```
lucide-react: ArrowRight, CheckCircle2, Gift, Scale, Users, User, Star
react-router-dom: Link
ui: Table, TableHeader, TableBody, TableRow, TableHead, TableCell (already used in HowItWorks)
```
