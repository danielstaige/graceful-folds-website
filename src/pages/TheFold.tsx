import { useState } from "react";
import { ArrowRight, Heart, Car, Sparkles, Home, Shield, Wind } from "lucide-react";
import danaPhoto from "@/assets/dana-folder.jpg";
import FolderApplicationModal from "@/components/FolderApplicationModal";

const folders = [
  {
    name: "Whitney",
    testimonial: "I'm a proud mom of three and a grandmother to one, with a heart for serving others. I love pouring into my community, praying over people and being a source of encouragement and faith wherever I go.",
    verse: "\"Serve one another humbly in love.\" — Galatians 5:13",
  },
  {
    name: "Bre",
    testimonial: "I'm a mom of two and have a heart to serve. I'm passionate about being the hands and feet of Jesus in my community, and I see this work as more than folding laundry. It is an opportunity to love people well and serve with purpose. As a single mom, being a Folder has been a financial blessing, proving stability and provision. Rooted in faith, I believe that prayer changes lives and I trust that God is working in every detail.",
  },
  {
    name: "Kaitlyn 🙏",
    testimonial: "As a mother of two rambunctious boys I know exactly how much weight a fresh stack of clean clothes can take off a person's shoulders. I joined the team to turn a homemaking skill into a way to bless my neighbors, and I feel truly honored to pray over each client with every fold. I don't just fold clothes. I'm helping a family hit the reset button on their week while lifting them up in prayer.",
  },
  {
    name: "Danielle",
    testimonial: "I started this job because I had a financial need as a former teacher, turned stay at home mom. However, this job quickly became more than that for me. It has been a way to help families take something off their plate and in a small way make their lives easier. It has also deepened my prayer life.",
  },
  {
    name: "Taylor",
    testimonial: "I'm a mom of two. Folds of Grace found me in a time when I wasn't looking but I am very grateful that I did. Being able to bless my community with little touches of grace has been amazing. All of the clients are incredible and I am so thankful that I get to send little blessings each and every day to them!",
  },
  {
    name: "Kathy",
    testimonial: "I'm a full-time homemaker, home schooler and urban homesteader. I love that working for Folds of Grace helps me to serve others while I'm serving my family.",
  },
  {
    name: "Veronica",
    testimonial: "Moving back to Ellis County after my divorce, I had asked God to help me find something to bring in extra income to help us get on our feet while adjusting to the rise in cost of living. Just days later, God answered my prayer with Dana. It's been an honor and blessing to be with Folds of Grace. Not only has it provided financially but it's given me flexibility of working around my kid's schedules. My kids love to be with me and Folds of Grace allows me to be present.",
  },
  {
    name: "Lynnette",
    testimonial: "I remember the time constraints with being a busy mom. It gives me joy as a grandma (Mimi) to think I can make life easier for moms who need to spend more personal time with their children and family. I also have the flexibility to work a schedule that works for me.",
  },
  {
    name: "Kim",
    testimonial: "Working for Folds of Grace and with Dana has truly been a blessing for both me and my family. It has given me peace of mind bringing in extra income, while remaining present in my home. Dana is also an incredible boss, and is so supportive of me in my own personal life. I'm forever thankful for Dana for giving me the opportunity to come along side her.",
    verse: "\"Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms.\" — 1 Peter 4:10",
  },
];

const benefits = [
  "Flexible hours",
  "Work from home",
  "Extra income doing work that matters",
  "Be part of a faith-inspired, women-led team",
];

const qualifications = [
  { icon: Home, text: "Extra large capacity washer and dryer in your home" },
  { icon: Car, text: "Reliable vehicle for pickup and delivery" },
  { icon: Sparkles, text: "Strong attention to detail and pride in quality work" },
  { icon: Heart, text: "Dependable, consistent, and trustworthy" },
  { icon: Wind, text: "Smoke and pet hair-free environment" },
];

const TheFold = () => {
  const [folderAppOpen, setFolderAppOpen] = useState(false);

  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-gold mb-4 block">The Fold</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6 leading-tight">
            Meet the Women Who Serve Your Community.
          </h1>
        </div>
      </section>

      {/* Meet Dana */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-card">
              <img
                src={danaPhoto}
                alt="Dana, founder of Folds of Grace, folding laundry"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-display text-4xl font-semibold text-primary mb-4 leading-snug">
                Building the Fold Team
              </h2>
              <div className="gold-divider mb-5 lg:ml-0" />
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                As Folds of Grace was built, I knew we had to be more than just a service.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                We needed to serve both our clients and the women who work here. Because of my story, I didn't want to build this company any other way. It needed to create a way for women to be home and present for their families while still providing extra income. And our service to our clients had to stand out from the norm.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                My desire is for Folds of Grace to not only relieve our clients of the pressure of constant laundry, but for them to feel cared for and seen through the simple act of laundry services covered in our prayers.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Folds of Grace is meant to impact both our clients and our Folders.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                I believe the best way to accomplish this is through who joins our Fold Team. The women who work here carry the same heartbeat as what Folds of Grace was built upon. They get it. They genuinely care for others. They love to serve. And they understand that even the simple act of laundry can make a difference in more ways than one. It's about meeting real needs and trusting God to do the rest.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                And we'd love for you to be part of it.
              </p>
              <p
                className="font-display text-lg italic leading-relaxed"
                style={{ color: "hsl(var(--deep-gold) / 0.7)" }}
              >
                "Every Fold is an opportunity to bring relief to someone's day and show them that God sees them and cares for them."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Folder Profiles */}
      <section className="section-padding bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-semibold text-primary mb-4">
              What Some of Our Folders Have to Say.
            </h2>
            <div className="gold-divider mb-5" />
            <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              Each Folder is carefully selected, trained, and chosen for her character. These are the women who show up for your family, week after week.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {folders.map((folder) => (
              <div
                key={folder.name}
                className="bg-card rounded-xl p-7 shadow-card hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center"
              >
                <h3 className="font-display text-xl font-semibold text-primary mb-3">{folder.name}</h3>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{folder.testimonial}</p>

                {folder.verse && (
                  <p
                    className="font-display text-sm italic leading-relaxed"
                    style={{ color: "hsl(var(--deep-gold) / 0.7)" }}
                  >
                    {folder.verse}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Folder Testimonial */}
      <section className="section-padding bg-secondary px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span
            className="font-display text-8xl leading-none block -mb-4"
            style={{ color: "hsl(var(--deep-gold) / 0.35)" }}
          >
            "
          </span>
          <blockquote className="font-display text-2xl md:text-3xl italic font-semibold text-primary leading-relaxed mb-8">
            This job gave me the freedom to be present for my kids and still do something that feels like it matters. Every time I fold someone's laundry, I'm saying — I see you, I've got you.
          </blockquote>
          <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">
            — Keisha T., Folder since 2023
          </p>
        </div>
      </section>

      {/* Join the Fold */}
      <section className="section-padding bg-background px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: Role description */}
            <div>
              <span className="font-body text-xs tracking-widest uppercase text-gold mb-3 block">We're Hiring</span>
              <h2 className="font-display text-4xl font-semibold text-primary mb-5 leading-snug">
                Ready to Serve Your Community?
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Folding for Folds of Grace is flexible, fulfilling work you can do in your own home on your own schedule. You'll serve families in your community, earn additional income, and be part of a team that genuinely cares about each other and the people we serve.
              </p>

              <ul className="space-y-3 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                      style={{ background: "hsl(var(--deep-gold))" }}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setFolderAppOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-body text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-[var(--shadow-gold)]"
                style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
              >
                Apply to Become a Folder <ArrowRight size={15} />
              </button>
            </div>

            {/* Right: Qualifications box */}
            <div className="bg-secondary rounded-xl p-8 lg:p-10">
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">What We Look For</h3>
              <div className="gold-divider mb-7" style={{ marginLeft: 0 }} />

              <ul className="space-y-5 mb-7">
                {qualifications.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "hsl(var(--deep-gold) / 0.15)" }}
                    >
                      <Icon size={16} style={{ color: "hsl(var(--deep-gold))" }} />
                    </div>
                    <span className="font-body text-sm text-foreground/80 leading-relaxed pt-1.5">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-2.5 pt-5 border-t border-border/50">
                <Shield size={14} style={{ color: "hsl(var(--deep-gold) / 0.7)" }} className="shrink-0 mt-0.5" />
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  Each Folder is carefully selected, trained, and held to our quality standards before serving clients.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FolderApplicationModal open={folderAppOpen} onOpenChange={setFolderAppOpen} />
    </main>
  );
};

export default TheFold;
