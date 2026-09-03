import React from 'react';
import { Utensils, Phone, MapPin, Calendar } from 'lucide-react';
import { BRANCH_INFO } from '../data/restaurantData';

interface MobileNavProps {
  onOpenBooking: () => void;
  onOpenLocation: () => void;
  activeView: 'home' | 'menu';
  setActiveView: (view: 'home' | 'menu') => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  onOpenBooking,
  onOpenLocation,
  activeView,
  setActiveView,
}) => {
  return (
    <nav
      id="mobile-bottom-navigation-bar"
      aria-label="Quick Mobile Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="max-w-md mx-auto grid grid-cols-4 items-center gap-1.5">
        {/* [Menu] Button */}
        <button
          type="button"
          id="mobile-nav-menu-btn"
          onClick={() => {
            if (activeView === 'menu') {
              setActiveView('home');
            } else {
              setActiveView('menu');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-lg transition-all cursor-pointer ${
            activeView === 'menu'
              ? 'text-[#D4AF37] bg-white/5 font-bold'
              : 'text-neutral-400 hover:text-white active:bg-white/5'
          }`}
        >
          <Utensils className={`w-4 h-4 ${activeView === 'menu' ? 'text-[#D4AF37]' : 'text-neutral-400'}`} />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Menu</span>
        </button>

        {/* [Call] Button */}
        <a
          href={`tel:${BRANCH_INFO.formattedPhone}`}
          id="mobile-nav-call-btn"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-lg text-neutral-400 hover:text-white active:bg-white/5 transition-all cursor-pointer"
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Call</span>
        </a>

        {/* [Location] Button */}
        <button
          type="button"
          id="mobile-nav-location-btn"
          onClick={onOpenLocation}
          className="flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-lg text-neutral-400 hover:text-white active:bg-white/5 transition-all cursor-pointer"
        >
          <MapPin className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Location</span>
        </button>

        {/* [Book Table] Prominent Gold Button */}
        <button
          type="button"
          id="mobile-nav-book-btn"
          onClick={onOpenBooking}
          className="relative flex flex-col items-center justify-center min-h-[48px] py-1 px-2 rounded-lg gold-gradient text-black font-black gold-glow active:scale-95 transition-transform cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            <span className="text-[10px] uppercase font-black tracking-wider text-black whitespace-nowrap">
              Book Table
            </span>
          </div>
          <span className="text-[8px] font-bold text-neutral-900/80 uppercase tracking-tight">Instant Seat</span>
        </button>
      </div>
    </nav>
  );
};
