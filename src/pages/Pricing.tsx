import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Gift, Users, User } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

      {/* Standard Rate — Visual Centerpiece */}
      <section className="section-padding bg-background text-center">
        <div className="container max-w-2xl mx-auto">
          <p className="font-body text-sm text-muted-foreground tracking-widest uppercase mb-6">
            Our Standard Rate
          </p>

          {/* Big rate display */}
          <div className="flex items-end justify-center gap-3 mb-4">
            <span className="font-display text-8xl md:text-9xl font-semibold text-gold leading-none">
              $1.75
            </span>
            <span className="font-display text-3xl text-muted-foreground mb-4">/ lb</span>
          </div>

          <div className="gold-divider mb-5" />

          <p className="font-body text-sm text-muted-foreground mb-12">
            <span className="font-semibold text-foreground">$35 minimum per order</span>
            {" "}— approximately 20 lbs
          </p>

          {/* Included strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              "Pickup & Delivery Included",
              "Washed, Dried & Folded",
              "48-Hour Turnaround",
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2">
                <CheckCircle2 size={18} className="text-sage shrink-0" />
                <span className="font-body text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Estimator */}
      <section className="section-padding bg-secondary px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">
              What to Expect
            </span>
            <h2 className="font-display text-4xl font-semibold text-secondary-foreground mb-3">
              How Much Will It Cost?
            </h2>
            <p className="font-body text-secondary-foreground/70 text-sm max-w-md mx-auto">
              These are typical weekly estimates based on household size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {estimates.map((est) => (
              <div
                key={est.label}
                className="bg-background rounded-xl p-8 shadow-card flex flex-col items-center text-center"
              >
                <est.icon size={28} className="text-gold mb-4" />
                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                  {est.label}
                </h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className="font-display text-3xl font-semibold text-gold">
                    {est.range}
                  </span>
                  <span className="font-body text-sm text-muted-foreground mb-1">
                    {est.unit}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {est.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center font-display italic text-secondary-foreground/60 text-base">
            "Less than a dinner out — and one less thing on your plate."
          </p>
        </div>
      </section>

      {/* Special Items Table */}
      <section className="section-padding bg-background px-4">
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

          <div className="rounded-xl shadow-card overflow-hidden border border-border/50">
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
                    <TableCell className="font-body font-medium text-foreground pl-6 py-4">
                      {row.item}
                    </TableCell>
                    <TableCell className="font-body text-gold font-semibold pr-6 py-4 text-right">
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

      {/* Gift Cards */}
      <section className="section-padding bg-secondary px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <Gift size={32} className="text-gold mx-auto mb-5" />
          <h2 className="font-display text-4xl font-semibold text-secondary-foreground mb-4">
            Give the Gift of Grace
          </h2>
          <p className="font-body text-secondary-foreground/75 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            The perfect gift for new moms, friends recovering from surgery, or anyone who needs their load lightened. A little grace goes a long way.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-body text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-gold"
            style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
          >
            Purchase a Gift Card <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-24 px-4 text-center">
        <div className="container max-w-2xl mx-auto">
          <div className="gold-divider mb-8" />
          <h2 className="font-display text-4xl md:text-5xl italic font-semibold text-primary-foreground mb-8 leading-snug">
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
