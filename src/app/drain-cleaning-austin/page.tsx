"use client";
import Link from 'next/link';
import { PHONE_NUMBER, SITE_NAME, CITY } from '@/lib/constants';

export const metadata = {
  title: `Drain Cleaning in ${CITY} | ${SITE_NAME}`,
  description: `Professional drain cleaning and clog removal in ${CITY}. Fast, affordable, and effective. Call ${PHONE_NUMBER} for service today.`,
};

export default function DrainCleaningPage() {
  return (
    <>
      <section className="hero">
        <span className="text-5xl mb-2">🌀</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-blue-800 drop-shadow">Drain Cleaning in {CITY}</h1>
        <p className="text-lg text-blue-900 mb-4">Clogged drain? Our experts clear blockages fast. Same-day service available.</p>
        <a href={`tel:${PHONE_NUMBER}`} className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-full shadow-lg text-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label={`Call us at ${PHONE_NUMBER}`}>Call {PHONE_NUMBER}</a>
      </section>
      <div className="callout">We use safe, effective methods to restore flow to your drains and pipes. Request a quote or call us now.</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">🍽️</span>
          <span className="font-bold text-lg mb-1">Kitchen sinks</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">🛁</span>
          <span className="font-bold text-lg mb-1">Showers & tubs</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">🚽</span>
          <span className="font-bold text-lg mb-1">Bathroom drains</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">🕳️</span>
          <span className="font-bold text-lg mb-1">Main sewer lines</span>
        </li>
      </ul>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="/emergency-plumber-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Emergency Plumber</Link>
        <Link href="/water-heater-repair-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Water Heater Repair</Link>
        <Link href="/leak-detection-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Leak Detection</Link>
        <Link href="/contact" className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full shadow-sm transition">Contact</Link>
      </nav>
    </>
  );
}
