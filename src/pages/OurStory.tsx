import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import danaFamilyImg from "@/assets/dana-family.jpeg";
import danaLaundryImg from "@/assets/dana-family-airport.jpg";
import danaFamilyChristmasImg from "@/assets/dana-laundry-selfie.png";
import danaTeamImg from "@/assets/dana-team.png";
import danaFamilyShirtsImg from "@/assets/dana-family-shirts.png";
import danaCommunityImg from "@/assets/dana-community.png";
import danaKidsOutdoorsImg from "@/assets/dana-kids-outdoors.png";

const OurStory = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4 block">Our Story</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Born Out of <em>Adversity</em>
          </h1>
          <p className="font-body text-primary-foreground/75 text-lg leading-relaxed max-w-xl mx-auto">
            Folds of Grace didn't start with a business plan. It started out of a place of difficulty and not having a clue what I would do next.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-background py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="font-body text-base text-foreground/80 leading-[1.85] mb-6">
            Hi, I'm Dana—founder of Folds of Grace, a lover of Jesus, a mom to four amazing kiddos, a friend, a CrossFit enthusiast, an intercessor, and an encourager.
          </p>
          <p className="font-body text-base text-foreground/80 leading-[1.85] mb-6">
            If you know me, you know I'm praying for you. That's not something I take lightly—it's at the center of who I am and how I serve.
          </p>
        </div>

        {/* Dana with laundry photo */}
        <div className="max-w-3xl mx-auto my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={danaLaundryImg} alt="Dana working with laundry" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={danaFamilyChristmasImg} alt="Dana and her family at Christmas" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            When I started Folds of Grace, it was born out of one of the hardest seasons of my life. Life took a sudden, sharp turn I never expected, and I found myself unsure of how I was going to provide for my children or even for myself.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            The only thing I knew for certain was that God would have to show up—and I trusted that He would.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            I am so grateful for women who pray. They stood with me, covering me in prayer as I waited on the Lord. In that season of seeking, listening, and surrendering, God was doing something deeper—drawing me into a more abiding relationship with Him that I wouldn't trade for anything.
          </p>
        </div>

        {/* Team photo */}
        <div className="max-w-3xl mx-auto my-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={danaTeamImg} alt="The Folds of Grace team" className="w-full h-auto object-cover" />
          </div>
          <p className="font-body text-sm text-muted-foreground text-center mt-3 italic">
            These are just a few of the women who have covered me in prayer—every woman needs women like this.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            I can look back now and see the years leading up to this, He had already been shaping my heart and preparing me. Growing in me a love for women, marriages, and discipleship. I had the privilege of walking alongside younger women and watching them grow in their love for Jesus. What I didn't realize then was that He was building the foundation for what would become Folds of Grace.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            Not long after, I came across someone looking for laundry services. I mentioned it to a friend, and she immediately said, "You have to do this—there's nothing like that here."
          </p>
        </div>

        {/* Community / friends photo */}
        <div className="max-w-3xl mx-auto my-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={danaCommunityImg} alt="Dana with her community of friends" className="w-full h-auto object-cover" />
          </div>
          <p className="font-body text-sm text-muted-foreground text-center mt-3 italic">
            And it's even sweeter when their beloveds stand with us in faith too.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            I took it to the Lord and to the friends I pray with and said, "God, if this isn't You, I don't want it. I only want to be part of what You are doing. I only want to go where You send me."
          </p>
        </div>

        {/* Dana & Family Photo */}
        <div className="max-w-3xl mx-auto my-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={danaFamilyImg} alt="Dana and her family" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="my-16 -mx-4 md:-mx-16 lg:-mx-40 px-4">
          <div className="h-px w-full max-w-3xl mx-auto" style={{ background: "hsl(var(--deep-gold) / 0.4)" }} />
          <blockquote className="max-w-3xl mx-auto px-8 py-12 text-center">
            <p className="font-display text-xl md:text-2xl lg:text-3xl italic text-primary/80 leading-relaxed">
              "...the Son can do nothing by himself; he can do only what he sees his Father doing…"
            </p>
            <cite className="font-body text-sm text-gold not-italic block mt-6 tracking-wide">— John 5:19</cite>
          </blockquote>
          <div className="h-px w-full max-w-3xl mx-auto" style={{ background: "hsl(var(--deep-gold) / 0.4)" }} />
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            Through prayer, research, more prayer, and more research, I chose to take a step of faith and try it. What started as a simple trial run—quickly became something more.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            Within the first week, people were already reaching out asking for service… and it became clear that this was something God was building, not me.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            What began in obedience, out of my home in the fall of 2022, has grown into a full team serving families and businesses across DFW and surrounding areas.
          </p>
        </div>


        <div className="max-w-2xl mx-auto">
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            In His kindness, God showed me this would be about more than laundry. It would give families time back, bring order to homes, and create space for peace, rest, and connection. It would also serve the women who are part of it—giving them a way to earn income while staying present with their families.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            At its core, it is rooted in prayer—covering every home, every family, and every business we serve, trusting God to do more than we could ever ask or imagine.
          </p>
        </div>

        {/* Second Pull-Quote */}
        <div className="my-16 -mx-4 md:-mx-16 lg:-mx-40 px-4">
          <div className="h-px w-full max-w-3xl mx-auto" style={{ background: "hsl(var(--deep-gold) / 0.4)" }} />
          <blockquote className="max-w-3xl mx-auto px-8 py-12 text-center">
            <p className="font-display text-xl md:text-2xl lg:text-3xl italic text-primary/80 leading-relaxed">
              "Now to him who is able to do immeasurably more…"
            </p>
            <cite className="font-body text-sm text-gold not-italic block mt-6 tracking-wide">— Ephesians 3:20</cite>
          </blockquote>
          <div className="h-px w-full max-w-3xl mx-auto" style={{ background: "hsl(var(--deep-gold) / 0.4)" }} />
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            We don't just do laundry—we care for it the way we would want ours to be cared for. Every detail is done with intention and purpose. When your laundry is returned to your doorstep, our hope is that you feel the difference—in the care, the presentation, and the peace it brings. And even more, that you feel the impact of our prayers over you and your home and business.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            What started small has now grown into tens of thousands of services over the past four years—serving both weekly, biweekly and one-time needs across DFW and surrounding areas.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            God has woven together my love for people, women, families, and prayer—through something as simple as laundry.
          </p>

          {/* Closing */}
          <div className="mt-16 text-center">
            <div className="h-px w-16 mx-auto mb-8" style={{ background: "hsl(var(--deep-gold))" }} />
            <p className="font-display text-xl italic text-primary/80 mb-10">
              And He alone gets all the glory.
            </p>
          </div>
        </div>

        {/* Family in Folds of Grace shirts + kids outdoors */}
        <div className="max-w-3xl mx-auto my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={danaFamilyShirtsImg} alt="Dana's family wearing Folds of Grace shirts" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={danaKidsOutdoorsImg} alt="Dana and her kids outdoors" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Dana Quote */}
        <div className="my-16 -mx-4 md:-mx-16 lg:-mx-40 px-4">
          <div className="h-px w-full max-w-3xl mx-auto" style={{ background: "hsl(var(--deep-gold) / 0.4)" }} />
          <blockquote className="max-w-3xl mx-auto px-8 py-12 text-center">
            <p className="font-display text-xl md:text-2xl italic text-primary/80 leading-relaxed">
              "This is what Folds of Grace was built on—and it's what we're about."
            </p>
            <cite className="font-body text-sm text-gold not-italic block mt-6 tracking-wide">— Dana, Founder</cite>
          </blockquote>
          <div className="h-px w-full max-w-3xl mx-auto" style={{ background: "hsl(var(--deep-gold) / 0.4)" }} />
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            We're not here to replace you—we're here to support you.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            To give you time back each week so you can be fully present where it matters most—around the table, with your kids, in the moments that go by too quickly.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            Every bag we pick up is handled with care. Every item is folded like it belongs to someone we love—because it does.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            We serve families and businesses across DFW with consistency, attention to detail, and a genuine heart to care well.
          </p>
          <p className="font-body text-base text-foreground/80 font-medium leading-[1.85] mb-6">
            But this is about more than laundry.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            We believe in bringing order to homes, lightening the load you carry, and covering every home we serve in prayer.
          </p>
          <p className="font-body text-base text-foreground/75 leading-[1.85] mb-6">
            From your first pickup to your hundredth, our goal stays the same: to be a dependable, trusted part of your week—serving you with excellence, intention, and care.
          </p>

          {/* Closing */}
          <div className="mt-16 text-center">
            <div className="h-px w-16 mx-auto mb-8" style={{ background: "hsl(var(--deep-gold))" }} />
            <p className="font-display text-xl italic text-primary/80 mb-10">
              We wash, we fold…..we pray.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md font-body text-sm font-semibold shadow-gold hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
            >
              Get Started Today <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurStory;
