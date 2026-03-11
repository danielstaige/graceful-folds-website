import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import heroImg from "@/assets/hero-laundry.jpg";

const trustBadges = [
  "Same-Week Pickup Available",
  "Free First Bag Promo",
  "Insured & Trusted",
  "Dallas-Fort Worth Only",
];

const problems = [
  {
    icon: "⏰",
    title: "No Time",
    desc: "Between work, kids, and everything else — laundry keeps piling up.",
  },
  {
    icon: "😓",
    title: "Overwhelmed",
    desc: "It's not just the washing. It's the drying, folding, and putting it all away.",
  },
  {
    icon: "🏠",
    title: "Back to Your Life",
    desc: "Imagine coming home to clean, folded laundry — without lifting a finger.",
  },
];

const steps = [
  { num: "01", title: "Schedule", desc: "Book a pickup online in under 2 minutes." },
  { num: "02", title: "We Pick Up", desc: "We come to your door at your chosen time." },
  { num: "03", title: "We Wash & Fold", desc: "Cleaned with care and folded beautifully." },
  { num: "04", title: "We Deliver", desc: "Fresh laundry back on your doorstep." },
];

const HomePage = () => {
  return (
    <main>
      {/* Hero */}
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
              Your Laundry,
              <br />
              <em className="text-gold not-italic">Done Right.</em>
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-10 max-w-xl">
              We pick up, wash, fold, and deliver — so you can spend your time on what actually matters. Professional laundry service for busy DFW families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-body text-sm font-semibold tracking-wide shadow-gold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
              >
                Schedule My First Pickup
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-body text-sm font-medium border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
              >
                See How It Works
              </Link>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10">
              {trustBadges.map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 font-body text-xs text-primary-foreground/70">
                  <CheckCircle size={13} className="text-sage" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="section-padding bg-background">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-widest uppercase text-gold">Sound Familiar?</span>
            <h2 className="font-display text-4xl font-semibold text-primary mt-3 mb-4">
              Life's Too Full for Laundry
            </h2>
            <div className="gold-divider mb-5" />
            <p className="font-body text-muted-foreground max-w-lg mx-auto leading-relaxed">
              You're not behind — you're just busy. We're here to take one more thing off your plate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((p) => (
              <div key={p.title} className="bg-card rounded-xl p-8 shadow-card text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-display text-xl font-semibold text-primary mb-3">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works preview */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-widest uppercase text-gold">The Process</span>
            <h2 className="font-display text-4xl font-semibold text-primary mt-3 mb-4">
              Simple as 1, 2, 3, 4
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] w-full h-px bg-border z-0" />
                )}
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="font-body text-xs font-semibold text-gold">{step.num}</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-primary mb-2">{step.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-gold transition-colors"
            >
              Learn the full process <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="section-padding bg-background">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-widest uppercase text-gold">Happy Families</span>
            <h2 className="font-display text-4xl font-semibold text-primary mt-3 mb-4">
              What Our Customers Say
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                location: "Frisco, TX",
                quote: "I honestly cried the first time I got my laundry back folded perfectly. Such a relief for our family of five.",
              },
              {
                name: "James & Tina R.",
                location: "Plano, TX",
                quote: "We've tried other services but Folds of Grace is on another level. Reliable, careful, and they actually care.",
              },
              {
                name: "Michelle K.",
                location: "Allen, TX",
                quote: "Scheduling took 90 seconds. They showed up on time. The laundry smelled amazing. I'm never going back.",
              },
            ].map((review) => (
              <div key={review.name} className="bg-card rounded-xl p-8 shadow-card">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-sm text-foreground leading-relaxed mb-5 italic">
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

      {/* CTA Banner */}
      <section className="bg-primary py-20">
        <div className="container max-w-4xl mx-auto text-center px-4">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-5">
            Ready to reclaim your weekend?
          </h2>
          <p className="font-body text-primary-foreground/75 text-lg mb-8 max-w-md mx-auto">
            Your first pickup is just a few clicks away. Serving families across Dallas-Fort Worth.
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
