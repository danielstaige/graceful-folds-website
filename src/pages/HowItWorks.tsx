import { Link } from "react-router-dom";
import { CalendarCheck, Truck, Sparkles, Home, ShieldCheck, Droplets, Wind, Flower2, Sun, ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const steps = [
  {
    num: "01",
    icon: CalendarCheck,
    title: "Schedule Your Pickup",
    desc: "Use our simple online form to choose your pickup day and time window. It takes less than 2 minutes.",
    details: ["Choose your preferred time window", "No commitment required", "Instant email confirmation"],
  },
  {
    num: "02",
    icon: Truck,
    title: "We Pick It Up",
    desc: "Our team arrives during your chosen window. Leave your bag by the door — no need to be home at all.",
    details: ["Contactless pickup available", "No need to be present", "Tracked pickup notification sent"],
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Washed, Dried & Folded",
    desc: "Your clothes are washed with premium detergent, dried with care, and folded neatly — treated like family.",
    details: ["Lights & darks separated", "Premium detergent used", "Folded to your preference"],
  },
  {
    num: "04",
    icon: Home,
    title: "Delivered Back to You",
    desc: "Fresh, clean, folded laundry returned to your doorstep within 48 hours. Go enjoy your week.",
    details: ["48-hour turnaround", "Delivered to your door", "Satisfaction guaranteed"],
  },
];

const pickupDetails = [
  "Choose a morning (8am–12pm) or afternoon (12pm–5pm) window",
  "Place your bag at the front door before your window",
  "No need to be home — contactless pickup available",
  "Bag must be closed and accessible",
  "You'll receive a text when we're on the way",
  "You'll get a confirmation when picked up",
];

const careDetails = [
  "Lights and darks always washed separately",
  "Gentle cycle for delicate fabrics",
  "Items needing hang-drying are noted and honored",
  "No mixing loads between households",
  "Every item inspected before folding",
  "Final quality check before packaging",
];

const detergentDetails = [
  "Default: Free & Clear (fragrance-free, dye-free)",
  "Optional: Scented (Tide Original) at no extra charge",
  "Premium: Topanga Scents (+$5/bag) — see below",
  "Softener available on request",
  "All detergents are HE-compatible",
  "Allergy-friendly options always available",
];

const scents = [
  { icon: Wind, name: "Fresh Linen", desc: "Clean, airy, and crisp — like laundry off the line." },
  { icon: Flower2, name: "Lavender Fields", desc: "Soft floral calm that lingers through your home." },
  { icon: Sun, name: "Citrus Grove", desc: "Bright and energizing — a morning in a bag." },
];

const specialItems = [
  { item: "Comforter (Twin / Full)", price: "$15" },
  { item: "Comforter (Queen / King)", price: "$20" },
  { item: "Blanket", price: "$10" },
  { item: "Delicate Item", price: "$5" },
  { item: "Ironing (per item)", price: "$3" },
  { item: "Hang-Dry Item", price: "$2" },
  { item: "Extra-Large Bag", price: "+$5" },
];

const HowItWorks = () => {
  return (
    <main className="pt-20">

      {/* ── 1. HERO ── */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-gold mb-4 block">The Process</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            How It Works
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
            Simple logistics. Premium results. No trips to the laundromat — ever again.
          </p>
        </div>
      </section>

      {/* ── 2. THE PROCESS — Vertical Timeline ── */}
      <section className="py-24 px-4 bg-background">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">Step by Step</span>
            <h2 className="font-display text-4xl font-semibold text-primary">Four Simple Steps</h2>
          </div>

          <div className="relative">
            {/* Continuous vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: "hsl(var(--deep-gold) / 0.2)" }}
            />

            <div className="space-y-0">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="relative flex gap-10 pb-16 last:pb-0">
                    {/* Left: dot + number column */}
                    <div className="flex flex-col items-center shrink-0 w-12">
                      {/* Gold dot on the line */}
                      <div
                        className="w-3 h-3 rounded-full mt-1.5 z-10 shrink-0"
                        style={{ background: "hsl(var(--deep-gold))" }}
                      />
                    </div>

                    {/* Right: content */}
                    <div className="flex-1 pt-0">
                      {/* Ghost step number */}
                      <span
                        className="font-display text-7xl font-semibold leading-none block -mb-4 -mt-3 select-none"
                        style={{ color: "hsl(var(--deep-gold) / 0.12)" }}
                      >
                        {step.num}
                      </span>

                      <div className="flex items-center gap-3 mb-3">
                        <Icon size={18} style={{ color: "hsl(var(--deep-gold))" }} />
                        <h3 className="font-display text-2xl font-semibold text-primary">{step.title}</h3>
                      </div>

                      <p className="font-body text-foreground/70 leading-[1.8] mb-5">{step.desc}</p>

                      <ul className="space-y-2">
                        {step.details.map((d) => (
                          <li key={d} className="flex items-center gap-2.5 font-body text-sm text-muted-foreground">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: "hsl(var(--deep-gold))" }}
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. DETAILS TABS ── */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">Service Details</span>
            <h2 className="font-display text-4xl font-semibold text-primary">Everything You Need to Know</h2>
          </div>

          <Tabs defaultValue="pickup" className="w-full">
            <TabsList
              className="w-full h-auto flex flex-col sm:flex-row bg-transparent border-0 p-0 mb-0 gap-0"
              style={{ borderBottom: "1px solid hsl(var(--border))" }}
            >
              {[
                { value: "pickup", icon: CalendarCheck, label: "Pickup Day" },
                { value: "care", icon: ShieldCheck, label: "Care Standards" },
                { value: "detergent", icon: Droplets, label: "Detergent Options" },
              ].map(({ value, icon: TabIcon, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-none bg-transparent text-muted-foreground font-body text-sm font-medium tracking-wide border-0 border-b-2 border-transparent -mb-px data-[state=active]:text-foreground data-[state=active]:shadow-none transition-all"
                  style={{}}
                  data-active-style="border-color: hsl(var(--deep-gold))"
                >
                  <TabIcon size={14} />
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            {[
              { val: "pickup", label: "Pickup Day", items: pickupDetails },
              { val: "care", label: "Care Standards", items: careDetails },
              { val: "detergent", label: "Detergent Options", items: detergentDetails },
            ].map(({ val, label, items }) => (
              <TabsContent key={val} value={val} className="pt-8 pb-4 mt-0">
                <h3 className="font-display text-xl font-semibold text-primary mb-6">{label}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {items.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                        style={{ background: "hsl(var(--deep-gold))" }}
                      />
                      <span className="font-body text-sm text-foreground/80 leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* ── 4. TOPANGA SCENTS — Premium dark section ── */}
      <section className="py-28 px-4 bg-primary">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-widest uppercase text-gold mb-4 block">Premium Add-On</span>
            <h2 className="font-display text-4xl font-semibold text-primary-foreground mb-5">
              Elevate Your Laundry with Topanga Scents
            </h2>
            <p className="font-body text-primary-foreground/65 text-lg max-w-2xl mx-auto leading-relaxed mb-5">
              Upgrade your order with a signature Topanga Scents treatment — a premium, artisan scent experience
              that turns clean laundry into something you actually look forward to.
            </p>
            <span className="font-body text-sm font-semibold text-gold">
              +$5 per bag
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {scents.map(({ icon: ScentIcon, name, desc }) => (
              <div key={name} className="text-center">
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{ background: "hsl(var(--deep-gold) / 0.15)" }}
                >
                  <ScentIcon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-3">{name}</h3>
                <p className="font-body text-sm text-primary-foreground/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center font-body text-xs text-primary-foreground/40 mt-12">
            Request your scent preference in the scheduling form. Available on all standard orders.
          </p>
        </div>
      </section>

      {/* ── 5. SPECIAL ITEMS TABLE ── */}
      <section className="py-24 px-4 bg-background">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">Add-On Pricing</span>
            <h2 className="font-display text-4xl font-semibold text-primary mb-3">Special Items</h2>
            <p className="font-body text-foreground/70">
              Flat-rate pricing for items outside the standard wash-and-fold load.
            </p>
          </div>

          <div className="overflow-hidden border border-border/50">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary border-0">
                  <TableHead className="text-gold font-body font-semibold text-sm tracking-wide py-4 pl-6">Item</TableHead>
                  <TableHead className="text-gold font-body font-semibold text-sm tracking-wide py-4 pr-6 text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {specialItems.map((row, i) => (
                  <TableRow
                    key={row.item}
                    className={`border-border/40 ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
                  >
                    <TableCell className="font-body text-foreground/85 py-5 pl-6">{row.item}</TableCell>
                    <TableCell className="font-display font-semibold text-gold py-5 pr-6 text-right">{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p className="text-center font-body text-xs text-muted-foreground mt-5">
            Special items are billed in addition to your standard bag rate. Questions?{" "}
            <Link to="/contact" className="text-gold hover:underline">Contact us.</Link>
          </p>
        </div>
      </section>

      {/* ── 6. THE FINAL TOUCH ── */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="gold-divider mb-10" />
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-6 block">The Final Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold italic text-primary mb-6">
            …And We Pray.
          </h2>
          <p className="font-body text-foreground/70 text-lg leading-relaxed">
            After every item is perfectly folded and packaged, we take a moment to pray over your home and family.
            It's a small act — but it's the one we're most proud of.
          </p>
          <div className="gold-divider mt-10" />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-4 bg-primary">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl font-semibold text-primary-foreground mb-4">
            Ready to Hand It Over?
          </h2>
          <p className="font-body text-primary-foreground/70 mb-8">
            Schedule your first pickup in under two minutes. No commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-body text-sm font-semibold shadow-gold hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
          >
            Schedule My First Pickup <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default HowItWorks;
