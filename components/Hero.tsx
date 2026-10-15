"use client";

import { motion } from "framer-motion";
import { Play, Sparkles, ChevronDown, Award, Leaf, ShieldCheck } from "lucide-react";
import { useState } from "react";

interface HeroProps {
  onOpenFilm: () => void;
}

export default function Hero({ onOpenFilm }: HeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video Player */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover object-center scale-105 transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-75" : "opacity-0"
          }`}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback ambient glow in case video loads slowly */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-[#0a0d16] to-[#05070c] animate-pulse" />
        )}
      </div>

      {/* Subtle dark radial vignette overlay for contrast & readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(6,8,13,0.45)_0%,rgba(6,8,13,0.85)_65%,rgba(5,6,10,0.98)_100%)]" />

      {/* Layered luxury lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[250px] bg-herb-500/10 rounded-full blur-[130px] pointer-events-none z-10" />

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-24 pb-16 flex flex-col items-center">
        
        {/* Badge: Limited Chef Edition */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-gold-400/40 shadow-gold-glow backdrop-blur-md mb-8 group cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-spin-slow" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300 font-sans">
            Limited Chef Edition
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-herb-400 animate-ping" />
        </motion.div>

        {/* Main Title: Luxury In Every Bite */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[1.08] mb-6 text-slate-100"
        >
          <span className="block drop-shadow-2xl">Luxury In</span>
          <span className="gold-gradient-text block font-serif italic font-normal tracking-wide mt-1">
            Every Bite
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base sm:text-xl text-slate-300/90 font-light leading-relaxed mb-10 tracking-wide"
        >
          The sophisticated fusion of fresh{" "}
          <span className="text-white font-medium">Greek Yogurt</span> &amp;{" "}
          <span className="text-herb-300 font-medium">aromatic Green Herbs</span>, slow-dusted over golden kettle-crisped potatoes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
        >
          {/* Explore Collection (golden-yellow glassmorphism button) */}
          <a
            href="#collection"
            className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-500 text-slate-950 font-bold text-sm tracking-[0.18em] uppercase shadow-[0_0_30px_rgba(229,169,60,0.4)] hover:shadow-[0_0_45px_rgba(229,169,60,0.65)] hover:scale-105 active:scale-98 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Collection
            </span>
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          </a>

          {/* Watch Film (secondary ghost button) */}
          <button
            onClick={onOpenFilm}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/[0.07] hover:bg-white/[0.14] border border-white/20 hover:border-gold-400/60 text-slate-100 font-medium text-sm tracking-[0.15em] uppercase backdrop-blur-xl hover:scale-105 active:scale-98 transition-all duration-300 group"
          >
            <div className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center group-hover:bg-gold-400/40 transition-colors">
              <Play className="w-3 h-3 text-gold-300 fill-gold-300 ml-0.5" />
            </div>
            <span>Watch Film</span>
          </button>
        </motion.div>

        {/* Feature Badges Micro-Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14 pt-8 border-t border-white/10 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs tracking-wider uppercase text-slate-400"
        >
          <div className="flex items-center justify-center gap-2 py-1">
            <Award className="w-4 h-4 text-gold-400" />
            <span>100% Selected Russets</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1">
            <Leaf className="w-4 h-4 text-herb-400" />
            <span>Wild Herb Infusion</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Kettle Batch Crafted</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#collection"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-slate-400/70 hover:text-gold-300 transition-colors duration-300"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
