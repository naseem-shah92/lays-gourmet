"use client";

import { motion } from "framer-motion";
import { Compass, MapPin } from "lucide-react";

export default function IngredientProvenance() {
  const ingredients = [
    {
      region: "IDAHO HIGH VALLEY, USA",
      title: "Russet Potato Terroir",
      detail: "Mineral-Rich Volcanic Soil & Glacial Irrigation",
      notes: "Selected for high starch density and low moisture, yielding an incomparably crisp snap when slow-kettle fried at 165°C.",
    },
    {
      region: "PELOPONNESE PENINSULA, GREECE",
      title: "Traditional Greek Culture",
      detail: "24-Hour Strained Live Culture Yogurt",
      notes: "Pure sheep and goat milk yogurt strained in cloth bags to achieve dense, rich creaminess with natural acidity.",
    },
    {
      region: "AEGEAN COASTAL FARMS, GREECE",
      title: "Sun-Cured Garden Dill",
      detail: "Cold-Atomized Botanical Essential Oils",
      notes: "Harvested at dawn when volatile terpene oils peak. Dried under maritime breezes for crisp aromatic intensity.",
    },
    {
      region: "CAMARGUE MARSHES, FRANCE",
      title: "Artisan Fleur de Sel",
      detail: "Sun-Evaporated Ocean Crystals",
      notes: "Hand-raked from the sea foam by master paludiers, providing light, flaky salt pyramids that melt on the tongue.",
    },
  ];

  return (
    <section id="terroir" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
            <Compass className="w-3.5 h-3.5 text-brand-green" />
            <span className="font-cinzel text-[11px] font-semibold tracking-widest uppercase text-cream-500">
              ORIGIN &amp; TERROIR
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white/95">
            INGREDIENT PROVENANCE
          </h2>
        </div>
        <p className="mt-4 md:mt-0 font-sans text-sm text-white/60 max-w-md">
          Sourced from single-origin artisan cooperatives dedicated to regenerative farming and timeless tradition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ingredients.map((ing, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden group"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green mb-3 tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{ing.region}</span>
            </div>

            <h3 className="font-serif text-2xl font-light text-white/95 mb-1 group-hover:text-white transition-colors">
              {ing.title}
            </h3>

            <div className="font-cinzel text-xs text-cream-500 font-medium mb-4 tracking-wide">
              {ing.detail}
            </div>

            <p className="text-sm text-white/60 leading-relaxed">
              {ing.notes}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
