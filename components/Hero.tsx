"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/*
        Background image — REPLACE: drop your own photo at /public/hero.jpg.
        Using next/image with `priority` since this is above the fold.
      */}
      <Image
        src="/hero.jpg"
        alt="Biodigester facility converting organic waste into clean energy"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark green gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,122,74,0.7) 0%, rgba(17,24,39,0.8) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 py-32 sm:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow mb-5">
            Green Energy · Smart Infrastructure · Circular Economy
          </p>

          <h1
            className="font-display font-extrabold leading-[1.05] text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Sync Energy — Transforming Organic Waste into Power, Cooking Gas,
            and Organic Fertilizer
          </h1>

          <p className="mt-6 max-w-[600px] text-lg text-white/80">
            Driven by real-time IoT telemetry at its source.
          </p>

          <motion.a
            href="#contact"
            className="btn-primary mt-9"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Join the Pilot Phase
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 transition-colors hover:text-white"
      >
        <ChevronDown className="h-8 w-8 animate-bounceArrow" aria-hidden="true" />
      </a>
    </section>
  );
}
