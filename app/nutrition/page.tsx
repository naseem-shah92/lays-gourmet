"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Activity,
  ShieldCheck,
  ChevronDown,
  Scale,
  FlaskConical,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import NotchNavbar from "@/components/NotchNavbar";
import Preloader from "@/components/Preloader";
import ReserveModal from "@/components/ReserveModal";

const TOTAL_FRAMES = 140;

const MACRO_BREAKDOWN = [
  { label: "Energy Density", value: "150 kcal / 628 kJ", dv: "7.5%", desc: "Optimal caloric expenditure balance", cat: "Energy" },
  { label: "Artisan Kettle Oil", value: "8.5 g", dv: "12.0%", desc: "High-oleic cold-pressed sunflower blend", cat: "Lipids" },
  { label: "Saturated Fatty Acids", value: "1.0 g", dv: "5.0%", desc: "Naturally occurring low saturated profile", cat: "Lipids" },
  { label: "Trans Fatty Acids", value: "0.0 g", dv: "0.0%", desc: "Zero hydrogenated oils or synthetics", cat: "Lipids" },
  { label: "Net Complex Carbs", value: "15.0 g", dv: "5.5%", desc: "Slow-release high-altitude Russet starch", cat: "Carbohydrates" },
  { label: "Dietary Fiber", value: "2.0 g", dv: "8.0%", desc: "Whole potato epidermal peel retention", cat: "Carbohydrates" },
  { label: "Natural Sugars", value: "0.8 g", dv: "1.0%", desc: "Natural caramelized potato starch", cat: "Carbohydrates" },
  { label: "Cultured Dairy Protein", value: "2.1 g", dv: "4.2%", desc: "Micro-filtered Greek sheep and goat yogurt", cat: "Proteins" },
  { label: "Saline Sodium", value: "140 mg", dv: "6.0%", desc: "Camargue fleur de sel ocean crystals", cat: "Minerals" },
  { label: "Potassium", value: "340 mg", dv: "7.2%", desc: "Retained volcanic soil potassium minerals", cat: "Minerals" },
  { label: "Polyphenol Antioxidants", value: "42 mg", dv: "--", desc: "Active plant compounds from sun-cured dill", cat: "Micronutrients" },
];

const LABORATORY_STANDARDS = [
  {
    title: "KETTLE FRY THERMAL REGULATION",
    standard: "165°C ± 1.5°C Controlled Heat",
    desc: "Batch-tested every 30 minutes to prevent thermal oxidation of fatty acids, retaining the crisp natural cell structure.",
  },
  {
    title: "ACRYLAMIDE SUPPRESSION PROTOCOL",
    standard: "< 120 ppb Acrylamide Retention",
    desc: "Triple-rinsed in icy mineral bath before kettle plunge, removing surface reducing sugars that cause bitter over-browning.",
  },
  {
    title: "CLEAN-LABEL ASSURANCE",
    standard: "100% Non-GMO and Gluten-Free",
    desc: "Zero synthetic MSG, no artificial colorants, no maltodextrin bulking fillers. Every crisp is genuine whole food.",
  },
  {
    title: "MEDITERRANEAN PROVENANCE TESTING",
    standard: "24-Hour Strained Greek Culturing",
    desc: "Live cultured dairy is dried via cryogenic atomization to protect lactic acids and aromatics before dusting.",
  },
];

export default function NutritionPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState<boolean>(false);
  const [currentFrameDisplay, setCurrentFrameDisplay] = useState<number>(1);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.0005,
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 0.85], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5, 0.85], [0, 0, -50]);

  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    ctx.save();
    ctx.scale(dpr, dpr);

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const scale = Math.max(width / imgWidth, height / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const x = (width - drawWidth) / 2;
    const y = (height - drawHeight) / 2;

    ctx.drawImage(img, x, y, drawWidth, drawHeight);
    ctx.restore();
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  useEffect(() => {
    let loadedCount = 0;
    const preloaded: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = "/sequence-nutrition/frame_" + i + ".webp";

      const handleLoad = () => {
        loadedCount++;
        setLoadProgress((loadedCount / TOTAL_FRAMES) * 100);

        if (i === 0 && currentFrameRef.current === 0) {
          renderFrame(0);
        }

        if (loadedCount === TOTAL_FRAMES) {
          setIsLoading(false);
          renderFrame(currentFrameRef.current);
        }
      };

      img.onload = handleLoad;
      img.onerror = () => handleLoad();
      preloaded.push(img);
    }

    imagesRef.current = preloaded;

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [renderFrame, resizeCanvas]);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const clamped = Math.max(0, Math.min(1, latest));
      const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(clamped * TOTAL_FRAMES));

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        setCurrentFrameDisplay(frameIndex + 1);
        renderFrame(frameIndex);
      }
    });

    return () => unsubscribe();
  }, [smoothProgress, renderFrame]);

  const categories = ["All", "Energy", "Lipids", "Carbohydrates", "Proteins", "Minerals"];
  let filteredMacros = MACRO_BREAKDOWN;
  if (selectedFilter !== "All") {
    filteredMacros = MACRO_BREAKDOWN.filter((m) => m.cat === selectedFilter);
  }

  return (
    <main className="relative bg-black min-h-screen text-white select-none overflow-x-hidden">
      <Preloader progress={loadProgress} isLoading={isLoading} />

      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-screen h-screen object-cover pointer-events-none z-0 bg-black"
      />

      <NotchNavbar onReserveClick={() => setIsReserveModalOpen(true)} />

      {/* 220vh Scrollytelling Hero Area */}
      <div ref={containerRef} className="relative h-[220vh] w-full z-10">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="absolute inset-x-0 top-[52%] -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none z-10 select-none px-4"
          >
            <div className="relative flex flex-col items-center w-full">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md mb-4 pointer-events-auto">
                <Activity className="w-3.5 h-3.5 text-brand-green animate-pulse" />
                <span className="font-cinzel text-[11px] font-semibold tracking-[0.2em] uppercase text-cream-500">
                  GASTRONOMIC MACRO ARCHITECTURE
                </span>
              </div>

              <h1
                className="text-[9vw] sm:text-[10vw] md:text-[10.5vw] font-black tracking-[0.04em] uppercase leading-none select-none bg-gradient-to-b from-white via-[#F5EFEB] to-[#CFBFAB] bg-clip-text text-transparent drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)]"
                style={{
                  WebkitTextStroke: "1.2px rgba(255, 255, 255, 0.85)",
                  paintOrder: "stroke fill",
                }}
              >
                NUTRITION
              </h1>

              <div className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl flex items-center justify-center mt-1">
                <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/85 via-cream-400/90 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-white/30 blur-sm" />
                  <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_12px_#fff,0_0_24px_#EDE4D3]" />
                  <div className="absolute w-14 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_#fff]" />
                  <div className="absolute h-9 w-[1.5px] bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_10px_#fff]" />
                </div>
              </div>

              <p className="font-serif italic text-sm sm:text-base md:text-lg text-cream-500/90 tracking-widest mt-5 drop-shadow-md text-center max-w-xl">
                Kinetic Frame Analysis • Pure Clean-Label Philosophy
              </p>
            </div>
          </motion.div>

          <div className="absolute bottom-8 inset-x-0 px-6 max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-white/50 pointer-events-none z-20">
            <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
              <span className="text-white/80">FRAME: {currentFrameDisplay} / {TOTAL_FRAMES}</span>
            </div>

            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-cream-500/80 animate-bounce">
              <span>SCROLL DOWN TO UNVEIL COMPLETE ANALYSIS</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-gradient-to-b from-transparent via-black/80 to-black text-white px-6 py-24 backdrop-blur-[3px]">
        <div className="max-w-7xl mx-auto space-y-24">

          <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-panel rounded-2xl p-6 text-center border border-white/10">
              <span className="text-3xl md:text-5xl font-serif font-light text-cream-500">150</span>
              <span className="block text-xs font-mono text-white/50 uppercase tracking-widest mt-2">Calories / 30g</span>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center border border-white/10">
              <span className="text-3xl md:text-5xl font-serif font-light text-brand-green">0g</span>
              <span className="block text-xs font-mono text-white/50 uppercase tracking-widest mt-2">Trans Fat</span>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center border border-white/10">
              <span className="text-3xl md:text-5xl font-serif font-light text-cream-500">165°C</span>
              <span className="block text-xs font-mono text-white/50 uppercase tracking-widest mt-2">Kettle Precision</span>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center border border-white/10">
              <span className="text-3xl md:text-5xl font-serif font-light text-brand-green">100%</span>
              <span className="block text-xs font-mono text-white/50 uppercase tracking-widest mt-2">Non-GMO Russet</span>
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-3">
                  <Scale className="w-3.5 h-3.5 text-brand-green" />
                  <span className="font-cinzel text-[11px] font-semibold tracking-widest uppercase text-cream-500">
                    ANALYTICAL PURITY
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-white/95">
                  COMPLETE NUTRITIONAL SPECTRUM
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedFilter(cat)}
                    className={"px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 " +
                      (selectedFilter === cat
                        ? "bg-cream-500 text-black font-semibold shadow-[0_0_15px_rgba(237,228,211,0.3)]"
                        : "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10")}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-white/[0.02]">
                <span className="text-xs font-mono text-white/60 tracking-widest uppercase">
                  STANDARD SERVING SIZE: 30G (APPROXIMATELY 16 KETTLE CRISPS)
                </span>
                <span className="text-xs font-mono text-cream-500 tracking-widest uppercase">
                  LAB CERTIFICATION: ISO/IEC 17025 ACCREDITED
                </span>
              </div>

              <div className="divide-y divide-white/5">
                {filteredMacros.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 md:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <span className="text-xs font-mono text-cream-500/70 w-28 shrink-0 uppercase">
                        {item.cat}
                      </span>
                      <div>
                        <div className="text-base font-medium text-white/90">
                          {item.label}
                        </div>
                        <div className="text-xs text-white/40 font-mono mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-baseline justify-between sm:justify-end gap-6 text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      <div className="text-base font-mono font-semibold text-white/95">
                        {item.value}
                      </div>
                      <div className="text-xs font-mono text-brand-green min-w-[50px]">
                        {item.dv} DV*
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-white/10 bg-white/[0.01] text-[11px] font-mono text-white/40 text-center uppercase tracking-wider">
                *PERCENT DAILY VALUES (DV) ARE BASED ON A 2,000 CALORIE REFERENCE DIET.
              </div>
            </div>
          </section>

          <section>
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
                <FlaskConical className="w-3.5 h-3.5 text-brand-green" />
                <span className="font-cinzel text-[11px] font-semibold tracking-widest uppercase text-cream-500">
                  QUALITY DIRECTIVE
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-white/95 mb-4">
                FOUR PILLARS OF CHEF RESERVE
              </h2>
              <p className="text-sm text-white/60 font-sans">
                We reject industrial shortcuts. Every parameter of our cooking process is measured to protect nutrient vitality and flavor nuance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LABORATORY_STANDARDS.map((std, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-8 border border-white/10 hover:border-cream-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-5 h-5 text-brand-green shrink-0" />
                    <h3 className="font-cinzel text-sm font-semibold tracking-wider text-white/90 uppercase">
                      {std.title}
                    </h3>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-lg bg-cream-500/10 border border-cream-500/20 text-cream-500 font-mono text-xs mb-3">
                    {std.standard}
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-sans">
                    {std.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-mono text-cream-500 uppercase tracking-widest">
                  TRANSPARENT ALLERGEN DISCLOSURE
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-light text-white/95 mt-2 mb-4">
                  ARTISAN SOURCED. ZERO COMPROMISE.
                </h3>
                <p className="text-sm text-white/65 leading-relaxed mb-6">
                  Contains authentic cultured milk derivatives (Greek yogurt cultures). Crafted in an environment adhering strictly to nut-free, peanut-free, and gluten-controlled processing.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-white/80">
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" /> GLUTEN-FREE FORMULATION
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" /> NO HIGH-FRUCTOSE CORN SYRUP
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" /> VEGETARIAN FRIENDLY
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                <Award className="w-10 h-10 text-cream-500 mb-3" />
                <span className="font-cinzel text-xs font-bold tracking-widest uppercase text-white/90">
                  CHEF RESERVE SEAL
                </span>
                <span className="text-[11px] text-white/40 font-mono mt-1">
                  AUTHENTICATED BATCH 2026-YH
                </span>
                <Link
                  href="/flavors"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-all"
                >
                  <span>BROWSE ALL FLAVORS</span>
                </Link>
              </div>
            </div>
          </section>

        </div>

        <footer className="relative mt-24 pt-16 border-t border-white/10 text-center text-white/40 text-xs font-mono">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-white/80 font-bold tracking-widest uppercase">
                LAY&apos;S GOURMET
              </span>
              <span>© 2026 NUTRITION & GASTRONOMY LAB</span>
            </div>

            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <Link href="/flavors" className="hover:text-white transition-colors">FLAVORS</Link>
              <Link href="/nutrition" className="text-cream-500 font-semibold">NUTRITION</Link>
            </div>
          </div>
        </footer>
      </div>

      <ReserveModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
      />
    </main>
  );
}
