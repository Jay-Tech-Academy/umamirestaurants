import React from 'react';
import { Calendar, Clock, Sparkles, Check, Users } from 'lucide-react';
import { BRANCH_INFO } from '../data/restaurantData';

interface PricingSectionProps {
  onOpenBooking: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-[#121212] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 text-neutral-400 text-[10px] uppercase tracking-tighter border border-white/5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold">Transparent All-Inclusive Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Sitting Times & <span className="text-[#D4AF37]">Buffet Prices</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            One fixed price unlocks unlimited visits across all global live cooking stations during your sitting.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANCH_INFO.sittingsInfo.map((sitting) => (
            <div
              key={sitting.period}
              className={`p-6 rounded-xl flex flex-col justify-between transition-all relative ${
                sitting.isPopular
                  ? 'glass-card-gold border-2 border-[#D4AF37] gold-glow'
                  : 'glass border border-white/10 hover:border-white/25'
              }`}
            >
              {sitting.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[9px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">
                  {sitting.days}
                </span>
                <h3 className="text-xl font-extrabold text-white mt-1 uppercase tracking-tight">
                  {sitting.period}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] mt-1 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{sitting.hours}</span>
                </div>

                {/* Price Display */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {sitting.adultPrice}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">/ adult</span>
                  </div>
                  <div className="mt-1 text-xs text-neutral-400 flex items-center justify-between">
                    <span>Child (&lt;150cm): <strong className="text-neutral-200">{sitting.childPrice}</strong></span>
                    <span className="text-emerald-400 font-semibold text-[11px]">Under 3s Free</span>
                  </div>
                </div>

                {/* Feature checklist */}
                <ul className="mt-6 space-y-2.5 text-xs text-neutral-300">
                  {sitting.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Button */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className={`w-full py-3 rounded-lg font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    sitting.isPopular
                      ? 'gold-gradient text-black gold-glow active:scale-95'
                      : 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Children & Height Policy Notice */}
        <div className="mt-10 p-4 rounded-xl glass border border-white/10 max-w-3xl mx-auto text-xs text-neutral-400 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-[#D4AF37] font-bold uppercase tracking-wider text-[11px]">Dining Notice:</span>
          <span>Child pricing is determined by our standard height line (under 150cm). Proof of age may be requested for under 3s. Unlimited refills apply to all buffet stations!</span>
        </div>
      </div>
    </section>
  );
};
