"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ShoppingBag, Volume2, VolumeX, ChefHat } from "lucide-react";

interface NavbarProps {
  onOrderClick?: () => void;
}

export default function Navbar({ onOrderClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#hero" },
    { name: "Flavors", href: "#collection" },
    { name: "Artisanal Craft", href: "#craft" },
    { name: "Ingredients", href: "#ingredients" },
    { name: "Tasting Notes", href: "#tasting-notes" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#070a11]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 via-gold-600 to-amber-900 p-[1.5px] shadow-gold-glow flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
            <div className="w-full h-full bg-[#090d16] rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-gold-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <span className="block font-display tracking-[0.25em] text-lg font-bold uppercase gold-gradient-text">
              LAY'S
            </span>
            <span className="block text-[10px] tracking-[0.35em] text-gold-200/70 uppercase font-light -mt-1 font-serif">
              GOURMET RESERVE
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase font-medium text-slate-300/80 hover:text-gold-300 transition-colors duration-200 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold-400 to-herb-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? "Unmute Ambient Sound" : "Mute Sound"}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-gold-400 transition-all duration-300"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-gold-400" />}
          </button>

          <a
            href="#collection"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-slate-950 font-semibold text-xs tracking-[0.15em] uppercase shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Reserve Now</span>
            </span>
            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0f1c]/95 border-b border-white/10 px-6 py-6 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm tracking-[0.2em] uppercase font-medium text-slate-200 hover:text-gold-400 py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 flex gap-3">
                <a
                  href="#collection"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full bg-gradient-to-r from-gold-500 to-amber-600 text-slate-950 font-bold text-xs tracking-widest uppercase shadow-gold-glow"
                >
                  Reserve Chef Edition
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
