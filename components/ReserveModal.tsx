"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, CheckCircle, Sparkles, Truck, Shield } from "lucide-react";

interface ReserveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReserveModal({ isOpen, onClose }: ReserveModalProps) {
  const [selectedPack, setSelectedPack] = useState<number>(1); // 0: single, 1: 3-pack, 2: 6-pack
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const options = [
    { name: "Single Reserve (150g)", price: 4.99, badge: "INDIVIDUAL BATCH" },
    { name: "Trio Reserve Box (3 x 150g)", price: 13.99, badge: "MOST POPULAR", savings: "SAVE 7%" },
    { name: "Chef's Collector Vault (6 x 150g)", price: 24.99, badge: "COLLECTOR EDITION", savings: "SAVE 16%" },
  ];

  const handleReserve = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-black/90 p-6 md:p-8 shadow-2xl overflow-hidden z-10"
          >
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-green/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSuccess ? (
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                  <span className="font-cinzel text-[10px] font-semibold tracking-widest uppercase text-cream-500">
                    LIMITED BATCH RESERVATION
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-light text-white/95 mb-1 tracking-wide">
                  LAY&apos;S GOURMET: YOGURT &amp; HERB
                </h3>
                <p className="font-sans text-xs text-white/50 mb-6">
                  Hand-crafted kettle fried batch #04-YH. Direct express shipping in temperature-monitored climate vault.
                </p>

                {/* Option Selector */}
                <div className="space-y-3 mb-6">
                  {options.map((opt, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedPack(idx)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        selectedPack === idx
                          ? "border-brand-green bg-brand-green/10 shadow-lg shadow-brand-green/10"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-white/90">
                            {opt.name}
                          </span>
                          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-cream-500">
                            {opt.badge}
                          </span>
                        </div>
                        {opt.savings && (
                          <div className="text-[10px] text-brand-green font-mono">
                            {opt.savings}
                          </div>
                        )}
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-mono font-bold text-white/95">
                          ${opt.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Perks */}
                <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-xl border border-white/5 bg-white/[0.01] text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Complimentary Express Climate Freight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Sealed Freshness Guarantee</span>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  onClick={handleReserve}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-dark via-brand-green to-brand-light text-black font-semibold tracking-wide text-sm hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-green/20"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>CONFIRM BATCH RESERVATION (${options[selectedPack].price})</span>
                </button>
              </div>
            ) : (
              /* Order Success Animation State */
              <div className="py-12 flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-8 h-8 text-brand-green" />
                </motion.div>

                <h3 className="text-2xl font-light text-white/95 mb-2">
                  RESERVATION CONFIRMED
                </h3>
                <p className="text-sm text-white/60 max-w-xs mb-4">
                  Your order for <span className="text-cream-500 font-semibold">{options[selectedPack].name}</span> has been locked into Chef Batch #04-YH.
                </p>

                <span className="text-xs font-mono text-brand-green uppercase tracking-widest animate-pulse">
                  PREPARING DISPATCH DOCUMENTS...
                </span>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
