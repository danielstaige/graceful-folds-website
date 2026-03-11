import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Clock, Tag, Star, DoorOpen, Shirt, Home } from "lucide-react";
import heroImg from "@/assets/hero-laundry.jpg";

const promises = [
  {
    icon: Sparkles,
    title: "Done For You",
    desc: "Every item washed, dried, and folded — ready to put away.",
  },
  {
    icon: Clock,
    title: "Back in 24–48 Hours",
    desc: "Fast turnaround so you're never without what you need.",
  },
  {
    icon: Tag,
    title: "Simple, Flat-Rate Pricing",
    desc: "No surprises. Just one clear price per bag.",
  },
];

const steps = [
  {
    icon: DoorOpen,
    num: "1",
    title: "Set It on the Porch",
    desc: "Leave your bag out at your scheduled pickup time — no waiting around.",
  },
  {
    icon: Shirt,
    num: "2",
    title: "We Wash & Fold",
    desc: "We handle everything with care — washed, dried, and neatly folded.",
  },
  {
    icon: Home,
    num: "3",
    title: "It's Back at Your Door",
    desc: "Fresh laundry delivered back to your doorstep, right on schedule.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Frisco, TX",
    quote:
      "I honestly cried the first time I got my laundry back folded perfectly. Such a relief for our family of five.",
  },
  {
    name: "James & Tina R.",
    location: "Plano, TX",
    quote:
      "We've tried other services but Folds of Grace is on another level. Reliable, careful, and they actually care.",
  },
  {
    name: "Michelle K.",
    location: "Allen, TX",
    quote:
      "Scheduling took 90 seconds. They showed up on time. The laundry smelled amazing. I'm never going back.",
  },
  {
    name: "David & Angela P.",
    location: "McKinney, TX",
    quote:
      "As parents of three young kids, laundry felt endless. Folds of Grace gave us our Saturday mornings back.",
  },
  {
    name: "Renee T.",
    location: "Garland, TX",
    quote:
      "I've recommended this service to every mom in my neighborhood. It's not a luxury — it's a necessity.",
  },
];

const HomePage = () => {
  return (
    <main>
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[92vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative container max-w-7xl mx-auto px-4 py-28">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block font-body text-xs font-medium tracking-widest uppercase text-gold mb-6">
              Dallas-Fort Worth · Premium Service
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight mb-6">
              Finally, a Solution
              <br />
              <em className="text-gold not-italic">for Your Laundry.</em>
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-10 max-w-xl">
              Get your laundry done for you, so you can focus on what matters most. Pickup, wash, fold, and delivery — all taken care of.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-body text-sm font-semibold tracking-wide shadow-gold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
            >
              Schedule My First Pickup
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. PROMISE STRIP ── */}
      <section className="bg-primary py-14 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {promises.map((p, i) => (
              <div
                key={p.title}
                className="flex flex-col items-center gap-3 animate-fade-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "hsl(var(--gold) / 0.15)" }}>
                  <p.icon size={26} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground">{p.title}</h3>
                <p className="font-body text-sm text-primary-foreground/70 leading-relaxed max-w-[200px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ── */}
      <section className="section-padding bg-background">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-widest uppercase text-gold">Simple Process</span>
            <h2 className="font-display text-4xl font-semibold text-primary mt-3 mb-4">
              How It Works
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Dashed connector lines — desktop only */}
            <div className="hidden md:block absolute top-8 left-[calc(33%+1rem)] right-[calc(33%+1rem)] h-px border-t-2 border-dashed border-gold/40" />

            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center gap-4 relative z-10">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-soft">
                    <step.icon size={26} className="text-gold" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-body text-xs font-bold text-primary-foreground"
                    style={{ background: "hsl(var(--gold))" }}>
                    {step.num}
                  </span>
                </div>
                <h4 className="font-display text-xl font-semibold text-primary">{step.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-[220px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THE DIFFERENCE ── */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="gold-divider mb-8" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary leading-snug mb-6">
            We Wash, We Fold…
            <br />
            <em className="not-italic text-gold">and We Pray.</em>
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
            Folds of Grace isn't just a laundry service. Every bag we handle is treated with care and intention. We believe in lightening the load — in more ways than one.
          </p>
          <div className="gold-divider" />
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ── */}
      <section className="section-padding bg-background">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-widest uppercase text-gold">Happy Families</span>
            <h2 className="font-display text-4xl font-semibold text-primary mt-3 mb-4">
              What Our Customers Say
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review, i) => (
              <div
                key={review.name}
                className={`bg-card rounded-xl p-8 shadow-card flex flex-col gap-4 ${
                  i === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-sm text-foreground leading-relaxed italic flex-1">
                  "{review.quote}"
                </p>
                <div>
                  <p className="font-body text-sm font-semibold text-primary">{review.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FOUNDER ── */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Avatar placeholder */}
            <div className="shrink-0">
              <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center shadow-soft text-5xl font-display font-semibold text-gold select-none">
                D
              </div>
            </div>
            {/* Text */}
            <div className="text-center md:text-left">
              <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">
                Our Founder
              </span>
              <h2 className="font-display text-3xl font-semibold text-primary mb-4">
                Meet Dana
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 max-w-lg">
                Dana started Folds of Grace after watching busy families in her community struggle to keep up with the endless pile of laundry. Her mission is simple: give people back the time and peace of mind they deserve.
              </p>
              <Link
                to="/our-story"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-gold transition-colors"
              >
                Read Our Story <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ── */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-5 leading-tight">
            You Deserve a Little Grace.
          </h2>
          <p className="font-body text-primary-foreground/75 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Let us handle the laundry. Your first pickup is just a few clicks away — serving families across Dallas-Fort Worth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-body text-sm font-semibold tracking-wide shadow-gold hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
          >
            Schedule My First Pickup <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
