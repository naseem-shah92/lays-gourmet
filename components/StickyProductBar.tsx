"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingBag, Sparkles } from "lucide-react";
import ReserveModal from "./ReserveModal";

export default function StickyProductBar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();

  // Show sticky bar once user scrolls past initial 10%
  const opacity = useTransform(scrollYProgress, [0.08, 0.12], [0, 1]);
  const y = useTransform(scrollYProgress, [0.08, 0.12], [20, 0]);

  return (
    <>
      <motion.div
        style={{ opacity, y }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-4xl w-[92%] p-3 md:p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 flex items-center justify-between shadow-2xl shadow-black/80 select-none"
      >
        {/* Left Product Specs */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-brand-dark to-black border border-white/15 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-cream-500" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm font-semibold text-white/95 tracking-tight">
                Lay's Gourmet: Yogurt & Herb
              </span>
              <span className="hidden sm:inline-block text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-brand-green/20 text-brand-green border border-brand-green/30">
                LIMITED BATCH
              </span>
            </div>
            <div className="text-[11px] md:text-xs text-white/50 flex items-center gap-2">
              <span>Chef Reserve Edition</span>
              <span className="text-white/20">•</span>
              <span className="text-cream-500 font-mono font-semibold">$4.99 / 150g</span>
            </div>
          </div>
        </div>

        {/* Right CTA Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 md:px-6 md:py-3 rounded-xl bg-gradient-to-r from-brand-dark via-brand-green to-brand-light text-black font-semibold text-xs md:text-sm tracking-wide hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-brand-green/20"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="hidden sm:inline">RESERVE BATCH</span>
          <span className="sm:hidden">RESERVE</span>
        </button>
      </motion.div>

      {/* Interactive Reservation Modal */}
      <ReserveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
