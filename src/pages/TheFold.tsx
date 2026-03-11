import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Danielle Reyes",
    role: "Founder & Operations Lead",
    bio: "Danielle started Folds of Grace out of a genuine desire to lighten the load for families. She oversees every aspect of the business with attention to detail and warmth.",
    initials: "DR",
  },
  {
    name: "Marcus Johnson",
    role: "Route Driver & Pickup Specialist",
    bio: "Marcus is the friendly face at your door. He's known for his reliability, care, and the way he treats every bag like it's his own family's laundry.",
    initials: "MJ",
  },
  {
    name: "Sofia Gutierrez",
    role: "Laundry Care Specialist",
    bio: "Sofia has over 8 years of experience in garment care. She handles each item with precision and love, ensuring your clothes come back better than they left.",
    initials: "SG",
  },
];

const TheFold = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-gold mb-4 block">Our Team</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            The Fold
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
            The people behind your clean clothes. Trusted, trained, and genuinely committed to serving your family well.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-semibold text-primary mb-4">Meet Our Team</h2>
            <div className="gold-divider mb-5" />
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Every member of the Folds of Grace team is background-checked, trained, and chosen for their character as much as their skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-card rounded-xl p-8 shadow-card text-center hover:-translate-y-1 transition-transform duration-300">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 font-display text-2xl font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  {member.initials}
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-1">{member.name}</h3>
                <p className="font-body text-xs text-gold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          {/* Recruitment */}
          <div className="bg-sage-light rounded-xl p-10 md:p-14">
            <div className="max-w-2xl mx-auto text-center">
              <Heart size={32} className="text-gold mx-auto mb-5" />
              <h2 className="font-display text-3xl font-semibold text-primary mb-4">
                Join the Fold
              </h2>
              <p className="font-body text-foreground/75 leading-relaxed mb-6">
                We're looking for reliable, caring people who love to serve. If you have a servant's heart and take pride in a job well done, we'd love to meet you.
              </p>
              <ul className="space-y-2 text-left max-w-sm mx-auto mb-8">
                {[
                  "Flexible schedule — you set your hours",
                  "Competitive pay",
                  "Work independently in your own vehicle",
                  "Be part of something meaningful",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-body text-sm font-semibold shadow-gold hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
              >
                Apply to Join the Team <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TheFold;
