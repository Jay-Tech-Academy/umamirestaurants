'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { MobileNav } from '../components/MobileNav';
import { Hero } from '../components/Hero';
import { DietaryFilter } from '../components/DietaryFilter';
import { PricingSection } from '../src/components/PricingSection';
import { ReviewSlider } from '../components/ReviewSlider';
import { FAQ } from '../components/FAQ';
import { BookingModal } from '../src/components/BookingModal';
import { LocationModal } from '../src/components/LocationModal';
import { Footer } from '../src/components/Footer';

export default function Page() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-neutral-100 flex flex-col selection:bg-[#D4AF37] selection:text-black">
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenLocation={() => setIsLocationOpen(true)}
        activeView="home"
        setActiveView={() => {}}
      />

      <main className="flex-1">
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenLocation={() => setIsLocationOpen(true)}
          onViewMenu={() => {
            document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <DietaryFilter onOpenBooking={() => setIsBookingOpen(true)} />

        <PricingSection onOpenBooking={() => setIsBookingOpen(true)} />

        <ReviewSlider />

        <FAQ onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      <Footer
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenLocation={() => setIsLocationOpen(true)}
        onViewMenu={() => {
          document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <MobileNav
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenLocation={() => setIsLocationOpen(true)}
        activeView="home"
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
