import React from 'react';
import { UtensilsCrossed, MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ArrowUp, ExternalLink, Globe } from 'lucide-react';
import { BRANCH_INFO, UK_BRANCHES_DATA, BranchLocation } from '../data/restaurantData';
import { ActiveView } from './Navbar';
import { LegalTab } from './LegalModal';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenLocation: () => void;
  setActiveView: (view: ActiveView) => void;
  onOpenFeedback: () => void;
  onOpenLegal: (tab: LegalTab) => void;
  onSelectBranchBooking?: (branch: BranchLocation) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenLocation,
  setActiveView,
  onOpenFeedback,
  onOpenLegal,
  onSelectBranchBooking,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (view: ActiveView) => {
    setActiveView(view);
    scrollToTop();
  };

  return (
    <footer className="bg-[#0c0c0c] text-neutral-400 border-t border-white/10 pt-16 pb-28 lg:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* National Branch Showcase Banner */}
        <div className="p-6 sm:p-8 rounded-2xl glass border border-white/10 mb-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest mb-2">
                <Globe className="w-3 h-3" />
                <span>National Hospitality Network</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
                Explore Our UK Branch Locations
              </h3>
              <p className="mt-1 text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Same unlimited buffet excellence, live cooking stations, and halal-certified kitchens across England.
              </p>
              <button
                type="button"
                onClick={() => handleNav('locations')}
                className="mt-3 text-xs font-bold text-[#D4AF37] hover:underline uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
              >
                <span>View Full Branch Network & Directions →</span>
              </button>
            </div>

            {/* Branch Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {UK_BRANCHES_DATA.slice(0, 3).map((branch) => (
                <div
                  key={branch.id}
                  className={`p-4 rounded-xl border transition-all group cursor-pointer ${
                    branch.isCurrent
                      ? 'bg-[#D4AF37]/10 border-[#D4AF37]/40 shadow-lg'
                      : 'bg-neutral-900/80 border-white/10 hover:border-[#D4AF37]/50'
                  }`}
                  onClick={() => handleNav('locations')}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-white group-hover:text-[#D4AF37] transition-colors tracking-tight">
                      {branch.name}
                    </span>
                    {branch.isCurrent ? (
                      <span className="text-[9px] bg-[#D4AF37] text-black font-black uppercase px-1.5 py-0.5 rounded">
                        Active
                      </span>
                    ) : (
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                        {branch.status}
                      </span>
                    )}
                  </div>
                  <span className="text-neutral-400 text-[11px] block">{branch.city} • {branch.postcode}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleNav('home')}>
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
            <p className="text-neutral-400 leading-relaxed text-xs max-w-sm">
              Telford’s premier destination for unlimited global dining. 100+ dishes prepared live across 6 culinary stages: Japanese Teppanyaki, Authentic Indian Tandoor, Italian Pizzas, World of Asia, and British Carvery.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Halal Chicken & Lamb Certified</span>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenFeedback}
                className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 text-[11px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>⭐ Rate Your Dining Experience</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Explore Umami
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('menu')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Live Cooking Stations (100+)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('offers')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Special Offers & Deals</span>
                  <span className="text-[9px] px-1 rounded bg-[#D4AF37]/20 text-[#D4AF37] font-bold">New</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  About Our Philosophy & Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('careers')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Careers & Opportunities</span>
                  <span className="text-[9px] px-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">Hiring</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('locations')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Other UK Branch Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Guest Services & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Guest Services & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#faq"
                  onClick={() => {
                    handleNav('home');
                    setTimeout(() => {
                      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenFeedback}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Guest Feedback & Reviews
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Privacy Notice (GDPR)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('cookie')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Cookie Policy & Preferences
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-[#D4AF37] hover:underline font-bold uppercase tracking-wider text-[11px] cursor-pointer pt-1 block"
                >
                  Book a Table Now →
                </button>
              </li>
            </ul>
          </div>

          {/* Telford Branch Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Telford Southwater
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
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
                  className="text-[#D4AF37] hover:underline text-[11px] font-bold uppercase tracking-wider cursor-pointer text-left block"
                >
                  Parking & Directions (TF3 4EJ) →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with User Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Umami World Kitchen (Telford Branch). All rights reserved. 100% Halal Certified Meats.
          </div>

          {/* Explicit User Designer Credit */}
          <div className="text-neutral-400">
            Web designed by{' '}
            <a
              href="https://jamie-techs.github.io/My-Website/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-white font-bold underline transition-colors"
            >
              Jay Tech
            </a>
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
