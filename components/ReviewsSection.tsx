"use client";

import { motion } from "framer-motion";
import { Star, Quote, Award, Sparkles } from "lucide-react";

const reviews = [
  {
    author: "Chef Julian Laurent",
    role: "Michelin 2-Star Patron",
    text: "The Greek Yogurt & Herb chip is an unexpected triumph of micro-gastronomy. The delicate acidity of the yogurt cuts through the kettle crunch with remarkable elegance.",
    rating: 5,
    tag: "Michelin Guide Review",
  },
  {
    author: "Elena Rostova",
    role: "Master Sommelier",
    text: "Pairs exquisitely with dry sparkling wines and crisp botanical aperitifs. The dill aromatics remain vibrant from first scent to lingering finish.",
    rating: 5,
    tag: "Sommelier Choice",
  },
  {
    author: "Marcus Vance",
    role: "Culinary Editor, Epicurean Gazette",
    text: "This isn't just a snack—it's an artisanal experience. The 1.2mm cut creates a crisp acoustic resonance that ordinary chips simply cannot replicate.",
    rating: 5,
    tag: "Gourmet Award Winner",
  },
];

export default function ReviewsSection() {
  return (
    <section id="tasting-notes" className="relative py-28 px-6 sm:px-8 bg-[#070a11] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs tracking-[0.25em] uppercase font-semibold mb-4"
          >
            <Award className="w-3.5 h-3.5 text-gold-400" />
            Culinary Accolades
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4"
          >
            Praised by <span className="gold-gradient-text font-serif italic">Master Palates</span>
          </motion.h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            Celebrated by acclaimed chefs and sommeliers across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-[#101624] to-[#090d16] border border-white/10 hover:border-gold-400/30 backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                  <span className="text-[10px] tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gold-300 font-mono">
                    {rev.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-gold-500/20 mb-3" />
                <p className="text-slate-300 text-sm font-serif italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <h4 className="text-sm font-display font-bold text-white group-hover:text-gold-300 transition-colors">
                  {rev.author}
                </h4>
                <p className="text-xs text-slate-400 font-light mt-0.5">
                  {rev.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
