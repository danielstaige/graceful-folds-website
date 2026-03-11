import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const OurStory = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-gold mb-4 block">Our Story</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Born from a <em>Full Basket</em>
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
            Folds of Grace didn't start as a business plan. It started with a pile of laundry and a family running out of hours in the day.
          </p>
        </div>
      </section>

      {/* Story content */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl mx-auto">
          <div className="prose-custom space-y-8">
            <div className="bg-card rounded-xl p-10 shadow-card">
              <h2 className="font-display text-3xl font-semibold text-primary mb-5">
                It Started at Home
              </h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-5">
                Our founder, a working parent in the Dallas-Fort Worth area, found herself drowning in laundry. Not because she was lazy — but because she was doing everything. Work. Kids. Family. Community. The laundry always lost.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed mb-5">
                She dreamed of a service that felt personal. Not just a transactional drop-off, but a real, caring hand extended to overwhelmed families. A service built on trust, reliability, and genuine warmth.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed">
                That dream became Folds of Grace.
              </p>
            </div>

            <div className="bg-sage-light rounded-xl p-10">
              <h2 className="font-display text-3xl font-semibold text-primary mb-5">
                What We're About
              </h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-5">
                We're not here to replace you as a homemaker. We're here to give you back a few hours each week so you can be fully present where it counts most.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed mb-5">
                Every bag we pick up is handled with care. Every shirt folded like it belongs to someone we love — because it does.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed">
                We serve DFW families with a commitment to quality, reliability, and a heart for service that goes beyond the laundry room.
              </p>
            </div>

            <div className="border-l-4 pl-6" style={{ borderColor: "hsl(var(--gold))" }}>
              <p className="font-display text-xl italic text-primary/70 leading-relaxed">
                "We started this because we believe every family deserves a little grace — even on the busiest of weeks."
              </p>
              <p className="font-body text-sm text-muted-foreground mt-3">— Founder, Folds of Grace</p>
            </div>

            <div className="text-center pt-6">
              <p className="font-display text-sm italic text-muted-foreground mb-8">
                We wash, we fold… and we pray.
              </p>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md font-body text-sm font-semibold shadow-gold hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
              >
                See How It Works <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurStory;
