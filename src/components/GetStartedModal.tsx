import { useState } from "react";
import { Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const inputClass =
  "w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-ring transition-all";
const errorClass = "font-body text-xs mt-1.5";

interface GetStartedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GetStartedModal = ({ open, onOpenChange }: GetStartedModalProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    freeClear: false,
    familyMembers: "",
    hangingPreferences: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.phone.trim()) errs.phone = "Phone is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email.";
    if (!form.address.trim()) errs.address = "Address is required.";
    if (!form.familyMembers.trim()) errs.familyMembers = "Please list your family members and sizes.";
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
      console.log("Client intake submission:", form);
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
        setForm({ name: "", phone: "", email: "", address: "", freeClear: false, familyMembers: "", hangingPreferences: "" });
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
                Schedule Your Pickup
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} noValidate className="space-y-4 mt-2">
              <div>
                <label className="font-body text-sm font-medium text-foreground/80 block mb-1.5">
                  Name <span className="text-destructive">*</span>
                </label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
                {errors.name && <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>{errors.name}</p>}
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground/80 block mb-1.5">
                  Phone <span className="text-destructive">*</span>
                </label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(214) 555-0100" className={inputClass} />
                {errors.phone && <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>{errors.phone}</p>}
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground/80 block mb-1.5">
                  Email <span className="text-destructive">*</span>
                </label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" className={inputClass} />
                {errors.email && <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>{errors.email}</p>}
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground/80 block mb-1.5">
                  Address <span className="text-destructive">*</span>
                </label>
                <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="123 Main St, Dallas, TX" className={inputClass} />
                {errors.address && <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>{errors.address}</p>}
              </div>

              <div className="bg-secondary/60 rounded-lg p-4">
                <p className="font-body text-sm text-foreground/80 leading-relaxed mb-3">
                  We use Tide or Gain by default. If you prefer All Free & Clear, please check this box. You're always welcome to provide your own detergent.
                </p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" name="freeClear" checked={form.freeClear} onChange={handleChange} className="w-4 h-4 rounded border-border accent-accent" />
                  <span className="font-body text-sm text-foreground/80">I prefer All Free & Clear</span>
                </label>
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground/80 block mb-1.5">
                  Names and Sizes of Family Members <span className="text-destructive">*</span>
                </label>
                <p className="font-body text-xs text-muted-foreground mb-2">(We sort by size and pray by name)</p>
                <textarea name="familyMembers" value={form.familyMembers} onChange={handleChange} rows={3} placeholder="e.g., Jane - Medium, John - Large, Emma - Kids S" className={`${inputClass} resize-none`} />
                {errors.familyMembers && <p className={errorClass} style={{ color: "hsl(var(--destructive))" }}>{errors.familyMembers}</p>}
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground/80 block mb-1.5">
                  What would you like hung?
                </label>
                <p className="font-body text-xs text-muted-foreground mb-2">
                  Just set your hangers out with your laundry, and we'll hang everything for you—making it quick and easy to put away when it's returned.
                </p>
                <textarea name="hangingPreferences" value={form.hangingPreferences} onChange={handleChange} rows={2} placeholder="e.g., Dress shirts, blouses" className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-body text-sm font-semibold shadow-[var(--shadow-gold)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50"
                style={{ background: "var(--gradient-gold)", color: "hsl(0 0% 100%)" }}
              >
                {submitting ? "Submitting…" : "Submit"}
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "var(--gradient-gold)" }}>
              <Heart size={28} className="text-accent-foreground" fill="currentColor" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">
              Thank you for scheduling with us!
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed max-w-sm mx-auto">
              We're so glad you're here. Someone from our team will be in touch shortly to confirm your pickup day.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;
