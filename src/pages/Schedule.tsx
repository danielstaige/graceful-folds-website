import { useState } from "react";
import { Link } from "react-router-dom";
import { format, addDays } from "date-fns";
import { ArrowRight, ArrowLeft, Check, Heart, CalendarDays, Clock, MapPin, ExternalLink } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const timeSlots = [
  { time: "7:00 AM", popular: false },
  { time: "8:00 AM", popular: true },
  { time: "9:00 AM", popular: true },
  { time: "10:00 AM", popular: false },
  { time: "11:00 AM", popular: false },
  { time: "12:00 PM", popular: false },
  { time: "1:00 PM", popular: true },
  { time: "2:00 PM", popular: false },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border font-body text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all duration-200";

type Step = 1 | 2 | 3;

const stepLabels: { step: Step; label: string }[] = [
  { step: 1, label: "Date" },
  { step: 2, label: "Time" },
  { step: 3, label: "Details" },
];

const Schedule = () => {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Your name is required.";
    if (!phone.trim()) errs.phone = "Your phone number is required.";
    if (!address.trim()) errs.address = "A pickup address is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (validateStep3()) {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }
  };

  // Build Google Calendar deep link
  const buildCalendarLink = () => {
    if (!date || !time) return "#";
    const [timePart, meridiem] = time.split(" ");
    const [hoursRaw, minutes] = timePart.split(":").map(Number);
    let hours = hoursRaw;
    if (meridiem === "PM" && hours !== 12) hours += 12;
    if (meridiem === "AM" && hours === 12) hours = 0;
    const start = new Date(date);
    start.setHours(hours, minutes || 0, 0, 0);
    const end = new Date(start);
    end.setHours(end.getHours() + 2);
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    return `https://calendar.google.com/calendar/r/eventedit?text=Folds+of+Grace+Pickup&dates=${fmt(start)}/${fmt(end)}&details=Laundry+pickup+by+Folds+of+Grace&location=${encodeURIComponent(address)}`;
  };

  /* ─── Confirmation Screen ─────────────────────────────────── */
  if (submitted) {
    return (
      <main className="min-h-screen bg-background pt-24 pb-20 px-4 flex items-center justify-center">
        <div className="max-w-lg w-full text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: "hsl(var(--deep-gold) / 0.12)" }}
          >
            <Heart size={36} fill="hsl(var(--deep-gold))" style={{ color: "hsl(var(--deep-gold))" }} />
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-3 leading-tight">
            You're on the schedule.
          </h1>
          <p className="font-body text-base text-muted-foreground mb-8">
            We'll be there to pick up your laundry and take great care of it.
          </p>

          <div
            className="rounded-2xl p-6 mb-8 text-left"
            style={{ background: "hsl(var(--secondary))" }}
          >
            <div className="flex items-start gap-3 mb-4">
              <CalendarDays size={18} style={{ color: "hsl(var(--deep-gold))", marginTop: 2 }} />
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Pickup Date</p>
                <p className="font-display text-lg font-semibold text-primary">
                  {date ? format(date, "EEEE, MMMM d") : ""}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <Clock size={18} style={{ color: "hsl(var(--deep-gold))", marginTop: 2 }} />
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Pickup Window</p>
                <p className="font-display text-lg font-semibold text-primary">{time}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} style={{ color: "hsl(var(--deep-gold))", marginTop: 2 }} />
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Address</p>
                <p className="font-display text-base font-semibold text-primary">{address}</p>
              </div>
            </div>
          </div>

          <a
            href={buildCalendarLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body text-sm font-semibold tracking-wide mb-6 transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "var(--gradient-gold)", color: "hsl(var(--soft-cream))", boxShadow: "var(--shadow-gold)" }}
          >
            Add to Calendar <ExternalLink size={14} />
          </a>

          <p className="font-display text-sm italic text-muted-foreground block mt-2">
            We wash, we fold… and we pray.
          </p>
        </div>
      </main>
    );
  }

  /* ─── Wizard ──────────────────────────────────────────────── */
  return (
    <main className="min-h-screen bg-background">
      {/* Short hero banner */}
      <div
        className="pt-24 pb-14 px-4 text-center"
        style={{ background: "hsl(var(--charcoal))" }}
      >
        <span className="font-body text-xs tracking-widest uppercase mb-3 block" style={{ color: "hsl(var(--deep-gold))" }}>
          Folds of Grace
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground leading-tight">
          Let's Schedule Your Pickup
        </h1>
        <p className="font-body text-base mt-3 max-w-sm mx-auto" style={{ color: "hsl(var(--soft-cream) / 0.65)" }}>
          Pick a date, choose a time, and we'll handle the rest.
        </p>
      </div>

      {/* Wizard card */}
      <div className="max-w-2xl mx-auto px-4 -mt-6 pb-20">
        <div
          className="rounded-2xl shadow-lg"
          style={{ background: "hsl(var(--card))", boxShadow: "var(--shadow-soft)" }}
        >
          {/* Step indicator */}
          <div className="px-8 pt-8 pb-6">
            <div className="flex items-center justify-center gap-0">
              {stepLabels.map(({ step: s, label }, i) => (
                <div key={s} className="flex items-center">
                  {/* Circle */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 font-body text-sm font-semibold"
                      style={{
                        background:
                          step > s
                            ? "hsl(var(--deep-gold))"
                            : step === s
                            ? "hsl(var(--charcoal))"
                            : "transparent",
                        border:
                          step > s
                            ? "2px solid hsl(var(--deep-gold))"
                            : step === s
                            ? "2px solid hsl(var(--charcoal))"
                            : "2px solid hsl(var(--border))",
                        color:
                          step >= s
                            ? "hsl(var(--soft-cream))"
                            : "hsl(var(--muted-foreground))",
                      }}
                    >
                      {step > s ? <Check size={16} /> : s}
                    </div>
                    <span
                      className="font-body text-xs tracking-wide"
                      style={{
                        color: step === s ? "hsl(var(--charcoal))" : "hsl(var(--muted-foreground))",
                        fontWeight: step === s ? 600 : 400,
                      }}
                    >
                      {label}
                    </span>
                  </div>
                  {/* Connector line */}
                  {i < stepLabels.length - 1 && (
                    <div
                      className="w-20 h-px mx-3 mb-5 transition-all duration-300"
                      style={{
                        background:
                          step > s
                            ? "hsl(var(--deep-gold))"
                            : "hsl(var(--border))",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="h-px" style={{ background: "hsl(var(--border))" }} />

          {/* ── Step 1: Date ── */}
          {step === 1 && (
            <div className="px-6 py-8 md:px-10">
              <h2 className="font-display text-2xl font-semibold text-primary mb-1">Pick a Date</h2>
              <p className="font-body text-sm text-muted-foreground mb-6">Choose any day Monday–Saturday. We don't pick up on Sundays.</p>

              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => {
                    const day = new Date(d);
                    day.setHours(0, 0, 0, 0);
                    return day < today || d.getDay() === 0;
                  }}
                  className={cn("p-3 pointer-events-auto rounded-xl")}
                  classNames={{
                    day_selected:
                      "bg-[hsl(var(--charcoal))] text-[hsl(var(--soft-cream))] hover:bg-[hsl(var(--charcoal))] hover:text-[hsl(var(--soft-cream))] focus:bg-[hsl(var(--charcoal))] focus:text-[hsl(var(--soft-cream))] font-semibold",
                    day_today: "border border-[hsl(var(--deep-gold))] text-[hsl(var(--deep-gold))] font-semibold",
                  }}
                />
              </div>

              {date && (
                <div
                  className="mt-5 rounded-xl px-5 py-3 text-center"
                  style={{ background: "hsl(var(--deep-gold) / 0.08)", border: "1px solid hsl(var(--deep-gold) / 0.25)" }}
                >
                  <p className="font-display text-base italic" style={{ color: "hsl(var(--deep-gold))" }}>
                    {format(date, "EEEE, MMMM d")}
                  </p>
                </div>
              )}

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => date && setStep(2)}
                  disabled={!date}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-gold)", color: "hsl(var(--soft-cream))", boxShadow: date ? "var(--shadow-gold)" : "none" }}
                >
                  Next <ArrowRight size={15} />
                </button>
              </div>
            </div>
          )}

          {/* ── Step 2: Time ── */}
          {step === 2 && (
            <div className="px-6 py-8 md:px-10">
              <h2 className="font-display text-2xl font-semibold text-primary mb-1">Pick a Time</h2>
              <p className="font-body text-sm text-muted-foreground mb-2">
                Pickup window for <span className="font-semibold text-primary">{date ? format(date, "EEEE, MMMM d") : ""}</span>
              </p>
              <p className="font-body text-xs text-muted-foreground mb-6">We'll arrive within an hour of your chosen window.</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map(({ time: t, popular }) => {
                  const isSelected = time === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className="relative rounded-xl border py-4 px-3 font-display text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 text-center"
                      style={{
                        border: isSelected
                          ? "2px solid hsl(var(--deep-gold))"
                          : "2px solid hsl(var(--border))",
                        background: isSelected
                          ? "hsl(var(--deep-gold) / 0.08)"
                          : "hsl(var(--card))",
                        color: isSelected ? "hsl(var(--deep-gold))" : "hsl(var(--foreground))",
                        boxShadow: isSelected ? "var(--shadow-gold)" : "none",
                      }}
                    >
                      {t}
                      {popular && (
                        <span
                          className="absolute -top-2 left-1/2 -translate-x-1/2 font-body text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            background: "hsl(var(--deep-gold))",
                            color: "hsl(var(--soft-cream))",
                          }}
                        >
                          Popular
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-body text-sm font-medium tracking-wide border transition-colors duration-200 hover:bg-secondary"
                  style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--foreground))" }}
                >
                  <ArrowLeft size={15} /> Back
                </button>
                <button
                  onClick={() => time && setStep(3)}
                  disabled={!time}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-gold)", color: "hsl(var(--soft-cream))", boxShadow: time ? "var(--shadow-gold)" : "none" }}
                >
                  Next <ArrowRight size={15} />
                </button>
              </div>
            </div>
          )}

          {/* ── Step 3: Details ── */}
          {step === 3 && (
            <div className="px-6 py-8 md:px-10">
              <h2 className="font-display text-2xl font-semibold text-primary mb-1">Your Details</h2>
              <p className="font-body text-sm text-muted-foreground mb-5">Just a few quick details so we can find you.</p>

              {/* Summary strip */}
              <div
                className="rounded-xl px-5 py-4 mb-7 flex flex-wrap gap-4"
                style={{ background: "hsl(var(--secondary))" }}
              >
                <div className="flex items-center gap-2">
                  <CalendarDays size={15} style={{ color: "hsl(var(--deep-gold))" }} />
                  <span className="font-display text-sm font-semibold text-primary">
                    {date ? format(date, "EEE, MMM d") : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={15} style={{ color: "hsl(var(--deep-gold))" }} />
                  <span className="font-display text-sm font-semibold text-primary">{time}</span>
                </div>
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }}
                    placeholder="Dana Johnson"
                    className={cn(inputClass, errors.name ? "border-destructive" : "border-border")}
                    style={{ "--tw-ring-color": "hsl(var(--deep-gold))" } as React.CSSProperties}
                  />
                  {errors.name && <p className="font-body text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5 block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: "" })); }}
                    placeholder="(214) 555-0123"
                    className={cn(inputClass, errors.phone ? "border-destructive" : "border-border")}
                  />
                  {errors.phone && <p className="font-body text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>

                {/* Address */}
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5 block">
                    Pickup Address *
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => { setAddress(e.target.value); setErrors((p) => ({ ...p, address: "" })); }}
                    placeholder="e.g. 4521 Maple St, Frisco, TX"
                    className={cn(inputClass, errors.address ? "border-destructive" : "border-border")}
                  />
                  {errors.address && <p className="font-body text-xs text-destructive mt-1">{errors.address}</p>}
                </div>

                {/* Notes */}
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5 block">
                    Pickup Notes <span className="normal-case font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Leave bag on front porch, gate code 1234"
                    className={cn(inputClass, "resize-none border-border")}
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-body text-sm font-medium tracking-wide border transition-colors duration-200 hover:bg-secondary"
                  style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--foreground))" }}
                >
                  <ArrowLeft size={15} /> Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-gold)", color: "hsl(var(--soft-cream))", boxShadow: "var(--shadow-gold)" }}
                >
                  Confirm My Pickup <Heart size={15} />
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="font-display text-xs italic text-muted-foreground text-center mt-8">
          Questions? Call us at{" "}
          <a href="tel:2144007651" className="underline underline-offset-2" style={{ color: "hsl(var(--deep-gold))" }}>
            214-400-7651
          </a>
        </p>
      </div>
    </main>
  );
};

export default Schedule;
