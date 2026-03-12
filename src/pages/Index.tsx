import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Clock, Tag, Star, DoorOpen, Shirt, Home, ChevronLeft, ChevronRight, User } from "lucide-react";
import heroImg from "@/assets/hero-laundry.jpg";

const promises = [
  { icon: Sparkles, title: "Done For You", desc: "Every item washed, dried, and folded — ready to put away." },
  { icon: Clock, title: "Back in 24–48 Hours", desc: "Fast turnaround so you're never without what you need." },
  { icon: Tag, title: "Simple, Flat-Rate Pricing", desc: "No surprises. Just one clear price per bag." },
];

const steps = [
  { icon: DoorOpen, num: "01", title: "Set It on the Porch", desc: "Leave your bag out at your scheduled pickup time — no waiting around." },
  { icon: Shirt, num: "02", title: "We Wash & Fold", desc: "We handle everything with care — washed, dried, and neatly folded." },
  { icon: Home, num: "03", title: "It's Back at Your Door", desc: "Fresh laundry delivered back to your doorstep, right on schedule." },
];

const testimonials = [
  { name: "Sarah M.", location: "Frisco, TX", quote: "I honestly cried the first time I got my laundry back folded perfectly. Such a relief for our family of five." },
  { name: "James & Tina R.", location: "Plano, TX", quote: "We've tried other services but Folds of Grace is on another level. Reliable, careful, and they actually care." },
  { name: "Michelle K.", location: "Allen, TX", quote: "Scheduling took 90 seconds. They showed up on time. The laundry smelled amazing. I'm never going back." },
  { name: "David & Angela P.", location: "McKinney, TX", quote: "As parents of three young kids, laundry felt endless. Folds of Grace gave us our Saturday mornings back." },
  { name: "Renee T.", location: "Garland, TX", quote: "I've recommended this service to every mom in my neighborhood. It's not a luxury — it's a necessity." },
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <main>
      {/* ── 1. HERO — Asymmetric Split ── */}
      <section className="flex flex-col lg:flex-row min-h-screen">
        {/* Left: Text */}
        <div className="flex-1 flex items-center justify-center bg-background px-8 md:px-16 lg:px-20 py-24 lg:py-0">
          <div className="max-w-lg">
            <span className="font-display text-sm italic text-gold mb-6 block tracking-wide">
              Dallas-Fort Worth · Premium Laundry Service
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary leading-tight mb-6">
              Finally, a Solution
              <br />
              <em className="not-italic text-gold">for Your Laundry.</em>
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
              Get your laundry done for you, so you can focus on what matters most. Pickup, wash, fold, and delivery — all taken care of.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-body text-sm font-semibold tracking-wide shadow-[var(--shadow-gold)] hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: "var(--gradient-gold)", color: "hsl(var(--soft-cream))" }}
            >
              Schedule My First Pickup
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative lg:w-[48%] h-72 lg:h-auto shrink-0">
          <img
            src={heroImg}
            alt="Neatly folded laundry on a clean wooden surface"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "hsl(40 95% 45% / 0.06)" }}
          />
        </div>
      </section>

      {/* ── 2. PROMISE STRIP ── */}
      <section className="bg-primary py-14 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {promises.map((p, i) => (
              <div
                key={p.title}
                className="flex flex-col items-center gap-3"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "hsl(var(--deep-gold) / 0.15)" }}
                >
                  <p.icon size={26} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground">{p.title}</h3>
                <p className="font-body text-sm text-primary-foreground/70 leading-relaxed max-w-[200px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS — Linear Numbered ── */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-xs tracking-widest uppercase text-gold">Simple Process</span>
            <h2 className="font-display text-4xl font-semibold text-primary mt-3 mb-4">How It Works</h2>
            <div className="gold-divider" />
          </div>

          <div className="flex flex-col divide-y divide-border">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col md:flex-row items-start gap-6 md:gap-0 py-10">
                {/* Large ghost number */}
                <span className="font-display text-7xl font-semibold leading-none w-24 shrink-0 select-none"
                  style={{ color: "hsl(var(--deep-gold) / 0.22)" }}>
                  {step.num}
                </span>

                {/* Vertical gold divider — desktop only */}
                <div className="hidden md:block w-px self-stretch mx-8" style={{ background: "hsl(var(--deep-gold) / 0.2)" }} />

                {/* Content */}
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ background: "hsl(var(--deep-gold) / 0.12)" }}
                  >
                    <step.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-semibold text-primary mb-2">{step.title}</h4>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. LIFESTYLE IMAGE 1 ── */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={heroImg}
          alt="Fresh laundry folded with care"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0" style={{ background: "hsl(20 10% 15% / 0.35)" }} />
        <p className="absolute bottom-5 right-6 font-display text-sm italic"
          style={{ color: "hsl(var(--soft-cream) / 0.85)" }}>
          Every item treated with care.
        </p>
      </div>

      {/* ── 5. THE DIFFERENCE — Linen Texture ── */}
      <section
        className="py-28 px-4"
        style={{
          backgroundColor: "hsl(38 33% 92%)",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(38 33% 85% / 0.4) 2px, hsl(38 33% 85% / 0.4) 3px), repeating-linear-gradient(90deg, transparent, transparent 2px, hsl(38 33% 85% / 0.4) 2px, hsl(38 33% 85% / 0.4) 3px)",
        }}
      >
        <div className="container max-w-2xl mx-auto text-center">
          <div className="gold-divider mb-10" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-snug mb-6">
            We Wash, We Fold…
            <br />
            <em className="not-italic text-gold">and We Pray.</em>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            Folds of Grace isn't just a laundry service. Every bag we handle is treated with care and intention. We believe in lightening the load — in more ways than one.
          </p>
          <div className="gold-divider" />
        </div>
      </section>

      {/* ── 6. TESTIMONIALS — Slider ── */}
      <section className="bg-primary py-24 px-4 relative overflow-hidden">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-body text-xs tracking-widest uppercase text-gold">Happy Families</span>
            <h2 className="font-display text-4xl font-semibold text-primary-foreground mt-3 mb-4">
              What Our Customers Say
            </h2>
            <div className="gold-divider" />
          </div>

          {/* Slider track */}
          <div className="relative">
            {/* Prev button */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ color: "hsl(var(--deep-gold))", border: "1px solid hsl(var(--deep-gold) / 0.3)" }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Slides */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((review) => (
                  <div key={review.name} className="min-w-full px-4 md:px-16 text-center">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} className="fill-gold text-gold" />
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="font-display text-xl md:text-2xl text-primary-foreground leading-relaxed italic mb-8">
                      "{review.quote}"
                    </p>
                    {/* Attribution */}
                    <p className="font-body text-sm font-semibold text-gold tracking-wide">
                      — {review.name}, {review.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ color: "hsl(var(--deep-gold))", border: "1px solid hsl(var(--deep-gold) / 0.3)" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                style={{
                  background: i === activeIndex ? "hsl(var(--deep-gold))" : "transparent",
                  border: `1.5px solid hsl(var(--deep-gold) / ${i === activeIndex ? "1" : "0.4"})`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. LIFESTYLE IMAGE 2 ── */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={heroImg}
          alt="Laundry delivered fresh to your doorstep"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        <div className="absolute inset-0" style={{ background: "hsl(var(--charcoal) / 0.3)" }} />
        <p className="absolute bottom-5 left-6 font-display text-sm italic"
          style={{ color: "hsl(var(--soft-cream) / 0.85)" }}>
          Delivered to your door, fresh every time.
        </p>
      </div>

      {/* ── 8. MEET DANA — Asymmetric ── */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
            {/* Left: Text */}
            <div className="flex-1 text-center md:text-left">
              <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">Our Founder</span>
              <h2 className="font-display text-4xl font-semibold text-primary mb-5">Meet Dana</h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
                Dana started Folds of Grace after watching busy families in her community struggle to keep up with the endless pile of laundry. Her mission is simple: give people back the time and peace of mind they deserve.
              </p>
              <Link
                to="/our-story"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-gold transition-colors"
              >
                Read Our Story <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right: Photo placeholder */}
            <div className="shrink-0 flex flex-col items-center gap-3">
              <div
                className="w-56 h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-[var(--shadow-soft)]"
                style={{
                  background: "radial-gradient(circle at 60% 40%, hsl(40 95% 65% / 0.4), hsl(38 33% 92%))",
                  outline: "2px solid hsl(var(--deep-gold) / 0.3)",
                  outlineOffset: "4px",
                }}
              >
                <User size={52} className="text-gold opacity-60" />
              </div>
              <p className="font-display text-xs italic text-muted-foreground">Photo coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="bg-primary py-28 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="gold-divider mb-10" />
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6 leading-tight">
            You Deserve a Little Grace.
          </h2>
          <p className="font-body text-primary-foreground/75 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Let us handle the laundry. Your first pickup is just a few clicks away — serving families across Dallas-Fort Worth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-body text-sm font-semibold tracking-wide hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: "var(--gradient-gold)", color: "hsl(var(--soft-cream))" }}
          >
            Schedule My First Pickup <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
