
## What We're Building

A complete rebuild of `src/pages/HowItWorks.tsx` — replacing the current 2-section layout with a rich, 6-section page that makes the service feel safe, easy, and trustworthy, ending with the quiet faith touch.

## Page Structure (top to bottom)

```
1. HERO              — Simple navy banner: "How It Works" + 1-line subhead
2. THE PROCESS       — 4-step vertical timeline (numbered, icon, title, desc, bullet list)
3. DETAILS TABS      — 3-tab panel: Pickup Day | Care Standards | Detergent Options
4. TOPANGA SCENTS    — Visually distinct gold/sage callout card
5. SPECIAL ITEMS     — Clean price table (iron, delicates, comforters, etc.)
6. FINAL TOUCH       — Quiet centered block: "...And We Pray."
```

## Section Details

**1. Hero**
Simple navy background, centered. Label "The Process", H1 "How It Works", one-line subhead. Matches the style of other page heroes.

**2. The Process — 4-Step Timeline**
A vertical timeline on mobile, alternating left/right on desktop. Each step:
- Large numbered circle (gold bg, white number)
- Icon inside a navy circle
- Step title (Playfair) + description + 3 bullet details

Steps:
1. Schedule Your Pickup — `CalendarCheck` icon
2. We Pick It Up — `Truck` icon
3. Washed, Dried & Folded — `Sparkles` icon
4. Delivered Back to You — `Home` icon

**3. Details Section — Tabs**
Use existing `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` from `src/components/ui/tabs.tsx`.

Three tabs with icon + label:
- **Pickup Day** (`CalendarCheck`): pickup window, no-contact option, confirmation text, what to bag
- **Care Standards** (`ShieldCheck`): separate lights/darks, gentle cycle for delicates, hung items, quality check
- **Detergent Options** (`Droplets`): Free & Clear (default), Scented (Tide), Topanga Scents (premium)

Tab content: simple card with a 2-col list of details. bg-background, max-w-3xl centered.

**4. Topanga Scents Callout**
Visually distinct from the rest of the page. Full-width section with a gold-tinted background (`bg-accent/10` or `hsl(var(--gold)/0.08)`). Contains:
- "Premium Add-On" eyebrow label
- H2: "Elevate Your Laundry with Topanga Scents"
- Short description of the premium scent experience
- A 3-column grid of scent options (e.g., Fresh Linen, Lavender, Citrus Grove) with small icons
- Small "+$X per bag" pricing callout

**5. Special Items Price Table**
Uses existing `Table`, `TableHeader`, `TableBody`, etc. from `src/components/ui/table.tsx`. Clean, card-wrapped table.

| Item | Price |
|---|---|
| Comforter (Twin/Full) | $15 |
| Comforter (Queen/King) | $20 |
| Blanket | $10 |
| Delicate Item | $5 |
| Ironing (per item) | $3 |
| Hang-Dry Item | $2 |
| Extra-Large Bag | +$5 |

Table has alternating row bg, gold header text, rounded-xl card wrapper with shadow-card.

**6. The Final Touch**
Sage-light (`bg-secondary`) centered section:
- Gold divider above
- H2 "...And We Pray." in italic Playfair
- Body text: "After every item is perfectly folded and packaged, we take a moment to pray over your home and family."
- Gold divider below
- Subtle, no CTA — this is a quiet moment

**File changed:** `src/pages/HowItWorks.tsx` only.

**No new dependencies** — uses Tabs and Table components already installed/available.

## Imports Needed
```
lucide-react: CalendarCheck, Truck, Sparkles, Home, ShieldCheck, Droplets, 
              Wind, Flower2, Sun, CheckCircle2, ArrowRight
ui: Tabs, TabsList, TabsTrigger, TabsContent
ui: Table, TableHeader, TableBody, TableRow, TableHead, TableCell
Link from react-router-dom
```
