"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Check, Instagram, Twitter, Facebook, Youtube, Globe } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="relative bg-[#05070c] border-t border-white/10 pt-20 pb-12 px-6 sm:px-8 text-slate-400 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900/90 via-[#0d121e]/90 to-slate-900/90 border border-white/10 mb-20 backdrop-blur-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-mono block mb-2">
              Private Gastronomy Club
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-2">
              Join the <span className="gold-gradient-text font-serif italic">Chef Reserve</span>
            </h3>
            <p className="text-slate-400 text-sm font-light">
              Receive private access to limited seasonal harvests, sommelier tasting guides, and exclusive chef drops.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:w-auto flex-1 max-w-md">
            <div className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your luxury dining email"
                required
                className="w-full pl-5 pr-36 py-4 rounded-full bg-black/60 border border-white/15 focus:border-gold-400 text-slate-100 text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-gold-400/50 backdrop-blur-md transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-gold-glow flex items-center gap-1.5 transition-all"
              >
                {isSubscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Joined</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
            {isSubscribed && (
              <p className="text-xs text-herb-300 font-mono mt-2 ml-4">
                ✓ Welcome to the Reserve. Check your inbox for your welcome invitation.
              </p>
            )}
          </form>
        </div>

        {/* Links & Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center shadow-gold-glow">
                <Sparkles className="w-4 h-4 text-gold-400" />
              </div>
              <span className="font-display tracking-[0.25em] text-lg font-bold uppercase gold-gradient-text">
                LAY'S GOURMET
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Artisanal kettle-crafted potato crisps seasoned with pure culinary excellence. Made for those who appreciate the finer subtleties of flavor.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all duration-300 text-slate-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all duration-300 text-slate-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all duration-300 text-slate-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all duration-300 text-slate-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-slate-200 mb-4 font-mono">
              The Reserve
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#collection" className="hover:text-gold-300 transition-colors">Yogurt &amp; Herb</a></li>
              <li><a href="#collection" className="hover:text-gold-300 transition-colors">Truffle &amp; Parmesan</a></li>
              <li><a href="#collection" className="hover:text-gold-300 transition-colors">Smoky BBQ Wood</a></li>
              <li><a href="#collection" className="hover:text-gold-300 transition-colors">Fiery Chili Lime</a></li>
              <li><a href="#collection" className="hover:text-gold-300 transition-colors">Gift Box Editions</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-slate-200 mb-4 font-mono">
              Gastronomy
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#craft" className="hover:text-gold-300 transition-colors">Artisanal Slicing</a></li>
              <li><a href="#ingredients" className="hover:text-gold-300 transition-colors">Ingredient Origin</a></li>
              <li><a href="#craft" className="hover:text-gold-300 transition-colors">Kettle Batch Process</a></li>
              <li><a href="#tasting-notes" className="hover:text-gold-300 transition-colors">Sommelier Pairings</a></li>
              <li><a href="#craft" className="hover:text-gold-300 transition-colors">Quality Standard</a></li>
            </ul>
          </div>

          {/* Nav Col 3 */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-slate-200 mb-4 font-mono">
              Concierge
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#concierge" className="hover:text-gold-300 transition-colors">Private Orders</a></li>
              <li><a href="#concierge" className="hover:text-gold-300 transition-colors">Corporate Gifting</a></li>
              <li><a href="#concierge" className="hover:text-gold-300 transition-colors">Boutique Stockists</a></li>
              <li><a href="#concierge" className="hover:text-gold-300 transition-colors">Press &amp; Media</a></li>
              <li><a href="#concierge" className="hover:text-gold-300 transition-colors">Contact Atelier</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <p>© 2026 Lay's Gourmet Reserve Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Gastronomy</a>
            <a href="#cookies" className="hover:text-slate-300 transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
