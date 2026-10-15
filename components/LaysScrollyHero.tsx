"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import Preloader from "./Preloader";
import ReserveModal from "./ReserveModal";
import NotchNavbar from "./NotchNavbar";

const TOTAL_FRAMES = 120;

export default function LaysScrollyHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Store preloaded images in ref for zero-latency 60fps access without React re-render lag
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState<boolean>(false);
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const currentFrameRef = useRef<number>(0);
  const isUserScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Framer Motion scroll progress binding for scrollytelling container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring physics for buttery-smooth 60fps scroll scrubbing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.0005,
  });

  // Fade out hero overlays as user scrolls down into product showcase
  const heroOverlayOpacity = useTransform(scrollYProgress, [0, 0.65, 0.95], [1, 1, 0]);
  const heroOverlayY = useTransform(scrollYProgress, [0, 0.65, 0.95], [0, 0, -50]);

  // High-performance canvas drawing routine with full-bleed cover scaling
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

    // Strictly #000000 background clear to eliminate any visible seams
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    // Full-bleed cover scaling: ensures the video fills 100% of the viewport with no black bars
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

  // Update canvas resolution matching viewport and DPR
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Preload all 120 WebP sequence frames (/public/sequence/frame_0.webp to frame_119.webp)
  useEffect(() => {
    let loadedCount = 0;
    const preloadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${i}.webp`;

      const handleImageLoad = () => {
        loadedCount++;
        setLoadProgress((loadedCount / TOTAL_FRAMES) * 100);

        // Immediately draw frame 0 as soon as it arrives
        if (i === 0 && currentFrameRef.current === 0) {
          renderFrame(0);
        }

        if (loadedCount === TOTAL_FRAMES) {
          setIsLoading(false);
          renderFrame(currentFrameRef.current);
        }
      };

      img.onload = handleImageLoad;
      img.onerror = () => {
        handleImageLoad(); // graceful fallback
      };

      preloadedImages.push(img);
    }

    imagesRef.current = preloadedImages;

    // Initial canvas sizing
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [renderFrame, resizeCanvas]);

  // Continuous Video Autoplay Loop (plays smoothly like a real 30fps video when idle)
  useEffect(() => {
    if (isLoading || !isPlaying) return;

    let animFrameId: number;
    let lastTimestamp = performance.now();
    const frameInterval = 1000 / 30; // 30fps playback

    const animateLoop = (now: number) => {
      if (!isUserScrollingRef.current) {
        const elapsed = now - lastTimestamp;
        if (elapsed >= frameInterval) {
          lastTimestamp = now - (elapsed % frameInterval);
          const nextFrame = (currentFrameRef.current + 1) % TOTAL_FRAMES;
          currentFrameRef.current = nextFrame;
          setCurrentFrame(nextFrame);
          renderFrame(nextFrame);
        }
      }
      animFrameId = requestAnimationFrame(animateLoop);
    };

    animFrameId = requestAnimationFrame(animateLoop);
    return () => cancelAnimationFrame(animFrameId);
  }, [isLoading, isPlaying, renderFrame]);

  // Directly bind Framer Motion smoothProgress to active frame calculation on scroll
  useEffect(() => {
    const handleScrollTick = (progress: number) => {
      isUserScrollingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isUserScrollingRef.current = false;
      }, 400);

      const clamped = Math.max(0, Math.min(1, progress));
      // Formula: Math.min(119, Math.floor(progress * 120))
      const frameIndex = Math.min(119, Math.floor(clamped * TOTAL_FRAMES));

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        setCurrentFrame(frameIndex);
        renderFrame(frameIndex);
      }
    };

    const unsubscribe = smoothProgress.on("change", (latest) => {
      handleScrollTick(latest);
    });

    return () => unsubscribe();
  }, [smoothProgress, renderFrame]);



  return (
    <>
      {/* Minimalist Preloader with 0% -> 100% Progress */}
      <Preloader progress={loadProgress} isLoading={isLoading} />

      {/* Full-Bleed Fixed Canvas Background: Covers 100% of entire landing page */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-screen h-screen object-cover pointer-events-none z-0 bg-black"
      />

      {/* VengeanceUI Notch Navbar: Top-level fixed z-50 so it stays visible permanently across entire scroll */}
      <NotchNavbar onReserveClick={() => setIsReserveModalOpen(true)} />

      {/* Scrollytelling Container (Holds the Hero Viewport and transitions smoothly) */}
      <div ref={containerRef} className="relative h-[220vh] w-full z-10">
        {/* Sticky Fullscreen Hero Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

          {/* Center Typographic Wordmark Behind Central Subject (Styled 1:1 like DREAMFRAME reference) */}
          <motion.div
            style={{ opacity: heroOverlayOpacity, y: heroOverlayY }}
            className="absolute inset-x-0 top-[52%] -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none z-10 select-none px-4"
          >
            {/* Main GOURMET Text Container */}
            <div className="relative flex flex-col items-center w-full">
              <h1
                className="text-[10vw] sm:text-[11vw] md:text-[11.5vw] font-black tracking-[0.03em] uppercase leading-none select-none bg-gradient-to-b from-white via-[#F5EFEB] to-[#CFBFAB] bg-clip-text text-transparent drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)]"
                style={{
                  WebkitTextStroke: "1.2px rgba(255, 255, 255, 0.85)",
                  paintOrder: "stroke fill",
                }}
              >
                GOURMET
              </h1>

              {/* Glowing Luminous Horizontal Beam with Center Flare (DREAMFRAME Style) */}
              <div className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl flex items-center justify-center mt-1">
                {/* Horizontal Light Beam */}
                <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/85 via-cream-400/90 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.9)]" />

                {/* Radiant Center Lens Flare / Star */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  {/* Outer Glow Halo */}
                  <div className="w-7 h-7 rounded-full bg-white/30 blur-sm" />
                  {/* Sharp Center Star Core */}
                  <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_12px_#fff,0_0_24px_#EDE4D3]" />
                  {/* Horizontal Flare Ray */}
                  <div className="absolute w-14 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_#fff]" />
                  {/* Vertical Flare Ray */}
                  <div className="absolute h-9 w-[1.5px] bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_10px_#fff]" />
                </div>
              </div>


            </div>
          </motion.div>




        </div>
      </div>

      {/* Interactive Reservation Drawer Modal */}
      <ReserveModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
      />
    </>
  );
}
