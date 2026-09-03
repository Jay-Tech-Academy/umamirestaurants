/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { Hero } from './components/Hero';
import { DietaryFilter } from './components/DietaryFilter';
import { PricingSection } from './components/PricingSection';
import { ReviewSlider } from './components/ReviewSlider';
import { FAQ } from './components/FAQ';
import { BookingModal } from './components/BookingModal';
import { LocationModal } from './components/LocationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'menu'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  // Sync title and ensure top scroll on view switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="min-h-screen bg-[#121212] text-neutral-100 flex flex-col selection:bg-[#D4AF37] selection:text-black">
      {/* Desktop Navigation */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenLocation={() => setIsLocationOpen(true)}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'home' ? (
          <>
            {/* Hero Section */}
            <Hero
              onOpenBooking={() => setIsBookingOpen(true)}
              onOpenLocation={() => setIsLocationOpen(true)}
              onViewMenu={() => {
                setActiveView('menu');
              }}
            />

            {/* Interactive Dietary & Cuisine Filter Module */}
            <DietaryFilter onOpenBooking={() => setIsBookingOpen(true)} />

            {/* Sitting Times & Prices */}
            <PricingSection onOpenBooking={() => setIsBookingOpen(true)} />

            {/* Social Proof Review Slider */}
            <ReviewSlider />

            {/* High-Intent FAQ Accordion */}
            <FAQ onOpenBooking={() => setIsBookingOpen(true)} />
          </>
        ) : (
          /* Dedicated Menu & Live Stations View */
          <div className="pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
              <button
                type="button"
                onClick={() => setActiveView('home')}
                className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                <span>← Back to Telford Home Overview</span>
              </button>
            </div>
            <DietaryFilter onOpenBooking={() => setIsBookingOpen(true)} />
            <PricingSection onOpenBooking={() => setIsBookingOpen(true)} />
          </div>
        )}
      </main>

      {/* Footer with Multi-Location Bridge */}
      <Footer
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenLocation={() => setIsLocationOpen(true)}
        onViewMenu={() => setActiveView('menu')}
      />

      {/* Sticky Mobile Bottom Navigation Bar */}
      <MobileNav
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenLocation={() => setIsLocationOpen(true)}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* High-Conversion Booking Engine Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onOpenLocation={() => {
          setIsBookingOpen(false);
          setIsLocationOpen(true);
        }}
      />

      {/* Location, Directions & Parking Modal */}
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

