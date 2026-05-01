import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Wordmark from "./Wordmark";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/for-teens", label: "For Teens" },
  { to: "/for-posters", label: "For Posters" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-light ${
        scrolled ? "border-b border-black/5 shadow-[0_1px_0_rgba(10,10,10,0.04)]" : "border-b border-transparent"
      }`}
      data-testid="main-navbar"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" data-testid="nav-logo-link">
          <Wordmark className="text-2xl md:text-[28px]" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                  isActive ? "text-olive" : "text-ink/70 hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-olive rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/#waitlist"
            data-testid="nav-cta-waitlist"
            className="group inline-flex items-center gap-2 bg-ink text-sand-light px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-olive transition-colors duration-300"
          >
            Join waitlist
            <span className="w-1.5 h-1.5 rounded-full bg-sand-light group-hover:bg-sand-light" />
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden glass-light border-t border-black/5 overflow-hidden"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={({ isActive }) =>
                    `py-3 text-2xl font-display font-semibold tracking-tight ${
                      isActive ? "text-olive" : "text-ink"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/#waitlist"
                data-testid="mobile-cta-waitlist"
                className="mt-4 inline-flex justify-center items-center bg-ink text-sand-light px-6 py-3.5 rounded-full text-base font-semibold"
              >
                Join waitlist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
