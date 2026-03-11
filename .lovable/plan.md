
## What We're Building

A complete redesign of `src/pages/Contact.tsx` — replacing the current 1-column-info + 2-column-form layout with a warmer, more structured page that leads with the headline "We Would Love to Hear From You," surfaces contact options prominently before the form, and closes with the specified Providence paragraph.

## Page Structure

```
1. HERO              — Navy banner, "We Would Love to Hear From You."
2. CONTACT OPTIONS   — 2-column card strip (Phone/Text + Email) + hours note
3. CONTACT FORM      — Clean centered form with 5 fields + "Send It Our Way"
4. CLOSING           — Warm italic prose paragraph on sage background
```

## Section Details

**1. Hero** — `bg-primary`, `py-24`, centered (matches all other pages)
- Eyebrow: "Get in Touch"
- H1: "We Would Love to Hear From You."
- Subhead: "A real person will read every message. We respond within 24 hours."

**2. Contact Options** — `bg-background`, `section-padding`, centered
- Gold divider + small section label above
- `grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto`
- **Card 1 — Phone/Text**: `Phone` icon (gold circle), "Call or Text Us", large `214-400-7651` as `<a href="tel:...">`, small note: "Texting is always welcome — whatever's easiest for you."
- **Card 2 — Email**: `Mail` icon (gold circle), "Email Us", `hello@foldsofgrace.com` as `<a href="mailto:...">`, small note: "We check email daily and love a good message."
- Below the cards: a single centered `MapPin` + "Serving the Dallas–Fort Worth area · Mon–Sat, 7am–7pm"

**3. Contact Form** — `bg-secondary` (sage light), `section-padding`
- `max-w-xl mx-auto` centered, no card wrapper (form sits on sage bg)
- Section label + H2: "Send Us a Message"
- Fields:
  - **Name** (required) — full width
  - **Email** (required) — full width
  - **Phone** (optional) — full width
  - **What can we help you with?** — `<select>` dropdown:
    - "Schedule Service"
    - "Become a Folder"
    - "Prayer Request"
    - "General Question"
    - "Other"
  - **Message** — 5-row textarea, placeholder: "Tell us a little about what you need…"
- Submit: full-width gold gradient button, `Send` icon left, label: **"Send It Our Way"**
- Validation: name required (trim, max 100), email required (valid format, max 255), message required (min 5, max 1000), inline error messages below fields
- **Submitted state**: No card. Centered: `Heart` icon (gold), italic Playfair "We got your message." + warm body copy + gold divider + italic tagline "We wash, we fold… and we pray."

**4. Closing** — `bg-background`, `py-20`, centered, `max-w-2xl mx-auto`
- Gold divider above
- Italic Playfair body text, `text-foreground/70`, `text-lg leading-relaxed`:
  *"However you found us — through a neighbor's recommendation, a late-night search, or maybe something that felt a little like Providence — we are glad you are here. We cannot wait to serve your family."*
- Gold divider below

## Key Design Decisions
- Contact Options come BEFORE the form — users who just want to call shouldn't have to scroll past a form
- Form sits on `bg-secondary` (sage) to visually separate it from the info cards without adding a heavy card shadow
- Submit state uses no card, just clean centered text — matching the sanctuary style established in Prayer Wall
- Closing paragraph is the emotional heart of the page; it gets its own full section with breathing room
- Removing the "Address/Zip" field from the form (not needed in the new topic-based dropdown approach)

## Validation (client-side, inline errors)
- `name`: required, trim, max 100
- `email`: required, valid email regex, max 255
- `phone`: optional, allow empty
- `topic`: default "schedule", always valid
- `message`: required, trim, min 5 chars, max 1000

## File Changed
`src/pages/Contact.tsx` only.

## Imports
```
lucide-react: Phone, Mail, MapPin, Send, Heart
useState from react
```
