"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface PreloaderProps {
  progress: number;
  isLoading: boolean;
}

export default function Preloader({ progress, isLoading }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white px-6 select-none"
        >
          {/* Subtle Ambient Backdrop Glow */}
          <div className="absolute w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full">
            {/* Brand Logo / Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-green animate-pulse" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-white/80">
                LAY'S GOURMET LAB
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-2xl font-light tracking-tight text-white/95 mb-2 text-center">
              YOGURT & HERB
            </h1>
            <p className="text-xs text-white/50 uppercase tracking-widest mb-12 text-center">
              CHEF RESERVE EDITION
            </p>

            {/* Percentage Display */}
            <div className="w-full flex items-baseline justify-between mb-3 text-sm">
              <span className="text-xs uppercase tracking-widest text-white/40 font-mono">
                INITIALIZING SEQUENCE
              </span>
              <span className="text-2xl font-light font-mono text-white/95">
                {Math.round(progress)}%
              </span>
            </div>

            {/* Minimalist Progress Bar */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-dark via-brand-green to-cream-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            {/* Footer Note */}
            <span className="mt-8 text-[10px] uppercase tracking-widest text-white/30">
              OPTIMIZED FOR 60FPS SCROLL
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
