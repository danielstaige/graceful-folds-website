import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useTheme } from "@/contexts/ThemeContext";
import lightGoldLogo from "@/assets/light-and-gold-variant-logo.png";
import grayBlueLogo from "@/assets/gray-blue-variant-logo.png";

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
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setSheetOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card shadow-soft" : "bg-card/95 backdrop-blur-sm"
      }`}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={theme === "light-gold" ? lightGoldLogo : grayBlueLogo}
              alt="Folds of Grace"
              className="h-14 lg:h-16 w-auto"
            />
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

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <Link
              to="/schedule"
              className="inline-flex items-center px-5 py-2.5 rounded-md font-body text-sm font-medium tracking-wide transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "var(--gradient-gold)",
                color: "hsl(0 0% 100%)",
              }}
            >
              Schedule My First Pickup
            </Link>
          </div>

          {/* Mobile Sheet Trigger */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 rounded-md text-primary"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] sm:w-[340px] bg-card border-l border-border flex flex-col p-0"
            >
              {/* Sheet Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <img
                  src={theme === "light-gold" ? lightGoldLogo : grayBlueLogo}
                  alt="Folds of Grace"
                  className="h-9 w-auto"
                />
                <SheetClose asChild>
                  <button
                    className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </SheetClose>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-0.5 px-4 py-4 flex-1 overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`group flex items-center gap-3 px-3 py-3 rounded-lg font-body text-sm font-medium transition-all duration-150 ${
                        isActive
                          ? "bg-secondary text-primary"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span
                        className={`w-0.5 h-4 rounded-full shrink-0 transition-all duration-200 ${
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                        }`}
                        style={{ background: "hsl(var(--deep-gold))" }}
                      />
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* CTA at bottom */}
              <div className="px-4 pb-8 pt-2 border-t border-border">
                <Link
                  to="/schedule"
                  className="flex items-center justify-center w-full px-5 py-3 rounded-md font-body text-sm font-semibold tracking-wide transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: "var(--gradient-gold)",
                    color: "hsl(0 0% 100%)",
                  }}
                >
                  Schedule My First Pickup
                </Link>
                <p className="text-center font-body text-xs text-muted-foreground mt-3">
                  We wash, we fold… and we pray. 🙏
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
