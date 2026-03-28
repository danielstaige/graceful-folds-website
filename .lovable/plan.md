

## Add Background Video Banner After "How It Works"

### What
Replace the static image divider (between "How It Works" and the Gallery) with a muted, autoplaying, looping background video. This creates a cinematic break that adds motion and polish.

### Where
The banner at lines 211-223 in `src/pages/Index.tsx` — the horizontal image strip with the "Every item treated with care" caption.

### How

**1. Add a video asset**
- You'd provide a short video clip (5-15 seconds) — ideally something like hands folding laundry, a neat stack of towels, or a porch delivery scene. A landscape/wide format works best.
- Save it as `src/assets/banner-video.mp4` (or we can use a hosted URL to keep the bundle small).

**2. Replace the `<img>` with a `<video>` element**
- Attributes: `autoPlay`, `loop`, `muted`, `playsInline` — this ensures silent autoplay on all devices (including mobile Safari).
- Keep the same dark overlay and italic caption on top.
- Add a poster/fallback image (the current hero image) so there's no blank flash while loading.

**3. Styling**
- Same dimensions: `h-72 md:h-96`, `object-cover`, `overflow-hidden`.
- The video replaces the `<img>` 1:1 — everything else (overlay, caption) stays identical.

### Technical Detail
```
<video
  autoPlay loop muted playsInline
  poster={heroImg}
  className="w-full h-full object-cover"
  style={{ objectPosition: "center 30%" }}
>
  <source src={bannerVideo} type="video/mp4" />
</video>
```

### What You Need
A short MP4 clip to use. Options:
- **Provide your own clip** — a behind-the-scenes video of your team working, folding, or delivering would be most authentic and on-brand.
- **Use a stock clip** — I can embed a royalty-free laundry/lifestyle stock video URL as a placeholder until you have your own footage.

### File Changes
- `src/pages/Index.tsx` — swap `<img>` for `<video>` in the banner section (~5 lines changed)
- Optionally add a video asset file if provided

