import { Link } from "react-router-dom";
import { ArrowRight, Heart, MapPin, Car, Sparkles, Home, Shield, User } from "lucide-react";
import danaPhoto from "@/assets/dana-folder.jpg";

const folders = [
  {
    name: "Sarah M.",
    neighborhood: "Frisco & Allen",
    bio: "A mom of three who joined Folds of Grace to serve her community and make time for what matters. Philippians 4:13 is the verse she returns to on hard days.",
    quote: "Serving others is how I remember what matters most.",
  },
  {
    name: "Keisha T.",
    neighborhood: "McKinney & Prosper",
    bio: "Former teacher turned full-time mama who loves the flexibility of folding on her own schedule. She says the job lets her pour into her family while still contributing meaningfully.",
    quote: "This work gave me my mornings back — and my purpose.",
  },
  {
    name: "Marisol V.",
    neighborhood: "Plano & Richardson",
    bio: "Marisol has been with Folds of Grace since the beginning. She takes quiet pride in returning laundry so neat, customers text her to say it made their week.",
    quote: "When the laundry is perfect, I know someone's day got a little lighter.",
  },
  {
    name: "Brittany H.",
    neighborhood: "Garland & Rowlett",
    bio: "A caregiver by nature, Brittany joined because she wanted work that felt like love. Her customers know her by name and always look forward to her smile.",
    quote: "Every bag is someone trusting me with their home. I take that seriously.",
  },
  {
    name: "Danielle R.",
    neighborhood: "Carrollton & Farmers Branch",
    bio: "Danielle leads by example, treating every bag as if it belongs to her own family. She's the one who trained the rest of the team.",
    quote: "I fold every item the way I'd want mine folded — with intention.",
  },
  {
    name: "Tanya W.",
    neighborhood: "Irving & Grand Prairie",
    bio: "Tanya likes to say she doesn't just wash clothes — she lightens loads. She joined Folds of Grace because she believes service is a calling.",
    quote: "I don't just wash clothes. I lighten loads.",
  },
];

const benefits = [
  "Flexible hours — you set your own schedule",
  "Work from home, in your neighborhood",
  "Meaningful income doing work that matters",
  "Be part of a faith-inspired, women-led team",
];

const qualifications = [
  { icon: Home, text: "Working washer and dryer in your home" },
  { icon: Car, text: "Reliable vehicle for pickup and delivery" },
  { icon: Sparkles, text: "Attention to detail and care for quality" },
  { icon: Heart, text: "A heart for service and community" },
];

const TheFold = () => {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-gold mb-4 block">The Fold</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6 leading-tight">
            Meet the Women Who Serve Your Community.
          </h1>
        </div>
      </section>

      {/* Meet Dana */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-card">
              <img
                src={danaPhoto}
                alt="Dana, founder of Folds of Grace, folding laundry"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">Meet Dana</span>
              <h2 className="font-display text-4xl font-semibold text-primary mb-4 leading-snug">
                The Heart Behind the Fold
              </h2>
              <div className="gold-divider mb-5 lg:ml-0" />
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Dana started Folds of Grace with a simple belief: that serving your neighbor through something as everyday as laundry could be an act of love. She leads by example — folding, delivering, and caring for every family like her own.
              </p>
              <p
                className="font-display text-lg italic leading-relaxed"
                style={{ color: "hsl(var(--deep-gold) / 0.7)" }}
              >
                "Every load is an opportunity to lighten someone's day."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Folder Profiles */}
      <section className="section-padding bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-semibold text-primary mb-4">
              Your Neighbors. Your Folders.
            </h2>
            <div className="gold-divider mb-5" />
            <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
              Every Folder is background-checked, trained, and chosen for her character. These are the women who show up for your family, week after week.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {folders.map((folder) => (
              <div
                key={folder.name}
                className="bg-card rounded-xl p-7 shadow-card hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center"
              >
                {/* Photo placeholder */}
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center mb-5 shrink-0"
                  style={{
                    background: "hsl(var(--secondary))",
                    boxShadow: "0 0 0 2px hsl(var(--deep-gold) / 0.2)",
                  }}
                >
                  <User size={36} style={{ color: "hsl(var(--deep-gold))" }} />
                </div>

                <h3 className="font-display text-xl font-semibold text-primary mb-1">{folder.name}</h3>

                <div className="flex items-center gap-1.5 mb-4">
                  <MapPin size={12} className="text-gold shrink-0" />
                  <span className="font-body text-xs text-gold uppercase tracking-widest">
                    Serving {folder.neighborhood}
                  </span>
                </div>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{folder.bio}</p>

                {/* Pull-quote */}
                <p
                  className="font-display text-sm italic leading-relaxed"
                  style={{ color: "hsl(var(--deep-gold) / 0.7)" }}
                >
                  "{folder.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Folder Testimonial */}
      <section className="section-padding bg-secondary px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span
            className="font-display text-8xl leading-none block -mb-4"
            style={{ color: "hsl(var(--deep-gold) / 0.35)" }}
          >
            "
          </span>
          <blockquote className="font-display text-2xl md:text-3xl italic font-semibold text-primary leading-relaxed mb-8">
            This job gave me the freedom to be present for my kids and still do something that feels like it matters. Every time I fold someone's laundry, I'm saying — I see you, I've got you.
          </blockquote>
          <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">
            — Keisha T., Folder since 2023
          </p>
        </div>
      </section>

      {/* Join the Fold */}
      <section className="section-padding bg-background px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: Role description */}
            <div>
              <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">We're Hiring</span>
              <h2 className="font-display text-4xl font-semibold text-primary mb-5 leading-snug">
                Ready to Serve Your Community?
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Folding for Folds of Grace is flexible, fulfilling work you can do in your own home on your own schedule. You'll serve families in your neighborhood, earn meaningful income, and be part of a team that genuinely cares about each other and the people we serve.
              </p>

              <ul className="space-y-3 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                      style={{ background: "hsl(var(--deep-gold))" }}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-body text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-gold"
                style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
              >
                Apply to Become a Folder <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right: Qualifications box */}
            <div className="bg-secondary rounded-xl p-8 lg:p-10">
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">What We Look For</h3>
              <div className="gold-divider mb-7" style={{ marginLeft: 0 }} />

              <ul className="space-y-5 mb-7">
                {qualifications.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "hsl(var(--deep-gold) / 0.15)" }}
                    >
                      <Icon size={16} style={{ color: "hsl(var(--deep-gold))" }} />
                    </div>
                    <span className="font-body text-sm text-foreground/80 leading-relaxed pt-1.5">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-2.5 pt-5 border-t border-border/50">
                <Shield size={14} style={{ color: "hsl(var(--deep-gold) / 0.7)" }} className="shrink-0 mt-0.5" />
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  All Folders are background-checked and trained before their first order.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default TheFold;
