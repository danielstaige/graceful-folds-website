import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck, Sparkles, Home } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Package,
    title: "Schedule Your Pickup",
    desc: "Use our simple online form to choose your pickup day and time window. It takes less than 2 minutes. You'll receive a confirmation immediately.",
    details: ["Choose your preferred time window", "No commitment required", "Easy online scheduling"],
  },
  {
    num: "02",
    icon: Truck,
    title: "We Come to Your Door",
    desc: "Our friendly team member arrives during your chosen window. Just leave your laundry bag by the door — no need to be home.",
    details: ["Contactless pickup available", "No need to be home", "Tracked pickup confirmation"],
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Washed, Dried & Folded",
    desc: "Your clothes are washed with premium detergent, dried with care, and folded neatly. Each item is treated like it belongs to family.",
    details: ["Premium detergents used", "Separated lights & darks", "Folded to your preference"],
  },
  {
    num: "04",
    icon: Home,
    title: "Delivered Back to You",
    desc: "Fresh, clean, and folded laundry is returned to your doorstep within 48 hours. You're done — go enjoy your week.",
    details: ["48-hour turnaround", "Delivered to your door", "Satisfaction guaranteed"],
  },
];

const HowItWorks = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-gold mb-4 block">The Process</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            How It Works
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
            Four simple steps and your laundry is handled. No trips to the laundromat. No lost socks. No stress.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`flex flex-col md:flex-row gap-8 items-start bg-card rounded-xl p-8 shadow-card ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-3">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-soft">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <span className="font-body text-xs tracking-widest text-muted-foreground">{step.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-primary mb-3">{step.title}</h3>
                    <p className="font-body text-foreground/80 leading-relaxed mb-5">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-sage-light rounded-xl p-10 text-center">
            <h3 className="font-display text-3xl font-semibold text-primary mb-4">Ready to get started?</h3>
            <p className="font-body text-foreground/70 mb-7 max-w-md mx-auto">
              Your first pickup is simpler than you think. Schedule today and experience the difference.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-body text-sm font-semibold shadow-gold hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
            >
              Schedule My First Pickup <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
