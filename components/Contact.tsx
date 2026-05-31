"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { CONTACT_EMAIL } from "./navLinks";

export default function Contact() {
  const mailto = `mailto:${CONTACT_EMAIL}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-offwhite"
    >
      {/* Subtle decorative pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(#1A7A4A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="section relative text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Ready to power the future?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-dark/75">
            Partner with Sync Energy to bring clean, decentralized energy to
            communities across Nigeria.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href={mailto}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Join the Pilot Phase
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </motion.a>
            <a href={mailto} className="btn-outline">
              Get in Touch
            </a>
          </div>

          <a
            href={mailto}
            className="mt-8 inline-block text-lg font-semibold text-brand-primary transition-colors hover:text-brand-accent"
          >
            {CONTACT_EMAIL}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
