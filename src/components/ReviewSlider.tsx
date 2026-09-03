import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Award } from 'lucide-react';
import { REVIEWS_DATA } from '../data/restaurantData';

export const ReviewSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalReviews = REVIEWS_DATA.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  // Auto-slide every 6 seconds unless paused by mouse hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, totalReviews]);

  const currentReview = REVIEWS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#121212] border-b border-white/10 relative overflow-hidden">
      {/* Subtle gold spotlight decoration */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-neutral-400 text-[10px] uppercase tracking-tighter border border-white/5 mb-3">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold">Verified Local Dining Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              Praise from <span className="text-[#D4AF37]">Shropshire Diners</span>
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Real dining experiences from families, couples, and food lovers at Southwater Telford.
            </p>
          </div>

          {/* Social Proof Aggregate Google Card */}
          <div className="flex items-center gap-4 glass border border-white/10 p-4 rounded-xl shadow-xl">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center p-2">
              <img 
                src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" 
                alt="Google Reviews" 
                className="w-7 h-7 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
                <span className="font-bold text-white text-base ml-1">4.5</span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Over <strong className="text-white font-semibold">1,300+ verified reviews</strong> in Telford
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Review Card Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="relative rounded-xl glass border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden min-h-[280px] flex flex-col justify-between transition-all">
            {/* Top quote icon & review tags */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <img
                  src={currentReview.avatar}
                  alt={currentReview.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/50 shadow-md"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-base text-white">{currentReview.author}</h3>
                    {currentReview.verified && (
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" title="Verified Diner" />
                    )}
                  </div>
                  <div className="text-xs text-neutral-400 flex items-center gap-2">
                    <span>{currentReview.location}</span>
                    <span>•</span>
                    <span className="text-[#D4AF37] font-medium">{currentReview.visitType}</span>
                  </div>
                </div>
              </div>

              {/* Stars & Date */}
              <div className="text-right">
                <div className="flex items-center gap-1 text-[#D4AF37] justify-end">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-[11px] text-neutral-500 mt-1 block">{currentReview.date}</span>
              </div>
            </div>

            {/* Comment Text */}
            <div className="relative my-2">
              <Quote className="w-10 h-10 text-[#D4AF37]/15 absolute -top-4 -left-2 pointer-events-none" />
              <p className="relative z-10 text-neutral-200 text-base sm:text-lg leading-relaxed italic font-light">
                "{currentReview.comment}"
              </p>
            </div>

            {/* Bottom Slider Controls & Dots */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {REVIEWS_DATA.map((rev, idx) => (
                  <button
                    key={rev.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to review ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx 
                        ? 'w-8 bg-[#D4AF37]' 
                        : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous review"
                  className="w-10 h-10 rounded-lg glass border border-white/10 hover:border-[#D4AF37] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next review"
                  className="w-10 h-10 rounded-lg glass border border-white/10 hover:border-[#D4AF37] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Row: Food, Family, Atmosphere */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl glass border border-white/10">
            <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase tracking-tight">
              <span className="text-[#D4AF37]">🥢</span> 100+ Chef Dishes
            </h4>
            <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
              Consistently praised for high turnaround speed: hot, fresh batches replenishing stations every few minutes.
            </p>
          </div>

          <div className="p-5 rounded-xl glass border border-white/10">
            <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase tracking-tight">
              <span className="text-[#D4AF37]">👨‍👩‍👧‍👦</span> Family & Group Approved
            </h4>
            <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
              Expansive round banquet tables, deep leather booths, and free dining for under 3s make family gatherings effortless.
            </p>
          </div>

          <div className="p-5 rounded-xl glass border border-white/10">
            <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase tracking-tight">
              <span className="text-[#D4AF37]">✨</span> Vibrant Atmosphere
            </h4>
            <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
              Teppanyaki griddle masters performing live egg tosses and theatrical flame shows right in front of diners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
