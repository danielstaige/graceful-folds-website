
## What We're Changing

Two files: `src/index.css` and `index.html`. The goal is to swap the old navy/sage/gold palette for the new "Warm Minimalism" palette (charcoal, warm-beige, deep-gold, soft-cream) and switch fonts from Playfair Display + Inter to **Lora** (display) + **Lato** (body).

---

## File 1 — `src/index.css`

### `:root` block (lines 8–66) — full replacement

New variables:

```css
/* New Palette */
--charcoal: 20 10% 15%;
--warm-beige: 38 33% 95%;
--deep-gold: 40 95% 45%;
--soft-cream: 40 33% 99%;

/* Semantic Mapping */
--background: var(--warm-beige);
--foreground: var(--charcoal);
--card: var(--soft-cream);
--card-foreground: var(--charcoal);
--popover: var(--soft-cream);
--popover-foreground: var(--charcoal);
--primary: var(--charcoal);
--primary-foreground: var(--soft-cream);
--secondary: 38 33% 92%;
--secondary-foreground: var(--charcoal);
--muted: 38 33% 88%;
--muted-foreground: 20 10% 40%;
--accent: var(--deep-gold);
--accent-foreground: var(--charcoal);
--destructive: 0 84% 60%;
--destructive-foreground: 0 0% 98%;
--border: 38 33% 85%;
--input: 38 33% 85%;
--ring: var(--deep-gold);
--radius: 0.5rem;
```

Sidebar tokens preserved (remapped to new palette):
```css
--sidebar-background: var(--charcoal);
--sidebar-foreground: var(--soft-cream);
--sidebar-primary: var(--deep-gold);
--sidebar-primary-foreground: var(--charcoal);
--sidebar-accent: 20 10% 22%;
--sidebar-accent-foreground: var(--soft-cream);
--sidebar-border: 20 10% 22%;
--sidebar-ring: var(--deep-gold);
```

Gradients updated:
```css
--gradient-hero: linear-gradient(135deg, hsl(20 10% 15% / 0.82) 0%, hsl(20 10% 15% / 0.45) 100%);
--gradient-gold: linear-gradient(135deg, hsl(40 95% 45%), hsl(40 95% 38%));
--gradient-sage: linear-gradient(180deg, hsl(38 33% 92%), hsl(38 33% 95%));
```

Shadows updated (charcoal-toned instead of navy-toned):
```css
--shadow-soft: 0 4px 24px -4px hsl(20 10% 15% / 0.12);
--shadow-card: 0 2px 16px -2px hsl(20 10% 15% / 0.08);
--shadow-gold: 0 4px 20px -4px hsl(40 95% 45% / 0.35);
```

### Body / heading fonts (lines 76–81) — updated to Lato + Lora:
```css
body { font-family: 'Lato', sans-serif; }
h1, h2, h3, h4, h5, h6 { font-family: 'Lora', serif; }
```

### `.font-display` / `.font-body` utility classes — updated:
```css
.font-display { font-family: 'Lora', serif; }
.font-body    { font-family: 'Lato', sans-serif; }
```

### `.gold-divider` — update `hsl(var(--gold))` → `hsl(var(--deep-gold))`:
```css
.gold-divider { background: hsl(var(--deep-gold)); }
```

### `.nav-link` hover — remove `--gold-dark` reference (doesn't exist in new palette), replace with `--deep-gold`:
```css
.nav-link:hover { color: hsl(var(--deep-gold)); }
.nav-link::after { background: hsl(var(--deep-gold)); }
```

---

## File 2 — `index.html`

Replace the single Google Fonts `<link>` (line 21) with new Lora + Lato import:
```html
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
```

---

## File 3 — `tailwind.config.ts`

Two small updates:
1. `fontFamily` block — swap `'Playfair Display'` for `'Lora'` and `'Inter'` for `'Lato'`
2. `colors` block — remove `navy`, `sage` (DEFAULT + light) entries; rename `gold` → `deep-gold` (keeps `charcoal`). This ensures Tailwind utility classes like `text-deep-gold` work.

```ts
fontFamily: {
  display: ["'Lora'", "serif"],
  body: ["'Lato'", "sans-serif"],
},
colors: {
  // existing semantic tokens...
  "deep-gold": {
    DEFAULT: "hsl(var(--deep-gold))",
  },
  charcoal: "hsl(var(--charcoal))",
  // remove navy, sage, gold
}
```

Note: Pages currently use `text-gold`, `text-gold-dark`, `text-navy`, `text-sage` utility classes. These will break since the color tokens are renamed. The safest forward-compatible fix:
- **Keep `gold` alias** in Tailwind pointing at `--deep-gold` so existing `text-gold`, `bg-gold`, `shadow-gold` classes on all pages continue to work without touching every page.
- Specifically: `gold: { DEFAULT: "hsl(var(--deep-gold))", dark: "hsl(40 95% 38%)" }` + remove `navy` and `sage`.

This is the cleanest approach — the palette CSS variables fully switch to the new system, but Tailwind utility class names stay stable so the 6+ existing pages don't break.

---

## Summary of Changes

| File | What changes |
|---|---|
| `src/index.css` | All `:root` variables, font references in base/component layers |
| `index.html` | Google Fonts link → Lora + Lato |
| `tailwind.config.ts` | Font family names; remove navy/sage colors; keep `gold` alias pointing at `--deep-gold` |
