
## What We're Building

A brand-new `/schedule` page (`src/pages/Schedule.tsx`) with a warm, interactive 3-step wizard — calendar date selection → time slot → confirmation details. Plus updating every "Schedule My First Pickup" CTA across the site to point to `/schedule` instead of `/contact`. Route added to `App.tsx`.

---

## Page Structure

```
HERO           — Short dark banner "Let's Schedule Your Pickup"
WIZARD         — 3-step stepper in bg-background, max-w-2xl centered
  Step 1: Pick a Date      — Interactive calendar
  Step 2: Pick a Time      — Visual time slot grid
  Step 3: Your Details     — Name, phone, address, notes + Submit
CONFIRMATION   — "We'll see you then!" success state
```

---

## Step-by-Step Wizard Design

### Step indicator (top of wizard)
Three circles connected by a thin line. Active = gold fill, completed = gold checkmark, upcoming = ghost ring.
```
● ——— ○ ——— ○
Date    Time   Details
```

### Step 1 — Pick a Date
- Shadcn `Calendar` (from `@/components/ui/calendar`) in `mode="single"` inside a clean card-less wrapper
- Disabled: Sundays (no service), all past dates
- Selected date shows a gold ring highlight (handled by DayPicker's `day_selected` classNames, which already maps to `bg-primary`)
- Below calendar: selected date displayed in a warm formatted strip — `font-display italic` — "Monday, March 17"
- "Next →" gold button activates once a date is selected

### Step 2 — Pick a Time
- 8 time slot buttons in a 2×4 grid: 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm
- Each slot: `rounded-xl border border-border py-4 px-6 font-display text-lg` — warm beige bg
- Selected: gold border + gold text + soft gold background `hsl(var(--deep-gold) / 0.08)`
- Some slots marked "Popular" with a small gold badge
- "← Back" and "Next →" navigation

### Step 3 — Your Details
Clean form with the established `inputClass` pattern:
- Name (required)
- Phone (required)
- Address / neighborhood (required, placeholder "e.g. 4521 Maple St, Frisco")
- Pickup notes (optional, textarea — "e.g. Leave bag on front porch, gate code 1234")
- Summary card at top: shows chosen date + time in a warm `bg-secondary rounded-xl p-4` strip
- Gold gradient "Confirm My Pickup" submit button

### Confirmation state
- Gold heart icon (filled)
- `font-display text-3xl italic` "You're on the schedule."
- Date + time confirmed in large warm text
- "Add to Calendar" link (Google Calendar deep-link built from the selected date/time)
- Closing italic tagline "We wash, we fold… and we pray."

---

## Technical Details

**State shape:**
```ts
{ date: Date | undefined, time: string, name: string, phone: string, address: string, notes: string }
```
`step: 1 | 2 | 3`, `submitted: boolean`

**Validation:** Zod on Step 3 fields (name required, phone required, address required). Inline error messages matching Contact page style.

**Calendar config:**
- `disabled`: `(d) => d < today || d.getDay() === 0` (no Sundays, no past)
- `className`: `cn("p-3 pointer-events-auto")` per the shadcn datepicker guideline

**Google Calendar link** built in confirmation:
```
https://calendar.google.com/calendar/r/eventedit?text=Folds+of+Grace+Pickup&dates=...&details=...
```

**No new dependencies** — uses existing `Calendar`, `zod`, lucide-react icons.

---

## Files Changed

| File | Change |
|---|---|
| `src/pages/Schedule.tsx` | New file — full wizard page |
| `src/App.tsx` | Add `<Route path="/schedule" element={<Schedule />} />` |
| `src/pages/Index.tsx` | Change both CTA `Link to="/contact"` → `to="/schedule"` |
| `src/components/Navbar.tsx` | Optional: check if "Schedule" link exists or update CTA |

---

## CTA Updates

Both "Schedule My First Pickup" buttons on `Index.tsx` (hero section line ~80 and final CTA section line ~443) point to `/contact` — both updated to `/schedule`.

Navbar CTA (if it currently links to `/contact`) also updated.
