
## What We're Refactoring

`src/pages/Index.tsx` only. The goal is a complete visual upgrade — asymmetric hero, open linear How It Works, high-impact Difference section, testimonial slider, asymmetric founder section, and two lifestyle image placeholders.

---

## Section-by-Section Plan

### 1. Hero — Asymmetric Split

Remove the full-bleed overlay layout. Replace with a `min-h-screen` two-column grid:

- **Left col** (`lg:w-1/2`): Warm-beige background, centered vertically with generous padding. Eyebrow label → large Lora H1 → body text → gold CTA button. The left col sits on `bg-background`, giving it a clean editorial feel.
- **Right col** (`lg:w-1/2`): Full-height image panel using the existing `hero-laundry.jpg`, `object-cover object-center`, with a very subtle warm overlay (`hsl(40 95% 45% / 0.06)`) for warmth. On mobile, the image col stacks below the text and sits at a fixed `h-72`.

```text
[ LEFT: Headline + CTA | RIGHT: hero-laundry.jpg ]
```

The eyebrow changes to italic Lora serif for a boutique editorial feel. The H1 stays two lines. The `em` for "for Your Laundry." stays gold.

---

### 2. Promise Strip — No Change

Keep the existing charcoal strip with three gold icons. It already matches the new palette well. Minor: update the inner icon background from `hsl(var(--gold) / 0.15)` to `hsl(var(--deep-gold) / 0.15)` for exactness.

---

### 3. How It Works — Linear Numbered Steps

Remove the 3-col card grid and dashed connector. Replace with a vertical list of three steps on `bg-background`, with a thin gold left border as the visual thread:

Each step:
```text
  01
  ──────────────────────────────────
  [Icon]   Set It on the Porch
           Leave your bag out at your scheduled…
```

Layout: `max-w-3xl mx-auto`, each step is a `flex` row:
- **Number** (`font-display text-6xl font-semibold text-gold/25 leading-none w-20 shrink-0`) — large, ghost-weight, elegant
- **Divider** — a thin `w-px bg-gold/20 self-stretch mx-8` vertical line between number and text
- **Content block**: icon + title (Lora, `text-2xl`) + body text

Steps are separated by `py-10` padding, no card borders. On mobile, the number sits above the content block.

---

### 4. The Difference — Full-Bleed Linen Texture

Replace `bg-secondary` with a full-bleed section using an inline CSS `background-image` to simulate a linen/textile texture. Implementation: use a CSS `repeating-linear-gradient` crosshatch pattern that mimics linen. No external image needed — purely CSS:

```css
background-color: hsl(38 33% 92%);
background-image:
  repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(38 33% 85% / 0.4) 2px, hsl(38 33% 85% / 0.4) 3px),
  repeating-linear-gradient(90deg, transparent, transparent 2px, hsl(38 33% 85% / 0.4) 2px, hsl(38 33% 85% / 0.4) 3px);
```

Scale up the headline: `text-4xl md:text-5xl lg:text-6xl`. Add more vertical padding: `py-28`. The subtext gets `text-lg`.

---

### 5. Testimonials — Slider (useState-based)

Remove the grid. Build a simple CSS-animated slider using `useState` for `activeIndex`:

Structure:
- Container `overflow-hidden`, inner track `flex`, transform `translateX(-${activeIndex * 100}%)`, `transition-transform duration-500 ease-in-out`
- Each slide: full-width `min-w-full`, centered content, `px-8 md:px-24`, `text-center`
- **Quote**: Large italic Lora serif, `text-xl md:text-2xl leading-relaxed`  
- **Stars**: 5 gold stars above the quote  
- **Attribution**: `— Sarah M., Frisco TX` in small gold-toned Lato, below quote
- **Nav dots**: row of 5 small circles, active = gold filled, inactive = gold/30 border
- **Prev/Next arrows**: `ChevronLeft` / `ChevronRight` buttons, absolute positioned left/right edges, ghost-styled

Background: `bg-primary` (charcoal) — the dark section creates a strong visual break between Difference and Founder. White text on dark makes the testimonial feel premium.

```text
bg-primary section:
  ← [stars] ←
  "Quote text here..."
  — Name, Location
  ○ ● ○ ○ ○
```

---

### 6. Lifestyle Image Placeholder — Between Testimonials and Founder

A full-width `h-72 md:h-96` `<div>` using `hero-laundry.jpg` as background (since it's our only asset) with a different crop region (`object-position: center 30%`) and slight dark overlay. Add a small italic caption overlay in the bottom-right corner: *"Every item treated with care."*

This acts as the first lifestyle image break.

---

### 7. Founder — Asymmetric, Photo Right

Change layout to **text left, image right** (opposite of current).

- **Left**: More whitespace — `py-20` on the text block. Eyebrow, H2 "Meet Dana", longer paragraph (keep existing bio), "Read Our Story" link.
- **Right**: A large circular photo placeholder — `w-64 h-64` circle, using a warm beige-to-gold radial gradient as the placeholder bg, with a subtle `Camera` or `User` icon in gold at center + small italic caption below: *"Photo coming soon"*. The circle gets `shadow-soft` and a thin gold ring: `ring-2 ring-gold/30`.

The section background stays `bg-secondary`.

---

### 8. Lifestyle Image Placeholder 2 — Between Founder and Final CTA

Same technique as Placeholder 1 — `h-64 md:h-80` full-width strip using `hero-laundry.jpg` with `object-position: center 60%` and a different overlay direction. Caption: *"Delivered to your door, fresh every time."*

---

### 9. Final CTA — Minor Refresh

Stays on `bg-primary`. Increase H2 to `text-5xl md:text-6xl`. Add the gold divider above the subtext. Otherwise unchanged.

---

## Imports Needed

```ts
import { useState } from "react";
import { ArrowRight, Sparkles, Clock, Tag, Star, DoorOpen, Shirt, Home, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-laundry.jpg";
```

## File Changed

`src/pages/Index.tsx` only. No new dependencies. No CSS changes.

---

## Structural Summary

```text
1. HERO            bg-background split: [text left | image right]
2. PROMISE STRIP   bg-primary (charcoal), 3 gold icons
3. HOW IT WORKS    bg-background, numbered 01/02/03 linear vertical list
4. LIFESTYLE IMG 1 full-width image strip (hero-laundry.jpg, alt crop)
   ↑ (new addition)
5. THE DIFFERENCE  bg-secondary + CSS linen texture, large headline
6. TESTIMONIALS    bg-primary (charcoal), full-width slider
7. LIFESTYLE IMG 2 full-width image strip (hero-laundry.jpg, alt crop)
   ↑ (new addition)
8. MEET DANA       bg-secondary, asymmetric text-left / photo-right
9. FINAL CTA       bg-primary (charcoal)
```
