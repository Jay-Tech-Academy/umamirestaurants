'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { MobileNav } from '../../components/MobileNav';
import { DietaryFilter } from '../../components/DietaryFilter';
import { PricingSection } from '../../src/components/PricingSection';
import { BookingModal } from '../../src/components/BookingModal';
import { LocationModal } from '../../src/components/LocationModal';
import { Footer } from '../../src/components/Footer';

export default function MenuPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-neutral-100 flex flex-col selection:bg-[#D4AF37] selection:text-black">
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenLocation={() => setIsLocationOpen(true)}
        activeView="menu"
        setActiveView={() => {}}
      />

      <main className="flex-1 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <a
            href="/"
            className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>← Back to Telford Home Overview</span>
          </a>
        </div>
        <DietaryFilter onOpenBooking={() => setIsBookingOpen(true)} />
        <PricingSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      <Footer
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenLocation={() => setIsLocationOpen(true)}
        onViewMenu={() => {}}
      />

      <MobileNav
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenLocation={() => setIsLocationOpen(true)}
        activeView="menu"
        setActiveView={() => {}}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onOpenLocation={() => {
          setIsBookingOpen(false);
          setIsLocationOpen(true);
        }}
      />

      <LocationModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
        onOpenBooking={() => {
          setIsLocationOpen(false);
          setIsBookingOpen(true);
        }}
      />
    </div>
  );
}
