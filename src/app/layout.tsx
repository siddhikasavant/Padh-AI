import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';
import Navbar from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: "PadhAI — Learn Smarter. Search Less.",

  description:
    "The premium study resource platform for MSBTE Diploma AI & ML students.",

  verification: {
    google: "9mzhl2-z6hx2Ht38FoCY_Jsdd2MHJIFsxZcXw0BH7Sc",
  },

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "PadhAI — Learn Smarter",
    description:
      "Premium study resources for MSBTE Diploma AIML students.",
    images: [
      {
        url: "/assets/images/app_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        <Navbar />

        {children}

        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fpadhai2987back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19"
        />

        <script
          type="module"
          defer
          src="https://static.rocket.new/rocket-shot.js?v=0.0.2"
        />
      </body>
    </html>
  );
}