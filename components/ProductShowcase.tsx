"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import FlavorAnatomyGrid from "./FlavorAnatomyGrid";
import TastingNotes from "./TastingNotes";
import IngredientProvenance from "./IngredientProvenance";
import NutritionalArchitecture from "./NutritionalArchitecture";

export default function ProductShowcase() {
  return (
    <div className="relative z-10 bg-gradient-to-b from-transparent via-black/40 to-black/85 text-white overflow-hidden pt-8 backdrop-blur-[2px]">
      {/* Editorial Hero Statement */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto text-center border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EDE4D3]/20 bg-white/5 backdrop-blur-md mb-8">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span className="font-cinzel text-xs font-semibold tracking-[0.2em] uppercase text-cream-500">
              THE CULINARY ARCHITECTURE
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/95 leading-[1.08] max-w-4xl mb-6">
            WHERE MEDITERRANEAN SILK MEETS KETTLE CRUNCH
          </h2>

          <p className="font-sans text-base md:text-lg text-white/65 max-w-2xl leading-relaxed mb-12 font-normal tracking-wide">
            An uncompromising celebration of gastronomy. We slow-kettle fried select high-altitude Russet potatoes to golden resonance, then atomized fresh Aegean garden dill and cultured Greek yogurt across every crisp.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl pt-8 border-t border-white/10">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-serif font-light text-cream-500">100%</span>
              <span className="text-xs font-sans text-white/50 uppercase tracking-wider mt-1.5">Single-Origin Russet</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-serif font-light text-brand-green">24-HR</span>
              <span className="text-xs font-sans text-white/50 uppercase tracking-wider mt-1.5">Strained Yogurt</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-serif font-light text-cream-500">165°C</span>
              <span className="text-xs font-sans text-white/50 uppercase tracking-wider mt-1.5">Slow Kettle Fry</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-serif font-light text-brand-green">0%</span>
              <span className="text-xs font-sans text-white/50 uppercase tracking-wider mt-1.5">Artificial Flavors</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Flavor Anatomy Grid Section */}
      <FlavorAnatomyGrid />

      {/* Sommelier Tasting Notes Section */}
      <TastingNotes />

      {/* Terroir & Origin Provenance Section */}
      <IngredientProvenance />

      {/* Macro & Nutritional Architecture Section */}
      <NutritionalArchitecture />

      {/* Footer Section */}
      <footer className="relative py-16 px-6 border-t border-white/10 bg-black text-center text-white/40 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white/80 font-bold tracking-widest uppercase">LAY'S GOURMET</span>
            <span>© 2026 CHEF RESERVE CULINARY LAB</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">TERMS OF RESERVE</span>
            <span className="hover:text-white transition-colors cursor-pointer">QUALITY CERTIFICATION</span>
            <span className="hover:text-white transition-colors cursor-pointer">PRIVACY POLICY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
