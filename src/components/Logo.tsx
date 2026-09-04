import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  branchSubtitle?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  branchSubtitle = 'Telford Flagship • Southwater',
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Luxury Geometric Crest Emblem */}
      <div className={`relative ${iconDimensions} rounded-xl gold-gradient p-[1.5px] shadow-lg shadow-[#D4AF37]/20 shrink-0 group-hover:shadow-[#D4AF37]/40 transition-shadow`}>
        <div className="w-full h-full bg-[#121212] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle Ambient Radial Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#F3E5AB]/30" />

          {/* Bespoke Vector Monogram Emblem */}
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#D4AF37]"
          >
            {/* Outer Ring Segment representing the World Kitchen nexus */}
            <circle
              cx="20"
              cy="20"
              r="17"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="2 3"
              className="opacity-40"
            />
            {/* Culinary Crown Arc */}
            <path
              d="M13 14L20 8L27 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Stylized Sculpted U monogram with chopsticks / iron griddle tongs motif */}
            <path
              d="M14 15V24C14 27.3137 16.6863 30 20 30C23.3137 30 26 27.3137 26 24V15"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Center Flame / Sparkle of Culinary Passion */}
            <circle cx="20" cy="19" r="1.5" fill="#D4AF37" />
            <defs>
              <linearGradient id="goldGradient" x1="14" y1="15" x2="26" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5D77F" />
                <stop offset="0.5" stopColor="#D4AF37" />
                <stop offset="1" stopColor="#AA771C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 tracking-tight">
          <span className={`${titleSizes} font-black text-white tracking-wider`}>
            UMAMI
          </span>
          <span className={`${titleSizes} font-bold text-[#D4AF37] tracking-wider`}>
            WORLD KITCHEN
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            <span className="text-[#D4AF37] font-bold">100+ FLAVOURS</span>
            <span className="text-neutral-600">•</span>
            <span className="truncate">{branchSubtitle}</span>
          </div>
        )}
      </div>
    </div>
  );
};
