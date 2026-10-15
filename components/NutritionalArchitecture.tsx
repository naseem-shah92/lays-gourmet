"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NutritionalArchitecture() {
  const macros = [
    { label: "Energy / Calories", value: "150 kcal", dv: "7.5%", note: "Optimal Energy Density" },
    { label: "Artisan Kettle Oil", value: "8.5 g", dv: "12.0%", note: "Cold-Pressed Sunflower & Olive" },
    { label: "Saturated Fat", value: "1.0 g", dv: "5.0%", note: "Zero Trans Fats" },
    { label: "Net Carbohydrates", value: "15.0 g", dv: "5.5%", note: "Slow-Release Russet Starch" },
    { label: "Dietary Fiber", value: "2.0 g", dv: "8.0%", note: "Whole Potato Skin Retention" },
    { label: "Protein", value: "2.1 g", dv: "4.2%", note: "Cultured Greek Dairy Protein" },
    { label: "Saline Sodium", value: "140 mg", dv: "6.0%", note: "Camargue Sea Salt" },
  ];

  return (
    <section id="nutrition" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Info Header */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <Activity className="w-3.5 h-3.5 text-brand-green" />
            <span className="font-cinzel text-[11px] font-semibold tracking-widest uppercase text-cream-500">
              MACRO ANALYSIS
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white/95 leading-tight mb-6">
            NUTRITIONAL ARCHITECTURE
          </h2>

          <p className="font-sans text-base text-white/60 leading-relaxed mb-8">
            Formulated with transparent clean-label philosophy. Crafted without artificial preservatives, synthetic colorants, or hydrogenated oils.
          </p>

          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent space-y-4 mb-8">
            <div className="flex items-center gap-3 text-brand-green">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-cinzel text-sm font-semibold uppercase tracking-wider">
                CHEF RESERVE ASSURANCE
              </span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Every 150g batch undergoes small-kettle frying monitoring to maintain low acrylates and preserve natural botanical polyphenols.
            </p>
          </div>

          <Link
            href="/nutrition"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream-500 hover:bg-cream-400 text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 group hover:shadow-[0_0_25px_rgba(237,228,211,0.4)]"
          >
            <span>EXPLORE FULL KINETIC NUTRITION LAB</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Right Macro Table */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
                SERVING SIZE: 30G (APPROX 16 CRISPS)
              </span>
              <span className="text-xs font-mono text-cream-500 uppercase tracking-widest">
                BATCH CODE: 2026-YH
              </span>
            </div>

            <div className="divide-y divide-white/5">
              {macros.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-4 md:px-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                >
                  <div>
                    <div className="text-sm font-medium text-white/90">
                      {m.label}
                    </div>
                    <div className="text-[11px] text-white/40 font-mono">
                      {m.note}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-mono font-semibold text-white/95">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-mono text-brand-green">
                      {m.dv} DV*
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t border-white/10 bg-white/[0.01] text-[10px] font-mono text-white/30 text-center">
              *PERCENT DAILY VALUES (DV) ARE BASED ON A 2,000 CALORIE DIET.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
