import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Verlexa',
  description: 'Advanced discovery software for legal professionals.',
    icons: {
    icon: "/favicon.ico",             // ✅ square icon preferred
    shortcut: "/favicon.ico",
    apple: "/favicon.png",            // optional
  },
   openGraph: {
    title: "Verlexa",
    description: "Advanced discovery software for legal professionals.",
    url: "https://verlexa.com",
    siteName: "Verlexa",
    images: [
      {
        url: "https://verlexa.com/Logo_transparent.png", // this is fine for social previews
        width: 1200,
        height: 630,
        alt: "Verlexa",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verlexa",
    description: "Innovative Technology Solutions",
    images: ["https://verlexa.com/Logo_transparent.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
