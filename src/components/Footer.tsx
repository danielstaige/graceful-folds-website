import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/our-story" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Pricing", path: "/pricing" },
  { label: "The Fold", path: "/the-fold" },
  { label: "Prayer Wall", path: "/prayer-wall" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-display text-2xl font-semibold text-primary-foreground">
                Folds of Grace
              </h3>
              <p className="font-body text-xs tracking-widest text-gold uppercase mt-1">
                Laundry · Pickup · Delivery
              </p>
            </div>
            <p className="font-body text-sm leading-relaxed opacity-80 max-w-xs">
              Premium laundry pickup and delivery for busy families in the Dallas-Fort Worth area.
            </p>
            <p className="font-display text-base italic text-gold mt-2">
              "We'll lighten the load."
            </p>
          </div>

          {/* Links column */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-widest uppercase opacity-60 mb-5">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-widest uppercase opacity-60 mb-5">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:2144007651"
                className="flex items-center gap-3 font-body text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all duration-200"
              >
                <Phone size={15} className="shrink-0" />
                214-400-7651
              </a>
              <a
                href="mailto:hello@foldsofgrace.com"
                className="flex items-center gap-3 font-body text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all duration-200"
              >
                <Mail size={15} className="shrink-0" />
                hello@foldsofgrace.com
              </a>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-gold transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-gold transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} Folds of Grace. All rights reserved. Dallas-Fort Worth, TX.
          </p>
          <p className="font-display text-xs italic opacity-60">
            We wash, we fold… and we pray.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
