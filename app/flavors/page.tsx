"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Flame,
  Award,
  Leaf,
  CheckCircle2,
  ChevronRight,
  Star,
} from "lucide-react";
import NotchNavbar from "@/components/NotchNavbar";
import ReserveModal from "@/components/ReserveModal";

// 7 Lay's Gourmet Flavors data with uploaded image references
const FLAVORS = [
  {
    id: "yogurt-herb",
    name: "Lay's Gourmet: Yogurt & Herb",
    tagline: "Green Herb Seasoning",
    tag: "CHEF'S SIGNATURE",
    price: 4.99,
    rating: 4.9,
    reviews: 142,
    image: "/images/flavors/yogurt-herb.jpg",
    desc: "Cultured Greek yogurt tang with cold-pressed garden dill & kettle-crisped Russets.",
    accent: "from-brand-green/20 to-emerald-950/20",
    badgeColor: "text-brand-green border-brand-green/30 bg-brand-green/10",
  },
  {
    id: "bacon-truffle",
    name: "Lay's Gourmet: Smoky Bacon & Truffle",
    tagline: "Deep & Gourmet",
    tag: "MOST INDULGENT",
    price: 5.49,
    rating: 5.0,
    reviews: 98,
    image: "/images/flavors/bacon-truffle.jpg",
    desc: "Slow-smoked hardwood bacon married with rich Black Périgord earth truffles.",
    accent: "from-amber-700/20 to-stone-900/20",
    badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  },
  {
    id: "truffle-parmesan",
    name: "Lay's Gourmet: Truffle & Parmesan",
    tagline: "Luxurious & Savory",
    tag: "CONNOISSEUR'S PICK",
    price: 5.49,
    rating: 4.9,
    reviews: 116,
    image: "/images/flavors/truffle-parmesan.jpg",
    desc: "24-Month aged Parmigiano Reggiano crystals with aromatic wild Italian truffles.",
    accent: "from-yellow-600/20 to-neutral-900/20",
    badgeColor: "text-cream-500 border-cream-500/30 bg-cream-500/10",
  },
  {
    id: "spicy-greek-yogurt",
    name: "Lay's Gourmet: Spicy & Cool Greek Yogurt",
    tagline: "Bold & Refreshing",
    tag: "BALANCED HEAT",
    price: 4.99,
    rating: 4.8,
    reviews: 84,
    image: "/images/flavors/spicy-greek-yogurt.jpg",
    desc: "Fire-roasted Aegean peppers contrasted against cooling strained yogurt silk.",
    accent: "from-blue-600/20 to-slate-900/20",
    badgeColor: "text-sky-400 border-sky-400/30 bg-sky-400/10",
  },
  {
    id: "creamy-yogurt-herb",
    name: "Lay's Gourmet: Creamy Yogurt & Herb",
    tagline: "Cool & Zesty",
    tag: "HERBAL DELIGHT",
    price: 4.99,
    rating: 4.9,
    reviews: 104,
    image: "/images/flavors/creamy-yogurt-herb.jpg",
    desc: "Velvety Mediterranean yogurt cream infused with fresh morning mint & chives.",
    accent: "from-cyan-600/20 to-stone-900/20",
    badgeColor: "text-teal-300 border-teal-300/30 bg-teal-300/10",
  },
  {
    id: "flamin-hot",
    name: "Lay's Gourmet: Flamin' Hot",
    tagline: "Spicy Chili & Lime",
    tag: "FIERY CITRUS",
    price: 4.99,
    rating: 4.8,
    reviews: 138,
    image: "/images/flavors/flamin-hot.jpg",
    desc: "Sun-ripened red chillies and slow-steeped Mexican lime zest on resonant kettle crisps.",
    accent: "from-red-600/20 to-orange-950/20",
    badgeColor: "text-red-400 border-red-400/30 bg-red-400/10",
  },
  {
    id: "ghost-pepper",
    name: "Lay's Gourmet: Fiery Ghost Pepper",
    tagline: "Ultra Hot Reserve",
    tag: "LIMITED HARVEST",
    price: 5.49,
    rating: 4.7,
    reviews: 72,
    image: "/images/flavors/ghost-pepper.jpg",
    desc: "Authentic Assam ghost pepper heat balanced with sweet garlic & smoked paprika.",
    accent: "from-rose-700/20 to-zinc-950/20",
    badgeColor: "text-rose-400 border-rose-400/30 bg-rose-400/10",
  },
];

// 5 Categories matching reference layout
const CATEGORIES = [
  {
    name: "Mediterranean Silk",
    items: "2 Flavors",
    image: "/images/flavors/yogurt-herb.jpg",
    desc: "Greek yogurt whip & fresh garden herbs",
  },
  {
    name: "Truffle & Earth",
    items: "2 Flavors",
    image: "/images/flavors/truffle-parmesan.jpg",
    desc: "Black Périgord truffle & aged cheese",
  },
  {
    name: "Smoky Bacon Suite",
    items: "1 Flavor",
    image: "/images/flavors/bacon-truffle.jpg",
    desc: "Hardwood cured smoke & rich savor",
  },
  {
    name: "Botanical Fire",
    items: "2 Flavors",
    image: "/images/flavors/flamin-hot.jpg",
    desc: "Sun-dried chillies & tangy citrus oils",
  },
  {
    name: "Chef Reserve Vaults",
    items: "3 Gift Sets",
    image: "/images/flavors/spicy-greek-yogurt.jpg",
    desc: "Hand-curated tasting crates & boxes",
  },
];

export default function FlavorsPage() {
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  return (
    <main className="min-h-screen bg-[#080706] text-[#EDE4D3] select-none font-sans overflow-x-hidden pt-20">
      {/* Permanent Fixed Notch Navbar */}
      <NotchNavbar onReserveClick={() => setIsReserveModalOpen(true)} />

      {/* Hero Breadcrumb & Header */}
      <section className="relative px-6 max-w-7xl mx-auto pt-10 pb-12 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          <Link href="/" className="hover:text-cream-500 transition-colors">
            HOME
          </Link>
          <span>/</span>
          <span className="text-cream-500 font-semibold">GOURMET FLAVORS CATALOG</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#EDE4D3]/20 bg-white/5 backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-green" />
              <span className="font-cinzel text-[11px] font-semibold tracking-widest uppercase text-cream-500">
                THE 2026 CHEF RESERVE HARVEST
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white/95 leading-[1.05]">
              Find Your Perfect Indulgence
            </h1>
          </div>
          <p className="font-sans text-sm md:text-base text-white/60 max-w-md leading-relaxed">
            Seven uncompromising expressions of culinary architecture. Kettle-fried in pure oils at 165°C and infused with single-origin herbs, cultured Greek dairy, and forest truffles.
          </p>
        </div>
      </section>

      {/* 1. SHOP BY CATEGORY (1:1 with reference image layout) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-cinzel text-xs font-semibold tracking-widest uppercase text-cream-500">
              EXPLORE COLLECTIONS
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-white/95 mt-1">
              Shop by Flavor Category
            </h2>
          </div>
          <span className="text-xs font-mono text-white/40 hidden sm:inline">
            SWIPE OR CLICK TO FILTER
          </span>
        </div>

        {/* Category Cards Horizontal Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCategory(cat.name)}
              className="group relative rounded-2xl border border-white/10 bg-[#12100E] p-3 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-[#EDE4D3]/40 transition-all shadow-lg"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-black/60">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white/70 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md">
                  {cat.items}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-base font-medium text-white/95 group-hover:text-cream-500 transition-colors">
                  {cat.name}
                </h3>
                <p className="font-sans text-[11px] text-white/50 mt-1 line-clamp-1">
                  {cat.desc}
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-cream-500/90 group-hover:text-cream-500">
                  <span>Explore All</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. BEST SELLERS / CUSTOMER FAVORITES (Grid of the 7 Flavors) */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-cinzel text-xs font-semibold tracking-widest uppercase text-cream-500">
              CHEF RESERVE SELECTION
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-white/95 mt-1">
              Customer Favorites &amp; Releases
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-white/60">BATCH CODE: 2026-ARCH</span>
            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          </div>
        </div>

        {/* 7 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FLAVORS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#14110E] to-[#0D0B09] p-5 flex flex-col justify-between hover:border-[#EDE4D3]/40 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-black/60 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Badge */}
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-cinzel font-semibold tracking-wider uppercase border backdrop-blur-md ${product.badgeColor}`}
                  >
                    {product.tag}
                  </span>

                  {/* Quick Price Tag */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono font-medium text-cream-500">
                    ${product.price.toFixed(2)}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="flex text-cream-500 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-white/50">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-serif text-lg font-medium text-white/95 leading-snug group-hover:text-cream-500 transition-colors">
                  {product.name}
                </h3>
                <p className="font-cinzel text-xs text-brand-green font-medium mt-1 tracking-wider uppercase">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="font-sans text-xs text-white/60 mt-2.5 leading-relaxed">
                  {product.desc}
                </p>
              </div>

              {/* Action Button: ADD TO RESERVE */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-white/40 uppercase">VAULT PRICE</span>
                  <span className="font-serif text-base font-light text-cream-500">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => setIsReserveModalOpen(true)}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-[#EDE4D3]/30 bg-white/5 hover:bg-[#EDE4D3] text-white hover:text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md group-hover:border-[#EDE4D3]"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Reserve</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. LIMITED BATCH BURGUNDY VELVET RIBBON BANNER (1:1 with reference) */}
      <section className="my-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#420D18] via-[#5C1322] to-[#360A13] border border-amber-500/20 p-8 sm:p-12 md:p-16 shadow-2xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 backdrop-blur-md mb-5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-cinzel text-[10px] font-semibold tracking-widest uppercase text-amber-300">
                  LIMITED TIME ONLY — HARVEST VAULT
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] mb-4">
                The Truffle &amp; Bacon Royale Collection
              </h2>

              <p className="font-sans text-sm sm:text-base text-white/80 max-w-lg leading-relaxed mb-8">
                A seasonal grand cru crafted with slow-smoked hardwood pork crisp, French Périgord black truffles, and aged Parmigiano Reggiano. Delivered in a custom temperature-controlled collector vault box.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsReserveModalOpen(true)}
                  className="px-6 py-3 rounded-xl bg-[#EDE4D3] hover:bg-white text-black font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-lg hover:shadow-amber-400/20 cursor-pointer flex items-center gap-2"
                >
                  <span>Reserve The Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/20 bg-black/30 backdrop-blur-md text-xs font-mono text-cream-500">
                  <span>PROMO: GOURMET20</span>
                </div>
              </div>
            </div>

            {/* Right Feature Showcase with Gold Discount Seal */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/40">
                <Image
                  src="/images/flavors/bacon-truffle.jpg"
                  alt="Truffle and Bacon Royale"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Gold Discount Seal Mirroring Reference Image */}
              <div className="absolute -top-4 -right-4 sm:top-2 sm:right-2 w-24 h-24 rounded-full bg-gradient-to-br from-[#E8C587] via-[#D1A65E] to-[#996F2F] p-1 shadow-2xl shadow-black/80 flex items-center justify-center rotate-12">
                <div className="w-full h-full rounded-full border border-black/20 flex flex-col items-center justify-center text-center p-2 bg-[#D1A65E]">
                  <span className="text-[9px] font-cinzel font-bold text-black tracking-wider uppercase">
                    SAVE UP TO
                  </span>
                  <span className="font-serif text-xl font-black text-black leading-none my-0.5">
                    20%
                  </span>
                  <span className="text-[8px] font-mono text-black/80 font-bold uppercase">
                    ON VAULT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR STORY & CRAFT (Two-column split matching reference) */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black/40">
              <Image
                src="/images/flavors/yogurt-herb.jpg"
                alt="Herbs & Kettle Crisp"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black/40">
                <Image
                  src="/images/flavors/truffle-parmesan.jpg"
                  alt="Parmesan & Truffle Terroir"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black/40">
                <Image
                  src="/images/flavors/spicy-greek-yogurt.jpg"
                  alt="Greek Pepper Seasoning"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Narrative & 4 Trust Badges */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#EDE4D3]/20 bg-white/5 backdrop-blur-md mb-6">
              <Leaf className="w-3.5 h-3.5 text-brand-green" />
              <span className="font-cinzel text-[11px] font-semibold tracking-widest uppercase text-cream-500">
                OUR GASTRONOMIC PHILOSOPHY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white/95 leading-tight mb-6">
              Rooted in Terroir, Kettle-Fried with Passion
            </h2>

            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-8">
              At Lay&apos;s Gourmet Culinary Lab, we believe that world-class kettle crisps begin with uncompromising agricultural pedigree. We source high-altitude Russet potatoes grown in volcanic volcanic soil, slow-fry each batch at precisely 165°C to preserve potato essence, and atomize European strained yogurts and wild Périgord truffles across each golden shard.
            </p>

            {/* 4 Trust Badges in a 2x2 Grid (1:1 with reference) */}
            <div className="grid grid-cols-2 gap-6 w-full pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-cream-500" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-semibold text-white tracking-wider uppercase">
                    Finest Terroir
                  </h4>
                  <p className="font-sans text-[11px] text-white/50 mt-0.5">
                    Single-origin Idaho Russets
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-semibold text-white tracking-wider uppercase">
                    Slow-Kettle Fried
                  </h4>
                  <p className="font-sans text-[11px] text-white/50 mt-0.5">
                    In small batches at 165°C
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-cream-500" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-semibold text-white tracking-wider uppercase">
                    Zero Artificial
                  </h4>
                  <p className="font-sans text-[11px] text-white/50 mt-0.5">
                    No synthetic flavorings
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-semibold text-white tracking-wider uppercase">
                    Pure European Herbs
                  </h4>
                  <p className="font-sans text-[11px] text-white/50 mt-0.5">
                    Aegean dill &amp; French sea salt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOMMELIER REVIEWS & VERDICTS */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-cinzel text-xs font-semibold tracking-widest uppercase text-cream-500 mb-3">
            VERIFIED TASTING NOTES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white/95">
            What Culinary Sommeliers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-[#12100E] p-8 flex flex-col justify-between">
            <div>
              <div className="flex text-cream-500 text-xs mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="font-serif text-base text-white/90 italic leading-relaxed">
                &ldquo;The kettle snap on the Yogurt &amp; Herb has a resonant acoustics you simply don&apos;t find in standard crisps. The cultured tang cuts cleanly through the richness.&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="font-cinzel text-xs font-semibold text-cream-500 uppercase">
                Chef Marc Blanc
              </span>
              <span className="text-[11px] font-mono text-white/40">2-Star Michelin, Paris</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#12100E] p-8 flex flex-col justify-between">
            <div>
              <div className="flex text-cream-500 text-xs mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="font-serif text-base text-white/90 italic leading-relaxed">
                &ldquo;The Smoky Bacon &amp; Truffle is an absolute revelation. Real Périgord truffle perfume hits the nose immediately upon opening the seal.&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="font-cinzel text-xs font-semibold text-cream-500 uppercase">
                Elena Rostova
              </span>
              <span className="text-[11px] font-mono text-white/40">Gastronomy Sommelier</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#12100E] p-8 flex flex-col justify-between">
            <div>
              <div className="flex text-cream-500 text-xs mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="font-serif text-base text-white/90 italic leading-relaxed">
                &ldquo;Truffle &amp; Parmesan strikes that impossible balance between savory aged umami and delicate potato crunch. A fixture in my private pantry.&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="font-cinzel text-xs font-semibold text-cream-500 uppercase">
                David Vance
              </span>
              <span className="text-[11px] font-mono text-white/40">The Epicurean Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10 bg-black text-center text-white/40 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white/80 font-cinzel font-bold tracking-widest uppercase">
              LAY&apos;S GOURMET
            </span>
            <span>© 2026 CHEF RESERVE CULINARY LAB</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              SCROLLYTELLING HERO
            </Link>
            <Link href="/flavors" className="text-cream-500">
              FLAVORS CATALOG
            </Link>
            <span
              onClick={() => setIsReserveModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              RESERVE BATCH
            </span>
          </div>
        </div>
      </footer>

      {/* Reservation Drawer Modal */}
      <ReserveModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
      />
    </main>
  );
}
