import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Cookie, FileText, CheckCircle2 } from 'lucide-react';
import { LEGAL_CONTENT } from '../data/restaurantData';

export type LegalTab = 'privacy' | 'cookie' | 'terms';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: true,
    preferences: true,
  });
  const [cookieSaved, setCookieSaved] = useState(false);

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

  const handleSaveCookies = () => {
    setCookieSaved(true);
    setTimeout(() => {
      setCookieSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#121212] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden text-neutral-200 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Navigation Tabs */}
        <div className="px-6 py-4 border-b border-white/10 bg-neutral-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center text-black font-black">
              {activeTab === 'privacy' && <ShieldCheck className="w-4 h-4 text-black" />}
              {activeTab === 'cookie' && <Cookie className="w-4 h-4 text-black" />}
              {activeTab === 'terms' && <FileText className="w-4 h-4 text-black" />}
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white uppercase tracking-tight">
                {activeTab === 'privacy' && 'Customer Privacy Notice'}
                {activeTab === 'cookie' && 'Cookie Preferences & Policy'}
                {activeTab === 'terms' && 'Booking Terms & Conditions'}
              </h3>
              <p className="text-xs text-[#D4AF37] font-medium">Umami World Kitchen (UK Compliance)</p>
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

        {/* Tab Switcher */}
        <div className="flex border-b border-white/10 bg-neutral-900/50 px-6 pt-2 gap-2 text-xs font-bold uppercase tracking-wider">
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`pb-2.5 px-3 border-b-2 cursor-pointer transition-colors ${
              activeTab === 'privacy'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Privacy Notice
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cookie')}
            className={`pb-2.5 px-3 border-b-2 cursor-pointer transition-colors ${
              activeTab === 'cookie'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Cookie Policy
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`pb-2.5 px-3 border-b-2 cursor-pointer transition-colors ${
              activeTab === 'terms'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Terms & Conditions
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-300 leading-relaxed">
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="font-bold text-white uppercase tracking-wider">UK GDPR & Data Protection Act 2018</span>
                <span className="text-neutral-500">{LEGAL_CONTENT.privacyNotice.lastUpdated}</span>
              </div>
              {LEGAL_CONTENT.privacyNotice.sections.map((sec, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-neutral-900/60 border border-white/5 space-y-1.5">
                  <h4 className="font-bold text-white text-sm">{sec.heading}</h4>
                  <p className="text-neutral-300 whitespace-pre-line">{sec.content}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'cookie' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="font-bold text-white uppercase tracking-wider">Cookie Governance</span>
                <span className="text-neutral-500">{LEGAL_CONTENT.cookiePolicy.lastUpdated}</span>
              </div>

              {LEGAL_CONTENT.cookiePolicy.sections.map((sec, i) => (
                <div key={i} className="space-y-1">
                  <h4 className="font-bold text-white text-sm">{sec.heading}</h4>
                  <p className="text-neutral-300 whitespace-pre-line">{sec.content}</p>
                </div>
              ))}

              {/* Interactive Cookie Toggles */}
              <div className="p-4 rounded-xl glass border border-white/10 space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">
                  Manage Your Preferences
                </h4>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div>
                    <span className="font-semibold text-white block">Strictly Necessary Cookies</span>
                    <span className="text-[11px] text-neutral-400">Required for reservations, booking security and CSRF protection.</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/10">
                    Always Active
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div>
                    <span className="font-semibold text-white block">Analytics & Performance</span>
                    <span className="text-[11px] text-neutral-400">Anonymous visit counts to improve menu speed and table availability.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={cookieSettings.analytics}
                    onChange={(e) => setCookieSettings({ ...cookieSettings, analytics: e.target.checked })}
                    className="w-4 h-4 accent-[#D4AF37] cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <span className="font-semibold text-white block">Preference & Branch Memory</span>
                    <span className="text-[11px] text-neutral-400">Saves your preferred dining location (Telford) and theme.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={cookieSettings.preferences}
                    onChange={(e) => setCookieSettings({ ...cookieSettings, preferences: e.target.checked })}
                    className="w-4 h-4 accent-[#D4AF37] cursor-pointer"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSaveCookies}
                    className="w-full py-2.5 rounded-lg gold-gradient text-black font-black uppercase tracking-wider text-xs gold-glow cursor-pointer transition-transform active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    {cookieSaved ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-black" />
                        <span>Preferences Saved!</span>
                      </>
                    ) : (
                      <span>Save Cookie Preferences</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="font-bold text-white uppercase tracking-wider">Sitting Policy & Dining Etiquette</span>
                <span className="text-neutral-500">{LEGAL_CONTENT.termsAndConditions.lastUpdated}</span>
              </div>
              {LEGAL_CONTENT.termsAndConditions.sections.map((sec, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-neutral-900/60 border border-white/5 space-y-1.5">
                  <h4 className="font-bold text-white text-sm">{sec.heading}</h4>
                  <p className="text-neutral-300 leading-relaxed">{sec.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Close Button */}
        <div className="px-6 py-3 border-t border-white/10 bg-neutral-950 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
