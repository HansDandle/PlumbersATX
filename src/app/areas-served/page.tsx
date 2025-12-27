"use client";
import Link from 'next/link';
import { SITE_NAME, CITY, PHONE_NUMBER } from '@/lib/constants';

export const metadata = {
  title: `Areas Served | ${SITE_NAME}`,
  description: `${SITE_NAME} provides plumbing services throughout ${CITY} and nearby communities. Call ${PHONE_NUMBER} for service in your area.`,
};

export default function AreasServedPage() {
  return (
    <>
      <section className="hero">
        <span className="text-5xl mb-2">📍</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-blue-800 drop-shadow">Areas Served</h1>
        <p className="text-lg text-blue-900 mb-4">{SITE_NAME} proudly serves all of {CITY} and surrounding neighborhoods.</p>
      </section>
      <div className="callout">If you need a plumber in the Austin area, call <a href={`tel:${PHONE_NUMBER}`} className="text-blue-700 underline">{PHONE_NUMBER}</a>. Not sure if we serve your area? <Link href="/contact" className="text-blue-700 underline">Contact us</Link> for more information.</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">🏙️</span>
          <span className="font-bold text-lg mb-1">Downtown Austin</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">🌳</span>
          <span className="font-bold text-lg mb-1">South Austin</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">🏡</span>
          <span className="font-bold text-lg mb-1">North Austin</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">🌅</span>
          <span className="font-bold text-lg mb-1">East Austin</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">🌄</span>
          <span className="font-bold text-lg mb-1">West Austin</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">🏘️</span>
          <span className="font-bold text-lg mb-1">Nearby suburbs</span>
        </li>
      </ul>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="/emergency-plumber-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Emergency Plumber</Link>
        <Link href="/drain-cleaning-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Drain Cleaning</Link>
        <Link href="/water-heater-repair-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Water Heater Repair</Link>
        <Link href="/leak-detection-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Leak Detection</Link>
        <Link href="/contact" className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full shadow-sm transition">Contact</Link>
      </nav>
    </>
  );
}
