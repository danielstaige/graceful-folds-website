import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Clock, Tag, Star, DoorOpen, Shirt, Home, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-laundry.jpg";
import danaPhoto from "@/assets/dana-family.jpeg";
import howItWorksBag from "@/assets/how-it-works-bag.jpg";
import stepPorch from "@/assets/folds-of-grace-how-it-works-1.jpg";
import stepWashFold from "@/assets/step-2-wash-fold.jpg";
import stepDelivery from "@/assets/step3-hands.png";
import GalleryGrid from "@/components/GalleryGrid";

const promises = [
  { icon: Sparkles, title: "Full Service Laundry", desc: "Washed, folded/hung, sorted by family member — ready for put away." },
  { icon: Clock, title: "Back in 24–48 Hours", desc: "Fast turnaround so you're never without what you need.", sub: "(Most orders 24–36 hrs; rush service available depending on service and size)" },
  { icon: Tag, title: "Simple, Flat-Rate Pricing", desc: "$1.85/lb. Flat rate and free pickup and delivery." },
];

const steps = [
  {
    icon: DoorOpen,
    num: "01",
    title: "Set It on the Porch",
    desc: "Leave your bag out at your scheduled pickup time — no waiting around.",
    tags: [],
    img: stepPorch,
  },
  {
    icon: Shirt,
    num: "02",
    title: "We Wash, Fold and Hang",
    desc: "Your laundry is washed, folded and hung to perfection, then sorted by family member for easy put-away—all while we cover your home or business in prayer.",
    tags: [],
    img: stepWashFold,
  },
  {
    icon: Home,
    num: "03",
    title: "It's Back at Your Door",
    desc: "Fresh laundry is delivered to your doorstep within 24–48 hour guarantee. Need it faster? Rush service with same-day turnaround is available depending on order size and pickup time.",
    tags: [],
    img: stepDelivery,
  },
];

const testimonials = [
  {
    name: "Michelle Roy",
    location: "Southlake",
    initials: "MR",
    quote: "Folds of Grace has truly been a gift to our family. Not only do they sort, fold, and organize all of my kids' clothes, but everything is done with such care and precision. Ms. Brenda is something special — the sweetest handwritten cards and notes, each one so thoughtful and heartfelt. This is more than a laundry service — it's a blessing. 💛",
  },
  {
    name: "Lacy Garcia",
    location: "Mansfield",
    initials: "LG",
    quote: "Folds of Grace is an absolute blessing. The response time is quick, and pick-up and drop-off are always fast and efficient. It's the little things like this that help me keep my rental house running smoothly. Not to mention the blessing of knowing they pray not only over my linens, but for my family as well. 10/10 recommend.",
  },
  {
    name: "Lindsay Hardee",
    location: "Waxahachie",
    initials: "LH",
    quote: "Folds of Grace has been a Godsend to our family. With our busy schedule, laundry is the hardest chore to keep up with. Our folder, Kaitlyn, has been amazing, and we even pray for each other. I love that you usually get the same folder each time, which builds trust. The quality and quick turnaround make it completely worth it. 🙏❤️",
  },
  {
    name: "Bridget Petty",
    location: "Euless",
    initials: "BP",
    quote: "I've been so touched by Folds of Grace! As a single mom, it's truly such a blessing to have my laundry folded, sorted, and perfectly ready to be put away! The love & thoughtfulness that go into their services is a gift from God! Super thankful for Dana's heartfelt ministry & the love behind Folds of Grace! 🤍",
  },
  {
    name: "Cherlyn Simmons",
    location: "Midlothian",
    initials: "CS",
    quote: "Folds of Grace was an absolute Godsend for my friend. After her brain surgery, I wanted to take one daily burden off her plate. The owner was incredibly kind and helpful. My friend was thrilled and mentioned multiple times how wonderful the service was. The level of customer care was outstanding.",
  },
  {
    name: "Buindo's",
    location: "Venus",
    initials: "B",
    quote: "Great service! We use it for our restaurant towels. Very quick turnaround and anybody that I've ever interacted with has been super kind. I especially love the handwritten notes and asking if they can pray over us for anything!",
  },
  {
    name: "Zabby Damania",
    location: "Grand Prairie",
    initials: "ZD",
    quote: "I absolutely love them. Not only do they do a phenomenal job on my laundry but their customer service is top notch. I always receive prompt responses and they have always 100% accommodated my last minute service requests. I recommend them.",
  },
  {
    name: "Audrey Nabholz",
    location: "Fort Worth",
    initials: "AN",
    quote: "If I could give 10 stars, I would! When we were in a bind across the US and found ourselves in the hospital, the Folds of Grace team saved us! I will shout their awesomeness from Heaven one day!!",
  },
  {
    name: "Danielle Jenkins",
    location: "Colleyville",
    initials: "DJ",
    quote: "Folds of Grace is literally the best thing I have ever done for me, my sanity, and my household. As a small business owner, I could never keep up. Now I know the laundry fairies are coming! They will even hang on hangers so all I have to do is put them away. Not to mention they pray for your kids and you while folding! Don't walk — RUN! ❤️",
  },
  {
    name: "LaQuanda Brownlee",
    location: "Venus",
    initials: "LB",
    quote: "If I could leave them 100 stars, I would. They are absolutely phenomenal and a wonderful service to have available when you have a lot going on and can't keep up with laundry. Thank you ladies for always being there for us when we need it. ❤️",
  },
  {
    name: "Susan Lawson",
    location: "Midlothian",
    initials: "SL",
    quote: "I am a full time working mom. Folds of Grace exceeded my expectations! The laundry was returned the same day! The kids were able to take their bags to their room and immediately put their clothes away! They even added a personal touch with a handwritten note of how the Lord led them to pray over my family! Do yourself a favor — give them a try!",
  },
  {
    name: "Stephanie Snow",
    location: "Southlake",
    initials: "SS",
    quote: "Folds of Grace was such a help to me this week! To see it all clean and meticulously folded without having done any of the work was wonderful. And to know that while we went about our day someone was praying for us is such an encouragement!",
  },
];

const leftTestimonials = testimonials.slice(0, 6);
const rightTestimonials = testimonials.slice(6, 12);

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
        {/* Gradient overlay — stronger on mobile for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, hsl(20 10% 15% / 0.82) 0%, hsl(20 10% 15% / 0.45) 60%, transparent 100%)" }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "hsl(20 10% 15% / 0.55)" }}
        />

        {/* Text content */}
        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-32">
          <div className="max-w-xl">
            <span className="font-display text-sm italic mb-6 block tracking-wide" style={{ color: "hsl(var(--deep-gold))" }}>
              Dallas - Fort Worth, Laundry Pickup and Delivery Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
              Finally, a Solution
              <br />
              <em className="not-italic" style={{ color: "hsl(var(--deep-gold))" }}>for Your Laundry.</em>
            </h1>
            <p className="font-body text-base md:text-lg leading-relaxed mb-10 max-w-md" style={{ color: "hsl(0 0% 100% / 0.9)" }}>
              Never do laundry again! We pick up, wash, fold/hang, and deliver—hassle-free and ready to go.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-body text-sm font-semibold tracking-wide hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)", boxShadow: "var(--shadow-gold)" }}
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
                <p className="font-body text-sm leading-relaxed max-w-[220px] text-primary-foreground/80">{p.desc}</p>
                {p.sub && (
                  <p className="font-body text-xs leading-relaxed max-w-[220px] text-primary-foreground/60 italic">{p.sub}</p>
                )}
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
                {/* Number - visible only on mobile, above image */}
                <span
                  className="md:hidden font-display text-6xl font-semibold leading-none select-none self-start"
                  style={{ color: "hsl(var(--deep-gold) / 0.35)" }}
                >
                  {step.num}
                </span>

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
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                  <span
                    className="hidden md:block font-display text-6xl font-semibold leading-none mb-4 select-none"
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
            <em className="not-italic" style={{ color: "hsl(var(--deep-gold))" }}>We Pray.</em>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            Folds of Grace isn't just laundry. Every item is handled with care and intention, giving you back time and surrounding your home or business in prayer.
          </p>
          <div className="gold-divider" />
        </div>
      </section>

      {/* ── 6. TESTIMONIALS — Grid with Featured Central Card ── */}
      <section className="bg-background py-16 md:py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-14">
            <span className="font-body text-xs tracking-widest uppercase mb-3 block" style={{ color: "hsl(var(--accent))" }}>
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-4">
              Praised by Families Across DFW
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              Hear from the families and businesses who trust us with their laundry.
            </p>
          </div>

          {/* Desktop: 3-column grid */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_1.6fr_1fr] gap-4 items-start">

            {/* Left column — 6 review cards */}
            <div className="flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-1 custom-scrollbar">
              {leftTestimonials.map((t, i) => {
                const globalIndex = i;
                const isActive = activeIndex === globalIndex;
                return (
                  <button
                    key={t.name}
                    onClick={() => setActiveIndex(globalIndex)}
                    className="rounded-xl p-4 text-left transition-all duration-200 group"
                    style={{
                      background: "hsl(var(--card))",
                      outline: isActive ? "2px solid hsl(var(--accent))" : "2px solid transparent",
                      outlineOffset: "2px",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center font-display text-xs font-semibold shrink-0"
                        style={{ background: "hsl(var(--accent) / 0.15)", color: "hsl(var(--accent))" }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-body text-sm font-semibold text-foreground leading-tight">{t.name}</p>
                        <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                      </div>
                    </div>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      "{t.quote}"
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Center — featured card (blue) */}
            <div
              className="rounded-2xl p-8 flex flex-col justify-between min-h-[600px]"
              style={{ background: "hsl(var(--accent))" }}
            >
              <div>
                <p
                  className="font-display text-6xl leading-none mb-3 select-none"
                  style={{ color: "hsl(0 0% 100% / 0.3)" }}
                >
                  "
                </p>
                <p className="font-display text-lg italic leading-relaxed" style={{ color: "hsl(0 0% 100%)" }}>
                  {testimonials[activeIndex].quote}
                </p>
              </div>
              <div className="mt-8">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="hsl(0 0% 100%)" style={{ color: "hsl(0 0% 100%)" }} />
                  ))}
                </div>
                <p className="font-body text-sm font-semibold" style={{ color: "hsl(0 0% 100%)" }}>
                  {testimonials[activeIndex].name}
                </p>
                <p className="font-body text-xs" style={{ color: "hsl(0 0% 100% / 0.6)" }}>
                  {testimonials[activeIndex].location}
                </p>
              </div>
            </div>

            {/* Right column — 6 review cards */}
            <div className="flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-1 custom-scrollbar">
              {rightTestimonials.map((t, i) => {
                const globalIndex = leftTestimonials.length + i;
                const isActive = activeIndex === globalIndex;
                return (
                  <button
                    key={t.name}
                    onClick={() => setActiveIndex(globalIndex)}
                    className="rounded-xl p-4 text-left transition-all duration-200"
                    style={{
                      background: "hsl(var(--card))",
                      outline: isActive ? "2px solid hsl(var(--accent))" : "2px solid transparent",
                      outlineOffset: "2px",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center font-display text-xs font-semibold shrink-0"
                        style={{ background: "hsl(var(--accent) / 0.15)", color: "hsl(var(--accent))" }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-body text-sm font-semibold text-foreground leading-tight">{t.name}</p>
                        <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                      </div>
                    </div>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      "{t.quote}"
                    </p>
                  </button>
                );
              })}
            </div>
          </div>


          {/* Mobile: simple featured card + dots */}
          <div className="lg:hidden">
            <div
              className="rounded-2xl p-6 relative"
              style={{ background: "hsl(var(--accent))" }}
            >
              <p className="font-display text-5xl leading-none mb-2 select-none" style={{ color: "hsl(0 0% 100% / 0.3)" }}>"</p>
              <p className="font-display text-base italic leading-relaxed mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                {testimonials[activeIndex].quote}
              </p>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="hsl(0 0% 100%)" style={{ color: "hsl(0 0% 100%)" }} />
                ))}
              </div>
              <p className="font-body text-sm font-semibold" style={{ color: "hsl(0 0% 100%)" }}>
                — {testimonials[activeIndex].name}, {testimonials[activeIndex].location}
              </p>
            </div>
            {/* Arrows + dots */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors"
                style={{ borderColor: "hsl(var(--accent))", color: "hsl(var(--accent))" }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5 flex-wrap justify-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: i === activeIndex ? "hsl(var(--accent))" : "transparent",
                      border: `1.5px solid hsl(var(--accent) / ${i === activeIndex ? "1" : "0.4"})`,
                    }}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors"
                style={{ borderColor: "hsl(var(--accent))", color: "hsl(var(--accent))" }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Google Reviews Badge */}
          <div className="flex justify-center mt-12">
            <a
              href="https://maps.app.goo.gl/KRSdGhEv1Y8TcZaPA"
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
              <span className="font-body text-sm text-muted-foreground">92 Google reviews</span>
              <ArrowRight size={14} className="text-muted-foreground" />
            </a>
          </div>
        </div>
      </section>


      {/* ── 8. MEET DANA — Asymmetric ── */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
            {/* Left: Text */}
            <div className="flex-1 text-center md:text-left">
              <span className="font-body text-xs tracking-widest uppercase mb-3 block" style={{ color: "hsl(var(--deep-gold))" }}>Our Founder</span>
              <h2 className="font-display text-4xl font-semibold text-primary mb-5">Meet Dana</h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-4 max-w-md">
                Hi, I'm Dana—founder of Folds of Grace, a lover of Jesus, a mom to four amazing kiddos, a friend, a CrossFit enthusiast, an intercessor, and an encourager.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
                If you know me, you know I'm praying for you. That's not something I take lightly—it's at the center of who I am and how I serve.
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
      <section className="bg-primary py-16 md:py-28 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="gold-divider mb-10" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6 leading-tight">
            You Were Never Meant to Do It Alone
          </h2>
          <p className="font-body text-lg mb-10 max-w-md mx-auto leading-relaxed text-primary-foreground/75">
            We're here to help—laundry pickup is just a few clicks away servicing all across DFW Dallas-Fort Worth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-body text-sm font-semibold tracking-wide hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
          >
            Get Started Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
