import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-laundry.jpg";

const OurStory = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4 block">Our Story</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Born from a <em>Full Basket</em>
          </h1>
          <p className="font-body text-primary-foreground/75 text-lg leading-relaxed max-w-xl mx-auto">
            Folds of Grace didn't start as a business plan. It started with a pile of laundry and a family running out of hours in the day.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-background py-24 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Opening */}
          <span className="font-body text-xs tracking-[0.2em] uppercase text-gold block mb-8">It Started at Home</span>
          <p className="font-body text-lg text-foreground/80 leading-[1.85] mb-6">
            Our founder, a working parent in the Dallas-Fort Worth area, found herself drowning in laundry. Not because she was lazy — but because she was doing everything. Work. Kids. Family. Community. The laundry always lost.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            Week after week, the basket would overflow. Weekends that were supposed to be restful became a race against a mountain of clothes. She tried apps, she tried scheduling, she tried all the hacks. Nothing changed the math: there simply weren't enough hours.
          </p>
        </div>

        {/* Lifestyle Image 1 */}
        <div className="w-full my-16 relative overflow-hidden h-72 md:h-96">
          <img
            src={heroImg}
            alt="Hands gently folding a soft baby blanket"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "center 20%" }}
          />
          <div className="absolute inset-0" style={{ background: "hsl(20 10% 15% / 0.18)" }} />
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="font-body text-xs italic text-muted-foreground text-right mb-16 -mt-12">
            Placeholder: close-up of hands folding a soft baby blanket
          </p>

          {/* Continued narrative */}
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            One afternoon, she sat with a friend — a neighbor who had found a laundry service she loved — and something clicked. What if someone else could handle just this one thing? What if, instead of guilt about the undone laundry, there was simply… more time?
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85]">
            She dreamed of a service that felt personal. Not just a transactional drop-off, but a real, caring hand extended to overwhelmed families. A service built on trust, reliability, and genuine warmth. That dream became Folds of Grace.
          </p>
        </div>

        {/* Pull-Quote */}
        <div className="my-20 -mx-4 md:-mx-16 lg:-mx-40 px-4">
          <div className="h-px w-full max-w-3xl mx-auto" style={{ background: "hsl(var(--deep-gold) / 0.4)" }} />
          <blockquote className="max-w-3xl mx-auto px-8 py-12 text-center">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl italic text-primary/80 leading-relaxed">
              "We started this because we believe every family deserves a little grace — even on the busiest of weeks."
            </p>
            <cite className="font-body text-sm text-gold not-italic block mt-6 tracking-wide">— Dana, Founder</cite>
          </blockquote>
          <div className="h-px w-full max-w-3xl mx-auto" style={{ background: "hsl(var(--deep-gold) / 0.4)" }} />
        </div>

        {/* Lifestyle Image 2 */}
        <div className="w-full my-16 relative overflow-hidden h-72 md:h-96">
          <img
            src={heroImg}
            alt="A family laughing together in a clean, bright living room"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 70%" }}
          />
          <div className="absolute inset-0" style={{ background: "hsl(20 10% 15% / 0.12)" }} />
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="font-body text-xs italic text-muted-foreground text-right mb-16 -mt-12">
            Placeholder: a family laughing in a clean, bright living room
          </p>

          {/* What We're About */}
          <span className="font-body text-xs tracking-[0.2em] uppercase text-gold block mb-8">What We're About</span>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            We're not here to replace you as a homemaker. We're here to give you back a few hours each week so you can be fully present where it counts most — at the dinner table, at the soccer field, on the couch with your kids.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            Every bag we pick up is handled with care. Every shirt folded like it belongs to someone we love — because it does. We serve DFW families with a commitment to quality, reliability, and a heart for service that goes beyond the laundry room.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85]">
            From your first pickup to your hundredth, our goal stays the same: to be the most dependable, most caring part of your week. A small grace note in the chaos of modern family life.
          </p>

          {/* Closing */}
          <div className="mt-20 text-center">
            <div className="h-px w-16 mx-auto mb-8" style={{ background: "hsl(var(--deep-gold))" }} />
            <p className="font-display text-base italic text-muted-foreground mb-10">
              We wash, we fold… and we pray.
            </p>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md font-body text-sm font-semibold shadow-gold hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: "var(--gradient-gold)", color: "hsl(var(--soft-cream))" }}
            >
              See How It Works <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurStory;
