import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We currently serve select zip codes across the Dallas-Fort Worth metroplex, including Frisco, Plano, Allen, McKinney, and surrounding areas. Enter your zip code at checkout or contact us to confirm your area.",
  },
  {
    q: "How long does it take to get my laundry back?",
    a: "Most orders are returned within 48 hours of pickup. Rush service (24-hour turnaround) is available on select days for an additional fee.",
  },
  {
    q: "Do I need to be home for pickup and delivery?",
    a: "No! Contactless service is available. Simply leave your bag by your door at the scheduled time, and we'll pick it up. We'll do the same on delivery — leave it at your door with a text notification.",
  },
  {
    q: "What detergent do you use?",
    a: "We use a premium, hypoallergenic detergent by default. If you have a fragrance preference or specific product request (such as a free-and-clear detergent for sensitive skin), just let us know in your notes.",
  },
  {
    q: "How do I know my laundry won't get mixed up with someone else's?",
    a: "Every bag is tagged with your unique customer ID and tracked individually through our process. We never mix bags from different customers.",
  },
  {
    q: "What items can you NOT wash?",
    a: "We do not wash dry-clean-only garments, items marked 'hand wash only,' or heavily soiled items (e.g., items with motor oil, paint, etc.). Please separate those before pickup.",
  },
  {
    q: "What if something is damaged or lost?",
    a: "We carry insurance and take every precaution to care for your clothes. In the rare event of damage or loss, we'll work with you directly to make it right.",
  },
  {
    q: "How do I pay?",
    a: "We accept all major credit/debit cards. Payment is processed securely online when you schedule your service. We do not handle cash.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Yes! You can cancel or reschedule up to 2 hours before your pickup window with no charge. Changes within 2 hours may incur a small fee.",
  },
  {
    q: "Is there a minimum order?",
    a: "Yes, we have a minimum of one bag (up to 15 lbs) per pickup. There is no maximum — just let us know ahead of time if you have a large order.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-primary">{q}</span>
        {open ? (
          <ChevronUp size={18} className="text-gold shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-body text-sm text-foreground/80 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-gold mb-4 block">Got Questions?</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
            Everything you need to know before your first pickup.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl mx-auto">
          <div className="divide-y divide-border">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-muted-foreground mb-4">Still have questions?</p>
            <a
              href="mailto:hello@foldsofgrace.com"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-gold hover:text-gold transition-colors"
            >
              Email us at hello@foldsofgrace.com →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
