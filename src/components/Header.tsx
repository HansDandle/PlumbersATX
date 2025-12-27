import Link from 'next/link';
import { SITE_NAME, PHONE_NUMBER } from '@/lib/constants';

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur shadow sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-2 sm:px-6 py-3">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-800 flex items-center gap-2" aria-label={SITE_NAME}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#2563eb"/><path d="M10 18l6-6 6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {SITE_NAME}
        </Link>
        <nav className="hidden md:flex gap-6 text-base font-medium">
          <Link href="/emergency-plumber-austin" className="hover:text-blue-700">Emergency</Link>
          <Link href="/drain-cleaning-austin" className="hover:text-blue-700">Drain Cleaning</Link>
          <Link href="/water-heater-repair-austin" className="hover:text-blue-700">Water Heaters</Link>
          <Link href="/leak-detection-austin" className="hover:text-blue-700">Leak Detection</Link>
          <Link href="/about" className="hover:text-blue-700">About</Link>
          <Link href="/contact" className="hover:text-blue-700">Contact</Link>
        </nav>
        <a href={`tel:${PHONE_NUMBER}`} className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label={`Call us at ${PHONE_NUMBER}`}>Call {PHONE_NUMBER}</a>
        <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="Open menu">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </header>
  );
}
