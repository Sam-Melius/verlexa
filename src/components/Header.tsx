'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#1b1b4f]/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/Logo_transparent.png"
            alt="Verlexa"
            width={40}
            height={300}
            className="rounded cursor-pointer"
          />
        </Link>

        <nav className="space-x-6 text-white font-medium">
          <Link
            href="/"
            className={pathname === '/' ? 'text-[#c1a01e] font-semibold' : ''}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={pathname === '/about' ? 'text-[#c1a01e] font-semibold' : ''}
          >
            About
          </Link>
          <Link
            href="/testimonials"
            className={pathname === '/testimonials' ? 'text-[#c1a01e] font-semibold' : ''}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className={pathname === '/contact' ? 'text-[#c1a01e] font-semibold' : ''}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
