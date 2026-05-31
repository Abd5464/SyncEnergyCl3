"use client";

import { Leaf, TreePine, Zap } from "lucide-react";
import Reveal from "./Reveal";
import StatCounter from "./StatCounter";

const PILLARS = [
  {
    icon: Leaf,
    title: "Methane Reduction",
    description:
      "Mitigating climate change at the source by capturing methane emissions from organic waste before they reach the atmosphere.",
  },
  {
    icon: TreePine,
    title: "Forest & Biodiversity Preservation",
    description:
      "Reducing reliance on firewood and charcoal by providing clean biogas — preserving biodiversity and reversing deforestation.",
  },
  {
    icon: Zap,
    title: "Energy Cost Savings & Access",
    description:
      "Localized sustainable energy for farms, SMEs, and off-grid communities — reducing household expenses and enhancing energy access.",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="text-white"
      style={{
        background: "linear-gradient(135deg, #1A7A4A 0%, #0F5132 100%)",
      }}
    >
      <div className="section">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow mb-3">Our Impact</p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Powering Communities. Restoring the Planet.
            </h2>
          </div>
        </Reveal>

        {/* Animated stat counters */}
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-10 text-center sm:grid-cols-2">
          <Reveal>
            <p className="font-display text-5xl font-extrabold text-brand-amber sm:text-6xl">
              <StatCounter value={65} suffix="%" />
            </p>
            <p className="mt-3 text-base text-white/80">
              Energy Cost Savings for Households &amp; SMEs
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-5xl font-extrabold text-brand-amber sm:text-6xl">
              <StatCounter value={5.2} decimals={1} suffix="" />
              <span className="text-3xl sm:text-4xl"> tonnes/mo</span>
            </p>
            <p className="mt-3 text-base text-white/80">
              Waste Diverted from Landfills
            </p>
          </Reveal>
        </div>

        {/* Glassmorphic pillars */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:bg-white/15">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 text-brand-amber">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
