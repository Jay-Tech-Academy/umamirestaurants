import React from 'react';
import { Calendar, Utensils, Star, MapPin, Tag, Sparkles, ShieldCheck, Flame, ChevronRight, ExternalLink } from 'lucide-react';
import { BRANCH_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenLocation: () => void;
  onViewMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenLocation,
  onViewMenu,
}) => {
  return (
    <section 
      id="hero-section" 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-10 pb-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10"
    >
      {/* Dark Luxury Ambient Background Glows */}
      <div 
        className="absolute inset-0 bg-[#121212] pointer-events-none" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.16) 0%, transparent 60%),
            radial-gradient(circle at 10% 80%, rgba(182, 145, 33, 0.10) 0%, transparent 50%),
            radial-gradient(circle at 90% 60%, rgba(212, 175, 55, 0.10) 0%, transparent 40%)
          `
        }} 
      />

      {/* Atmospheric culinary grid backdrop */}
      <div className="absolute inset-0 opacity-20 mix-blend-luminosity pointer-events-none">
        <div className="grid grid-cols-2 md:grid-cols-4 h-full w-full gap-2 p-2">
          <div 
            className="h-full bg-cover bg-center rounded-xl" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80')` }}
          />
          <div 
            className="h-full bg-cover bg-center rounded-xl hidden md:block" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80')` }}
          />
          <div 
            className="h-full bg-cover bg-center rounded-xl" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514944298352-f6749970e536?auto=format&fit=crop&w=800&q=80')` }}
          />
          <div 
            className="h-full bg-cover bg-center rounded-xl hidden md:block" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80')` }}
          />
        </div>
      </div>
      
      {/* Dark gradient overlay to guarantee crisp contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/95 via-[#121212]/80 to-[#121212] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Status Micro-Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 text-neutral-300 text-[11px] uppercase tracking-wider border border-[#D4AF37]/30 mb-6 backdrop-blur-md shadow-lg">
          <span className="text-[#D4AF37] font-black flex items-center gap-1">
            <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
            4.5/5
          </span>
          <span className="text-neutral-600">•</span>
          <span className="text-white font-bold">Telford Southwater Square</span>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-400 font-medium">TF3 4HS</span>
        </div>

        {/* Required Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08] max-w-4xl">
          UNLIMITED GLOBAL <br className="hidden sm:inline" />
          <span className="text-[#D4AF37]">FLAVOURS IN TELFORD</span>
        </h1>

        {/* Required Sub-headline */}
        <p className="mt-4 text-neutral-300 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
          Unlimited food. 100+ global flavours. One unforgettable table. Experience the best of World of Asia, Indian Kitchen, and Live Teppanyaki at Southwater Square.
        </p>

        {/* Exact Landmark & Parking Info Banner */}
        <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-400 bg-black/40 px-3.5 py-1.5 rounded-lg border border-white/5">
          <span className="flex items-center gap-1 text-[#D4AF37] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            Unit 1, Southwater Square (Beside Cineworld)
          </span>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <span className="text-neutral-300">Southwater Multi-Storey (TF3 4EJ, 150m)</span>
        </div>

        {/* Required 3 Key Info Pills / Glass Stat Cards */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl">
          {/* Pill 1: Pricing preview */}
          <a
            href="#pricing"
            id="hero-pill-pricing"
            className="glass p-3.5 sm:p-4 rounded-xl border border-white/10 hover:border-[#D4AF37]/50 flex flex-col items-center min-w-[140px] transition-all group shadow-md"
          >
            <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-widest group-hover:text-[#D4AF37] transition-colors">
              Adult Buffet
            </span>
            <span className="text-lg sm:text-xl font-bold text-white mt-0.5">From £11.99</span>
          </a>

          {/* Pill 2: Location */}
          <button
            type="button"
            onClick={onOpenLocation}
            id="hero-pill-location"
            className="glass p-3.5 sm:p-4 rounded-xl border border-white/10 hover:border-[#D4AF37]/50 flex flex-col items-center min-w-[140px] transition-all group cursor-pointer shadow-md"
          >
            <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-widest group-hover:text-[#D4AF37] transition-colors">
              Location
            </span>
            <span className="text-lg sm:text-xl font-bold text-white mt-0.5">Southwater, TF3</span>
          </button>

          {/* Pill 3: Sitting Time / Rating */}
          <a
            href="#reviews"
            id="hero-pill-rating"
            className="glass p-3.5 sm:p-4 rounded-xl border border-white/10 hover:border-[#D4AF37]/50 flex flex-col items-center min-w-[140px] transition-all group shadow-md"
          >
            <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-widest group-hover:text-[#D4AF37] transition-colors">
              Sitting Time
            </span>
            <span className="text-lg sm:text-xl font-bold text-white mt-0.5">1h 45m Sitting</span>
          </a>
        </div>

        {/* Primary Call to Action & Secondary Action with DesignMyNight Connection */}
        <div className="mt-8 flex flex-col items-center gap-3 w-full">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
            {/* Primary CTA: Large "Book a Table" button */}
            <button
              type="button"
              onClick={onOpenBooking}
              id="hero-primary-book-btn"
              className="gold-gradient text-black px-8 sm:px-10 py-4 rounded-lg font-black uppercase tracking-widest text-xs sm:text-sm gold-glow active:scale-95 transition-transform flex items-center justify-center gap-2.5 cursor-pointer shadow-xl"
            >
              <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
              <span>Book a Table</span>
              <ChevronRight className="w-4 h-4 text-black" />
            </button>

            {/* Secondary Action: Explore Live Menu */}
            <button
              type="button"
              onClick={onViewMenu}
              id="hero-secondary-menu-btn"
              className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-6 sm:px-8 py-4 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore 100+ Live Dishes</span>
            </button>
          </div>

          {/* DesignMyNight Live Booking Portal Connection Signpost */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Instant Reservation Engine &bull;</span>
            <a
              href={BRANCH_INFO.designMyNightUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline font-semibold flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Or reserve via live DesignMyNight portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-10 pt-8 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-extrabold text-white">6 Live</span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 mt-0.5 font-medium">Cooking Stations</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-extrabold text-[#D4AF37]">100% Halal</span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 mt-0.5 font-medium">Chicken & Lamb Certified</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-extrabold text-white">105 Mins</span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 mt-0.5 font-medium">Standard Sitting</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-extrabold text-emerald-400">Free</span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 mt-0.5 font-medium">Children Under 3s</span>
          </div>
        </div>
      </div>
    </section>
  );
};

