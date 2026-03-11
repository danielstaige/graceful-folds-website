import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    service: "schedule",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-gold mb-4 block">Let's Connect</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            Schedule Your Pickup
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
            Ready to reclaim your time? Reach out and we'll get your first pickup on the calendar.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-padding bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info column */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">Get In Touch</h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  We're based in the Dallas-Fort Worth area and love hearing from families in our community.
                </p>
              </div>

              <div className="space-y-5">
                <a
                  href="tel:2144007651"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground">Call or Text</p>
                    <p className="font-body text-sm font-medium text-primary">214-400-7651</p>
                  </div>
                </a>

                <a
                  href="mailto:hello@foldsofgrace.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground">Email</p>
                    <p className="font-body text-sm font-medium text-primary">hello@foldsofgrace.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground">Service Area</p>
                    <p className="font-body text-sm font-medium text-primary">Dallas-Fort Worth, TX</p>
                  </div>
                </div>
              </div>

              <div className="bg-sage-light rounded-xl p-6">
                <p className="font-body text-sm text-foreground/75 leading-relaxed">
                  <strong className="text-primary">Hours:</strong> Monday – Saturday, 7am – 7pm. We respond to all inquiries within 24 hours.
                </p>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-2">
              {!submitted ? (
                <div className="bg-card rounded-xl p-10 shadow-card">
                  <h2 className="font-display text-2xl font-semibold text-primary mb-7">
                    Tell Us About You
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                        />
                      </div>
                      <div>
                        <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(214) 555-0100"
                          className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                        />
                      </div>
                      <div>
                        <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                          I'm Interested In
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                        >
                          <option value="schedule">Scheduling a Pickup</option>
                          <option value="pricing">Pricing Information</option>
                          <option value="employment">Joining the Team</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                        Home Address or Zip Code
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="e.g., Frisco, TX 75033"
                        className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                      />
                    </div>

                    <div>
                      <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                        Message or Questions
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any special instructions, questions, or a bit about your household…"
                        className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-body text-sm font-semibold shadow-gold hover:-translate-y-0.5 transition-all duration-200"
                      style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
                    >
                      <Send size={15} />
                      Send My Message
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-card rounded-xl p-14 shadow-card text-center">
                  <div className="text-5xl mb-6">🎉</div>
                  <h3 className="font-display text-3xl font-semibold text-primary mb-3">We Got It!</h3>
                  <p className="font-body text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    Thanks for reaching out, {form.name || "friend"}. We'll be in touch within 24 hours to confirm your first pickup.
                  </p>
                  <p className="font-display text-sm italic text-gold mt-6">
                    We wash, we fold… and we pray.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
