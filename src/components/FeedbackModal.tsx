import React, { useState, useEffect } from 'react';
import { X, Star, MessageSquare, ThumbsUp, Sparkles, Check, Gift } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [overallRating, setOverallRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [foodRating, setFoodRating] = useState<string>('Excellent');
  const [serviceRating, setServiceRating] = useState<string>('Excellent');
  const [favoriteStation, setFavoriteStation] = useState<string>('Teppanyaki Iron Griddle');
  const [comment, setComment] = useState<string>('');
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Prevent background page from scrolling
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#121212] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-neutral-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center text-black font-black">
              <MessageSquare className="w-4 h-4 text-black" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white uppercase tracking-tight">
                Guest Feedback & Review
              </h3>
              <p className="text-xs text-[#D4AF37] font-medium">Telford Southwater Experience</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[85vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Thank You for Your Feedback!</h4>
              <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                Your thoughts help our kitchen and floor team maintain 5-star excellence. Here is your complimentary thank-you perk:
              </p>

              <div className="p-4 rounded-xl glass border border-dashed border-[#D4AF37] bg-[#D4AF37]/5 max-w-xs mx-auto">
                <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1">
                  <Gift className="w-4 h-4" />
                  <span>10% Off Your Next Sitting</span>
                </div>
                <div className="text-lg font-mono font-black text-white tracking-widest">
                  FEEDBACK10
                </div>
                <p className="text-[10px] text-neutral-400 mt-1">Show this code on your next visit or enter during booking</p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg gold-gradient text-black text-xs font-black uppercase tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Star Rating */}
              <div className="text-center p-3 rounded-xl bg-neutral-950/80 border border-white/5">
                <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-2">
                  Overall Dining Experience
                </label>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setOverallRating(star)}
                      className="p-1 cursor-pointer transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          (hoverRating || overallRating) >= star
                            ? 'text-[#D4AF37] fill-[#D4AF37]'
                            : 'text-neutral-700'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-xs text-[#D4AF37] font-semibold mt-1 block">
                  {overallRating === 5 ? '5 Stars - Exceptional!' : `${overallRating} Stars`}
                </span>
              </div>

              {/* Station & Quality Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                    Food Quality
                  </label>
                  <select
                    value={foodRating}
                    onChange={(e) => setFoodRating(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Exceptional">Exceptional (Fresh & Hot)</option>
                    <option value="Good">Good</option>
                    <option value="Average">Average</option>
                    <option value="Needs Improvement">Needs Improvement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                    Staff Hospitality
                  </label>
                  <select
                    value={serviceRating}
                    onChange={(e) => setServiceRating(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Friendly & Attentive">Friendly & Attentive</option>
                    <option value="Good">Good</option>
                    <option value="Could be quicker">Could be quicker</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                  Your Favourite Live Cooking Station
                </label>
                <select
                  value={favoriteStation}
                  onChange={(e) => setFavoriteStation(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Teppanyaki Iron Griddle">Teppanyaki Iron Griddle (Steak & King Prawns)</option>
                  <option value="Authentic Clay Tandoor">Authentic Clay Tandoor & Curries</option>
                  <option value="World of Asia">World of Asia (Crispy Duck & Dim Sum)</option>
                  <option value="Italian Stone-Baked Pizzas">Italian Stone-Baked Pizzas & Pastas</option>
                  <option value="British Carvery Roast">British Carvery Roast & Trimmings</option>
                  <option value="Dessert Theatre & Chocolate Fountain">Dessert Theatre & Chocolate Fountain</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                  Your Comments or Dish Requests
                </label>
                <textarea
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us what you loved, or what we can do to make your next sitting even better..."
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Alex"
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                    Email (for 10% voucher)
                  </label>
                  <input
                    type="email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg gold-gradient text-black font-black uppercase tracking-widest text-xs gold-glow cursor-pointer active:scale-95 transition-transform flex items-center justify-center gap-2"
                >
                  <ThumbsUp className="w-4 h-4 text-black" />
                  <span>Submit Feedback & Get 10% Voucher</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
