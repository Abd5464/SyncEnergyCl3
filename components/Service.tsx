"use client";

import Reveal from "./Reveal";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  bullets?: string[];
  footer?: string;
}

const CARDS: ServiceCard[] = [
  {
    icon: "🔥",
    title: "Clean Cooking Energy Products",
    description:
      "We produce and distribute compressed biogas for household and institutional use, packaged in safe storage cylinders and portable gas systems. This provides a direct replacement for firewood, charcoal, and LPG, enabling affordable and clean cooking energy access at the community level.",
  },
  {
    icon: "⚡",
    title: "Energy-as-a-Service (EaaS)",
    description:
      "Sync Energy delivers decentralized energy solutions for mobility and power generation systems, including:",
    bullets: [
      "Biogas generator conversion kits (diesel and petrol-to-biogas retrofits)",
      "Generator optimization and hybrid energy systems",
      "Ongoing maintenance and technical support services",
    ],
    footer:
      "Achieved through partnerships with local manufacturers and trained field technicians, ensuring scalability and local capacity development.",
  },
  {
    icon: "🌱",
    title: "Organic Fertilizer Commercialization",
    description:
      "The digestate from our biogas process is refined into nutrient-balanced organic fertilizer for agricultural use. Distributed through:",
    bullets: [
      "Farmer cooperatives",
      "Agro-processing hubs",
      "Regional agricultural supply chains",
    ],
    footer:
      "Supporting soil regeneration and sustainable farming practices.",
  },
  {
    icon: "🏗️",
    title: "Infrastructure & EPC Services",
    description:
      "At scale, Sync Energy expands into Energy Engineering, Procurement, and Construction (EPC) services, including:",
    bullets: [
      "Biomass-to-energy infrastructure deployment",
      "Industrial biogas systems for heat and power generation",
      "Modular digester design and installation for communities and agro-industries",
    ],
  },
];

export default function Service() {
  return (
    <section id="service" className="bg-brand-offwhite">
      <div className="section">
        <Reveal>
          <p className="eyebrow mb-3">Our Service Model</p>
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            A Scalable Commercial Ecosystem
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-dark/75">
            Following system validation and performance optimization through
            real-world datasets, Sync Energy transitions into a scalable
            commercial ecosystem built around clean energy production,
            decentralized distribution, and infrastructure services.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={(i % 2) * 0.1}>
              <article className="group h-full rounded-2xl border border-transparent bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary hover:shadow-card-hover">
                <span className="text-4xl" aria-hidden="true">
                  {card.icon}
                </span>
                <h3 className="mt-4 text-xl font-bold text-brand-dark">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-dark/75">
                  {card.description}
                </p>
                {card.bullets && (
                  <ul className="mt-4 space-y-2">
                    {card.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 text-sm leading-snug text-brand-dark/75"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {card.footer && (
                  <p className="mt-4 text-sm italic leading-relaxed text-brand-dark/60">
                    {card.footer}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
