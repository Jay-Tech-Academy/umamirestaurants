import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Umami World Kitchen - Telford Branch | All-You-Can-Eat Global Buffet',
  description: 'Unlimited food. 100+ global flavours. One unforgettable table at Southwater, Telford. Book online instantly.',
  openGraph: {
    title: 'Umami World Kitchen - Telford Branch',
    description: 'Unlimited food. 100+ global flavours. One unforgettable table at Southwater, Telford.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#121212] text-neutral-100 antialiased selection:bg-[#D4AF37] selection:text-black">
        {children}
      </body>
    </html>
  );
}
