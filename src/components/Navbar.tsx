import React, { useState } from 'react';
import { UtensilsCrossed, Phone, MapPin, Calendar, Clock, Sparkles, ChevronDown } from 'lucide-react';
import { BRANCH_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenLocation: () => void;
  activeView: 'home' | 'menu';
  setActiveView: (view: 'home' | 'menu') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenLocation,
  activeView,
  setActiveView,
}) => {
  const [showOtherBranches, setShowOtherBranches] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#121212]/95 backdrop-blur-xl border-b border-white/10 transition-all">
      {/* Top micro-banner for hospitality reassurance */}
      <div className="bg-[#0e0e0e] text-neutral-400 text-xs py-1.5 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#D4AF37] font-semibold tracking-wider text-[11px] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Southwater, Telford
            </span>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <span className="hidden sm:inline text-neutral-400 text-[11px]">100% Halal Chicken & Lamb Certified</span>
            <span className="hidden md:inline text-neutral-600">•</span>
            <span className="hidden md:inline text-neutral-400 text-[11px]">Lunch from £11.99 | Dinner from £19.99</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${BRANCH_INFO.formattedPhone}`}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span className="font-medium">{BRANCH_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:flex items-center gap-1 text-emerald-400 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Open Today till 22:30
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Branch Tag */}
        <div 
          onClick={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-brand-logo"
        >
          <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center font-bold text-black text-xl italic shadow-md group-hover:opacity-90 transition-opacity">
            U
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-bold tracking-tighter text-white">
                UMAMI <span className="text-[#D4AF37]">WORLD KITCHEN</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-semibold tracking-wider uppercase">
              <span className="bg-neutral-800 text-neutral-400 text-[9px] px-1.5 py-0.5 rounded uppercase tracking-tighter border border-white/5">Telford Branch</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400 font-normal">Southwater Square</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold uppercase tracking-widest">
          <button
            onClick={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition-colors py-2 cursor-pointer ${
              activeView === 'home'
                ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] font-bold'
                : 'text-neutral-400 hover:text-[#D4AF37]'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => {
              setActiveView('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition-colors py-2 flex items-center gap-1.5 cursor-pointer ${
              activeView === 'menu'
                ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] font-bold'
                : 'text-neutral-400 hover:text-[#D4AF37]'
            }`}
          >
            <span>Menu & Stations</span>
            <span className="text-[9px] uppercase font-bold bg-[#D4AF37]/20 text-[#D4AF37] px-1.5 py-0.5 rounded border border-[#D4AF37]/30">
              100+
            </span>
          </button>

          <a
            href="#pricing"
            onClick={(e) => {
              if (activeView !== 'home') {
                setActiveView('home');
                setTimeout(() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="text-neutral-400 hover:text-[#D4AF37] transition-colors py-2"
          >
            Sitting Times
          </a>

          <a
            href="#reviews"
            onClick={(e) => {
              if (activeView !== 'home') {
                setActiveView('home');
                setTimeout(() => {
                  document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="text-neutral-400 hover:text-[#D4AF37] transition-colors py-2"
          >
            Reviews
          </a>

          <a
            href="#faq"
            onClick={(e) => {
              if (activeView !== 'home') {
                setActiveView('home');
                setTimeout(() => {
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="text-neutral-400 hover:text-[#D4AF37] transition-colors py-2"
          >
            FAQs
          </a>

          {/* Other Branches Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowOtherBranches(!showOtherBranches)}
              className="text-neutral-400 hover:text-[#D4AF37] transition-colors py-2 flex items-center gap-1 uppercase tracking-widest cursor-pointer"
            >
              <span>Locations</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showOtherBranches ? 'rotate-180 text-[#D4AF37]' : ''}`} />
            </button>

            {showOtherBranches && (
              <div 
                className="absolute right-0 mt-2 w-64 rounded-xl bg-neutral-900/95 backdrop-blur-xl border border-white/10 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseLeave={() => setShowOtherBranches(false)}
              >
                <div className="px-3 py-2 text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest border-b border-white/10">
                  Umami Branch Network
                </div>
                <div className="p-1 space-y-1">
                  <div className="p-2.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        Telford (Southwater)
                        <span className="text-[9px] bg-[#D4AF37] text-black font-bold px-1 rounded">Current</span>
                      </div>
                      <div className="text-[11px] text-neutral-400">Unit 1, Southwater Square</div>
                    </div>
                  </div>
                  {BRANCH_INFO.otherBranches.map((br) => (
                    <div
                      key={br.name}
                      className="p-2.5 rounded-lg hover:bg-neutral-800/70 transition-colors flex items-center justify-between group cursor-pointer"
                      onClick={() => {
                        setShowOtherBranches(false);
                        alert(`Switching to ${br.name} Branch preview (${br.address})`);
                      }}
                    >
                      <div>
                        <div className="text-xs font-medium text-neutral-200 group-hover:text-[#D4AF37] transition-colors">
                          {br.name} Branch
                        </div>
                        <div className="text-[11px] text-neutral-400">{br.address}</div>
                      </div>
                      <span className="text-[10px] text-emerald-400">{br.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Action Group */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLocation}
            className="hidden sm:flex items-center gap-1.5 border border-[#D4AF37]/50 text-[#D4AF37] px-4 py-2 text-xs uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-black rounded-sm transition-all"
            id="nav-location-btn"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Southwater TF3</span>
          </button>

          {/* High-conversion Desktop Book Table Button */}
          <button
            onClick={onOpenBooking}
            className="gold-gradient text-black px-5 sm:px-6 py-2.5 rounded-sm sm:rounded-lg font-black uppercase tracking-widest text-xs gold-glow active:scale-95 transition-transform flex items-center gap-2 cursor-pointer shadow-lg"
            id="nav-book-table-btn"
          >
            <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
            <span>BOOK A TABLE</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
