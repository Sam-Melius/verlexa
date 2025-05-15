'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#1b1b4f] shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/">
      <Image src="/customcolor_icon_customcolor_background.png" alt="Verlexa" width={40} height={300} className="rounded cursor-pointer" />
    </Link>

        <nav className="space-x-6 text-white font-medium">
          <Link
            href="/"
            className={pathname === '/' ? 'text-[#c1a01e] font-semibold' : ''}
          >
            Home
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
