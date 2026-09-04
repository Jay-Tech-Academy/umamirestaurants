import React, { useState } from 'react';
import { Tag, Sparkles, Check, Copy, Calendar, Gift, Users, Heart, ArrowRight } from 'lucide-react';
import { OFFERS_DATA, Offer } from '../data/restaurantData';

interface OffersSectionProps {
  onOpenBooking: () => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const categories = ['all', 'Student', 'NHS & Services', 'Celebration', 'Family', 'Happy Hour', 'Corporate'];

  const filteredOffers = selectedCategory === 'all'
    ? OFFERS_DATA
    : OFFERS_DATA.filter((o) => o.category === selectedCategory);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#121212] text-neutral-100 relative overflow-hidden" id="offers-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-4">
            <Gift className="w-3.5 h-3.5" />
            <span>Exclusive Telford Specials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Special Deals & <span className="text-[#D4AF37]">Dining Offers</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Take advantage of our exclusive seasonal discounts, student packages, emergency services rewards, and birthday treats at Telford Southwater.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'gold-gradient text-black shadow-md'
                    : 'glass text-neutral-300 hover:text-white hover:border-[#D4AF37]/40'
                }`}
              >
                {cat === 'all' ? 'All Offers' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="rounded-2xl glass border border-white/10 hover:border-[#D4AF37]/50 transition-all p-6 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header row with badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                    {offer.category}
                  </span>
                  <span className="text-base font-black text-[#D4AF37]">
                    {offer.discount}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                  {offer.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {offer.description}
                </p>

                <div className="p-3 rounded-lg bg-neutral-900/80 border border-white/5 space-y-2 mb-4">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-neutral-400">Valid Times:</span>
                    <span className="font-semibold text-white">{offer.validDays}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-neutral-400">Highlight:</span>
                    <span className="font-semibold text-[#D4AF37]">{offer.highlight}</span>
                  </div>
                </div>

                {offer.code && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between p-2.5 rounded-lg border border-dashed border-[#D4AF37]/50 bg-[#D4AF37]/5">
                      <div>
                        <span className="text-[10px] text-neutral-400 uppercase tracking-widest block">Promo Code</span>
                        <span className="text-xs font-mono font-bold text-white tracking-wider">{offer.code}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopyCode(offer.code!)}
                        className="px-3 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-[#D4AF37] text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        {copiedCode === offer.code ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                <p className="text-[10px] text-neutral-500 leading-normal mb-4">
                  * Terms: {offer.terms}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-lg gold-gradient text-black font-black uppercase tracking-widest text-xs gold-glow cursor-pointer active:scale-95 transition-transform flex items-center justify-center gap-2"
                >
                  <span>Book & Redeem Offer</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Footer Banner */}
        <div className="rounded-xl glass border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">
              Have a bespoke party or corporate booking request?
            </h4>
            <p className="text-neutral-400 mt-1">
              Contact our Telford Southwater reservations team directly for custom catering packages and private hires.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:01952291110"
              className="px-4 py-2 rounded-lg glass text-white font-bold hover:bg-white/10 transition-colors"
            >
              Call: 01952 291 110
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-5 py-2 rounded-lg gold-gradient text-black font-bold uppercase tracking-wider cursor-pointer"
            >
              Reserve Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
