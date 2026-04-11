import { useState } from "react";
import { Heart, Send } from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const stories = [
  {
    title: "Story One",
    text: "One of our clients faced every parent's worst fear—a child diagnosed with terminal cancer. For over a year, we faithfully cared for their laundry and covered their family in prayer, asking God for a miracle.\n\nToday, that child is cancer-free and has a full life ahead.",
    verse: "\"Lord my God, I called to you for help, and you healed me.\" — Psalm 30:2",
  },
  {
    title: "Story Two",
    text: "One of our clients walked through years of waiting and longing for a baby. For over three years, we faithfully prayed with them and for them, asking God to move.\n\nThis past winter, they welcomed a beautiful baby.",
    verse: "\"I prayed for this child, and the Lord has granted me what I asked of Him.\" — 1 Samuel 1:27",
  },
];

const PrayerWall = () => {
  const [form, setForm] = useState({ name: "", email: "", request: "" });
  const [errors, setErrors] = useState<{ email?: string; request?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: typeof errors = {};
    if (form.email.trim() && !EMAIL_REGEX.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (form.email.trim().length > 255) {
      next.email = "Email must be less than 255 characters.";
    }
    if (!form.request.trim()) {
      next.request = "Please share your prayer request.";
    } else if (form.request.trim().length < 10) {
      next.request = "Please share a little more (at least 10 characters).";
    } else if (form.request.trim().length > 1000) {
      next.request = "Please keep your request under 1,000 characters.";
    }
    return next;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border bg-muted/30 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 focus:bg-background transition-all duration-200";

  return (
    <main className="pt-20 bg-background">

      {/* ── 1. HERO with background image ── */}
      <section
        className="py-32 px-4 text-center relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/prayer-wall-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="max-w-2xl mx-auto relative z-10">
          <Heart size={32} className="text-gold mx-auto mb-8" strokeWidth={1.5} />
          <h1 className="font-display text-5xl md:text-6xl font-semibold italic text-foreground/80 leading-tight mb-6">
            You Don't Have to Carry&nbsp;This Alone.
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Whatever you are facing, big or small, we would be honored to pray for you.
          </p>
        </div>
      </section>

      {/* ── 2. INVITATION ── */}
      <section className="pb-24 px-4 pt-16">
        <div className="max-w-xl mx-auto text-center">
          <div className="gold-divider mb-10" />
          <p className="font-body text-base text-foreground/70 leading-relaxed mb-4">
            This page was created for you—because we genuinely care about you. Because you matter to Jesus, you matter to us.
          </p>
          <p className="font-body text-base text-foreground/70 leading-relaxed mb-4">
            Every request is kept private, read, and prayed over by our team.
          </p>
          <p className="font-body text-base text-foreground/70 leading-relaxed mb-10">
            You don't need the right words. Just share what you can, and we will bring it to Jesus with you and for you.
          </p>
          <blockquote className="mb-2">
            <p className="font-display italic text-lg text-muted-foreground/80 leading-relaxed">
              "Cast all your anxiety on him because he cares for you."
            </p>
            <cite className="font-body text-sm text-muted-foreground/60 not-italic block mt-2">
              — 1 Peter 5:7
            </cite>
          </blockquote>
          <div className="gold-divider mt-10" />
        </div>
      </section>

      {/* ── 3. FORM ── */}
      <section className="pb-32 px-4">
        <div className="max-w-lg mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-7" noValidate>

              {/* First Name */}
              <div>
                <label className="font-body text-sm font-medium text-foreground/70 block mb-2">
                  First Name{" "}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={100}
                  placeholder="e.g. Sarah"
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-body text-sm font-medium text-foreground/70 block mb-2">
                  Email{" "}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  maxLength={255}
                  placeholder="you@example.com"
                  className={`${inputClass} ${errors.email ? "border-destructive/60 focus:ring-destructive/20" : "border-border"}`}
                />
                {errors.email && (
                  <p className="font-body text-xs text-destructive mt-1.5">{errors.email}</p>
                )}
                <p className="font-body text-xs text-muted-foreground/60 mt-1.5">
                  Only used if you'd like a personal response from our team.
                </p>
              </div>

              {/* Prayer Request */}
              <div>
                <label className="font-body text-sm font-medium text-foreground/70 block mb-2">
                  Your Prayer Request{" "}
                  <span className="text-destructive text-xs">*</span>
                </label>
                <textarea
                  name="request"
                  value={form.request}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={1000}
                  placeholder="Share what's on your heart…"
                  className={`${inputClass} resize-none ${errors.request ? "border-destructive/60 focus:ring-destructive/20" : "border-border"}`}
                />
                {errors.request && (
                  <p className="font-body text-xs text-destructive mt-1.5">{errors.request}</p>
                )}
                <p className="font-body text-xs text-muted-foreground/50 mt-1.5 text-right">
                  {form.request.length} / 1,000
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg font-body text-sm font-semibold tracking-wide shadow-gold hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
              >
                <Heart size={16} strokeWidth={2} />
                Send My Request — We Are Honored to Pray With You
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <Heart size={40} className="text-gold mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="font-display italic text-3xl font-semibold text-foreground/80 mb-5">
                We've received your request.
              </h2>
              <div className="gold-divider mb-6" />
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-sm mx-auto mb-4">
                Our team will hold your request gently and with care. You are not alone in this.
              </p>
              <p className="font-body text-sm text-muted-foreground/60 leading-relaxed max-w-xs mx-auto">
                If you shared your email, someone may reach out personally — though there's no obligation.
              </p>
              <div className="gold-divider mt-6" />
            </div>
          )}
        </div>
      </section>

      {/* ── 4. ANSWERED PRAYERS ── */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-gold/80 block mb-3">
            Answered Prayers
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4">
            Stories of Hope
          </h2>
          <p className="font-body text-foreground/60 leading-relaxed max-w-lg mx-auto mb-14">
            This space is for stories of answered prayers. We'll share them here — anonymous — but as a reminder, He hears His children and He answers us.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {stories.map((story, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-8 border border-border/50 text-left"
              >
                <Heart size={14} className="text-gold/50 mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-semibold text-primary mb-3">
                  {story.title}
                </h3>
                {story.text.split("\n\n").map((para, j) => (
                  <p key={j} className="font-body text-sm text-foreground/70 leading-relaxed mb-3">
                    {para}
                  </p>
                ))}
                <p className="font-display italic text-sm text-gold/70 leading-relaxed mt-4">
                  {story.verse}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
};

export default PrayerWall;
