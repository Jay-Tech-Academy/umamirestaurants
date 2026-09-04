/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, ActiveView } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { Hero } from './components/Hero';
import { DietaryFilter } from './components/DietaryFilter';
import { PricingSection } from './components/PricingSection';
import { ReviewSlider } from './components/ReviewSlider';
import { FAQ } from './components/FAQ';
import { BookingModal } from './components/BookingModal';
import { LocationModal } from './components/LocationModal';
import { Footer } from './components/Footer';
import { OtherLocations } from './components/OtherLocations';
import { AboutSection } from './components/AboutSection';
import { OffersSection } from './components/OffersSection';
import { CareersSection } from './components/CareersSection';
import { FeedbackModal } from './components/FeedbackModal';
import { LegalModal, LegalTab } from './components/LegalModal';
import { BranchLocation } from './data/restaurantData';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('privacy');
  const [selectedBranchName, setSelectedBranchName] = useState<string>('Telford (Southwater)');

  // Sync title and ensure top scroll on view switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const handleOpenLegal = (tab: LegalTab) => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  const handleOpenLocationsPage = () => {
    setIsLocationOpen(false);
    setActiveView('locations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBranchBooking = (branch: BranchLocation) => {
    setSelectedBranchName(branch.name);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-neutral-100 flex flex-col selection:bg-[#D4AF37] selection:text-black">
      {/* Desktop & Mobile Navigation Header */}
      <Navbar
        onOpenBooking={() => {
          setSelectedBranchName('Telford (Southwater)');
          setIsBookingOpen(true);
        }}
        onOpenLocation={handleOpenLocationsPage}
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
        onSelectBranchBooking={handleBranchBooking}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              onOpenBooking={() => {
                setSelectedBranchName('Telford (Southwater)');
                setIsBookingOpen(true);
              }}
              onOpenLocation={handleOpenLocationsPage}
              onViewMenu={() => setActiveView('menu')}
            />

            {/* Interactive Dietary & Cuisine Filter Module */}
            <DietaryFilter
              onOpenBooking={() => {
                setSelectedBranchName('Telford (Southwater)');
                setIsBookingOpen(true);
              }}
            />

            {/* Sitting Times & Prices */}
            <PricingSection
              onOpenBooking={() => {
                setSelectedBranchName('Telford (Southwater)');
                setIsBookingOpen(true);
              }}
            />

            {/* Social Proof Review Slider */}
            <ReviewSlider />

            {/* High-Intent FAQ Accordion */}
            <FAQ
              onOpenBooking={() => {
                setSelectedBranchName('Telford (Southwater)');
                setIsBookingOpen(true);
              }}
            />
          </>
        )}

        {activeView === 'menu' && (
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
            <DietaryFilter
              onOpenBooking={() => {
                setSelectedBranchName('Telford (Southwater)');
                setIsBookingOpen(true);
              }}
            />
            <PricingSection
              onOpenBooking={() => {
                setSelectedBranchName('Telford (Southwater)');
                setIsBookingOpen(true);
              }}
            />
          </div>
        )}

        {activeView === 'about' && (
          <div className="pt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
              <button
                type="button"
                onClick={() => setActiveView('home')}
                className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                <span>← Back to Telford Home Overview</span>
              </button>
            </div>
            <AboutSection
              onOpenBooking={() => {
                setSelectedBranchName('Telford (Southwater)');
                setIsBookingOpen(true);
              }}
              onViewMenu={() => setActiveView('menu')}
            />
          </div>
        )}

        {activeView === 'offers' && (
          <div className="pt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
              <button
                type="button"
                onClick={() => setActiveView('home')}
                className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                <span>← Back to Telford Home Overview</span>
              </button>
            </div>
            <OffersSection
              onOpenBooking={() => {
                setSelectedBranchName('Telford (Southwater)');
                setIsBookingOpen(true);
              }}
            />
          </div>
        )}

        {activeView === 'careers' && (
          <div className="pt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
              <button
                type="button"
                onClick={() => setActiveView('home')}
                className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                <span>← Back to Telford Home Overview</span>
              </button>
            </div>
            <CareersSection />
          </div>
        )}

        {activeView === 'locations' && (
          <div className="pt-2">
            <OtherLocations
              onSelectBranchBooking={handleBranchBooking}
              onOpenLocationModal={() => setIsLocationOpen(true)}
              onOpenBooking={() => {
                setSelectedBranchName('Telford (Southwater)');
                setIsBookingOpen(true);
              }}
              onNavigateHome={() => setActiveView('home')}
              onNavigateMenu={() => setActiveView('menu')}
            />
          </div>
        )}
      </main>

      {/* Footer with Multi-Location Bridge, Legal Modals, and Designer Credit */}
      <Footer
        onOpenBooking={() => {
          setSelectedBranchName('Telford (Southwater)');
          setIsBookingOpen(true);
        }}
        onOpenLocation={handleOpenLocationsPage}
        setActiveView={setActiveView}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
        onOpenLegal={handleOpenLegal}
        onSelectBranchBooking={handleBranchBooking}
      />

      {/* Sticky Mobile Bottom Navigation Bar */}
      <MobileNav
        onOpenBooking={() => {
          setSelectedBranchName('Telford (Southwater)');
          setIsBookingOpen(true);
        }}
        onOpenLocation={handleOpenLocationsPage}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* High-Conversion Booking Engine Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onOpenLocation={() => {
          setIsBookingOpen(false);
          handleOpenLocationsPage();
        }}
        branchName={selectedBranchName}
      />

      {/* Location, Directions & Parking Modal */}
      <LocationModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
        onViewFullPage={handleOpenLocationsPage}
        onOpenBooking={() => {
          setIsLocationOpen(false);
          setSelectedBranchName('Telford (Southwater)');
          setIsBookingOpen(true);
        }}
      />

      {/* Guest Feedback & Review Modal */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />

      {/* Legal, Privacy & Cookie Policy Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        initialTab={legalTab}
        onClose={() => setIsLegalOpen(false)}
      />
    </div>
  );
}
