"use client";

import { Leaf, Linkedin, Twitter, Instagram } from "lucide-react";
import { NAV_LINKS, CONTACT_EMAIL } from "./navLinks";

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        {/* Nav row — same blueprint as the navbar */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-white">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            Sync Energy
          </a>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative inline-block py-1 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-accent transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            ))}
          </nav>
        </div>

        {/* Contact + socials */}
        <div className="mt-8 flex flex-col items-center gap-5 md:flex-row md:justify-between">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm font-medium text-brand-accent transition-colors hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-brand-primary hover:text-white"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* Copyright bar */}
        <div className="flex flex-col items-center gap-2 text-xs text-white/60 md:flex-row md:justify-between">
          <p>© 2025 Sync Energy. All rights reserved.</p>
          <p className="font-medium text-white/70">
            Waste to Power. Locally Built. Nationally Scalable.
          </p>
        </div>
      </div>
    </footer>
  );
}
