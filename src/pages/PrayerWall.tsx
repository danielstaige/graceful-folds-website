import { useState } from "react";
import { Send, Heart } from "lucide-react";

const PrayerWall = () => {
  const [form, setForm] = useState({ name: "", request: "", anonymous: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-gold mb-4 block">A Quiet Corner</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            The Prayer Wall
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg leading-relaxed max-w-xl mx-auto">
            You don't have to carry it alone. Whatever you're facing, we'd be honored to hold it in prayer for you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container max-w-2xl mx-auto">
          <div className="bg-card rounded-xl p-10 shadow-card mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Heart size={20} className="text-gold" />
              <h2 className="font-display text-2xl font-semibold text-primary">A Note from Our Team</h2>
            </div>
            <div className="gold-divider !mx-0 mb-5" />
            <p className="font-body text-foreground/80 leading-relaxed mb-4">
              We believe in the power of prayer — not as a business strategy, but as a sincere expression of care for the people we serve. Every week, our team takes a moment to pray for the requests shared here.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed">
              You're welcome to share as much or as little as you'd like. This is a safe, private space.
            </p>
          </div>

          {!submitted ? (
            <div className="bg-card rounded-xl p-10 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                Share Your Request
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                    Your Name <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah, or leave blank to stay anonymous"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  />
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                    Your Prayer Request <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="request"
                    value={form.request}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Share what's on your heart…"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={form.anonymous}
                    onChange={(e) => setForm((p) => ({ ...p, anonymous: e.target.checked }))}
                    className="w-4 h-4 accent-gold rounded"
                  />
                  <label htmlFor="anonymous" className="font-body text-sm text-muted-foreground cursor-pointer">
                    Keep my name anonymous
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-body text-sm font-semibold shadow-gold hover:-translate-y-0.5 transition-all duration-200"
                  style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
                >
                  <Send size={15} />
                  Submit My Request
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-sage-light rounded-xl p-10 text-center shadow-card">
              <Heart size={40} className="text-gold mx-auto mb-5" />
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">We've Got You</h3>
              <p className="font-body text-foreground/75 leading-relaxed max-w-sm mx-auto">
                Your request has been received. Our team will be praying for you. You are not alone.
              </p>
            </div>
          )}

          <p className="text-center font-display text-sm italic text-muted-foreground mt-8">
            We wash, we fold… and we pray.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrayerWall;
