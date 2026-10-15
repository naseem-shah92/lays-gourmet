"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Eye, Star, Flame, Wind, Crown, Check, ShoppingBag } from "lucide-react";

export interface Flavor {
  id: string;
  name: string;
  tagline: string;
  edition: string;
  description: string;
  color: string;
  accentColor: string;
  glowClass: string;
  badgeBg: string;
  spiceLevel: number; // 1 to 5
  crunchScore: string;
  pairing: string;
  notes: string[];
  ingredientsList: string[];
  calories: string;
  isHero?: boolean;
}

const flavors: Flavor[] = [
  {
    id: "yogurt-herb",
    name: "Yogurt & Herb",
    tagline: "Cooling Tang & Wild Mediterranean Greens",
    edition: "Signature Chef Edition",
    description:
      "A culinary symphony marrying velvety Greek yogurt creaminess with freshly crushed garden dill, chives, and savory mountain thyme over slow-batch crisps.",
    color: "from-emerald-950/80 via-slate-900 to-[#070b12]",
    accentColor: "#34d399",
    glowClass: "shadow-[0_0_40px_rgba(52,211,153,0.25)] hover:shadow-[0_0_55px_rgba(52,211,153,0.45)]",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    spiceLevel: 1,
    crunchScore: "9.9 / 10",
    pairing: "Prosecco & Crisp Sauvignon Blanc",
    notes: ["Fresh Dill Infusion", "Tangy Alpine Cream", "Crushed Thyme", "Maldon Sea Salt"],
    ingredientsList: ["Estate Russet Potatoes", "Pure Olive & Sunflower Oil", "Greek Cultured Yogurt Essence", "Garden Dill & Parsley", "White Pepper"],
    calories: "148 kcal / 30g",
    isHero: true,
  },
  {
    id: "truffle-parmesan",
    name: "Truffle & Parmesan",
    tagline: "Black Truffle Essence & Aged 24-Month Parmigiano",
    edition: "Private Reserve",
    description:
      "Deep earthiness of Italian Umbrian black truffles elevated by the sharp, crystalline nuttiness of aged Parmigiano-Reggiano.",
    color: "from-amber-950/80 via-slate-900 to-[#070b12]",
    accentColor: "#fbbf24",
    glowClass: "shadow-[0_0_40px_rgba(251,191,36,0.25)] hover:shadow-[0_0_55px_rgba(251,191,36,0.45)]",
    badgeBg: "bg-gold-500/20 text-gold-300 border-gold-500/40",
    spiceLevel: 1,
    crunchScore: "9.8 / 10",
    pairing: "Oak-Aged Chardonnay & Pinot Noir",
    notes: ["Umbrian Black Truffle", "Aged Parmigiano", "Nutty Finish", "Sun-Dried Herbs"],
    ingredientsList: ["Selected Potatoes", "Cold-Pressed Truffle Oil Infusion", "Parmigiano-Reggiano PDO Powder", "Sea Salt"],
    calories: "152 kcal / 30g",
  },
  {
    id: "smoky-bbq",
    name: "Smoky BBQ Wood",
    tagline: "Hickory Wood Smoke & Caramelized Blossom Molasses",
    edition: "Artisan Smokehouse",
    description:
      "Slow-smoked over genuine American hickory wood, glazed with slow-cooked wild blossom molasses and toasted paprika flakes.",
    color: "from-orange-950/80 via-slate-900 to-[#070b12]",
    accentColor: "#fb923c",
    glowClass: "shadow-[0_0_40px_rgba(251,146,60,0.25)] hover:shadow-[0_0_55px_rgba(251,146,60,0.45)]",
    badgeBg: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    spiceLevel: 2,
    crunchScore: "9.7 / 10",
    pairing: "Craft Amber Ale & Smoky Bourbon",
    notes: ["Aged Hickory Smoke", "Brown Demerara Glaze", "Toasted Smoked Paprika", "Cracked Pepper"],
    ingredientsList: ["Potatoes", "Hickory Smoke Essence", "Blossom Molasses", "Sweet Spanish Paprika", "Garlic Confit"],
    calories: "150 kcal / 30g",
  },
  {
    id: "fiery-chili",
    name: "Fiery Chili Lime",
    tagline: "Roasted Bird's Eye Chili & Sun-Ripened Persian Lime",
    edition: "Intense Spice Reserve",
    description:
      "Vibrant flash of cold-pressed Persian lime followed by a refined, lingering warmth of charred bird's eye chilies and sea salt.",
    color: "from-red-950/80 via-slate-900 to-[#070b12]",
    accentColor: "#f87171",
    glowClass: "shadow-[0_0_40px_rgba(248,113,113,0.25)] hover:shadow-[0_0_55px_rgba(248,113,113,0.45)]",
    badgeBg: "bg-red-500/20 text-red-300 border-red-500/40",
    spiceLevel: 4,
    crunchScore: "9.9 / 10",
    pairing: "Dry Riesling & Botanical Gin Cocktail",
    notes: ["Charred Bird's Eye Chilies", "Zesty Persian Lime", "Coriander Leaf", "Pink Himalayan Salt"],
    ingredientsList: ["Kettle Potatoes", "Roasted Chili Powder", "Persian Lime Juice Crystals", "Sea Salt", "Cracked Pepper"],
    calories: "146 kcal / 30g",
  },
];

interface ProductShowcaseProps {
  onSelectFlavor: (flavor: Flavor) => void;
}

export default function ProductShowcase({ onSelectFlavor }: ProductShowcaseProps) {
  const [activeFlavor, setActiveFlavor] = useState<Flavor>(flavors[0]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="collection" className="relative py-28 px-6 sm:px-8 bg-[#070a11] overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-herb-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-gold-300 text-xs tracking-[0.25em] uppercase font-semibold mb-4"
          >
            <Crown className="w-3.5 h-3.5 text-gold-400" />
            Curated Taste Profiles
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white mb-6"
          >
            The Gourmet <span className="gold-gradient-text font-serif italic">Collection</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg font-light leading-relaxed"
          >
            Each recipe is crafted like fine dining. Explore our signature Yogurt &amp; Herb edition alongside private reserve pairings.
          </motion.p>
        </div>

        {/* 3D Interactive Flavor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {flavors.map((flavor, index) => {
            const isSelected = activeFlavor.id === flavor.id;
            return (
              <motion.div
                key={flavor.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                onMouseEnter={() => {
                  setHoveredCard(flavor.id);
                  setActiveFlavor(flavor);
                }}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between cursor-pointer border ${
                  flavor.isHero
                    ? "border-herb-400/50 bg-gradient-to-b " + flavor.color
                    : "border-white/10 hover:border-white/30 bg-gradient-to-b " + flavor.color
                } ${flavor.glowClass} backdrop-blur-xl transform-gpu hover:-translate-y-2`}
              >
                {/* Hero Star Banner */}
                {flavor.isHero && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-[10px] tracking-widest uppercase shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 fill-slate-950" />
                    <span>Signature Masterpiece</span>
                  </div>
                )}

                <div>
                  {/* Edition Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${flavor.badgeBg}`}
                    >
                      {flavor.edition}
                    </span>
                    <span className="text-xs text-slate-400 font-serif">
                      Crunch {flavor.crunchScore}
                    </span>
                  </div>

                  {/* Visual Flavor Icon / Symbol Emblem */}
                  <div className="w-full h-40 my-3 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-white/20 transition-all duration-300">
                    <div
                      className="absolute inset-0 opacity-20 blur-xl transition-opacity group-hover:opacity-40"
                      style={{ background: `radial-gradient(circle, ${flavor.accentColor} 0%, transparent 70%)` }}
                    />
                    
                    {/* Artistic 3D chip emblem simulation */}
                    <div className="relative z-10 text-center flex flex-col items-center">
                      <div
                        className="w-20 h-20 rounded-full border-2 border-dashed flex items-center justify-center transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110 shadow-lg"
                        style={{ borderColor: flavor.accentColor }}
                      >
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md"
                          style={{ backgroundColor: `${flavor.accentColor}22` }}
                        >
                          <Sparkles className="w-7 h-7" style={{ color: flavor.accentColor }} />
                        </div>
                      </div>
                      <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mt-2">
                        Reserve Batch
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-200 transition-colors duration-200 mt-2">
                    {flavor.name}
                  </h3>
                  <p className="text-xs text-slate-300/80 font-serif italic mt-1 line-clamp-1">
                    {flavor.tagline}
                  </p>
                  <p className="text-xs text-slate-400 font-light leading-relaxed mt-3 line-clamp-3">
                    {flavor.description}
                  </p>

                  {/* Tasting Note Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {flavor.notes.slice(0, 3).map((note) => (
                      <span
                        key={note}
                        className="text-[10px] tracking-wide px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer specs & CTA */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500">Pairing</span>
                    <span className="text-xs text-slate-300 font-medium truncate max-w-[130px]" title={flavor.pairing}>
                      {flavor.pairing}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectFlavor(flavor);
                    }}
                    className="p-2 rounded-full bg-white/10 hover:bg-gold-500 hover:text-slate-950 text-slate-200 transition-all duration-300 group/btn"
                    title="View Tasting Notes & Reserve"
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Flavor Spotlight Bar */}
        <motion.div
          key={activeFlavor.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-[#0e1320]/80 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${activeFlavor.accentColor}20`, border: `1px solid ${activeFlavor.accentColor}50` }}
            >
              <Sparkles className="w-6 h-6" style={{ color: activeFlavor.accentColor }} />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h4 className="text-lg font-display font-bold text-white">{activeFlavor.name}</h4>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-slate-300">
                  {activeFlavor.calories}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-light mt-0.5">
                Sommelier Recommendation: <span className="text-gold-300 font-serif italic">{activeFlavor.pairing}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => onSelectFlavor(activeFlavor)}
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold tracking-wider uppercase text-slate-100 transition-all"
            >
              Inspect Recipe
            </button>
            <button
              onClick={() => onSelectFlavor(activeFlavor)}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 text-xs font-bold tracking-wider uppercase shadow-gold-glow hover:scale-105 transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Taste This Edition</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
