"use client";

import { motion } from "framer-motion";
import { Sparkles, Leaf, Waves } from "lucide-react";

export default function FlavorAnatomyGrid() {
  const cards = [
    {
      icon: Sparkles,
      tag: "THE BASE",
      title: "Greek Yogurt Creaminess",
      subtitle: "Peloponnese Cultured Tang",
      description:
        "Whipped from 24-hour slow-fermented Mediterranean Greek yogurt. Delivers a velvety, cooling creaminess that balances the kettle crisp's rich golden base.",
      color: "from-brand-green/20 to-transparent",
      accent: "text-brand-green",
    },
    {
      icon: Leaf,
      tag: "BOTANICAL CORE",
      title: "Wild Field Herbs",
      subtitle: "Aegean Garden Dill & Chives",
      description:
        "Sun-dried aromatic dill sprigs and young spring chives, cold-pressed to release volatile botanical oils and vibrant herbal fragrance in every bite.",
      color: "from-emerald-500/20 to-transparent",
      accent: "text-emerald-400",
    },
    {
      icon: Waves,
      tag: "FINISHING TOUCH",
      title: "Sea Salt Balance",
      subtitle: "Hand-Harvested Fleur de Sel",
      description:
        "Delicate ocean crystals gathered from Camargue salt marshes. Provides a rhythmic, clean saline snap that elevates the herbs without overwhelming.",
      color: "from-amber-400/20 to-transparent",
      accent: "text-cream-500",
    },
  ];

  return (
    <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
          <span className="font-cinzel text-[11px] font-semibold tracking-widest uppercase text-brand-green">
            FLAVOR ANATOMY
          </span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white/95 max-w-2xl">
          A TRIAD OF CULINARY ELEGANCE
        </h2>
        <p className="mt-4 text-base font-sans text-white/60 max-w-lg">
          Deconstructed into three signature flavor vectors crafted to ignite the palate.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Radial Hover Gradient */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-radial ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full blur-2xl`}
              />

              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/20 transition-colors">
                    <Icon className={`w-6 h-6 ${card.accent}`} />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                    {card.tag}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="font-serif text-2xl font-light text-white/95 mb-1.5 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className={`font-cinzel text-[11px] font-medium ${card.accent} mb-4 uppercase tracking-widest`}>
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-white/30">BATCH NO. 04-YH</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-green transition-colors" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
