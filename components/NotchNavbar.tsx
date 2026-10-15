"use client";

import { useState } from "react";
import { Sparkles, Sliders, Compass, Activity, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NotchNavbarProps extends React.HTMLAttributes<HTMLElement> {
  onReserveClick: () => void;
}

const NavLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) => (
  <a
    href={href}
    className="group inline-flex items-center gap-2 text-[11px] font-semibold text-white/75 hover:text-cream-500 transition-colors whitespace-nowrap tracking-widest uppercase leading-none"
  >
    <Icon className="w-3.5 h-3.5 text-brand-green/90 group-hover:text-brand-green transition-colors shrink-0" />
    <span className="font-sans leading-none">{label}</span>
  </a>
);

export default function NotchNavbar({ onReserveClick, className, ...props }: NotchNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const items = {
    left: [
      { label: "Flavors", href: "/flavors", icon: Sparkles },
      { label: "Tasting Profile", href: "/#tasting-profile", icon: Sliders },
    ],
    right: [
      { label: "Terroir", href: "/#terroir", icon: Compass },
      { label: "Nutrition", href: "/nutrition", icon: Activity },
    ],
  };

  return (
    <>
      <header className={cn("fixed top-0 inset-x-0 z-50 h-16 flex px-0 select-none", className)} {...props}>
        {/* Left Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-black/80 backdrop-blur-2xl z-20 relative min-w-0">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="39.5" x2="100%" y2="39.5" stroke="rgba(237, 228, 211, 0.3)" strokeWidth={0.8} />
            <line x1="0" y1="36.5" x2="100%" y2="36.5" stroke="rgba(255, 255, 255, 0.08)" strokeWidth={0.5} />
          </svg>
        </div>

        {/* Responsive Notch Container - 3 Slices */}
        <div className="flex h-16 relative z-10 shrink-0 -ml-px">
          {/* Left Slice (Curved Corner) */}
          <div className="w-[50px] h-full relative shrink-0">
            {/* Glass Background with SVG Path Clip */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
              style={{ clipPath: "path('M0 0 H50 V64 C25 64 25 40 0 40 Z')" }}
            />
            {/* Outlines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 64">
              <path
                d="M0 39.5 C25 39.5 25 63.5 50 63.5"
                fill="none"
                stroke="rgba(237, 228, 211, 0.3)"
                strokeWidth={0.8}
              />
              <path
                d="M0 36.5 C25 36.5 25 60.5 50 60.5"
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth={0.5}
              />
            </svg>
          </div>

          {/* Center Slice (Content Area) */}
          <div className="flex-1 h-full relative min-w-0 -ml-px">
            {/* Background & Outline Lines Layer */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <line x1="0" y1="63.5" x2="100%" y2="63.5" stroke="rgba(237, 228, 211, 0.3)" strokeWidth={0.8} />
                <line x1="0" y1="60.5" x2="100%" y2="60.5" stroke="rgba(255, 255, 255, 0.08)" strokeWidth={0.5} />
              </svg>
            </div>

            {/* Content Layer: Strictly Aligned on Single Horizontal Center Axis */}
            <div className="relative w-full h-full flex items-center justify-between pt-2 px-4 md:px-8 gap-4 md:gap-7">
              {/* Desktop Left Nav */}
              <nav className="hidden md:flex items-center gap-7 shrink-0">
                {items.left.map((item) => (
                  <NavLink key={item.label} {...item} />
                ))}
              </nav>

              {/* Mobile Menu Button (Left) */}
              <button
                className="md:hidden p-1.5 text-white/70 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Center Logo Brand Mark */}
              <a
                href="/"
                className="inline-flex items-center gap-2.5 shrink-0 mx-2 md:mx-4 group cursor-pointer"
              >
                <div className="w-3.5 h-3.5 rounded-sm bg-[#EDE4D3] shadow-sm shadow-white/30 group-hover:scale-105 transition-transform shrink-0" />
                <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#EDE4D3] group-hover:text-white transition-colors whitespace-nowrap leading-none">
                  LAY&apos;S GOURMET
                </span>
              </a>

              {/* Desktop Right Nav & Exact Luxury Reserve Button */}
              <div className="hidden md:flex items-center gap-6 shrink-0">
                <nav className="flex items-center gap-7 shrink-0">
                  {items.right.map((item) => (
                    <NavLink key={item.label} {...item} />
                  ))}
                </nav>

                {/* Vertical Divider */}
                <div className="w-px h-4 bg-white/20 shrink-0" />

                {/* User's Exact Ultra-Premium Luxury Reserve Button */}
                <button
                  onClick={onReserveClick}
                  className="relative group overflow-hidden px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-[#EDE4D3]/40 hover:border-[#EDE4D3] bg-gradient-to-r from-black/80 via-[#1F1A14]/90 to-black/80 hover:from-[#2B231B] hover:to-[#1F1913] backdrop-blur-2xl shadow-[0_2px_12px_rgba(0,0,0,0.8),0_0_14px_rgba(237,228,211,0.15)] hover:shadow-[0_0_20px_rgba(237,228,211,0.35)] transition-all duration-300 cursor-pointer inline-flex items-center gap-2 shrink-0 leading-none"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <Sparkles className="w-3 h-3 text-cream-500 group-hover:rotate-12 transition-transform duration-300 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#EDE4D3] group-hover:text-white transition-colors leading-none">
                    Reserve Batch
                  </span>
                  <ChevronRight className="w-3 h-3 text-cream-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </button>
              </div>

              {/* Mobile Right Quick Reserve Action */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={onReserveClick}
                  className="px-3 py-1.5 rounded-full border border-[#EDE4D3]/40 bg-black/60 text-[10px] font-semibold tracking-wider text-[#EDE4D3] uppercase leading-none flex items-center justify-center"
                >
                  Reserve
                </button>
              </div>
            </div>
          </div>

          {/* Right Slice (Curved Corner) */}
          <div className="w-[50px] h-full relative shrink-0 -ml-px">
            {/* Glass Background with SVG Path Clip */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
              style={{ clipPath: "path('M0 0 H50 V40 C25 40 25 64 0 64 Z')" }}
            />
            {/* Outlines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 64">
              <path
                d="M0 63.5 C25 63.5 25 39.5 50 39.5"
                fill="none"
                stroke="rgba(237, 228, 211, 0.3)"
                strokeWidth={0.8}
              />
              <path
                d="M0 60.5 C25 60.5 25 36.5 50 36.5"
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth={0.5}
              />
            </svg>
          </div>
        </div>

        {/* Right Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-black/80 backdrop-blur-2xl z-20 relative min-w-0 -ml-px">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="39.5" x2="100%" y2="39.5" stroke="rgba(237, 228, 211, 0.3)" strokeWidth={0.8} />
            <line x1="0" y1="36.5" x2="100%" y2="36.5" stroke="rgba(255, 255, 255, 0.08)" strokeWidth={0.5} />
          </svg>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-50 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-3">
              {[...items.left, ...items.right].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-white/80 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4 text-brand-green" />
                  <span className="font-sans text-sm font-medium tracking-wider uppercase">{item.label}</span>
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onReserveClick();
                }}
                className="w-full py-3 rounded-xl border border-[#EDE4D3]/40 bg-white/10 text-cream-500 font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reserve Batch Now</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
