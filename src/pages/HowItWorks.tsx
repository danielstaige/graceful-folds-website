import { Link } from "react-router-dom";
import { CalendarCheck, Truck, Sparkles, Home, ShieldCheck, Droplets, Wind, Flower2, Sun, CheckCircle2, ArrowRight } from "lucide-react";
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

      {/* ── 2. THE PROCESS ── */}
      <section className="section-padding bg-background">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">Step by Step</span>
            <h2 className="font-display text-4xl font-semibold text-primary">Four Simple Steps</h2>
          </div>

          <div className="relative">
            {/* vertical connector line */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px -translate-x-1/2"
              style={{ background: `hsl(var(--gold) / 0.25)`, borderLeft: "2px dashed hsl(var(--gold) / 0.35)" }} />

            <div className="space-y-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isRight = i % 2 === 1;
                return (
                  <div key={step.num} className={`flex flex-col md:flex-row gap-0 items-stretch ${isRight ? "md:flex-row-reverse" : ""}`}>
                    {/* Card half */}
                    <div className={`flex-1 ${isRight ? "md:pl-12" : "md:pr-12"}`}>
                      <div className="bg-card rounded-xl p-8 shadow-card h-full">
                        <h3 className="font-display text-2xl font-semibold text-primary mb-3">{step.title}</h3>
                        <p className="font-body text-foreground/75 leading-relaxed mb-5">{step.desc}</p>
                        <ul className="space-y-2">
                          {step.details.map((d) => (
                            <li key={d} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                              <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex flex-col items-center justify-center flex-shrink-0 w-16">
                      <div className="w-14 h-14 rounded-full bg-primary flex flex-col items-center justify-center shadow-soft z-10">
                        <Icon size={18} className="text-gold" />
                        <span className="font-body text-[10px] tracking-widest text-primary-foreground/60 mt-0.5">{step.num}</span>
                      </div>
                    </div>

                    {/* Mobile icon (left aligned) */}
                    <div className="flex md:hidden items-center gap-3 mb-3 order-first">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-soft flex-shrink-0">
                        <Icon size={18} className="text-gold" />
                      </div>
                      <span className="font-body text-xs tracking-widest text-muted-foreground">{step.num}</span>
                    </div>

                    {/* Empty half (mirrors card) */}
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. DETAILS TABS ── */}
      <section className="section-padding bg-muted">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">Service Details</span>
            <h2 className="font-display text-4xl font-semibold text-primary">Everything You Need to Know</h2>
          </div>

          <Tabs defaultValue="pickup" className="w-full">
            <TabsList className="w-full h-auto flex flex-col sm:flex-row bg-card border border-border rounded-xl p-1 mb-6">
              <TabsTrigger value="pickup" className="flex-1 flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg">
                <CalendarCheck size={15} /> Pickup Day
              </TabsTrigger>
              <TabsTrigger value="care" className="flex-1 flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg">
                <ShieldCheck size={15} /> Care Standards
              </TabsTrigger>
              <TabsTrigger value="detergent" className="flex-1 flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg">
                <Droplets size={15} /> Detergent Options
              </TabsTrigger>
            </TabsList>

            {[
              { val: "pickup", label: "Pickup Day", items: pickupDetails },
              { val: "care", label: "Care Standards", items: careDetails },
              { val: "detergent", label: "Detergent Options", items: detergentDetails },
            ].map(({ val, label, items }) => (
              <TabsContent key={val} value={val}>
                <div className="bg-card rounded-xl p-8 shadow-card">
                  <h3 className="font-display text-xl font-semibold text-primary mb-6">{label}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {items.map((detail) => (
                      <div key={detail} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                        <span className="font-body text-sm text-foreground/80 leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* ── 4. TOPANGA SCENTS ── */}
      <section className="section-padding px-4" style={{ background: `hsl(var(--gold) / 0.07)` }}>
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">Premium Add-On</span>
            <h2 className="font-display text-4xl font-semibold text-primary mb-4">
              Elevate Your Laundry with Topanga Scents
            </h2>
            <p className="font-body text-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Upgrade your order with a signature Topanga Scents treatment — a premium, artisan scent experience
              that turns clean laundry into something you actually look forward to.
            </p>
            <div className="mt-4 inline-block bg-gold/20 rounded-full px-4 py-1.5">
              <span className="font-body text-sm font-semibold text-gold-dark">+$5 per bag</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scents.map(({ icon: ScentIcon, name, desc }) => (
              <div key={name} className="bg-card rounded-xl p-7 shadow-card text-center border border-gold/20">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: `hsl(var(--gold) / 0.15)` }}>
                  <ScentIcon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">{name}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center font-body text-xs text-muted-foreground mt-8">
            Request your scent preference in the scheduling form. Available on all standard orders.
          </p>
        </div>
      </section>

      {/* ── 5. SPECIAL ITEMS TABLE ── */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">Add-On Pricing</span>
            <h2 className="font-display text-4xl font-semibold text-primary mb-3">Special Items</h2>
            <p className="font-body text-foreground/70">
              Flat-rate pricing for items outside the standard wash-and-fold load.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-card border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-gold font-body font-semibold text-sm tracking-wide py-4">Item</TableHead>
                  <TableHead className="text-gold font-body font-semibold text-sm tracking-wide py-4 text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {specialItems.map((row, i) => (
                  <TableRow
                    key={row.item}
                    className={i % 2 === 0 ? "bg-card" : "bg-muted/40"}
                  >
                    <TableCell className="font-body text-foreground/85 py-4">{row.item}</TableCell>
                    <TableCell className="font-body font-semibold text-primary text-right py-4">{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p className="text-center font-body text-xs text-muted-foreground mt-5">
            Special items are billed in addition to your standard bag rate. Questions? <Link to="/contact" className="text-gold hover:underline">Contact us.</Link>
          </p>
        </div>
      </section>

      {/* ── 6. THE FINAL TOUCH ── */}
      <section className="section-padding bg-secondary">
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
