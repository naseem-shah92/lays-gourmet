"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface StorytellingBeatProps {
  badge: string;
  title: string;
  subtitle: string;
  align: "left" | "right" | "center";
  scrollYProgress: MotionValue<number>;
  range: [number, number, number, number]; // [fade-in start, peak start, peak end, fade-out end]
}

export default function StorytellingBeat({
  badge,
  title,
  subtitle,
  align,
  scrollYProgress,
  range,
}: StorytellingBeatProps) {
  // Smoothly transform opacity & Y displacement
  const opacity = useTransform(scrollYProgress, range, [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, range, [40, 0, 0, -40]);

  const alignmentClasses = {
    left: "items-start text-left left-8 md:left-24 max-w-lg",
    right: "items-end text-right right-8 md:right-24 max-w-lg",
    center: "items-center text-center left-1/2 -translate-x-1/2 max-w-2xl px-6",
  };

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute top-1/2 -translate-y-1/2 z-20 flex flex-col pointer-events-none ${alignmentClasses[align]}`}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-black/60 backdrop-blur-xl mb-4 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
        <span className="text-[11px] font-semibold tracking-widest uppercase text-cream-500">
          {badge}
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white/95 leading-[1.08] mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="text-sm sm:text-base md:text-lg font-normal text-white/80 leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] bg-black/40 backdrop-blur-md p-3 sm:p-0 rounded-xl sm:bg-transparent sm:backdrop-blur-none">
        {subtitle}
      </p>
    </motion.div>
  );
}
