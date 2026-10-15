"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Leaf, Award, Compass, Sun, Shield, Heart } from "lucide-react";

interface Ingredient {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  origin: string;
  description: string;
  culinaryRole: string;
  iconName: string;
  accentColor: string;
  stats: { label: string; value: string }[];
  tasteProfile: { attribute: string; score: number }[];
}

const ingredients: Ingredient[] = [
  {
    id: "potatoes",
    name: "Crisp Farm Russet Potatoes",
    subtitle: "High-Altitude Volcanic Soil Cultivation",
    category: "The Golden Canvas",
    origin: "Selected Highland Estates",
    description:
      "Grown in mineral-rich, volcanic soil under sunny days and cool crisp nights. Each potato is harvested at peak starch density, sliced to a razor-thin 1.2mm caliber, and slowly batch-fried in pure oils to achieve an acoustic, resonant crunch.",
    culinaryRole: "Provides the foundational golden crunch, delicate natural sweetness, and earthy potato depth.",
    iconName: "Sun",
    accentColor: "#fbbf24",
    stats: [
      { label: "Slice Caliber", value: "1.2 mm" },
      { label: "Batch Cooking", value: "Kettle Cooked" },
      { label: "Starch Density", value: "Grade AAA+" },
    ],
    tasteProfile: [
      { attribute: "Acoustic Crunch", score: 98 },
      { attribute: "Golden Earthiness", score: 92 },
      { attribute: "Oil Purity", score: 96 },
    ],
  },
  {
    id: "yogurt",
    name: "Creamy Greek Yogurt Essence",
    subtitle: "Triple-Strained Alpine Pasture Milk",
    category: "The Creamy Balance",
    origin: "Mediterranean Alpine Valleys",
    description:
      "Crafted through an ancient triple-straining method using whole milk from grass-fed alpine herds. The resulting creaminess delivers a smooth, cooling silkiness with a subtle, refreshing lactic tang that cuts cleanly through savory notes.",
    culinaryRole: "Envelops the palate in luxurious cooling tang, tempering herb intensity and amplifying mouthfeel.",
    iconName: "Heart",
    accentColor: "#38bdf8",
    stats: [
      { label: "Culture Process", value: "Triple Strained" },
      { label: "Lactic Balance", value: "Silky Tang" },
      { label: "Palate Texture", value: "Velvety" },
    ],
    tasteProfile: [
      { attribute: "Lactic Tang", score: 90 },
      { attribute: "Cooling Texture", score: 95 },
      { attribute: "Creamy Richness", score: 94 },
    ],
  },
  {
    id: "herbs",
    name: "Fresh Garden Dill & Herbs",
    subtitle: "Hand-Harvested Dawn Herb Bouquet",
    category: "The Aromatic Crown",
    origin: "Aegean Coastal Gardens",
    description:
      "A fragrant blend of wild mountain dill, delicate spring chives, savory summer thyme, and flat-leaf parsley. Plucked at daybreak while the morning dew retains the volatile essential oils, then gently micro-milled to preserve emerald vibrancy.",
    culinaryRole: "Introduces bright aniseed notes, earthy herbaceous perfumes, and a crisp, botanical lift to every bite.",
    iconName: "Leaf",
    accentColor: "#34d399",
    stats: [
      { label: "Harvest Time", value: "Dawn Dew" },
      { label: "Milling Type", value: "Micro-Cryo Milled" },
      { label: "Aroma Retention", value: "100% Volatiles" },
    ],
    tasteProfile: [
      { attribute: "Herbal Bouquet", score: 96 },
      { attribute: "Aromatic Lift", score: 94 },
      { attribute: "Freshness", score: 99 },
    ],
  },
];

export default function IngredientSpotlight() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>(ingredients[0]);

  return (
    <section id="ingredients" className="relative py-28 px-6 sm:px-8 bg-[#090d16] border-t border-b border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 -left-20 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: selectedIngredient.accentColor }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-herb-500/10 border border-herb-500/30 text-herb-300 text-xs tracking-[0.25em] uppercase font-semibold mb-4"
          >
            <Leaf className="w-3.5 h-3.5 text-herb-400" />
            Pure Gastronomic Origin
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4"
          >
            The Ingredient <span className="gold-gradient-text font-serif italic">Spotlight</span>
          </motion.h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            Every layer of the Yogurt &amp; Herb experience is rooted in pristine provenance and uncompromising sourcing.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {ingredients.map((ing) => {
            const isActive = selectedIngredient.id === ing.id;
            return (
              <button
                key={ing.id}
                onClick={() => setSelectedIngredient(ing)}
                className={`relative px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? "bg-white/15 text-white border border-white/30 shadow-lg"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIngredientTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-500/20 to-herb-500/20 border border-gold-400/40"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 w-2 h-2 rounded-full" style={{ backgroundColor: ing.accentColor }} />
                <span className="relative z-10">{ing.name.split(" ")[0]} {ing.name.split(" ")[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIngredient.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-slate-900/90 to-[#07090e]/90 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Left Column: Visual Essence & Origin Card */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-black/40 rounded-2xl p-6 sm:p-8 border border-white/5 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ backgroundColor: selectedIngredient.accentColor }}
              />

              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-mono block mb-2">
                  {selectedIngredient.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  {selectedIngredient.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300/80 font-serif italic mb-6">
                  {selectedIngredient.subtitle}
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
                  <Compass className="w-4 h-4 text-gold-400" />
                  <span>Harvest Origin: <strong className="text-slate-200">{selectedIngredient.origin}</strong></span>
                </div>
              </div>

              {/* Stat badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
                {selectedIngredient.stats.map((stat) => (
                  <div key={stat.label} className="text-center p-2 rounded-xl bg-white/5">
                    <span className="block text-[10px] uppercase text-slate-400 tracking-wider">
                      {stat.label}
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-white mt-0.5">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: In-depth Story & Sensory Profile */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-slate-400 font-semibold mb-3">
                  The Sourcing Philosophy
                </h4>
                <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed">
                  {selectedIngredient.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="text-xs uppercase tracking-wider text-gold-300 font-semibold block mb-1">
                  Gastronomic Contribution
                </span>
                <p className="text-xs sm:text-sm text-slate-300 font-serif italic">
                  "{selectedIngredient.culinaryRole}"
                </p>
              </div>

              {/* Flavor contribution bars */}
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-slate-400 font-semibold mb-3">
                  Sensory Calibration Score
                </h4>
                <div className="space-y-3">
                  {selectedIngredient.tasteProfile.map((item) => (
                    <div key={item.attribute}>
                      <div className="flex justify-between text-xs text-slate-300 mb-1">
                        <span>{item.attribute}</span>
                        <span className="font-mono text-gold-400">{item.score}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: selectedIngredient.accentColor }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
