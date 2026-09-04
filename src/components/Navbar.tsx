import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Calendar,
  Sparkles,
  ChevronDown,
  Menu,
  X,
  Tag,
  Briefcase,
  Info,
  MessageSquare,
  Globe,
  Utensils,
  Layers
} from 'lucide-react';
import { BRANCH_INFO, UK_BRANCHES_DATA, BranchLocation } from '../data/restaurantData';
import { Logo } from './Logo';

export type ActiveView = 'home' | 'menu' | 'about' | 'offers' | 'careers' | 'locations';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenLocation: () => void;
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  onOpenFeedback: () => void;
  onSelectBranchBooking?: (branch: BranchLocation) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenLocation,
  activeView,
  setActiveView,
  onOpenFeedback,
  onSelectBranchBooking,
}) => {
  const [showOtherBranches, setShowOtherBranches] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ActiveView) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    setShowOtherBranches(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#121212]/95 backdrop-blur-xl border-b border-white/10 transition-all">
      {/* Top micro-banner for hospitality reassurance & multi-location signpost */}
      <div className="bg-[#0c0c0c] text-neutral-400 text-xs py-1.5 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#D4AF37] font-semibold tracking-wider text-[11px] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Telford Flagship
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-300 text-[11px]">Southwater Square TF3 4HS</span>
            <span className="hidden lg:inline text-neutral-600">•</span>
            <span className="hidden lg:inline text-neutral-400 text-[11px]">
              Multi-Branch Blueprint: Ready for <span className="text-white font-medium">Leicester</span> & <span className="text-white font-medium">Blackpool</span>
            </span>
            <span className="hidden md:inline text-neutral-600">•</span>
            <span className="hidden md:inline text-emerald-400 font-medium text-[11px]">100% Halal Certified</span>
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
          onClick={() => handleNavClick('home')}
          className="cursor-pointer group"
          id="nav-brand-logo"
        >
          <Logo 
            size="md" 
            showSubtitle={true} 
            branchSubtitle="Telford Flagship • Southwater"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-6 text-xs font-semibold uppercase tracking-widest">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className={`transition-colors py-2 cursor-pointer ${
              activeView === 'home'
                ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] font-bold'
                : 'text-neutral-400 hover:text-[#D4AF37]'
            }`}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('menu')}
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

          <button
            type="button"
            onClick={() => handleNavClick('offers')}
            className={`transition-colors py-2 flex items-center gap-1 cursor-pointer ${
              activeView === 'offers'
                ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] font-bold'
                : 'text-neutral-400 hover:text-[#D4AF37]'
            }`}
          >
            <span>Offers</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('about')}
            className={`transition-colors py-2 cursor-pointer ${
              activeView === 'about'
                ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] font-bold'
                : 'text-neutral-400 hover:text-[#D4AF37]'
            }`}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('careers')}
            className={`transition-colors py-2 cursor-pointer ${
              activeView === 'careers'
                ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] font-bold'
                : 'text-neutral-400 hover:text-[#D4AF37]'
            }`}
          >
            Careers
          </button>

          {/* Locations Navigation & Dropdown */}
          <div className="relative">
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => handleNavClick('locations')}
                className={`transition-colors py-2 cursor-pointer ${
                  activeView === 'locations'
                    ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] font-bold'
                    : 'text-neutral-400 hover:text-[#D4AF37]'
                }`}
              >
                Locations & Parking
              </button>
              <button
                type="button"
                onClick={() => setShowOtherBranches(!showOtherBranches)}
                className="p-1 text-neutral-400 hover:text-[#D4AF37] cursor-pointer"
                title="View UK Branch Network"
              >
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showOtherBranches ? 'rotate-180 text-[#D4AF37]' : ''}`} />
              </button>
            </div>

            {showOtherBranches && (
              <div 
                className="absolute right-0 mt-2 w-80 rounded-xl bg-neutral-900/98 backdrop-blur-xl border border-white/10 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseLeave={() => setShowOtherBranches(false)}
              >
                <div className="px-3 py-2 text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest border-b border-white/10 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-[#D4AF37]" />
                    UK Branch Network
                  </span>
                  <button
                    type="button"
                    onClick={() => handleNavClick('locations')}
                    className="text-[9px] text-[#D4AF37] hover:underline font-mono cursor-pointer"
                  >
                    View All →
                  </button>
                </div>

                {/* Multi-Branch Architecture Vision Signpost */}
                <div className="m-1.5 p-2 rounded-lg bg-gradient-to-r from-[#D4AF37]/15 to-transparent border border-[#D4AF37]/30">
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-white uppercase tracking-wider">
                    <Layers className="w-3 h-3 text-[#D4AF37]" />
                    <span>Expansion Blueprint</span>
                  </div>
                  <p className="text-[10px] text-neutral-300 mt-0.5 leading-tight">
                    Unified platform engineered to replicate for <span className="text-[#D4AF37] font-semibold">Leicester (Highcross)</span> & <span className="text-[#D4AF37] font-semibold">Blackpool (Bank Hey St)</span>.
                  </p>
                </div>

                <div className="p-1 space-y-1 max-h-60 overflow-y-auto">
                  {UK_BRANCHES_DATA.map((br) => (
                    <div
                      key={br.id}
                      className={`p-2 rounded-lg transition-colors flex items-center justify-between group cursor-pointer ${
                        br.isCurrent ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/40' : 'hover:bg-neutral-800/70'
                      }`}
                      onClick={() => {
                        setShowOtherBranches(false);
                        handleNavClick('locations');
                      }}
                    >
                      <div>
                        <div className="text-xs font-semibold text-neutral-200 group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                          <span>{br.name}</span>
                          {br.isCurrent && (
                            <span className="text-[8px] bg-[#D4AF37] text-black font-black px-1 py-0.2 rounded">Telford Hub</span>
                          )}
                          {(br.id === 'leicester' || br.id === 'blackpool') && (
                            <span className="text-[8px] bg-neutral-800 text-[#D4AF37] border border-[#D4AF37]/30 font-bold px-1 py-0.2 rounded">
                              Replicable
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-neutral-400">{br.address} ({br.postcode})</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Action Group */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenFeedback}
            className="hidden md:flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            title="Leave Guest Review / Feedback"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden lg:inline uppercase tracking-wider text-[11px]">Feedback</span>
          </button>

          <button
            type="button"
            onClick={onOpenLocation}
            className="hidden sm:flex items-center gap-1.5 border border-[#D4AF37]/50 text-[#D4AF37] px-3.5 py-2 text-xs uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-black rounded-lg transition-all cursor-pointer"
            id="nav-location-btn"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Telford TF3</span>
          </button>

          {/* Book Table Button */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="gold-gradient text-black px-4 sm:px-5 py-2.5 rounded-lg font-black uppercase tracking-widest text-xs gold-glow active:scale-95 transition-transform flex items-center gap-2 cursor-pointer shadow-lg"
            id="nav-book-table-btn"
          >
            <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
            <span className="whitespace-nowrap">BOOK A TABLE</span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer border border-white/10 ml-1"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#121212] border-b border-white/10 px-4 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wider mb-4">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`p-3 rounded-lg text-left transition-colors cursor-pointer flex items-center gap-2 ${
                activeView === 'home' ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
              }`}
            >
              <span>Home</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('menu')}
              className={`p-3 rounded-lg text-left transition-colors cursor-pointer flex items-center justify-between ${
                activeView === 'menu' ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
              }`}
            >
              <span>Menu & Stations</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#D4AF37] text-black">100+</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('offers')}
              className={`p-3 rounded-lg text-left transition-colors cursor-pointer flex items-center gap-2 ${
                activeView === 'offers' ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
              }`}
            >
              <Tag className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Offers & Deals</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('locations')}
              className={`p-3 rounded-lg text-left transition-colors cursor-pointer flex items-center gap-2 ${
                activeView === 'locations' ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Locations & Parking</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className={`p-3 rounded-lg text-left transition-colors cursor-pointer flex items-center gap-2 ${
                activeView === 'about' ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
              }`}
            >
              <Info className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>About Us</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('careers')}
              className={`p-3 rounded-lg text-left transition-colors cursor-pointer flex items-center gap-2 ${
                activeView === 'careers' ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Careers</span>
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLocation();
              }}
              className="flex-1 py-2.5 rounded-lg glass text-neutral-300 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Telford Parking</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFeedback();
              }}
              className="flex-1 py-2.5 rounded-lg glass text-neutral-300 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Guest Review</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
