import React from 'react';
import { UtensilsCrossed, MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { BRANCH_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenLocation: () => void;
  onViewMenu: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenLocation,
  onViewMenu,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-neutral-400 border-t border-white/10 pt-16 pb-28 lg:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Multi-Location Scalability Bridge requested */}
        <div className="p-6 sm:p-8 rounded-xl glass border border-white/10 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#D4AF37] block mb-1">
                National Hospitality Network
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
                Explore Our Other Branches Across the UK
              </h3>
              <p className="mt-1 text-neutral-400 text-xs sm:text-sm">
                Same unlimited buffet excellence, live cooking stations, and halal-certified kitchens across England.
              </p>
            </div>

            {/* Branch Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {BRANCH_INFO.otherBranches.map((branch) => (
                <div
                  key={branch.name}
                  className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 hover:border-[#D4AF37]/50 transition-colors group cursor-pointer"
                  onClick={() => alert(`Visiting ${branch.name} Branch page`)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-white group-hover:text-[#D4AF37] transition-colors tracking-tight">
                      {branch.name}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">{branch.status}</span>
                  </div>
                  <span className="text-neutral-400 text-[11px] block">{branch.address}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center text-black font-black">
                <UtensilsCrossed className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-widest block uppercase">
                  UMAMI
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-extrabold">
                  World Kitchen • Telford
                </span>
              </div>
            </div>
            <p className="text-neutral-400 leading-relaxed text-xs">
              Telford’s destination for unlimited dining. 100+ global dishes spanning 6 live cooking stations: Teppanyaki, Indian clay oven, Italian pizzas, Dim sum, and British carvery.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Halal Chicken & Lamb Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onViewMenu}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Live Cooking Stations & Menu
                </button>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#D4AF37] transition-colors">
                  Sitting Times & Buffet Prices
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">
                  Customer Reviews (4.5★)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4AF37] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-[#D4AF37] hover:underline font-bold uppercase tracking-wider text-[11px] cursor-pointer"
                >
                  Instant Table Reservation →
                </button>
              </li>
            </ul>
          </div>

          {/* Telford Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Telford Southwater
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Unit 1, Southwater Square, Southwater, Telford TF3 4HS</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${BRANCH_INFO.formattedPhone}`} className="hover:text-white transition-colors">
                  {BRANCH_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BRANCH_INFO.email}</span>
              </div>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={onOpenLocation}
                  className="text-[#D4AF37] hover:underline text-[11px] font-bold uppercase tracking-wider cursor-pointer"
                >
                  View Parking & Directions (TF3 4EJ) →
                </button>
              </div>
            </div>
          </div>

          {/* Sitting Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Buffet Sitting Hours
            </h4>
            <div className="space-y-1.5 text-xs text-neutral-400">
              <div className="flex justify-between">
                <span>Lunch (Mon-Fri):</span>
                <span className="text-white font-medium">12:00 – 15:30</span>
              </div>
              <div className="flex justify-between">
                <span>Dinner (Mon-Thu):</span>
                <span className="text-white font-medium">17:00 – 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Friday Dinner:</span>
                <span className="text-white font-medium">17:00 – 22:30</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white font-medium">12:00 – 22:30</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white font-medium">12:00 – 21:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Umami World Kitchen (Telford Branch). All rights reserved. Food allergy notices available at each station.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
