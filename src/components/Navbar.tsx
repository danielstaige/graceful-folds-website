import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/our-story" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Pricing", path: "/pricing" },
  { label: "The Fold", path: "/the-fold" },
  { label: "Prayer Wall", path: "/prayer-wall" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card shadow-soft" : "bg-card/95 backdrop-blur-sm"
      }`}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-semibold text-primary">
                Folds of Grace
              </span>
              <span className="font-body text-[10px] tracking-widest text-gold uppercase">
                Laundry · Pickup · Delivery
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link font-body text-sm font-medium tracking-wide pb-0.5 ${
                  location.pathname === link.path
                    ? "text-gold-dark border-b border-gold"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-md font-body text-sm font-medium tracking-wide transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "var(--gradient-gold)",
                color: "hsl(0 0% 100%)",
              }}
            >
              Schedule My First Pickup
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-soft">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm font-medium px-3 py-2.5 rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "bg-secondary text-primary font-semibold"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 text-center px-5 py-2.5 rounded-md font-body text-sm font-medium tracking-wide"
              style={{
                background: "var(--gradient-gold)",
                color: "hsl(0 0% 100%)",
              }}
            >
              Schedule My First Pickup
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
