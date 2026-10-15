"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, Sparkles } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Video Player Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20 z-10"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#0a0d16] border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-xs font-display tracking-widest uppercase text-slate-200">
                Lay's Gourmet | The Artisan Film
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video element */}
          <div className="relative aspect-video bg-black flex items-center justify-center">
            <video
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
