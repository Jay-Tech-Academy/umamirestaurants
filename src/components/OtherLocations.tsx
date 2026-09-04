import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Users, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  Navigation, 
  CheckCircle2, 
  Car, 
  Train, 
  Calendar,
  Building2,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { UK_BRANCHES_DATA, BranchLocation, BRANCH_INFO } from '../data/restaurantData';

interface OtherLocationsProps {
  onSelectBranchBooking: (branch: BranchLocation) => void;
  onOpenLocationModal?: () => void;
  onOpenBooking?: () => void;
  onNavigateHome?: () => void;
  onNavigateMenu?: () => void;
}

export const OtherLocations: React.FC<OtherLocationsProps> = ({
  onSelectBranchBooking,
  onOpenLocationModal,
  onOpenBooking,
  onNavigateHome,
  onNavigateMenu,
}) => {
  const [activeTab, setActiveTab] = useState<'telford' | 'all'>('telford');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [activeBranch, setActiveBranch] = useState<BranchLocation>(UK_BRANCHES_DATA[0]);

  const filteredBranches = selectedCity === 'all'
    ? UK_BRANCHES_DATA
    : UK_BRANCHES_DATA.filter((b) => b.id === selectedCity || b.city.toLowerCase().includes(selectedCity.toLowerCase()));

  return (
    <section className="py-12 sm:py-20 bg-[#121212] text-neutral-100 relative" id="locations-page">
      {/* Background Ambient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Quick Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            {onNavigateHome && (
              <button
                type="button"
                onClick={onNavigateHome}
                className="text-xs text-neutral-400 hover:text-[#D4AF37] transition-colors flex items-center gap-1 font-semibold cursor-pointer"
              >
                <span>← Home</span>
              </button>
            )}
            <span className="text-neutral-600">/</span>
            <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
              Locations & Parking Directory
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onNavigateMenu && (
              <button
                type="button"
                onClick={onNavigateMenu}
                className="text-xs px-3 py-1.5 rounded-lg glass text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              >
                View 100+ Menu
              </button>
            )}
            <button
              type="button"
              onClick={onOpenBooking}
              className="text-xs px-4 py-1.5 rounded-lg gold-gradient text-black font-black uppercase tracking-wider gold-glow cursor-pointer active:scale-95 transition-transform"
            >
              Book Table
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Official Restaurant Network & Parking</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Location, Directions & <span className="text-[#D4AF37]">Parking</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Find complete directions, multi-storey car parking details, public transit links, and opening hours for our flagship Telford dining hall and nationwide UK sister branches.
          </p>

          {/* Primary View Switcher Tabs */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              type="button"
              onClick={() => setActiveTab('telford')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'telford'
                  ? 'gold-gradient text-black shadow-lg shadow-[#D4AF37]/20 scale-105'
                  : 'glass text-neutral-300 hover:text-white border border-white/10'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Telford Flagship & Parking (TF3)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'gold-gradient text-black shadow-lg shadow-[#D4AF37]/20 scale-105'
                  : 'glass text-neutral-300 hover:text-white border border-white/10'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>All UK Branches ({UK_BRANCHES_DATA.length})</span>
            </button>
          </div>
        </div>

        {/* TELFORD FLAGSHIP & PARKING VIEW */}
        {activeTab === 'telford' && (
          <div className="space-y-10 animate-in fade-in duration-200">
            {/* Main Telford Card */}
            <div className="rounded-2xl glass border border-[#D4AF37]/50 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-black font-black text-[11px] uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                Active Flagship Branch
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80"
                    alt="Umami World Kitchen Telford Southwater Dining Hall"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#D4AF37] block">
                      Southwater Square • Telford
                    </span>
                    <h2 className="text-2xl font-bold text-white">
                      Umami World Kitchen (Telford)
                    </h2>
                    <span className="text-xs text-neutral-300 block mt-1">
                      280 Seats • 6 Live Cooking Theatres • 100% Halal Chicken & Lamb
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                      Postcode: TF3 4HS
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      5-Star Food Hygiene Rated
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      HMC / Halal Certified Meats
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                      Full Physical Address
                    </h3>
                    <p className="text-lg text-white font-bold mt-1">
                      {BRANCH_INFO.fullAddress}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1">
                      Situated in Southwater Square, directly adjoining Cineworld Telford and facing Telford Ice Rink and Southwater Lake.
                    </p>
                  </div>

                  {/* Travel & Parking Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10">
                      <div className="flex items-center gap-2 text-white font-bold mb-1.5">
                        <Car className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-xs uppercase tracking-wider">Car Parking (TF3 4EJ)</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Park at <strong>Southwater Multi-Storey Car Park</strong> (Sat Nav: <strong>TF3 4EJ</strong>). Covered, monitored 24/7, and located just 150 metres walk from our entrance. Electric vehicle (EV) charging bays available.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10">
                      <div className="flex items-center gap-2 text-white font-bold mb-1.5">
                        <Train className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-xs uppercase tracking-wider">Public Transport</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        <strong>Telford Central Train Station</strong> is a 10-minute pedestrian stroll across the footbridge. Telford Bus Station is 3 minutes walk with connections across Shropshire.
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={BRANCH_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-lg glass hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/10 transition-colors"
                    >
                      <Navigation className="w-4 h-4 text-[#D4AF37]" />
                      <span>Get Google Maps Directions</span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                    </a>

                    <a
                      href={`tel:${BRANCH_INFO.formattedPhone}`}
                      className="px-5 py-3 rounded-lg glass hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/10 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#D4AF37]" />
                      <span>Call {BRANCH_INFO.phone}</span>
                    </a>

                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="px-6 py-3 rounded-lg gold-gradient text-black text-xs font-black uppercase tracking-widest gold-glow cursor-pointer active:scale-95 transition-transform flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-black" />
                      <span>Book Telford Table</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Detailed Table */}
            <div className="rounded-2xl glass border border-white/10 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center text-black font-bold">
                  <Clock className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                    Telford Branch Sitting Times & Pricing
                  </h3>
                  <p className="text-xs text-neutral-400">All prices include unlimited visits to all 6 live cooking stations</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {BRANCH_INFO.sittingsInfo.map((sitting) => (
                  <div
                    key={sitting.period}
                    className={`p-5 rounded-xl border flex flex-col justify-between ${
                      sitting.isPopular
                        ? 'bg-[#D4AF37]/10 border-[#D4AF37]/40 shadow-lg'
                        : 'bg-neutral-900/70 border-white/10'
                    }`}
                  >
                    <div>
                      {sitting.isPopular && (
                        <span className="text-[9px] font-black uppercase tracking-wider bg-[#D4AF37] text-black px-2 py-0.5 rounded inline-block mb-2">
                          Popular
                        </span>
                      )}
                      <h4 className="font-bold text-white text-sm">{sitting.period}</h4>
                      <span className="text-xs text-neutral-400 block mt-0.5">{sitting.days}</span>
                      <span className="text-xs text-[#D4AF37] font-semibold block mt-1">{sitting.hours}</span>

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] uppercase text-neutral-400 block">Adult</span>
                          <span className="text-lg font-black text-white">{sitting.adultPrice}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] uppercase text-neutral-400 block">Child</span>
                          <span className="text-sm font-bold text-neutral-300">{sitting.childPrice}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="mt-4 w-full py-2 rounded-lg text-xs font-bold uppercase tracking-wider glass hover:bg-white/10 text-white transition-colors cursor-pointer text-center"
                    >
                      Reserve Table
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ALL UK SISTER BRANCHES VIEW */}
        {activeTab === 'all' && (
          <div className="space-y-10 animate-in fade-in duration-200">
            {/* Quick city filter chips */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedCity('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCity === 'all'
                    ? 'gold-gradient text-black shadow-md'
                    : 'glass text-neutral-300 hover:text-white hover:border-[#D4AF37]/40'
                }`}
              >
                All UK Branches ({UK_BRANCHES_DATA.length})
              </button>
              {UK_BRANCHES_DATA.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedCity(b.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCity === b.id
                      ? 'gold-gradient text-black font-bold'
                      : 'glass text-neutral-400 hover:text-white border border-white/5'
                  }`}
                >
                  {b.name.split('(')[0].trim()}
                  {b.isCurrent && ' (Current)'}
                </button>
              ))}
            </div>

            {/* Selected Branch Featured Card */}
            <div className="rounded-2xl glass border border-[#D4AF37]/40 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-black font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                {activeBranch.isCurrent ? 'Current Active Branch' : 'Selected Location'}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10 group">
                  <img
                    src={activeBranch.image}
                    alt={activeBranch.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#D4AF37] block">
                      {activeBranch.city}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {activeBranch.name}
                    </h3>
                    <span className="text-xs text-neutral-300 block mt-1">
                      Capacity: {activeBranch.capacity} • {activeBranch.status}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                      {activeBranch.postcode}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      100% Halal Certified Kitchen
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-300">
                      Address & Opening Times
                    </h4>
                    <p className="text-base text-white font-medium mt-1">
                      {activeBranch.address}, {activeBranch.postcode}
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Opening Hours: {activeBranch.hours}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Specialty Features at this Branch
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeBranch.features.map((feat) => (
                        <span
                          key={feat}
                          className="px-2.5 py-1 rounded-md text-xs bg-white/5 border border-white/10 text-neutral-300"
                        >
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={activeBranch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg glass hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/10 cursor-pointer transition-colors"
                    >
                      <Navigation className="w-4 h-4 text-[#D4AF37]" />
                      <span>Directions & Maps</span>
                      <ExternalLink className="w-3 h-3 text-neutral-400" />
                    </a>

                    <a
                      href={`tel:${activeBranch.formattedPhone}`}
                      className="px-5 py-2.5 rounded-lg glass hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/10 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#D4AF37]" />
                      <span>{activeBranch.phone}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onSelectBranchBooking(activeBranch)}
                      className="px-6 py-2.5 rounded-lg gold-gradient text-black text-xs font-black uppercase tracking-widest gold-glow cursor-pointer active:scale-95 transition-transform flex items-center gap-2"
                    >
                      <span>Book Table at {activeBranch.name.split('(')[0].trim()}</span>
                      <ArrowRight className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* All Branches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBranches.map((branch) => (
                <div
                  key={branch.id}
                  className={`rounded-xl glass border transition-all p-5 flex flex-col justify-between group cursor-pointer ${
                    activeBranch.id === branch.id
                      ? 'border-[#D4AF37] bg-white/[0.04]'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setActiveBranch(branch)}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] block">
                          {branch.city}
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                          {branch.name}
                        </h3>
                      </div>
                      {branch.isCurrent ? (
                        <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-[#D4AF37] text-black">
                          Active
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {branch.status}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-neutral-300 flex items-start gap-1.5 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{branch.address}, <strong>{branch.postcode}</strong></span>
                    </p>

                    <p className="text-[11px] text-neutral-400 flex items-center gap-1.5 mb-3">
                      <Clock className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                      <span>{branch.hours}</span>
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {branch.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-300 border border-white/5"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    <a
                      href={`tel:${branch.formattedPhone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-neutral-400 hover:text-white flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{branch.phone}</span>
                    </a>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectBranchBooking(branch);
                      }}
                      className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                    >
                      <span>Book Table</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
