"use client";

import { motion } from "framer-motion";
import { Sliders, Award } from "lucide-react";

export default function TastingNotes() {
  const metrics = [
    {
      name: "Crunch Density",
      value: 9.8,
      desc: "Slow kettle-fried Russet potato crispness with a resonant golden snap.",
      color: "from-brand-dark to-brand-green",
    },
    {
      name: "Cultured Zest",
      value: 8.5,
      desc: "Vibrant Mediterranean tang balanced with natural lactic acids.",
      color: "from-emerald-600 to-emerald-400",
    },
    {
      name: "Yogurt Creaminess",
      value: 9.4,
      desc: "Velvet mouthfeel that envelops each crisp in smooth dairy silk.",
      color: "from-cream-500/80 to-cream-500",
    },
    {
      name: "Herb Fragrance",
      value: 9.0,
      desc: "Cold-pressed Aegean garden dill and volatile essential herb oils.",
      color: "from-green-500 to-emerald-300",
    },
  ];

  return (
    <section id="tasting-profile" className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 md:p-14 border border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Background Gradient */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <Sliders className="w-3.5 h-3.5 text-brand-green" />
              <span className="font-cinzel text-[11px] font-semibold tracking-widest uppercase text-cream-500">
                TASTING PROFILE
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white/95 leading-tight mb-6">
              SOMMELIER RATING &amp; INTENSITY
            </h2>

            <p className="font-sans text-base text-white/60 leading-relaxed mb-8">
              Calibrated by our Master Flavorists using sensory gas chromatography and human panel tasting to achieve harmonious taste resonance.
            </p>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-black/40">
              <div className="w-10 h-10 rounded-lg bg-brand-green/20 border border-brand-green/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-brand-green" />
              </div>
              <div>
                <div className="font-cinzel text-xs font-semibold text-white/90 uppercase tracking-wider">
                  GOLD MEDAL AWARDED
                </div>
                <div className="font-sans text-xs text-white/50 mt-0.5">
                  Global Culinary Arts Summit 2026
                </div>
              </div>
            </div>
          </div>

          {/* Right Intensity Meters */}
          <div className="lg:col-span-7 space-y-6">
            {metrics.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sans text-sm font-semibold text-white/95 tracking-wide">
                    {m.name}
                  </span>
                  <span className="font-serif text-lg font-light text-cream-500">
                    {m.value} <span className="text-xs font-sans font-normal text-white/40">/ 10</span>
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-2 relative">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${m.color}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${(m.value / 10) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                  />
                </div>

                <p className="text-xs text-white/50 leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
