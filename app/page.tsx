"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase, { Flavor } from "@/components/ProductShowcase";
import IngredientSpotlight from "@/components/IngredientSpotlight";
import CraftStory from "@/components/CraftStory";
import ReviewsSection from "@/components/ReviewsSection";
import FlavorModal from "@/components/FlavorModal";
import VideoModal from "@/components/VideoModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  return (
    <main className="min-h-screen bg-[#06080d] text-slate-100 selection:bg-gold-500/30 selection:text-gold-200">
      {/* Pinned Navigation Header */}
      <Navbar onOrderClick={() => {
        const el = document.getElementById("collection");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }} />

      {/* 1. Hero Section */}
      <Hero onOpenFilm={() => setIsVideoModalOpen(true)} />

      {/* 2. Product Showcase / Flavor Carousel */}
      <ProductShowcase onSelectFlavor={(flavor) => setSelectedFlavor(flavor)} />

      {/* 3. Ingredient Spotlight & Craft Story */}
      <IngredientSpotlight />
      <CraftStory />

      {/* 4. Praised Tasting Notes / Reviews */}
      <ReviewsSection />

      {/* 5. Footer */}
      <Footer />

      {/* Modals */}
      <FlavorModal
        flavor={selectedFlavor}
        onClose={() => setSelectedFlavor(null)}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </main>
  );
}
