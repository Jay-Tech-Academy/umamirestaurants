import React from 'react';
import { Utensils, MapPin, Calendar, Info, Tag } from 'lucide-react';
import { ActiveView } from './Navbar';

interface MobileNavProps {
  onOpenBooking: () => void;
  onOpenLocation: () => void;
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
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
      className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-md border-t border-white/10 px-2 py-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 items-center gap-1">
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
          className={`flex flex-col items-center justify-center min-h-[44px] py-1 px-1 rounded-lg transition-all cursor-pointer ${
            activeView === 'menu'
              ? 'text-[#D4AF37] bg-white/5 font-bold'
              : 'text-neutral-400 hover:text-white active:bg-white/5'
          }`}
        >
          <Utensils className={`w-4 h-4 ${activeView === 'menu' ? 'text-[#D4AF37]' : 'text-neutral-400'}`} />
          <span className="text-[9px] font-bold uppercase tracking-wider mt-1">Menu</span>
        </button>

        {/* [Offers] Button */}
        <button
          type="button"
          id="mobile-nav-offers-btn"
          onClick={() => {
            setActiveView('offers');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-h-[44px] py-1 px-1 rounded-lg transition-all cursor-pointer ${
            activeView === 'offers'
              ? 'text-[#D4AF37] bg-white/5 font-bold'
              : 'text-neutral-400 hover:text-white active:bg-white/5'
          }`}
        >
          <Tag className={`w-4 h-4 ${activeView === 'offers' ? 'text-[#D4AF37]' : 'text-neutral-400'}`} />
          <span className="text-[9px] font-bold uppercase tracking-wider mt-1">Offers</span>
        </button>

        {/* [Locations & Parking] Button */}
        <button
          type="button"
          id="mobile-nav-location-btn"
          onClick={() => {
            setActiveView('locations');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-h-[44px] py-1 px-1 rounded-lg transition-all cursor-pointer ${
            activeView === 'locations'
              ? 'text-[#D4AF37] bg-white/5 font-bold'
              : 'text-neutral-400 hover:text-white active:bg-white/5'
          }`}
        >
          <MapPin className={`w-4 h-4 ${activeView === 'locations' ? 'text-[#D4AF37]' : 'text-neutral-400'}`} />
          <span className="text-[9px] font-bold uppercase tracking-wider mt-1">Location</span>
        </button>

        {/* [About] Button */}
        <button
          type="button"
          id="mobile-nav-about-btn"
          onClick={() => {
            setActiveView('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-h-[44px] py-1 px-1 rounded-lg transition-all cursor-pointer ${
            activeView === 'about'
              ? 'text-[#D4AF37] bg-white/5 font-bold'
              : 'text-neutral-400 hover:text-white active:bg-white/5'
          }`}
        >
          <Info className={`w-4 h-4 ${activeView === 'about' ? 'text-[#D4AF37]' : 'text-neutral-400'}`} />
          <span className="text-[9px] font-bold uppercase tracking-wider mt-1">About</span>
        </button>

        {/* [Book Table] Prominent Gold Button */}
        <button
          type="button"
          id="mobile-nav-book-btn"
          onClick={onOpenBooking}
          className="relative flex flex-col items-center justify-center min-h-[44px] py-1 px-1.5 rounded-lg gold-gradient text-black font-black gold-glow active:scale-95 transition-transform cursor-pointer"
        >
          <div className="flex items-center gap-0.5">
            <Calendar className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            <span className="text-[9px] uppercase font-black tracking-wider text-black whitespace-nowrap">
              Book
            </span>
          </div>
          <span className="text-[7.5px] font-bold text-neutral-900/80 uppercase tracking-tight">Instant</span>
        </button>
      </div>
    </nav>
  );
};
