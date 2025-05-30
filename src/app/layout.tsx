import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Verlexa',
  description: 'Advanced discovery software for legal professionals.',
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
        <Footer />
      </body>
    </html>
  );
}
