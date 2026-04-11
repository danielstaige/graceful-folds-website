import { Link } from "react-router-dom";
import { ArrowRight, Gift } from "lucide-react";
import giftCardImg from "@/assets/folds-of-grace-giftcards.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import heroLaundry from "@/assets/hero-laundry.jpg";

const specialItems = [
  { item: "Comforter / Duvet Inserts", price: "$25" },
  { item: "Blankets", price: "$15–$20" },
  { item: "Throw Blankets", price: "$8" },
];

const standardIncluded = [
  "Free Pickup & Delivery",
  "Washed, Dried & Folded/Hung",
  "24–48-Hour Turnaround",
];

const rushIncluded = [
  "Free Pickup & Delivery",
  "Washed, Dried & Folded/Hung",
  "Same Day Turnaround",
];

const Pricing = () => {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Pricing
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
            No hidden fees. No contracts! We price our laundry by the pound. Bulkier items are priced by size.
          </p>
        </div>
      </section>

      {/* Standard Rate */}
      <section className="py-32 px-4 bg-background text-center">
        <div className="container max-w-2xl mx-auto">
          <p className="font-body text-sm text-muted-foreground tracking-widest uppercase mb-8">
            Our Standard Rate
          </p>

          <div className="gold-divider mb-10" />

          <div className="flex items-end justify-center gap-3 mb-12">
            <span className="font-display text-8xl md:text-9xl font-semibold text-gold leading-none">
              $1.85
            </span>
            <span className="font-display text-4xl text-muted-foreground mb-4">/ lb</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {standardIncluded.map((item) => (
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

      {/* Rush Order / Same Day */}
      <section className="py-24 px-4 bg-secondary text-center">
        <div className="container max-w-2xl mx-auto">
          <p className="font-body text-sm text-muted-foreground tracking-widest uppercase mb-8">
            Rush Order / Same Day Delivery
          </p>

          <div className="gold-divider mb-10" />

          <div className="flex items-end justify-center gap-3 mb-4">
            <span className="font-display text-7xl md:text-8xl font-semibold text-gold leading-none">
              $2.25
            </span>
            <span className="font-display text-3xl text-muted-foreground mb-3">/ lb</span>
          </div>

          <p className="font-body text-sm text-muted-foreground mb-12">
            Based on Order Size and Pickup Time
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {rushIncluded.map((item) => (
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

      {/* Bulky Items Table */}
      <section className="py-24 px-4 bg-background">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-semibold text-primary mb-3">
              Bulky Items
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
            Prices may vary by size and condition. Confirmed after pickup.
          </p>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="py-0 bg-primary overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: image */}
            <div className="relative min-h-64 lg:min-h-[480px]">
              <img
                src={giftCardImg}
                alt="Folds of Grace e-gift cards"
                className="absolute inset-0 w-full h-full object-cover object-center"
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
            Let Us Lighten the Load
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-md font-body text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-gold"
            style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
          >
            Never Do Laundry Again <ArrowRight size={15} />
          </Link>
          <div className="gold-divider mt-8" />
        </div>
      </section>

    </main>
  );
};

export default Pricing;
