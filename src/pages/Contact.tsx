import { useState } from "react";
import { Phone, Mail, MapPin, Send, Heart, ArrowRight, Users } from "lucide-react";
import { z } from "zod";
import GetStartedModal from "@/components/GetStartedModal";
import FolderApplicationModal from "@/components/FolderApplicationModal";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(100, "Name must be under 100 characters."),
  email: z.string().trim().email("Please enter a valid email address.").max(255, "Email must be under 255 characters."),
  phone: z.string().max(30, "Phone number is too long.").optional(),
  topic: z.string(),
  message: z.string().trim().min(5, "Message must be at least 5 characters.").max(1000, "Message must be under 1000 characters."),
});

type FormFields = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormFields, string>>;

const inputClass =
  "w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-ring transition-all";
const errorClass = "font-body text-xs mt-1.5" ;

const Contact = () => {
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [folderAppOpen, setFolderAppOpen] = useState(false);
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    topic: "schedule",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormFields;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="bg-primary py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="font-body text-xs tracking-widest uppercase text-accent mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground mb-6">
            We Would Love to Hear From You.
          </h1>
          <p className="font-body text-primary-foreground/75 text-lg leading-relaxed">
            We personally read every message and will be in touch soon.
          </p>
        </div>
      </section>

      {/* ── Contact Options ── */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-body text-xs tracking-widest uppercase text-accent block mb-3">
              Reach Out
            </span>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Phone */}
            <a
              href="tel:2144007651"
              className="flex flex-col items-center text-center gap-4 p-8 bg-card rounded-xl shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform duration-200"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Phone size={22} className="text-accent-foreground" />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Call or Text Us
                </p>
                <p className="font-display text-2xl font-semibold text-primary mb-2">
                  214-400-7651
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Texting is always welcome — whatever's easiest for you.
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@foldsofgrace.com"
              className="flex flex-col items-center text-center gap-4 p-8 bg-card rounded-xl shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform duration-200"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Mail size={22} className="text-accent-foreground" />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Email Us
                </p>
                <p className="font-display text-xl font-semibold text-primary mb-2 break-all">
                  hello@foldsofgrace.com
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  We check email daily and love a good message.
                </p>
              </div>
            </a>
          </div>

          {/* Hours / Service area */}
          <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground">
            <MapPin size={14} className="text-accent shrink-0" />
            <span className="font-body text-sm">
              Serving the Dallas–Fort Worth area · Mon–Sat, 7am–7pm
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setGetStartedOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-body text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-[var(--shadow-gold)]"
              style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
            >
              Get Started Today <ArrowRight size={15} />
            </button>
            <button
              onClick={() => setFolderAppOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-body text-sm font-semibold tracking-wide border-2 border-accent text-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/5"
            >
              <Users size={15} /> Apply to Be a Folder
            </button>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-xl mx-auto">
          {!submitted ? (
            <>
              <div className="text-center mb-10">
                <span className="font-body text-xs tracking-widest uppercase text-primary/60 block mb-3">
                  Send a Message
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">
                  Send Us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                    Phone{" "}
                    <span className="font-normal text-muted-foreground text-xs">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(214) 555-0100"
                    className={inputClass}
                  />
                </div>

                {/* Topic */}
                <div>
                  <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                    What can we help you with?
                  </label>
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="schedule">Schedule a Pickup</option>
                    <option value="folder">Become a Folder</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us a little about what you need…"
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-body text-sm font-semibold shadow-[var(--shadow-gold)] hover:-translate-y-0.5 transition-all duration-200"
                  style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
                >
                  <Send size={15} />
                  Send It Our Way
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Heart size={28} className="text-accent-foreground" fill="currentColor" />
              </div>
              <h3 className="font-display text-3xl font-semibold text-primary mb-4 italic">
                We got your message.
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed max-w-sm mx-auto mb-8">
                Thanks for reaching out{form.name ? `, ${form.name.trim().split(" ")[0]}` : ""}. A
                real person on our team will read it and get back to you within 24 hours.
              </p>
              <div className="gold-divider mb-6" />
              <p className="font-display text-sm italic text-accent">
                We wash, we fold… and we pray.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <div className="gold-divider mb-10" />
          <p
            className="font-display text-lg md:text-xl italic leading-relaxed"
            style={{ color: "hsl(var(--foreground) / 0.65)" }}
          >
            "However you found us — through a neighbor's recommendation, a late-night search, or
            maybe something that felt a little like Providence — we are glad you are here. We cannot
            wait to serve your family."
          </p>
          <div className="gold-divider mt-10" />
        </div>
      </section>
      <GetStartedModal open={getStartedOpen} onOpenChange={setGetStartedOpen} />
      <FolderApplicationModal open={folderAppOpen} onOpenChange={setFolderAppOpen} />
    </main>
  );
};

export default Contact;
