"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Check, Flame, Award, Heart, ShoppingBag, ShieldCheck } from "lucide-react";
import { Flavor } from "./ProductShowcase";
import { useState } from "react";

interface FlavorModalProps {
  flavor: Flavor | null;
  onClose: () => void;
}

export default function FlavorModal({ flavor, onClose }: FlavorModalProps) {
  const [reservedCount, setReservedCount] = useState(1);
  const [isReservedSuccess, setIsReservedSuccess] = useState(false);

  if (!flavor) return null;

  const handleReserve = () => {
    setIsReservedSuccess(true);
    setTimeout(() => {
      setIsReservedSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#0d121f] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border ${flavor.badgeBg}`}
            >
              {flavor.edition}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Calorie: {flavor.calories}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
            {flavor.name}
          </h3>
          <p className="text-sm text-gold-300 font-serif italic mb-6">
            "{flavor.tagline}"
          </p>

          <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
            {flavor.description}
          </p>

          {/* Tasting Note Tags */}
          <div className="mb-6">
            <h4 className="text-xs tracking-widest uppercase text-slate-400 font-semibold mb-2.5">
              Sommelier Notes
            </h4>
            <div className="flex flex-wrap gap-2">
              {flavor.notes.map((note) => (
                <span
                  key={note}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200"
                >
                  ✦ {note}
                </span>
              ))}
            </div>
          </div>

          {/* Ingredients list */}
          <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/5">
            <h4 className="text-xs tracking-widest uppercase text-gold-400 font-semibold mb-2">
              Master Ingredients
            </h4>
            <ul className="text-xs text-slate-300/90 space-y-1.5 font-light">
              {flavor.ingredientsList.map((ing) => (
                <li key={ing} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-herb-400" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pairing Recommendation */}
          <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-gold-500/10 to-transparent border border-gold-500/20 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block">
                Recommended Sommelier Pairing
              </span>
              <span className="text-sm font-serif italic text-white font-medium">
                {flavor.pairing}
              </span>
            </div>
            <Award className="w-6 h-6 text-gold-400 shrink-0" />
          </div>

          {/* Action Reservation */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-slate-400">Qty:</span>
              <div className="flex items-center border border-white/15 rounded-full overflow-hidden bg-white/5">
                <button
                  onClick={() => setReservedCount(Math.max(1, reservedCount - 1))}
                  className="px-3 py-1 text-slate-300 hover:bg-white/10 transition-colors"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-mono font-bold text-white">
                  {reservedCount} Box
                </span>
                <button
                  onClick={() => setReservedCount(reservedCount + 1)}
                  className="px-3 py-1 text-slate-300 hover:bg-white/10 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleReserve}
              disabled={isReservedSuccess}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-500 text-slate-950 font-bold text-xs tracking-widest uppercase shadow-gold-glow hover:scale-105 transition-all"
            >
              {isReservedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>Reserve Confirmed!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Reserve Chef Batch ($8.50)</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
