
## What We're Changing

`src/pages/Pricing.tsx` only. Six targeted edits, no structural overhaul.

### 1. Hero — lines 57–61
- H1: `"Simple, Honest Pricing."` → `"Pricing"`
- Subtext: replace with the new copy about homes and businesses

### 2. Standard Rate rate display — lines 77–80
- The `$1.85` and `/ lb` are already split into two spans — merge the concept visually. The `/ lb` label already reads correctly so no JSX restructuring needed; just confirm the display is `$1.85` with `/ lb` suffix (already correct at line 80). No change needed here.

### 3. Included strip — lines 91–93
Replace the three strings:
- `"Pickup & Delivery Included"` → `"Free Pickup & Delivery"`
- `"Washed, Dried & Folded"` → `"Washed, Dried & Folded/Hung"`
- `"48-Hour Turnaround"` → `"24–48-Hour Turnaround"`

### 4. New Same-Day Service section — insert after line 107 (after the Standard Rate section closes)
New `bg-secondary` section, centered, matching the Standard Rate section's visual style but slightly smaller scale:
- Eyebrow: "For Urgent Orders"
- Gold divider
- Rate display: `$2.25` large gold + `/ lb` muted
- Subtext: "Based on Order Size and Pickup Time" + $35 minimum note
- Included strip: same 3 dot items
- Gold divider

### 5. Remove Cost Estimator — lines 109–158
Delete the entire `{/* Cost Estimator */}` section (lines 109–158). Also remove `estimates` array (lines 13–35) and `User`/`Users` imports since they're only used there.

### 6. Update specialItems array — lines 37–44
Replace with:
```ts
const specialItems = [
  { item: "Comforter / Duvet Inserts", price: "$25" },
  { item: "Blankets", price: "$15–$20" },
  { item: "Throw Blankets", price: "$8" },
];
```
Remove `Pillow` and `Bathmat` entries.

### Final CTA link — line 257
Update `to="/contact"` → `to="/schedule"` to match the rest of the site.

### Files changed
`src/pages/Pricing.tsx` only.
