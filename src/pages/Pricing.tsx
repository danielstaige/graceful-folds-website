import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "34",
    unit: "per bag",
    description: "Perfect for singles or couples just getting started.",
    features: [
      "Up to 15 lbs per bag",
      "Washed, dried & folded",
      "48-hour turnaround",
      "Contactless pickup & delivery",
      "Standard detergent included",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Family",
    price: "89",
    unit: "per week",
    description: "Our most popular plan for busy families.",
    features: [
      "Up to 3 bags per week",
      "Washed, dried & folded",
      "48-hour turnaround",
      "Contactless pickup & delivery",
      "Premium detergent included",
      "Dedicated route driver",
      "Fragrance preference noted",
    ],
    cta: "Start Family Plan",
    highlight: true,
  },
  {
    name: "Household",
    price: "149",
    unit: "per week",
    description: "For larger households with higher volume needs.",
    features: [
      "Up to 6 bags per week",
      "Washed, dried & folded",
      "48-hour turnaround",
      "Contactless pickup & delivery",
      "Premium detergent included",
      "Dedicated route driver",
      "Fragrance & fold preference",
      "Priority scheduling",
    ],
    cta: "Start Household Plan",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-gold mb-4 block">Transparent Pricing</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Simple, Honest Pricing
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
            No hidden fees. No surprises. Just clean laundry delivered to your door at a fair price.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-8 shadow-card relative flex flex-col ${
                  plan.highlight
                    ? "bg-primary ring-2 ring-gold"
                    : "bg-card"
                }`}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-body text-xs font-semibold"
                    style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className={`font-display text-2xl font-semibold mb-1 ${
                      plan.highlight ? "text-primary-foreground" : "text-primary"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`font-body text-sm leading-relaxed ${
                      plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-7">
                  <span
                    className={`font-display text-5xl font-semibold ${
                      plan.highlight ? "text-gold" : "text-primary"
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`font-body text-sm ml-1 ${
                      plan.highlight ? "text-primary-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    {plan.unit}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={15}
                        className={`mt-0.5 shrink-0 ${plan.highlight ? "text-gold" : "text-sage"}`}
                      />
                      <span
                        className={`font-body text-sm ${
                          plan.highlight ? "text-primary-foreground/85" : "text-foreground/80"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-body text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.highlight
                      ? "shadow-gold"
                      : "border border-primary text-primary hover:bg-secondary"
                  }`}
                  style={
                    plan.highlight
                      ? { background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }
                      : {}
                  }
                >
                  {plan.cta} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center font-body text-sm text-muted-foreground mt-10">
            All prices include pickup and delivery within select DFW zip codes.{" "}
            <Link to="/contact" className="text-gold hover:text-gold-dark transition-colors underline">
              Contact us
            </Link>{" "}
            to confirm your area.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
