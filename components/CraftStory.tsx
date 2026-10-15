"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, Clock, Flame, ShieldCheck, Thermometer } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Estate Selection",
    subtitle: "Highland Russet Harvest",
    desc: "Single-estate russet potatoes harvested under dawn dew, selected solely for optimal specific gravity and starch purity.",
    icon: Award,
    metric: "Top 2% Selected",
  },
  {
    step: "02",
    title: "Calibrated Cut",
    subtitle: "1.2mm Precision Blade",
    desc: "Artisan wave-profile blades slice each potato to an exact 1.2 millimeter caliber, ensuring structural integrity during kettle cooking.",
    icon: Sparkles,
    metric: "1.2mm Tolerance",
  },
  {
    step: "03",
    title: "Kettle Master Cooking",
    subtitle: "Slow Artisan Batch Immersion",
    desc: "Gently immersed in small kettles with pure expeller-pressed oils, temperature-tuned to lock in a resonance crunch without burning delicate starches.",
    icon: Flame,
    metric: "Small-Batch Cooked",
  },
  {
    step: "04",
    title: "Micro-Dust Seasoning",
    subtitle: "Warm Culinary Tumbling",
    desc: "While still warm from kettle fires, the crisps are delicately tumbled in cryo-milled Mediterranean dill, garden chives, and triple-strained Greek yogurt crystals.",
    icon: Thermometer,
    metric: "45°C Warm Infusion",
  },
];

export default function CraftStory() {
  return (
    <section id="craft" className="relative py-28 px-6 sm:px-8 bg-[#06080d] overflow-hidden">
      {/* Subtle glowing lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs tracking-[0.25em] uppercase font-semibold mb-4"
          >
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            The Artisanal Method
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4"
          >
            The Craft of <span className="gold-gradient-text font-serif italic">Slow Gastronomy</span>
          </motion.h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            No shortcuts. No mass automated frying. Every single kettle batch is monitored with precision chef oversight.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-2xl p-6 bg-gradient-to-b from-[#111726]/80 to-[#080b12]/90 border border-white/10 hover:border-gold-400/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs tracking-widest text-gold-400 font-bold px-2.5 py-1 rounded-md bg-gold-500/10 border border-gold-500/20">
                    STEP {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <Icon className="w-4 h-4 text-slate-300 group-hover:text-gold-300" />
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gold-300/80 font-serif italic mb-3">
                  {item.subtitle}
                </p>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Standard:</span>
                  <span className="text-gold-400 font-semibold">{item.metric}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
