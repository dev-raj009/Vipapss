import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'VIP Study | Premium Apps & MOD APKs Hub',
  description: 'Download VIP study apps, premium MOD APKs for Rojgarwithrankit, Careerwill, Khan Academy, Study IQ, Parmar Academy, and more. The ultimate destination for premium study apps at VIPstudy.site.',
  keywords: [
    'VIP study apps',
    'VIP study',
    'Rojgarwithrankit mode APK',
    'Download mode APK',
    'Next topper mode APK',
    'Careerwill mode APK',
    'Khan Academy mode APK',
    'Study IQ mode APK',
    'Parmar Academy mode APK',
    'ARJ Vikramjeet mode APK',
    'Gyanbindu mode APK',
    'premium apps'
  ],
  alternates: {
    canonical: 'https://VIPstudy.site',
  },
  openGraph: {
    title: 'VIP Study | Premium Apps & MOD APKs Hub',
    description: 'The best place to download VIP study apps and premium MOD APKs.',
    url: 'https://VIPstudy.site',
    siteName: 'VIP Study',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}>
      <body suppressHydrationWarning className="bg-terminal-bg text-terminal-text antialiased overflow-x-hidden font-mono selection:bg-terminal-accent/30 selection:text-terminal-accent">
        <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
