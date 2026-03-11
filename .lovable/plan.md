
## What We're Building

A complete rebuild of `src/pages/TheFold.tsx` — replacing the generic team card layout with a dual-purpose page: client trust-building through warm Folder profiles, and community recruitment with a clear application CTA.

## Page Structure

```
1. HERO              — Navy, two-line headline as specified
2. FOLDER PROFILES   — Warm gallery grid: photo placeholder, name, neighborhood, bio
3. FOLDER TESTIMONIAL — Full-width highlighted quote from a current Folder
4. JOIN THE FOLD     — Recruitment section: role description, qualifications list, apply CTA
```

## Section Details

**1. Hero** — `bg-primary`, `py-24`, centered
- Eyebrow: "The Fold"
- H1: "Meet the Women Who Serve Our Community."
- Subhead: "Your Folder is your neighbor. She cares about your family."

**2. Folder Profiles** — `bg-background`, `section-padding`
- Section header: "Your Neighbors. Your Folders." + gold divider + subtext about background checks
- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8` layout
- Each card (`bg-card`, `rounded-xl`, `shadow-card`):
  - **Photo area**: A warm-toned avatar circle using initials + gradient background (no real photos needed, but designed for photos). Use a sage/gold gradient circle with initials — large, `w-24 h-24`
  - **Name**: `font-display text-xl font-semibold text-primary`
  - **Neighborhood**: Small gold uppercase label, e.g. "Serving Frisco & Allen"
  - **Bio**: 2 sentences. Each Folder gets a personality-forward bio with a subtle faith mention for one or two

5 Folder profiles:
1. **Sarah M.** — "Frisco & Allen" — "A mom of three who joined Folds of Grace to serve her community and make time for what matters. Philippians 4:13 is the verse she returns to on hard days."
2. **Keisha T.** — "McKinney & Prosper" — "Former teacher turned full-time mama who loves the flexibility of folding on her own schedule. She says the job lets her pour into her family while still contributing meaningfully."
3. **Marisol V.** — "Plano & Richardson" — "Marisol has been with Folds of Grace since the beginning. She takes quiet pride in returning laundry so neat, customers text her to say it made their week."
4. **Brittany H.** — "Garland & Rowlett" — "A caregiver by nature, Brittany joined because she wanted work that felt like love. Her customers know her by name and always look forward to her smile."
5. **Danielle R.** — "Carrollton & Farmers Branch" — "Danielle leads by example, treating every bag as if it belongs to her own family. She's the one who trained the rest of the team."
6. **Tanya W.** — "Irving & Grand Prairie" — "Tanya likes to say she doesn't just wash clothes — she lightens loads. She joined Folds of Grace because she believes service is a calling."

**3. Folder Testimonial** — `bg-secondary` (sage light), `section-padding`
- No section heading — just a full pull-quote layout
- Large italic serif opening quote mark (`font-display text-8xl text-gold/40 leading-none`)
- Quote body italic Playfair, large, centered, max-w-2xl
- Quote: *"This job gave me the freedom to be present for my kids and still do something that feels like it matters. Every time I fold someone's laundry, I'm saying — I see you, I've got you."*
- Attribution: `— Keisha T., Folder since 2023` — small, muted, uppercase tracking
- No card, no shadow — just the quote breathing on sage background

**4. Join the Fold** — `bg-background`, `section-padding`
- Left/right two-column layout on desktop (prose left, qualifications right), stacked on mobile
- **Left**:
  - Eyebrow: "We're Hiring"
  - H2: "Ready to Serve Your Community?"
  - Body paragraph describing the role: flexible hours, work from home, serve neighbors, meaningful income — 2–3 sentences
  - Bullet list of role benefits: `CheckCircle2` icons in sage:
    - Flexible hours — you set your own schedule
    - Work from home, in your neighborhood
    - Meaningful income doing work that matters
    - Be part of a faith-inspired, women-led team
  - Gold gradient CTA button: "Apply to Become a Folder" → `/contact`
- **Right**:
  - Box styled with `bg-secondary rounded-xl p-8`
  - Title: "What We Look For" in Playfair
  - Gold divider
  - 4 qualification rows, each with a small icon:
    - `WashingMachine` or `Home` → "Working washer and dryer in your home"
    - `Car` or `Truck` → "Reliable vehicle for pickup and delivery"  
    - `Sparkles` → "Attention to detail and care for quality"
    - `Heart` → "A heart for service and community"
  - Note below: "All Folders are background-checked and trained before their first order."

## Icons Needed
```
lucide-react: ArrowRight, CheckCircle2, Heart, Quote, MapPin, Car, Sparkles, Home, Shield
```

## File Changed
`src/pages/TheFold.tsx` only. No new dependencies.

## Key Design Decisions
- Folder cards use initials-based avatar circles (no real photos) but the card is designed/sized for photos — leaving room for real image swaps later
- Testimonial section has no card border or shadow — pure background + text for an intimate feel
- "Join the Fold" split layout makes the recruitment feel substantial, not an afterthought
- Faith mentions are in bios only, never in the recruitment pitch (to stay inclusive for hiring)
