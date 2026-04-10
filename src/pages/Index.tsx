import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Clock, Tag, Star, DoorOpen, Shirt, Home, Plus } from "lucide-react";
import heroImg from "@/assets/hero-laundry.jpg";
import danaPhoto from "@/assets/dana-folder.jpg";
import howItWorksBag from "@/assets/how-it-works-bag.jpg";
import stepPorch from "@/assets/step-1-porch.jpg";
import stepWashFold from "@/assets/step-2-wash-fold.jpg";
import stepDelivery from "@/assets/step-3-delivery.jpg";
import GalleryGrid from "@/components/GalleryGrid";

const promises = [
  { icon: Sparkles, title: "Done For You", desc: "Every item washed, dried, and folded — ready to put away." },
  { icon: Clock, title: "Back in 24–48 Hours", desc: "Fast turnaround so you're never without what you need." },
  { icon: Tag, title: "Simple, Flat-Rate Pricing", desc: "No surprises. Just one clear price per bag." },
];

const steps = [
  {
    icon: DoorOpen,
    num: "01",
    title: "Set It on the Porch",
    desc: "Leave your bag out at your scheduled pickup time — no waiting around.",
    tags: ["Free Pickup", "No Contact Needed"],
    img: stepPorch,
  },
  {
    icon: Shirt,
    num: "02",
    title: "We Wash & Fold",
    desc: "We handle everything with care — washed, dried, and neatly folded.",
    tags: ["Wash & Fold", "24–48 hrs"],
    img: stepWashFold,
  },
  {
    icon: Home,
    num: "03",
    title: "It's Back at Your Door",
    desc: "Fresh laundry delivered back to your doorstep, right on schedule.",
    tags: ["Doorstep Delivery", "Same Route"],
    img: stepDelivery,
  },
];

const testimonials = [
  {
    name: "Stephanie Snow",
    location: "Southlake, TX",
    initials: "SS",
    quote: "Folds of Grace was such a help to me this week! To see it all clean and meticulously folded without having done any of the work was wonderful. And to know that while we went about our day someone was praying for us is such an encouragement!",
  },
  {
    name: "Jennifer Stockett",
    location: "Grapevine, TX",
    initials: "JS",
    quote: "As a working mom, this takes one thing off my never-ending to-do list and gives me more time to be a mom. My Folder is so attentive to all our high-maintenance requests. I've been impressed with the attention to detail, timeliness, and all-around customer service.",
  },
  {
    name: "Baylee Cypress",
    location: "Mansfield, TX",
    initials: "BC",
    quote: "This service was gifted to us and it was such a treat! I loved being able to set my laundry on the porch and find it neatly folded the next morning. They even got some stubborn stains out and left a note about what they prayed for us. I highly recommend Folds of Grace!",
  },
  {
    name: "Jana Mayfield",
    location: "Midlothian, TX",
    initials: "JM",
    quote: "Folds of Grace exceeded my expectation for a laundry service! They picked up my laundry, treated stains, washed, dried, folded incredibly, and delivered it all back to my front door. They even wrote a handwritten note of how they prayed for our family. I'm thankful for their care!",
  },
  {
    name: "Susan Lawson",
    location: "Waxahachie, TX",
    initials: "SL",
    quote: "Folds of Grace exceeded my expectations! The laundry was returned the same day! The kids were able to take their bags to their room and immediately put their clothes away. They even added a personal touch with a handwritten note of how the Lord led them to pray over my family. Do yourself a favor — give them a try!",
  },
  {
    name: "Angela Swan",
    location: "Arlington, TX",
    initials: "AS",
    quote: "They picked my clothes up on Tuesday and actually had them back that afternoon — which I was pleasantly surprised about! They smelled amazing, folded so neat. The prayer cards were just the sweetest! I loved it. Just the best and hope to continue!",
  },
];

const leftTestimonials = testimonials.slice(0, 3);
const rightTestimonials = testimonials.slice(3, 6);

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main>
      {/* ── 1. HERO — Full-Bleed Dark Overlay ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Neatly folded laundry on a clean wooden surface"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, hsl(20 10% 15% / 0.82) 0%, hsl(20 10% 15% / 0.45) 60%, transparent 100%)" }}
        />

        {/* Text content */}
        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-32">
          <div className="max-w-xl">
            <span className="font-display text-sm italic mb-6 block tracking-wide" style={{ color: "hsl(var(--deep-gold))" }}>
              Dallas - Fort Worth, Laundry Pickup and Delivery Services
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
              Finally, a Solution
              <br />
              <em className="not-italic" style={{ color: "hsl(var(--deep-gold))" }}>for Your Laundry.</em>
            </h1>
            <p className="font-body text-base md:text-lg leading-relaxed mb-10 max-w-md" style={{ color: "hsl(var(--soft-cream) / 0.8)" }}>
              Never do laundry again! We pick up, wash, fold/hang, and deliver—hassle-free and ready to go.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-body text-sm font-semibold tracking-wide hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: "var(--gradient-gold)", color: "hsl(var(--soft-cream))", boxShadow: "var(--shadow-gold)" }}
            >
              Get Started Today
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
                className="flex flex-col items-center gap-3"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "hsl(var(--deep-gold) / 0.15)" }}
                >
                  <p.icon size={26} style={{ color: "hsl(var(--deep-gold))" }} />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground">{p.title}</h3>
                <p className="font-body text-sm leading-relaxed max-w-[200px]" style={{ color: "hsl(var(--soft-cream) / 0.7)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS — Image Left + Numbered List Right ── */}
      <section className="section-padding bg-background">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-xs tracking-widest uppercase mb-3 block" style={{ color: "hsl(var(--deep-gold))" }}>Simple Process</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-4">How It Works</h2>
            <p className="font-body text-base text-muted-foreground max-w-md mx-auto leading-relaxed">Three easy steps to fresh, folded laundry — without lifting a finger.</p>
          </div>

          <div className="flex flex-col gap-20">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 shrink-0">
                  <div className="rounded-2xl overflow-hidden aspect-square">
                    <img
                      src={step.img}
                      alt={step.title}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <span
                    className="font-display text-6xl font-semibold leading-none mb-4 select-none"
                    style={{ color: "hsl(var(--deep-gold) / 0.35)" }}
                  >
                    {step.num}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-xs text-muted-foreground rounded-full px-3 py-1"
                        style={{ border: "1px solid hsl(var(--border))" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="relative h-72 md:h-96 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImg}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        >
          <source src="/banner-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "hsl(20 10% 15% / 0.35)" }} />
        <p className="absolute bottom-5 right-6 font-display text-sm italic"
          style={{ color: "hsl(var(--soft-cream) / 0.85)" }}>
          Every item treated with care.
        </p>
      </div>

      {/* ── GALLERY ── */}
      <GalleryGrid />

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
            <em className="not-italic" style={{ color: "hsl(var(--deep-gold))" }}>and We Pray.</em>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            Folds of Grace isn't just a laundry service. Every bag we handle is treated with care and intention. We believe in lightening the load — in more ways than one.
          </p>
          <div className="gold-divider" />
        </div>
      </section>

      {/* ── 6. TESTIMONIALS — Grid with Featured Central Card ── */}
      <section className="bg-background py-24 px-4">
        <div className="container max-w-6xl mx-auto">

          {/* Desktop: 3-column grid */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_1.6fr_1fr] gap-4 items-stretch">

            {/* Left column — 3 name cards */}
            <div className="flex flex-col gap-4">
              {leftTestimonials.map((t, i) => {
                const globalIndex = i;
                const isActive = activeIndex === globalIndex;
                return (
                  <button
                    key={t.name}
                    onClick={() => setActiveIndex(globalIndex)}
                    className="relative rounded-xl overflow-hidden h-36 text-left transition-all duration-200 group"
                    style={{
                      background: "hsl(38 33% 90%)",
                      outline: isActive ? "2px solid hsl(var(--deep-gold))" : "2px solid transparent",
                      outlineOffset: "2px",
                    }}
                  >
                    {/* Avatar initials */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center font-display text-xl font-semibold" style={{ background: "hsl(var(--deep-gold) / 0.2)", color: "hsl(var(--deep-gold))" }}>
                        {t.initials}
                      </div>
                    </div>
                    {/* Name label */}
                    <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: "linear-gradient(to top, hsl(20 10% 15% / 0.6), transparent)" }}>
                      <p className="font-body text-xs font-semibold text-primary-foreground leading-tight">{t.name}</p>
                      <p className="font-body text-xs" style={{ color: "hsl(var(--soft-cream) / 0.7)" }}>{t.location}</p>
                    </div>
                    {/* Plus/check indicator */}
                    <div
                      className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all"
                      style={{
                        background: isActive ? "hsl(var(--deep-gold))" : "hsl(var(--soft-cream) / 0.9)",
                        color: isActive ? "hsl(var(--soft-cream))" : "hsl(var(--deep-gold))",
                      }}
                    >
                      <Plus size={12} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Center — featured card */}
            <div
              className="rounded-2xl p-8 flex flex-col justify-between"
              style={{ background: "hsl(var(--charcoal))" }}
            >
              <div>
                <span className="font-body text-xs tracking-widest uppercase mb-4 block" style={{ color: "hsl(var(--deep-gold))" }}>
                  Testimonial
                </span>
                <h2 className="font-display text-2xl font-semibold text-primary-foreground mb-8 leading-snug">
                  Praised by families<br />across DFW.
                </h2>
                <p
                  className="font-display text-6xl leading-none mb-3 select-none"
                  style={{ color: "hsl(var(--deep-gold))" }}
                >
                  "
                </p>
                <p className="font-display text-lg italic text-primary-foreground leading-relaxed">
                  {testimonials[activeIndex].quote}
                </p>
              </div>
              <div className="mt-8">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="hsl(var(--deep-gold))" style={{ color: "hsl(var(--deep-gold))" }} />
                  ))}
                </div>
                <p className="font-body text-sm font-semibold" style={{ color: "hsl(var(--deep-gold))" }}>
                  {testimonials[activeIndex].name}
                </p>
                <p className="font-body text-xs" style={{ color: "hsl(var(--soft-cream) / 0.6)" }}>
                  {testimonials[activeIndex].location}
                </p>
              </div>
            </div>

            {/* Right column — 3 name cards */}
            <div className="flex flex-col gap-4">
              {rightTestimonials.map((t, i) => {
                const globalIndex = testimonials.indexOf(t);
                const isActive = activeIndex === globalIndex;
                return (
                  <button
                    key={t.name}
                    onClick={() => setActiveIndex(globalIndex)}
                    className="relative rounded-xl overflow-hidden h-36 text-left transition-all duration-200"
                    style={{
                      background: "hsl(38 33% 90%)",
                      outline: isActive ? "2px solid hsl(var(--deep-gold))" : "2px solid transparent",
                      outlineOffset: "2px",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center font-display text-xl font-semibold" style={{ background: "hsl(var(--deep-gold) / 0.2)", color: "hsl(var(--deep-gold))" }}>
                        {t.initials}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: "linear-gradient(to top, hsl(20 10% 15% / 0.6), transparent)" }}>
                      <p className="font-body text-xs font-semibold text-primary-foreground leading-tight">{t.name}</p>
                      <p className="font-body text-xs" style={{ color: "hsl(var(--soft-cream) / 0.7)" }}>{t.location}</p>
                    </div>
                    <div
                      className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all"
                      style={{
                        background: isActive ? "hsl(var(--deep-gold))" : "hsl(var(--soft-cream) / 0.9)",
                        color: isActive ? "hsl(var(--soft-cream))" : "hsl(var(--deep-gold))",
                      }}
                    >
                      <Plus size={12} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile: simple featured card + dots */}
          <div className="lg:hidden">
            <div className="text-center mb-8">
              <span className="font-body text-xs tracking-widest uppercase mb-2 block" style={{ color: "hsl(var(--deep-gold))" }}>
                Testimonial
              </span>
              <h2 className="font-display text-3xl font-semibold text-primary">Praised by families across DFW.</h2>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ background: "hsl(var(--charcoal))" }}
            >
              <p className="font-display text-5xl leading-none mb-2 select-none" style={{ color: "hsl(var(--deep-gold))" }}>"</p>
              <p className="font-display text-lg italic text-primary-foreground leading-relaxed mb-6">
                {testimonials[activeIndex].quote}
              </p>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="hsl(var(--deep-gold))" style={{ color: "hsl(var(--deep-gold))" }} />
                ))}
              </div>
              <p className="font-body text-sm font-semibold" style={{ color: "hsl(var(--deep-gold))" }}>
                — {testimonials[activeIndex].name}, {testimonials[activeIndex].location}
              </p>
            </div>
            <div className="flex justify-center gap-2 mt-6">
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

          {/* Google Reviews Badge */}
          <div className="flex justify-center mt-12">
            <a
              href="https://www.google.com/maps/place/Folds+of+Grace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--background))" }}
            >
              <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
              </svg>
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-semibold text-foreground">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="hsl(var(--deep-gold))" style={{ color: "hsl(var(--deep-gold))" }} />
                  ))}
                </div>
              </div>
              <span className="font-body text-sm text-muted-foreground">88 Google reviews</span>
              <ArrowRight size={14} className="text-muted-foreground" />
            </a>
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
              <span className="font-body text-xs tracking-widest uppercase mb-3 block" style={{ color: "hsl(var(--deep-gold))" }}>Our Founder</span>
              <h2 className="font-display text-4xl font-semibold text-primary mb-5">Meet Dana</h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
                Hi, I'm Dana—founder of Folds of Grace, a lover of Jesus, a mom to four amazing kiddos, a friend, a CrossFit enthusiast, an intercessor, and an encourager. If you know me, you know I'm praying for you. That's not something I take lightly—it's at the center of who I am and how I serve.
              </p>
              <Link
                to="/our-story"
                className="inline-flex items-center gap-2 font-body text-sm font-medium hover:underline transition-colors"
                style={{ color: "hsl(var(--deep-gold))" }}
              >
                Read Our Story <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right: Photo placeholder */}
            <div className="shrink-0 flex flex-col items-center gap-3">
              <div
                className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden"
                style={{
                  outline: "2px solid hsl(var(--deep-gold) / 0.3)",
                  outlineOffset: "4px",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <img src={danaPhoto} alt="Dana, founder of Folds of Grace" className="w-full h-full object-cover" />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="bg-primary py-28 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="gold-divider mb-10" />
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6 leading-tight">
            You Were Never Meant to Do It Alone
          </h2>
          <p className="font-body text-lg mb-10 max-w-md mx-auto leading-relaxed" style={{ color: "hsl(var(--soft-cream) / 0.75)" }}>
            We're here to help—laundry pickup is just a few clicks away servicing all across DFW Dallas-Fort Worth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-body text-sm font-semibold tracking-wide hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: "var(--gradient-gold)", color: "hsl(var(--soft-cream))" }}
          >
            Get Started Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
