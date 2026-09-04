import React, { useEffect } from 'react';
import { X, MapPin, Navigation, Clock, Phone, Car, Train, ExternalLink, Globe } from 'lucide-react';
import { BRANCH_INFO } from '../data/restaurantData';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
  onViewFullPage?: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
  onViewFullPage,
}) => {
  // Lock body scroll when modal is open to prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-[#121212] border border-[#D4AF37]/50 rounded-xl shadow-2xl overflow-hidden text-neutral-200 my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-neutral-950 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center text-black font-bold">
              <MapPin className="w-4 h-4 text-black" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-white uppercase tracking-tight">
                Telford Branch & Parking
              </h3>
              <p className="text-xs text-[#D4AF37] font-medium">Southwater Square, TF3 4HS</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close location dialog"
            className="w-8 h-8 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-5 text-xs sm:text-sm overflow-y-auto flex-1">
          {/* Quick Jump to Full Dedicated Page */}
          {onViewFullPage && (
            <div className="p-3 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold">
                <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Looking for all UK branches & full directions?</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onViewFullPage();
                }}
                className="text-xs font-bold text-black gold-gradient px-3 py-1 rounded uppercase tracking-wider cursor-pointer hover:opacity-90 whitespace-nowrap"
              >
                Open Full Page →
              </button>
            </div>
          )}

          {/* Address Card */}
          <div className="p-4 rounded-xl glass border border-white/10">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] block mb-1">
              Full Address & GPS Coordinates
            </span>
            <p className="text-base font-bold text-white tracking-tight">
              {BRANCH_INFO.fullAddress}
            </p>
            <p className="text-neutral-400 text-xs mt-1">
              Located directly in Southwater Square, beside Cineworld and opposite Telford Ice Rink.
            </p>
          </div>

          {/* Quick Directions & Parking Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl glass border border-white/10">
              <div className="flex items-center gap-2 text-white font-bold mb-1">
                <Car className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs uppercase tracking-wider">Car Parking</span>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Southwater Multi-Storey Car Park (<strong>TF3 4EJ</strong>) is 150m away. Safe, covered, open 24/7.
              </p>
            </div>

            <div className="p-4 rounded-xl glass border border-white/10">
              <div className="flex items-center gap-2 text-white font-bold mb-1">
                <Train className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs uppercase tracking-wider">By Train / Bus</span>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Telford Central train station is a 10-minute walk or 3-minute bus ride via Telford Bus Station.
              </p>
            </div>
          </div>

          {/* Opening Times */}
          <div className="p-4 rounded-xl glass border border-white/10 space-y-1.5">
            <div className="flex items-center gap-2 text-white font-bold mb-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-wider">Opening Hours (Telford)</span>
            </div>
            <div className="flex justify-between text-neutral-300 text-xs py-1 border-b border-white/10">
              <span>Mon – Thu:</span>
              <span className="font-semibold text-white">12:00 – 15:30 & 17:00 – 22:00</span>
            </div>
            <div className="flex justify-between text-neutral-300 text-xs py-1 border-b border-white/10">
              <span>Friday:</span>
              <span className="font-semibold text-white">12:00 – 15:30 & 17:00 – 22:30</span>
            </div>
            <div className="flex justify-between text-neutral-300 text-xs py-1 border-b border-white/10">
              <span>Saturday (Grand Feast):</span>
              <span className="font-semibold text-white">12:00 – 22:30 (Continuous)</span>
            </div>
            <div className="flex justify-between text-neutral-300 text-xs py-1">
              <span>Sunday & Bank Holidays:</span>
              <span className="font-semibold text-white">12:00 – 21:30 (Continuous)</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={BRANCH_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-lg glass hover:bg-white/10 text-white font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 border border-white/10"
            >
              <Navigation className="w-4 h-4 text-[#D4AF37]" />
              <span>Open in Maps</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>

            <a
              href={`tel:${BRANCH_INFO.formattedPhone}`}
              className="flex-1 py-3 px-4 rounded-lg glass hover:bg-white/10 text-white font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call Reception</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 py-3 px-4 rounded-lg gold-gradient text-black font-black uppercase tracking-widest text-xs gold-glow transition-transform active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Book Table</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
