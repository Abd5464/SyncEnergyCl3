"use client";

import Reveal from "./Reveal";

const PARAGRAPHS = [
  "Over 85 million people in Nigeria still lack access to reliable electricity, while the country generates more than 60 million tons of waste annually that decomposes, releasing methane and accelerating climate change.",
  "At Sync, we bridge this gap through a data-driven biogas ecosystem that converts this challenge into measurable value. We collect organic waste directly from farms, agro-processors, and waste management plants, preventing uncontrolled emissions and converting them into clean energy, cooking gas, and organic fertilizer.",
  "Beyond physical infrastructure, our system integrates real-time monitoring and data analytics across the entire value chain, enabling continuous tracking of feedstock inputs, processing efficiency, gas yield, and energy outputs.",
  "Our initial target market includes 2,000 to 5,000 high-impact users, comprising livestock farmers, agro-processors, industrial operators, residential estates, and underserved communities requiring reliable base-load energy solutions.",
];

const STATS = [
  { value: "85M+", label: "Nigerians without reliable electricity" },
  { value: "60M+ tons", label: "Annual waste generated in Nigeria" },
  { value: "2,000–5,000", label: "Initial target users" },
];

export default function About() {
  return (
    <section id="about" className="bg-brand-offwhite">
      <div className="section grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column — narrative */}
        <div>
          <Reveal>
            <p className="eyebrow mb-3">About Sync Energy</p>
            <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
              Bridging Nigeria&apos;s Energy and Waste Crisis
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            {PARAGRAPHS.map((text, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-brand-dark/75">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right column — stat cards */}
        <div className="flex flex-col justify-center gap-5">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="group rounded-xl border-l-4 border-brand-primary bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
                <p className="font-display text-3xl font-extrabold text-brand-amber sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-brand-dark/70">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
