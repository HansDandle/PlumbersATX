import Link from 'next/link';
import { SITE_NAME, PHONE_NUMBER, CITY } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-blue-50 via-white to-white py-8 mt-16 border-t border-blue-100">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#2563eb"/><path d="M10 18l6-6 6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>&copy; {new Date().getFullYear()} {SITE_NAME} | {CITY}</span>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-blue-700">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-blue-700">Terms</Link>
        </div>
        <a href={`tel:${PHONE_NUMBER}`} className="underline text-blue-700 hover:text-blue-900 transition" aria-label={`Call us at ${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
      </div>
    </footer>
  );
}
