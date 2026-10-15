# 🥔 Lay's Gourmet: Yogurt & Herb — Chef Reserve Showcase

An award-winning, ultra-premium single-page product showcase web experience built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**. Designed with luxury aesthetics, cinematic video backgrounds, 3D interactive cards, and micro-interactions.

---

## ✨ Features

- **🎥 Cinematic Hero Experience:**
  - Fullscreen looping background video (`/hero-bg.mp4`) with smooth fade-in and high-contrast radial vignette overlay.
  - Framer Motion entrance animations for the glowing *"Limited Chef Edition"* badge, display typography, and CTA buttons.
  - Golden glassmorphic action buttons with dynamic light-sweep hover effects.

- **✨ 3D Interactive Product Showcase & Flavor Carousel:**
  - 4 curated chef-tier profiles:
    - 🌿 **Yogurt & Herb** (Signature Chef Edition)
    - 🥔 **Truffle & Parmesan** (Private Reserve)
    - 🔥 **Smoky BBQ Wood** (Artisan Smokehouse)
    - 🌶️ **Fiery Chili Lime** (Intense Spice Reserve)
  - Interactive tasting cards with 3D tilt effects, sommelier pairing guides, crunch metrics, and recipe inspection modals.

- **🌱 Farm-to-Palate Ingredient Spotlight:**
  - Interactive deep-dive into prime ingredients:
    - *Crisp Farm Russet Potatoes* (1.2mm precision cut)
    - *Creamy Greek Yogurt Essence* (Triple-strained alpine pasture milk)
    - *Fresh Garden Dill & Herbs* (Hand-harvested dawn dew botanicals)
  - Sensory calibration charts and origin provenance tracking.

- **🕰️ The Artisanal Craft Story:**
  - 4-step slow gastronomy breakdown: Estate Selection $\rightarrow$ Calibrated Cut $\rightarrow$ Kettle Master Cooking $\rightarrow$ Micro-Dust Seasoning.

- **🍷 Master Sommelier & Chef Accolades:**
  - Michelin-rated reviews and curated wine/cocktail pairing recommendations.

- **🎬 Video Film Modal:**
  - Fullscreen cinematic brand film player.

- **📬 Luxury Concierge Footer:**
  - Interactive Chef Reserve newsletter subscription with instant confirmation feedback and atelier social channels.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Cinzel, Playfair Display & Inter

---

## 🚀 Getting Started

### 1. Clone the repository:
```bash
git clone https://github.com/naseem-shah92/lays-gourmet.git
cd lays-gourmet
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the showcase.

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css          # Luxury dark theme styles & custom utilities
│   ├── layout.tsx           # Google fonts & SEO metadata
│   └── page.tsx             # Root showcase landing page
├── components/
│   ├── Navbar.tsx           # Glassmorphic pinned navigation header
│   ├── Hero.tsx             # Fullscreen video hero with CTAs
│   ├── ProductShowcase.tsx  # 3D interactive flavor carousel & spotlight
│   ├── IngredientSpotlight.tsx # Interactive ingredient explorer
│   ├── CraftStory.tsx       # 4-stage kettle craft process
│   ├── ReviewsSection.tsx   # Sommelier reviews & tasting notes
│   ├── FlavorModal.tsx      # Deep-dive recipe inspection & reserve dialog
│   ├── VideoModal.tsx       # Fullscreen cinematic film player
│   └── Footer.tsx           # Luxury brand footer & newsletter signup
├── public/
│   └── hero-bg.mp4          # High-definition showcase background video
└── tailwind.config.js       # Custom color palettes (gold, herb, yogurt)
```

---

## 📄 License

This project is licensed under the MIT License.
