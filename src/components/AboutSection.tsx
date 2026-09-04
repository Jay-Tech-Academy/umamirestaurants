import React from 'react';
import { Sparkles, ShieldCheck, Flame, Utensils, Heart, Award, CheckCircle, Clock, Users } from 'lucide-react';
import { BRANCH_INFO } from '../data/restaurantData';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onViewMenu: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBooking,
  onViewMenu,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#121212] text-neutral-100 relative overflow-hidden" id="about-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Umami Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Passionate About Flavour. <br />
            <span className="text-[#D4AF37]">United by One Table.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            In Japanese gastronomy, <em>"Umami"</em> translates directly as the savory, profoundly delicious fifth taste. At Umami World Kitchen Telford, we celebrate this universal sensation by uniting 100+ global recipes prepared live right before your eyes.
          </p>
        </div>

        {/* Story Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                From Tokyo Street Food to Traditional British Roasts
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Gone are the days of mundane buffets kept beneath lukewarm lamps. Umami World Kitchen operates on a revolutionary live-theatre concept: our master chefs chop, marinate, flame, and sear dishes to order at 6 individual live cooking stations.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Whether you desire sizzling black pepper steak on our iron teppanyaki plate, garlic butter king prawns tossed in front of you, or garlic coriander naan slapped against scorching clay tandoor walls, every dish arrives piping hot and full of life.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass border border-white/10">
                <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center text-black font-black mb-2">
                  <Flame className="w-4 h-4 text-black" />
                </div>
                <h4 className="text-sm font-bold text-white">Live Theatre Kitchens</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Food prepared right before your eyes with authentic technique and fresh produce.
                </p>
              </div>

              <div className="p-4 rounded-xl glass border border-white/10">
                <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center text-black font-black mb-2">
                  <ShieldCheck className="w-4 h-4 text-black" />
                </div>
                <h4 className="text-sm font-bold text-white">100% Halal Certified</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Chicken & lamb are certified Halal with strict segregation from pork products.
                </p>
              </div>

              <div className="p-4 rounded-xl glass border border-white/10">
                <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center text-black font-black mb-2">
                  <Award className="w-4 h-4 text-black" />
                </div>
                <h4 className="text-sm font-bold text-white">5-Star Food Hygiene</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Rigorous kitchen sanitation, temperature logging, and allergen transparency.
                </p>
              </div>

              <div className="p-4 rounded-xl glass border border-white/10">
                <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center text-black font-black mb-2">
                  <Users className="w-4 h-4 text-black" />
                </div>
                <h4 className="text-sm font-bold text-white">Family & Group Friendly</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Spacious 280-seat dining hall with plush booths, highchairs, and under-3s eating free.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-lg gold-gradient text-black font-black uppercase tracking-widest text-xs gold-glow cursor-pointer active:scale-95 transition-transform"
              >
                Reserve a Table
              </button>
              <button
                type="button"
                onClick={onViewMenu}
                className="px-6 py-3 rounded-lg glass text-white font-bold uppercase tracking-wider text-xs hover:bg-white/10 cursor-pointer border border-white/10 transition-colors"
              >
                Explore 100+ Dishes
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Umami World Kitchen interior and live cooking"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">
                      Telford Southwater Square
                    </span>
                    <h4 className="text-lg font-bold text-white">280 Luxury Dining Seats</h4>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-[#D4AF37] text-black font-bold">
                    Shropshire Landmark
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dietary & Halal Assurance Banner */}
        <div className="rounded-2xl glass border border-[#D4AF37]/30 p-8 sm:p-10 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-widest text-[#D4AF37] block mb-2">
              Dietary Integrity & Allergen Safety
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mb-4">
              Our 100% Halal & Allergen Promise
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              We understand the critical importance of faith-based dietary standards and medical food sensitivities. All chicken and lamb items across our World of Asia, Indian Tandoor, and Teppanyaki sections are certified Halal by reputable UK accreditation bodies. Pork items (such as the British roast gammon and bacon) are kept in a separate, isolated carvery station with dedicated carving utensils and preparation boards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2 text-neutral-200">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Dedicated Halal poultry & lamb</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-200">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Distinct vegetarian & vegan stations</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-200">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Allergen guides available on every station</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
