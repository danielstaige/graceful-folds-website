import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useGetStarted } from "@/contexts/GetStartedContext";
import logoImg from "@/assets/folds-of-grace-logo-white.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/our-story" },
  { label: "Pricing", path: "/pricing" },
  { label: "The Fold", path: "/the-fold" },
  { label: "Prayer Wall", path: "/prayer-wall" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const location = useLocation();
  const { openGetStarted } = useGetStarted();

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
        scrolled ? "shadow-soft" : ""
      }`}
      style={{ backgroundColor: "hsl(var(--primary))" }}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={logoImg} alt="Folds of Grace" className="h-14 lg:h-20 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link font-body text-sm font-medium tracking-wide pb-0.5 ${
                  location.pathname === link.path
                    ? "text-accent border-b border-accent"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <button
              onClick={openGetStarted}
              className="inline-flex items-center px-5 py-2.5 rounded-md font-body text-sm font-medium tracking-wide transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "var(--gradient-gold)",
                color: "hsl(0 0% 100%)",
              }}
            >
              Get Started Today
            </button>
          </div>

          {/* Mobile Sheet Trigger */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 rounded-md text-white"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] sm:w-[340px] border-l border-white/10 flex flex-col p-0"
              style={{ backgroundColor: "hsl(var(--primary))" }}
            >
              {/* Sheet Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <img src={logoImg} alt="Folds of Grace" className="h-10 w-auto" />
                <SheetClose asChild>
                  <button
                    className="p-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
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
                      className={`group flex items-center gap-3 px-3 py-3.5 rounded-lg font-body text-base font-medium transition-all duration-150 ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "text-white/75 hover:bg-white/10 hover:text-white"
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
              <div className="px-4 pb-8 pt-2 border-t border-white/10">
                <button
                  onClick={() => { setSheetOpen(false); openGetStarted(); }}
                  className="flex items-center justify-center w-full px-5 py-3 rounded-md font-body text-sm font-semibold tracking-wide transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: "var(--gradient-gold)",
                    color: "hsl(0 0% 100%)",
                  }}
                >
                  Get Started Today
                </button>
                <p className="text-center font-body text-xs text-white/60 mt-3">
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
