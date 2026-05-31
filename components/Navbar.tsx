"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { NAV_LINKS } from "./navLinks";

/** A single nav link with a Framer Motion underline that slides in from the left. */
function NavLink({
  label,
  href,
  onClick,
  light,
}: {
  label: string;
  href: string;
  onClick?: () => void;
  /** When true the resting color is white (transparent navbar over hero). */
  light?: boolean;
}) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`group relative inline-block py-1 text-sm font-medium transition-colors duration-200 ${
        light ? "text-white/90 hover:text-white" : "text-brand-dark hover:text-brand-primary"
      }`}
    >
      {label}
      {/* Underline slides in from the left on hover/focus (scaleX 0 → 1) */}
      <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-primary transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
    </motion.a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Toggle the solid/transparent state once the user scrolls past the hero fold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-card" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20"
      >
        {/* Logo */}
        <a
          href="#"
          className={`flex items-center gap-2 text-lg font-extrabold tracking-tight transition-colors ${
            solid ? "text-brand-dark" : "text-white"
          }`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-white">
            <Leaf className="h-5 w-5" aria-hidden="true" />
          </span>
          Sync Energy
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} light={!solid} />
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors md:hidden ${
            solid ? "text-brand-dark" : "text-white"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer — slides in from the right */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-brand-dark/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-50 flex h-full w-72 max-w-[80%] flex-col gap-2 bg-white px-6 pt-24 shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center border-b border-brand-offwhite text-base font-medium text-brand-dark transition-colors hover:text-brand-primary"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
