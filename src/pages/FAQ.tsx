import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How do you wash my laundry?",
    a: "We wash on Cold and Dry on Hot.\n\nOur Folders use Gain or Tide on your laundry unless you request Free and Clear or want to send your own.",
  },
  {
    q: "Do you serve my area?",
    a: "Probably so! We provide pickup and delivery laundry services all over the Dallas–Fort Worth metroplex. The fastest way is to click on Get Started Today or Text us 214.400.7651.",
  },
  {
    q: "How long does it take to get my laundry back?",
    a: "Most orders are returned within 24–36 hours of pickup, our guarantee is 24–48 hrs. Rush service (same day turnaround) is available based on order size and pickup time.",
  },
  {
    q: "Do I need to be home for pickup and delivery?",
    a: "No! Contactless service is available. Simply leave your bag by your door at the scheduled time, and we'll pick it up. We'll do the same on delivery — leave it at your door with a text notification.",
  },
  {
    q: "What detergent do you use?",
    a: "We use Tide or Gain by default for all orders. If you need Free & Clear for sensitive skin, just let us know in your notes. You're also welcome to leave out any specific product preferences.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Yes! You can cancel or reschedule 24 hours prior to pickup with no charge. Cancellations or changes made within 24 hours of your scheduled pickup may incur a fee.",
  },
  {
    q: "Is there a minimum order?",
    a: "Yes, we have a minimum of $35 which is approximately 20 lbs of laundry. There is no maximum — just let us know ahead of time if you have a large order.",
  },
  {
    q: "Who is doing my laundry?",
    a: "Your laundry is cared for by women in your community who work out of their homes with highly sanitized machines — no smoking, no shedding pets. Every team member goes through a careful hiring process and shares our love for people and for Jesus.",
  },
  {
    q: "Do you have gift cards?",
    a: "Yes! They make thoughtful gifts for any occasion — new moms, a family experiencing loss, caring for someone in the hospital or going through treatments, a new home, foster care or adoption, or when someone is sick.",
  },
  {
    q: "What if something is lost or damaged?",
    a: "We have policies in place in case anything is lost or damaged. Please reach out to our team.",
  },
  {
    q: "Is there anything that you don't clean?",
    a: "We cannot accept items that have been contaminated with:\n\n• Bodily fluids from a human or pet\n• Excessive pet hair\n• Moisture if the item is still wet or damp\n• Mildew\n• Items with fuel, mechanic or other grease or oil\n• Bed Bugs/Lice\n• Poison ivy or poison oak oils\n• Hazardous chemical residue",
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
