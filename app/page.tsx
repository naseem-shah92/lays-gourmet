import LaysScrollyHero from "@/components/LaysScrollyHero";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white select-none overflow-x-hidden">
      {/* 400vh Canvas Scrollytelling Section */}
      <LaysScrollyHero />

      {/* Editorial Product Showcase & Details */}
      <ProductShowcase />
    </main>
  );
}
