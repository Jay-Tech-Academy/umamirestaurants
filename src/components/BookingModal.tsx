import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  Phone, 
  Info, 
  ChevronRight, 
  ChevronLeft,
  ExternalLink,
  ShieldCheck,
  Download,
  Copy,
  Check
} from 'lucide-react';
import { BRANCH_INFO } from '../data/restaurantData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLocation: () => void;
  branchName?: string;
}

const TIME_SLOTS = [
  '12:00', '12:30', '13:00', '13:30', '14:00',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onOpenLocation,
  branchName = 'Telford (Southwater)',
}) => {
  // Booking Channel: 'instant' (on-page interactive) | 'designmynight' (portal connector)
  const [bookingChannel, setBookingChannel] = useState<'instant' | 'designmynight'>('instant');
  // Steps: 1 = Details, 2 = Confirmation
  const [step, setStep] = useState<1 | 2>(1);
  const [copiedRef, setCopiedRef] = useState(false);

  // Prevent background page from scrolling when modal is open
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

  // Form State
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState('18:30');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [sittingType, setSittingType] = useState<'lunch' | 'dinner'>('dinner');
  const [seatingPreference, setSeatingPreference] = useState('Booth Seating');
  const [occasion, setOccasion] = useState('Casual Dining');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  // Calculate prices based on sitting
  const adultPricePerPerson = sittingType === 'lunch' ? 11.99 : 19.99;
  const childPricePerPerson = sittingType === 'lunch' ? 6.99 : 9.99;
  const totalEstimate = (adults * adultPricePerPerson) + (children * childPricePerPerson);

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert('Please provide your name and phone number to secure your table reservation.');
      return;
    }
    const randomRef = 'UM-TLF-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomRef);
    setStep(2);
  };

  const handleCopyRef = () => {
    if (!bookingRef) return;
    navigator.clipboard.writeText(bookingRef);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Umami World Kitchen//Table Reservation//EN
BEGIN:VEVENT
UID:${bookingRef || 'umami-telford'}@umamiworldkitchen.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${selectedDate.replace(/-/g, '')}T${selectedTime.replace(':', '')}00
DTEND:${selectedDate.replace(/-/g, '')}T${(parseInt(selectedTime.split(':')[0]) + 2).toString().padStart(2, '0')}${selectedTime.split(':')[1]}00
SUMMARY:Table at Umami World Kitchen (${branchName})
DESCRIPTION:Table reservation for ${adults} adults. Ref: ${bookingRef}. Sitting: ${sittingType}. Address: Unit 1, Southwater Square, Telford TF3 4HS.
LOCATION:Unit 1, Southwater Square, Telford TF3 4HS
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Umami-Reservation-${selectedDate}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetAndClose = () => {
    setStep(1);
    setBookingChannel('instant');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={resetAndClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#121212] border border-[#D4AF37]/50 rounded-2xl shadow-2xl shadow-black overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-neutral-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center text-black font-bold">
              <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight uppercase tracking-tight">
                {step === 1 ? 'Reserve Your Table' : 'Reservation Confirmed!'}
              </h3>
              <p className="text-xs text-[#D4AF37] font-medium">
                Umami World Kitchen • {branchName} (TF3 4HS)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={resetAndClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Integration Connection Switcher (DesignMyNight vs Instant Engine) */}
        {step === 1 && (
          <div className="px-6 pt-3 pb-1 bg-neutral-900/60 border-b border-white/5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs">
              <button
                type="button"
                onClick={() => setBookingChannel('instant')}
                className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                  bookingChannel === 'instant'
                    ? 'bg-[#D4AF37] text-black shadow-md'
                    : 'bg-neutral-800/80 text-neutral-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant 30-Sec Reservation</span>
              </button>

              <button
                type="button"
                onClick={() => setBookingChannel('designmynight')}
                className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                  bookingChannel === 'designmynight'
                    ? 'bg-[#D4AF37] text-black shadow-md'
                    : 'bg-neutral-800/80 text-neutral-400 hover:text-white'
                }`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>DesignMyNight Portal</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-1 text-[10px] text-neutral-400">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Official Partner Integration</span>
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 text-neutral-200">
          {step === 1 && bookingChannel === 'designmynight' ? (
            /* DesignMyNight Portal Bridge View */
            <div className="py-4 space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-[#D4AF37]/40 shadow-xl text-center space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                  <span>Verified Integration Partner</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  DesignMyNight Live Reservation Portal
                </h3>

                <p className="text-neutral-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Book directly through our official DesignMyNight portal for Umami World Kitchen Telford. Seamless instant allocation with your DesignMyNight or Collins account.
                </p>

                {/* Portal Specs Box */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-md mx-auto pt-2">
                  <div className="p-3 rounded-lg bg-black/50 border border-white/10">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold block">Venue</span>
                    <span className="text-xs font-bold text-white">Telford Southwater</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/50 border border-white/10">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold block">Live Status</span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Live & Accepting
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/50 border border-white/10">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold block">Booking Fee</span>
                    <span className="text-xs font-bold text-[#D4AF37]">£0.00 (Free)</span>
                  </div>
                </div>

                {/* Primary CTA to open DesignMyNight portal */}
                <div className="pt-3">
                  <a
                    href={BRANCH_INFO.designMyNightUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 gold-gradient text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs sm:text-sm gold-glow hover:opacity-95 transition-all shadow-xl cursor-pointer w-full sm:w-auto"
                  >
                    <span>Launch DesignMyNight Booking Portal</span>
                    <ExternalLink className="w-4 h-4 text-black stroke-[2.5]" />
                  </a>
                </div>

                <div className="text-[11px] text-neutral-500">
                  Prefer on-page booking without leaving this website?{' '}
                  <button
                    type="button"
                    onClick={() => setBookingChannel('instant')}
                    className="text-[#D4AF37] font-semibold underline hover:text-white"
                  >
                    Use our Instant 30-Sec Booking Engine
                  </button>
                </div>
              </div>
            </div>
          ) : step === 1 ? (
            /* Instant VIP Booking Engine Form */
            <form onSubmit={handleSubmitBooking} className="space-y-6">
              {/* Sitting Type Switcher */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">
                  1. Select Sitting Service
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSittingType('lunch');
                      setSelectedTime('12:30');
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      sittingType === 'lunch'
                        ? 'glass-card border-[#D4AF37]/60 text-white shadow-md'
                        : 'glass border-white/10 text-neutral-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-white tracking-tight">Lunch Sitting</span>
                      <span className="text-xs font-black text-[#D4AF37]">£11.99</span>
                    </div>
                    <span className="text-[11px] text-neutral-400 block mt-1">12:00 – 15:30 • Over 70 dishes</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSittingType('dinner');
                      setSelectedTime('18:30');
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      sittingType === 'dinner'
                        ? 'glass-card border-[#D4AF37]/60 text-white shadow-md'
                        : 'glass border-white/10 text-neutral-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-white tracking-tight">Grand Dinner</span>
                      <span className="text-xs font-black text-[#D4AF37]">£19.99</span>
                    </div>
                    <span className="text-[11px] text-neutral-400 block mt-1">17:00 – 22:00 • All 6 live stations</span>
                  </button>
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">
                    2. Dining Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">
                    3. Sitting Time (1h 45m duration)
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>
                        {t} {parseInt(t.split(':')[0]) < 16 ? '(Lunch)' : '(Dinner)'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guests Count */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">
                  4. Party Size
                </label>
                <div className="grid grid-cols-3 gap-3 bg-neutral-900/80 p-4 rounded-xl border border-white/10">
                  {/* Adults */}
                  <div className="text-center">
                    <span className="text-xs font-semibold text-neutral-400 block">Adults</span>
                    <span className="text-[11px] text-[#D4AF37] font-bold">£{adultPricePerPerson}</span>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-bold text-base text-white w-5">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children under 150cm */}
                  <div className="text-center border-x border-white/10">
                    <span className="text-xs font-semibold text-neutral-400 block">Kids (&lt;150cm)</span>
                    <span className="text-[11px] text-[#D4AF37] font-bold">£{childPricePerPerson}</span>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-bold text-base text-white w-5">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Under 3s free */}
                  <div className="text-center">
                    <span className="text-xs font-semibold text-neutral-400 block">Under 3s</span>
                    <span className="text-[11px] text-emerald-400 font-bold uppercase">FREE</span>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => setInfants(Math.max(0, infants - 1))}
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-bold text-base text-white w-5">{infants}</span>
                      <button
                        type="button"
                        onClick={() => setInfants(infants + 1)}
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferences & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-1.5">
                    Seating Preference
                  </label>
                  <select
                    value={seatingPreference}
                    onChange={(e) => setSeatingPreference(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Booth Seating">Spacious Booth Seating</option>
                    <option value="Near Teppanyaki Station">Near Live Teppanyaki Show</option>
                    <option value="Near Dessert Fountain">Near Chocolate Fountain</option>
                    <option value="Accessible Ground Level">Quiet / Accessible Area</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-1.5">
                    Occasion (Optional)
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Casual Dining">Casual Dining / Dinner</option>
                    <option value="Birthday Celebration">Birthday Celebration 🎂</option>
                    <option value="Anniversary">Anniversary / Date Night</option>
                    <option value="Family Gathering">Family Gathering</option>
                    <option value="Office / Corporate Outing">Office Party / Night Out</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">
                  5. Contact Details (For Instant SMS Confirmation)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Full Name *"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/15 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Mobile Phone Number *"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/15 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="Email Address (for instant calendar confirmation)"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/15 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    value={dietaryNotes}
                    onChange={(e) => setDietaryNotes(e.target.value)}
                    placeholder="Special requests: high chair, halal certified food, birthday sparkler, etc."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/15 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Price Estimate Summary */}
              <div className="p-4 rounded-xl glass border border-[#D4AF37]/40 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 block">Total Estimated Bill (Pay on arrival):</span>
                  <span className="text-xl font-extrabold text-[#D4AF37]">
                    £{totalEstimate.toFixed(2)}
                  </span>
                  <span className="text-[11px] text-neutral-400 block mt-0.5">
                    {adults} {adults === 1 ? 'Adult' : 'Adults'}{children > 0 ? `, ${children} Children` : ''}{infants > 0 ? `, ${infants} Infant (Free)` : ''} • Zero upfront fee
                  </span>
                </div>
                <div className="text-right text-[11px] text-emerald-400 flex items-center gap-1 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Instant Table Hold</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-lg gold-gradient text-black font-black text-xs uppercase tracking-widest gold-glow flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95 shadow-xl"
              >
                <span>CONFIRM RESERVATION NOW</span>
                <ChevronRight className="w-4 h-4 text-black stroke-[3]" />
              </button>
            </form>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">
                  Table Reserved Successfully
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 uppercase tracking-tight">
                  We look forward to welcoming you, {customerName}!
                </h3>
                <p className="text-xs text-neutral-400 mt-2">
                  A reservation voucher has been generated for Umami World Kitchen Telford.
                </p>
              </div>

              {/* Booking Pass Card */}
              <div className="max-w-md mx-auto glass rounded-xl border border-white/10 p-5 text-left space-y-3">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-bold block">Booking Reference</span>
                    <span className="font-mono font-black text-lg text-[#D4AF37]">{bookingRef}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyRef}
                    className="p-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white flex items-center gap-1 text-xs cursor-pointer"
                    title="Copy reference"
                  >
                    {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedRef ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-neutral-500 block">Date & Time:</span>
                    <span className="font-semibold text-white">{selectedDate} @ {selectedTime}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Sitting:</span>
                    <span className="font-semibold text-white capitalize">{sittingType} (1h 45m)</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Party:</span>
                    <span className="font-semibold text-white">{adults} Adults {children > 0 ? `+ ${children} Kids` : ''}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Location:</span>
                    <span className="font-semibold text-white">Southwater Square (TF3 4HS)</span>
                  </div>
                </div>

                {seatingPreference && (
                  <div className="pt-2 border-t border-white/10 text-xs">
                    <span className="text-neutral-500">Seating: </span>
                    <span className="text-neutral-300 font-medium">{seatingPreference} ({occasion})</span>
                  </div>
                )}
              </div>

              {/* Helpful Arrival Notes */}
              <div className="text-left glass p-4 rounded-xl border border-white/10 text-xs space-y-1.5 max-w-md mx-auto">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Getting Here & Parking</span>
                </div>
                <p className="text-neutral-400">
                  Park at Southwater Multi-Storey (TF3 4EJ), 2 mins walk from our front door beside Cineworld. Please arrive 5 minutes before {selectedTime} to be seated promptly.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
                <button
                  type="button"
                  onClick={handleDownloadCalendar}
                  className="flex-1 py-3 rounded-lg glass hover:bg-white/10 text-white font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Add to Calendar</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    resetAndClose();
                    onOpenLocation();
                  }}
                  className="flex-1 py-3 rounded-lg glass hover:bg-white/10 text-white font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>View Map & Parking</span>
                </button>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="flex-1 py-3 rounded-lg gold-gradient text-black font-black uppercase tracking-widest text-xs shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

