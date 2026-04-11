import { useState } from "react";
import { Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const inputClass =
  "w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-ring transition-all";
const errorClass = "font-body text-xs mt-1.5";

interface FolderApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FolderApplicationModal = ({ open, onOpenChange }: FolderApplicationModalProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    availability: [] as string[],
    meetsRequirements: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const toggleDay = (day: string) => {
    setForm((prev) => ({
      ...prev,
      availability: prev.availability.includes(day)
        ? prev.availability.filter((d) => d !== day)
        : [...prev.availability, day],
    }));
    if (errors.availability) setErrors((prev) => ({ ...prev, availability: "" }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.phone.trim()) errs.phone = "Phone is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email.";
    if (!form.address.trim()) errs.address = "Address is required.";
    if (form.availability.length === 0) errs.availability = "Please select at least one day.";
    if (!form.meetsRequirements) errs.meetsRequirements = "You must confirm that you meet all requirements.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      console.log("Folder application submission:", form);
      setStep(2);
    } catch {
      // handle error
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setForm({ name: "", phone: "", email: "", address: "", availability: [], meetsRequirements: false });
        setErrors({});
      }, 300);
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-primary">
                Apply to Be a Folder
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} noValidate className="space-y-4 mt-2">
              {/* Name */}
              <div>
                <label className="font-body text-sm font-medium text-foreground/80 block mb-1.5">
                  Name <span className="text-destructive">*</span>
                </label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
                {errors.name && <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="font-body text-sm font-medium text-foreground/80 block mb-1.5">
                  Phone <span className="text-destructive">*</span>
                </label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(214) 555-0100" className={inputClass} />
                {errors.phone && <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="font-body text-sm font-medium text-foreground/80 block mb-1.5">
                  Email <span className="text-destructive">*</span>
                </label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" className={inputClass} />
                {errors.email && <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>{errors.email}</p>}
              </div>

              {/* Address */}
              <div>
                <label className="font-body text-sm font-medium text-foreground/80 block mb-1.5">
                  Address <span className="text-destructive">*</span>
                </label>
                <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="123 Main St, Dallas, TX" className={inputClass} />
                {errors.address && <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>{errors.address}</p>}
              </div>

              {/* Availability */}
              <div>
                <label className="font-body text-sm font-medium text-foreground/80 block mb-2">
                  Availability <span className="text-destructive">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {days.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => toggleDay(day)}
                      className={`px-4 py-2 rounded-md font-body text-sm border transition-all duration-150 ${
                        form.availability.includes(day)
                          ? "bg-accent text-accent-foreground border-accent"
                          : "bg-background border-border text-foreground/70 hover:border-accent/50"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
                {errors.availability && <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>{errors.availability}</p>}
              </div>

              {/* Job Requirements */}
              <div className="bg-secondary/60 rounded-lg p-5 space-y-3">
                <h4 className="font-display text-lg font-semibold text-primary">Job Requirements</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  We take this work seriously because we believe it matters. Folds of Grace was given by God, and we are committed to stewarding it well—especially in who we bring onto our team.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  This is more than a job. It's service, it's care, and it's prayer.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Because of that, we hold a high standard for our Folding Family.
                </p>
                <p className="font-body text-sm font-medium text-foreground/80">Our Folders must meet the following:</p>
                <ul className="space-y-2">
                  {[
                    "A strong personal walk with Jesus, the Son of God who took on flesh, becoming man, who died and rose again and seated at the right hand of the Father",
                    "A heart that enjoys praying for others",
                    "A genuine love for laundry and service",
                    "Strong attention to detail and pride in quality work",
                    "Reliable, clean transportation (free of smoke and pet hair)",
                    "A clean home workspace (free of smoke and pet hair)",
                    "Access to an extra-large capacity washer and dryer (able to handle thick king-size comforters)",
                  ].map((req) => (
                    <li key={req} className="flex items-start gap-2 font-body text-sm text-foreground/75">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                        style={{ background: "hsl(var(--accent))" }}
                      />
                      {req}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  If you confidently meet each of these, we invite you to complete your application.
                </p>
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.meetsRequirements}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, meetsRequirements: e.target.checked }));
                    if (errors.meetsRequirements) setErrors((prev) => ({ ...prev, meetsRequirements: "" }));
                  }}
                  className="w-4 h-4 rounded border-border accent-accent mt-0.5"
                />
                <span className="font-body text-sm font-medium text-foreground/80">Everything applies to me</span>
              </label>
              {errors.meetsRequirements && <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>{errors.meetsRequirements}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-body text-sm font-semibold shadow-[var(--shadow-gold)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50"
                style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
              >
                {submitting ? "Submitting…" : "Submit Application"}
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <div className="text-center py-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Heart size={28} className="text-accent-foreground" fill="currentColor" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">
              Thank you for applying!
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed max-w-sm mx-auto">
              We'll be in touch within 24–48 hours (Monday–Friday).
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FolderApplicationModal;
