# Memory: index.md
Updated: now

Folds of Grace — design system, brand colors, typography, and key decisions

# Design System — Warm Minimalism

## Colors (HSL in index.css)
- Charcoal/Primary/Foreground: 20 10% 15%
- Warm Beige/Background: 38 33% 95%
- Deep Gold/Accent: 40 95% 45%
- Soft Cream/Card: 40 33% 99%

## Tailwind Color Tokens
- `gold` / `deep-gold` → both point to `--deep-gold` (for backward compat)
- `gold.dark` → hsl(40 95% 38%)
- `charcoal` → hsl(var(--charcoal))
- NO `navy`, NO `sage` tokens

## Fonts (loaded via index.html Google Fonts)
- Headlines: 'Lora' (font-display class)
- Body: 'Lato' (font-body class, default body)

## Key Design Rules
- Never use explicit color classes (text-white, bg-black); always use semantic tokens
- Faith element is SUBTLE — only "We wash, we fold… and we pray." in footer/endings
- Service-first messaging; faith as quiet undertone only
- Gold gradient CTA buttons: style={{ background: "var(--gradient-gold)", color: "hsl(var(--soft-cream))" }}

## Pages & Routes
- / → Index (Home)
- /our-story → OurStory
- /how-it-works → HowItWorks
- /pricing → Pricing
- /the-fold → TheFold (team + recruitment)
- /prayer-wall → PrayerWall
- /faq → FAQ
- /contact → Contact

## Components
- Navbar: sticky, logo left, links center, CTA right
- Footer: charcoal bg, links, contact info (214-400-7651, hello@foldsofgrace.com), social
- Hero image: src/assets/hero-laundry.jpg
