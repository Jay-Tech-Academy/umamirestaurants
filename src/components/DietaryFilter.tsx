import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Utensils, 
  Search, 
  Flame, 
  Check, 
  Sparkles, 
  X, 
  Leaf, 
  Wheat, 
  Award, 
  Calendar 
} from 'lucide-react';
import { DISHES_DATA, Dish } from '../data/restaurantData';

interface DietaryFilterProps {
  onOpenBooking: () => void;
}

const CATEGORIES = [
  'All',
  'World of Asia',
  'Teppanyaki',
  'Indian Kitchen',
  'Italian Kitchen',
  'Carvery',
  'Desserts',
] as const;

type CategoryType = typeof CATEGORIES[number];

export const DietaryFilter: React.FC<DietaryFilterProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [halalOnly, setHalalOnly] = useState(false);
  const [vegOnly, setVegOnly] = useState(false);
  const [glutenFreeOnly, setGlutenFreeOnly] = useState(false);
  const [veganOnly, setVeganOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDishModal, setActiveDishModal] = useState<Dish | null>(null);

  // Lock background scroll when dish preview modal is open
  useEffect(() => {
    if (activeDishModal) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [activeDishModal]);

  // Filtered dishes memoized for instant zero-lag rendering
  const filteredDishes = useMemo(() => {
    return DISHES_DATA.filter((dish) => {
      // Category match
      if (selectedCategory !== 'All' && dish.category !== selectedCategory) {
        return false;
      }
      // Dietary matches
      if (halalOnly && !dish.dietary.isHalal) return false;
      if (vegOnly && !dish.dietary.isVegetarian) return false;
      if (glutenFreeOnly && !dish.dietary.isGlutenFree) return false;
      if (veganOnly && !dish.dietary.isVegan) return false;

      // Text search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesStation = dish.station.toLowerCase().includes(query);
        const matchesCat = dish.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesStation && !matchesCat) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, halalOnly, vegOnly, glutenFreeOnly, veganOnly, searchQuery]);

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setHalalOnly(false);
    setVegOnly(false);
    setGlutenFreeOnly(false);
    setVeganOnly(false);
    setSearchQuery('');
  };

  const hasActiveFilters = 
    selectedCategory !== 'All' || 
    halalOnly || 
    vegOnly || 
    glutenFreeOnly || 
    veganOnly || 
    Boolean(searchQuery);

  return (
    <section id="menu-section" className="py-16 lg:py-24 bg-[#121212] border-b border-white/10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 text-neutral-400 text-[10px] uppercase tracking-tighter border border-white/5 mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold">Interactive Station Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            100+ Global Flavours <span className="text-[#D4AF37]">Under One Roof</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Filter our live cooking stations by cuisine or dietary preferences. Every dish is refilled continuously and prepared fresh by our specialist station chefs.
          </p>
        </div>

        {/* Control Bar: Search & Quick Filters */}
        <div className="space-y-4 mb-8">
          {/* Top Row: Search input & Active Filters Counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. duck, tikka, prawns)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-neutral-900/90 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 text-xs text-neutral-400">
              <span>
                Showing <strong className="text-white font-semibold">{filteredDishes.length}</strong> live dishes
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px]"
                >
                  <X className="w-3.5 h-3.5" />
                  Reset filters
                </button>
              )}
            </div>
          </div>

          {/* Cuisine Category Tabs (Mobile scrollable without overflowing document) */}
          <div className="overflow-x-auto no-scrollbar pb-1 w-full max-w-full">
            <div className="flex items-center gap-2 min-w-max py-0.5">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-extrabold'
                        : 'glass text-neutral-300 hover:text-white border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dietary Toggle Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mr-1 flex items-center gap-1">
              Dietary Tags:
            </span>

            {/* Halal Toggle */}
            <button
              type="button"
              onClick={() => setHalalOnly(!halalOnly)}
              className={`flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded transition-all font-semibold uppercase tracking-wider cursor-pointer ${
                halalOnly
                  ? 'border border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]'
                  : 'border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Halal Only</span>
              {halalOnly && <Check className="w-3 h-3" />}
            </button>

            {/* Vegetarian Toggle */}
            <button
              type="button"
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded transition-all font-semibold uppercase tracking-wider cursor-pointer ${
                vegOnly
                  ? 'border border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]'
                  : 'border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500'
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              <span>Vegetarian</span>
              {vegOnly && <Check className="w-3 h-3" />}
            </button>

            {/* Gluten-Free Toggle */}
            <button
              type="button"
              onClick={() => setGlutenFreeOnly(!glutenFreeOnly)}
              className={`flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded transition-all font-semibold uppercase tracking-wider cursor-pointer ${
                glutenFreeOnly
                  ? 'border border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]'
                  : 'border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500'
              }`}
            >
              <Wheat className="w-3.5 h-3.5" />
              <span>Gluten-Free</span>
              {glutenFreeOnly && <Check className="w-3 h-3" />}
            </button>

            {/* Vegan Toggle */}
            <button
              type="button"
              onClick={() => setVeganOnly(!veganOnly)}
              className={`flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded transition-all font-semibold uppercase tracking-wider cursor-pointer ${
                veganOnly
                  ? 'border border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]'
                  : 'border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500'
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              <span>100% Vegan</span>
              {veganOnly && <Check className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Empty State if No Dishes Found */}
        {filteredDishes.length === 0 && (
          <div className="py-16 text-center rounded-2xl bg-[#1A1A1A] border border-white/10 p-8 max-w-lg mx-auto">
            <Utensils className="w-10 h-10 text-[#D4AF37]/50 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white uppercase tracking-tight">No matching dishes found</h3>
            <p className="text-neutral-400 text-sm mt-1 mb-4">
              Try removing some dietary filters or search terms to see all available buffet dishes.
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="px-4 py-2 rounded-lg bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Responsive Dish Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredDishes.map((dish) => (
            <article
              key={dish.id}
              className="group glass rounded-xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-200 flex flex-col shadow-lg hover:shadow-2xl"
            >
              {/* Dish Image Container */}
              <div 
                className="relative h-48 w-full overflow-hidden bg-neutral-950 cursor-pointer"
                onClick={() => setActiveDishModal(dish)}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized dark culinary placeholder if offline
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                
                {/* Station Badge Overlay */}
                <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-neutral-300 border border-white/10">
                  {dish.station}
                </div>

                {/* Highlight Ribbon */}
                {dish.highlight && (
                  <div className="absolute top-3 right-3 bg-[#D4AF37] text-black font-black px-2 py-0.5 rounded text-[9px] uppercase tracking-widest shadow">
                    {dish.highlight}
                  </div>
                )}
              </div>

              {/* Dish Info Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => setActiveDishModal(dish)}
                    className="font-bold text-base sm:text-lg text-white group-hover:text-[#D4AF37] transition-colors line-clamp-1 cursor-pointer tracking-tight"
                  >
                    {dish.name}
                  </h3>

                  <p className="mt-1.5 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Dietary Tags & Station Booking Action */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {dish.dietary.isHalal && (
                      <span className="text-[9px] font-bold text-[#D4AF37] border border-[#D4AF37]/50 px-1.5 py-0.5 rounded uppercase">
                        Halal
                      </span>
                    )}
                    {dish.dietary.isVegetarian && (
                      <span className="text-[9px] font-bold text-neutral-300 border border-neutral-700 px-1.5 py-0.5 rounded uppercase">
                        Veg
                      </span>
                    )}
                    {dish.dietary.isGlutenFree && (
                      <span className="text-[9px] font-bold text-neutral-300 border border-neutral-700 px-1.5 py-0.5 rounded uppercase">
                        GF
                      </span>
                    )}
                    {dish.dietary.isVegan && (
                      <span className="text-[9px] font-bold text-neutral-300 border border-neutral-700 px-1.5 py-0.5 rounded uppercase">
                        Vegan
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] hover:underline flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Book Table</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Buffet Guarantee Banner */}
        <div className="mt-12 p-6 rounded-xl glass border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center text-black shrink-0 font-bold">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Live Cooking Station Guarantee</h4>
              <p className="text-xs text-neutral-400">
                All dishes are included in your single buffet ticket with unlimited visits during your 1h 45m sitting.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-neutral-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-transform active:scale-95"
          >
            Reserve Your Sitting
          </button>
        </div>
      </div>

      {/* Dish Quick-View Lightbox Modal rendered via Portal to document.body */}
      {activeDishModal && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setActiveDishModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-dish-title"
        >
          <div 
            className="relative w-full max-w-lg rounded-2xl bg-neutral-900 border border-[#D4AF37]/40 shadow-2xl overflow-hidden my-auto max-h-[92dvh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Image Banner */}
            <div className="relative h-44 sm:h-56 w-full bg-neutral-950 shrink-0">
              <img
                src={activeDishModal.image}
                alt={activeDishModal.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveDishModal(null)}
                aria-label="Close dish preview"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-neutral-950/80 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors border border-white/10 cursor-pointer shadow-lg z-10"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3 bg-neutral-950/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30">
                {activeDishModal.station}
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    {activeDishModal.category}
                  </span>
                  {activeDishModal.highlight && (
                    <span className="text-[10px] font-bold bg-[#D4AF37] text-neutral-950 px-2 py-0.5 rounded">
                      {activeDishModal.highlight}
                    </span>
                  )}
                </div>

                <h3 id="modal-dish-title" className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                  {activeDishModal.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 sm:mb-6">
                  {activeDishModal.description}
                </p>

                <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6 bg-neutral-950 p-3 sm:p-3.5 rounded-xl border border-neutral-800 text-xs">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-neutral-400 shrink-0">Dietary Profile:</span>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {activeDishModal.dietary.isHalal && <span className="text-emerald-400 font-bold">100% Halal</span>}
                      {activeDishModal.dietary.isVegetarian && <span className="text-green-400 font-bold">• Vegetarian</span>}
                      {activeDishModal.dietary.isGlutenFree && <span className="text-amber-400 font-bold">• Gluten-Free</span>}
                      {activeDishModal.dietary.isVegan && <span className="text-teal-400 font-bold">• Vegan</span>}
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-neutral-400 shrink-0">Buffet Access:</span>
                    <span className="text-white font-medium text-right">Included in all lunch & dinner sittings</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Book Table & Close */}
              <div className="flex flex-col xs:flex-row gap-2.5 sm:gap-3 pt-2 shrink-0 border-t border-white/5 mt-auto">
                <button
                  type="button"
                  onClick={() => {
                    setActiveDishModal(null);
                    onOpenBooking();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl gold-gradient hover:bg-gold-gradient-hover text-neutral-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform cursor-pointer min-h-[44px]"
                >
                  <Calendar className="w-4 h-4 text-neutral-950 stroke-[2.5] shrink-0" />
                  <span>Book Table For This Dish</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDishModal(null)}
                  className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer min-h-[44px]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
