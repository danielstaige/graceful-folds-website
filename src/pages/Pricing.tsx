import { Link } from "react-router-dom";
import { ArrowRight, Gift, Users, User } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import heroLaundry from "@/assets/hero-laundry.jpg";

const estimates = [
  {
    icon: User,
    label: "Individual",
    range: "$35–$45",
    unit: "/ week",
    description: "One bag, picked up weekly. Clean clothes, zero hassle.",
  },
  {
    icon: Users,
    label: "Couple",
    range: "$45–$55",
    unit: "/ week",
    description: "Two people's laundry handled — more time for each other.",
  },
  {
    icon: Users,
    label: "Family of 4",
    range: "$55–$75",
    unit: "/ week",
    description: "The whole household, washed and folded every week.",
  },
];

const specialItems = [
  { item: "Comforter", price: "$35" },
  { item: "Duvet Insert", price: "$20–$35" },
  { item: "Blanket", price: "$15–$20" },
  { item: "Large Throw", price: "$8" },
  { item: "Pillow", price: "$5–$15" },
  { item: "Bathmat", price: "$5–$8" },
];

const Pricing = () => {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-gold mb-4 block">
            Transparent Pricing
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Simple, Honest Pricing.
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
            No hidden fees. No surprises. Just clean laundry at a fair, per-pound rate.
          </p>
        </div>
      </section>

      {/* Standard Rate — Editorial Centerpiece */}
      <section className="py-32 px-4 bg-background text-center">
        <div className="container max-w-2xl mx-auto">
          <p className="font-body text-sm text-muted-foreground tracking-widest uppercase mb-8">
            Our Standard Rate
          </p>

          {/* Gold rule above number */}
          <div className="gold-divider mb-10" />

          {/* Big rate display */}
          <div className="flex items-end justify-center gap-3 mb-4">
            <span className="font-display text-8xl md:text-9xl font-semibold text-gold leading-none">
              $1.75
            </span>
            <span className="font-display text-4xl text-muted-foreground mb-4">/ lb</span>
          </div>

          <p className="font-body text-sm text-muted-foreground mb-12">
            <span className="font-semibold text-foreground">$35 minimum per order</span>
            {" "}— approximately 20 lbs
          </p>

          {/* Included strip — flat dots */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              "Pickup & Delivery Included",
              "Washed, Dried & Folded",
              "48-Hour Turnaround",
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2.5">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "hsl(var(--deep-gold))" }}
                />
                <span className="font-body text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>

          <div className="gold-divider mt-12" />
        </div>
      </section>

      {/* Cost Estimator — List style */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">
              What to Expect
            </span>
            <h2 className="font-display text-4xl font-semibold text-secondary-foreground mb-3">
              How Much Will It Cost?
            </h2>
            <p className="font-body text-secondary-foreground/70 text-sm max-w-md mx-auto">
              Typical weekly estimates based on household size.
            </p>
          </div>

          <div className="divide-y divide-border/40">
            {estimates.map((est) => {
              const Icon = est.icon;
              return (
                <div
                  key={est.label}
                  className="flex justify-between items-baseline gap-6 py-6"
                >
                  <div className="flex items-start gap-4">
                    <Icon size={18} style={{ color: "hsl(var(--deep-gold))" }} className="shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-xl font-semibold text-primary leading-tight mb-1">
                        {est.label}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {est.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-display text-3xl font-semibold text-gold whitespace-nowrap">
                      {est.range}
                    </span>
                    <span className="font-body text-xs text-muted-foreground block mt-0.5">{est.unit}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center font-display italic text-secondary-foreground/50 text-sm mt-10">
            "Less than a dinner out — and one less thing on your plate."
          </p>
        </div>
      </section>

      {/* Special Items Table */}
      <section className="py-24 px-4 bg-background">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">
              Add-Ons
            </span>
            <h2 className="font-display text-4xl font-semibold text-primary mb-3">
              Special Items
            </h2>
            <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
              Oversized or specialty items are priced individually and added to your order total.
            </p>
          </div>

          <div className="overflow-hidden border border-border/50">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary border-0">
                  <TableHead className="text-gold font-display text-base font-semibold py-4 pl-6">
                    Item
                  </TableHead>
                  <TableHead className="text-gold font-display text-base font-semibold py-4 pr-6 text-right">
                    Price
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {specialItems.map((row, i) => (
                  <TableRow
                    key={row.item}
                    className={`border-border/40 ${i % 2 === 1 ? "bg-muted/30" : "bg-background"}`}
                  >
                    <TableCell className="font-body font-medium text-foreground pl-6 py-5">
                      {row.item}
                    </TableCell>
                    <TableCell className="font-display text-gold font-semibold pr-6 py-5 text-right">
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p className="text-center font-body text-xs text-muted-foreground mt-5">
            Prices may vary by size and condition. Confirmed at pickup.
          </p>
        </div>
      </section>

      {/* Gift Cards — Premium two-column dark section */}
      <section className="py-0 bg-primary overflow-hidden">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: image */}
            <div className="relative min-h-64 lg:min-h-[480px]">
              <img
                src={heroLaundry}
                alt="Warm laundry basket — a beautiful gift"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
              />
            </div>

            {/* Right: content */}
            <div className="flex flex-col justify-center py-20 px-10 lg:px-14">
              <Gift size={28} className="text-gold mb-6" />
              <h2 className="font-display text-4xl font-semibold text-primary-foreground mb-5 leading-snug">
                Give the Gift of Grace
              </h2>
              <p className="font-body text-primary-foreground/70 text-base leading-relaxed mb-8">
                The perfect gift for new moms, friends recovering from surgery, or anyone who needs their load lightened. A little grace goes a long way.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-body text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-gold self-start"
                style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
              >
                Purchase a Gift Card <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary py-24 px-4 text-center">
        <div className="container max-w-2xl mx-auto">
          <div className="gold-divider mb-8" />
          <h2 className="font-display text-4xl md:text-5xl italic font-semibold text-secondary-foreground mb-8 leading-snug">
            You Know the Price.<br />Now Know the Peace.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-md font-body text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-gold"
            style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
          >
            Schedule My First Pickup <ArrowRight size={15} />
          </Link>
          <div className="gold-divider mt-8" />
        </div>
      </section>

    </main>
  );
};

export default Pricing;
