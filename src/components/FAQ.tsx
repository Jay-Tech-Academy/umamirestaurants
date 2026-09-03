import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Calendar, Sparkles, Phone } from 'lucide-react';
import { FAQ_DATA, BRANCH_INFO } from '../data/restaurantData';

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenBooking }) => {
  // Start with first 2 accordions open by default for immediate reassurance
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-halal': true,
    'faq-sitting': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#121212] border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-neutral-400 text-[10px] uppercase tracking-tighter border border-white/5 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold">Customer Guidance & Policies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Frequently Asked <span className="text-[#D4AF37]">Questions</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Everything you need to know before visiting Umami World Kitchen at Southwater, Telford.
          </p>
        </div>

        {/* Collapsible Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = Boolean(openItems[item.id]);
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'glass border-[#D4AF37]/50 shadow-lg'
                    : 'glass border-white/10 hover:border-white/20'
                }`}
              >
                {/* Accordion Question Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.question}
                    </span>
                    {item.badge && (
                      <span className="inline-block text-[9px] uppercase font-black text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-2 py-0.5 rounded w-fit tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#D4AF37] text-black font-bold'
                        : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Collapsible Answer Body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-white/10 animate-in fade-in duration-200">
                    <p>{item.answer}</p>

                    {/* Inline [Book Now] action pairing requested */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-neutral-400">
                        Ready to experience this at Telford Southwater?
                      </span>
                      <button
                        type="button"
                        onClick={onOpenBooking}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg gold-gradient text-black font-black text-xs uppercase tracking-widest shadow-md transition-transform active:scale-95 cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5 text-black stroke-[2.5]" />
                        <span>Book Table Now</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support reassurance box */}
        <div className="mt-10 p-6 rounded-xl glass border border-white/10 text-center">
          <p className="text-sm text-neutral-300">
            Have a question not covered here or planning a custom event for over 30 guests?
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BRANCH_INFO.formattedPhone}`}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline"
            >
              <Phone className="w-4 h-4" />
              <span>Call Telford Desk: {BRANCH_INFO.phone}</span>
            </a>
            <span className="text-neutral-600">•</span>
            <span className="text-xs text-neutral-400">Southwater Square, Telford TF3 4HS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
