'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-900">
          Verlexa
        </Link>

        <nav className="space-x-6 text-gray-700 font-medium">
          <Link
            href="/"
            className={pathname === '/' ? 'text-blue-900 font-semibold' : ''}
          >
            Home
          </Link>
          <Link
            href="/contact"
            className={pathname === '/contact' ? 'text-blue-900 font-semibold' : ''}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
