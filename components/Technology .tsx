"use client";

import Image from "next/image";
import { Scale, Thermometer, Flame, LineChart } from "lucide-react";
import Reveal from "./Reveal";

const TRACK_CARDS = [
  {
    icon: Scale,
    title: "Feedstock Input",
    metrics: ["Waste volume, type, and feed rate at entry point"],
  },
  {
    icon: Thermometer,
    title: "Digestion Process",
    metrics: ["Retention time", "Temperature and system stability"],
  },
  {
    icon: Flame,
    title: "Gas Output",
    metrics: ["Biogas yield", "Production rate over time"],
  },
  {
    icon: LineChart,
    title: "Output Quality & Efficiency",
    metrics: [
      "Digestate mass",
      "Output consistency",
      "System efficiency metrics for performance optimization",
    ],
  },
];

export default function Technology() {
  return (
    <section id="technology" className="bg-white">
      <div className="section">
        <Reveal>
          <p className="eyebrow mb-3">Our Technology</p>
          <h2 className="max-w-3xl text-3xl font-bold text-brand-dark sm:text-4xl">
            From Proof of Concept to IoT-Enabled Intelligence
          </h2>
        </Reveal>

        {/* Intro: text + diagram */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-base leading-relaxed text-brand-dark/75">
              Sync Energy has completed a 16-day flame validation test,
              demonstrating core anaerobic decomposition using a 25-liter
              prototype digester, confirming stable biogas production. Building
              on this proof of concept, we are transitioning into the pilot
              phase with a 1-meter cube power digester designed for real-world
              deployment and continuous data-driven optimization. At this stage,
              the system evolves from experimental validation to IoT-enabled
              process intelligence powered by ESP32-based monitoring.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            {/*
              REPLACE: drop an SVG/PNG schematic of the biodigester with labeled
              sensor points at /public/tech-diagram.png.
            */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-offwhite bg-brand-offwhite shadow-card">
              <Image
                src="/tech-diagram.png"
                alt="Schematic of the Sync Energy biodigester showing labeled IoT sensor points"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6"
              />
            </div>
          </Reveal>
        </div>

        {/* What we track */}
        <Reveal>
          <h3 className="mt-20 text-2xl font-bold text-brand-dark">
            What We Track in Real Time
          </h3>
          <p className="mt-2 text-brand-dark/70">
            Our integrated sensing and analytics layer captures:
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRACK_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="group h-full rounded-xl border border-brand-offwhite bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary hover:shadow-card-hover">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h4 className="text-lg font-bold text-brand-dark">
                    {card.title}
                  </h4>
                  <ul className="mt-3 space-y-1.5">
                    {card.metrics.map((m) => (
                      <li
                        key={m}
                        className="flex gap-2 text-sm leading-snug text-brand-dark/70"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
