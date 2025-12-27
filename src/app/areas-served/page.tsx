// ...removed 'use client' to allow metadata export...
import Link from 'next/link';
import { SITE_NAME, CITY, PHONE_NUMBER } from '@/lib/constants';

export const metadata = {
  title: `Areas Served | ${SITE_NAME}`,
  description: `${SITE_NAME} helps Austin-area homeowners find caring, local plumbing help. Call ${PHONE_NUMBER} for gentle support in your area.`,
};

export default function AreasServedPage() {
  return (
    <>
      <section className="hero">
        <span className="text-5xl mb-2">📍</span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-900">Areas Served</h1>
        <p className="text-lg text-gray-800 mb-4">{SITE_NAME} helps Austin-area homeowners find caring, local plumbing help. We listen and connect you with a local plumber, day or night.</p>
        <div className="text-sm text-gray-700 mt-2">If you’re not sure if we can help in your area, just call. We’re here to help, not to sell.</div>
      </section>
      <div className="callout bg-[#f7f6f3] border rounded p-4 my-4 text-gray-800">Call <a href={`tel:${PHONE_NUMBER}`} className="text-blue-700 underline">{PHONE_NUMBER}</a> for gentle support. Not sure if we serve your area? <Link href="/contact" className="text-blue-700 underline">Contact us</Link> and we’ll listen to your needs.</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🏙️</span>
          <span className="font-bold text-lg mb-1">Downtown Austin</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🌳</span>
          <span className="font-bold text-lg mb-1">South Austin</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🏡</span>
          <span className="font-bold text-lg mb-1">North Austin</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🌅</span>
          <span className="font-bold text-lg mb-1">East Austin</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🌄</span>
          <span className="font-bold text-lg mb-1">West Austin</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🏘️</span>
          <span className="font-bold text-lg mb-1">Nearby suburbs</span>
        </li>
      </ul>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="/emergency-plumber-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Emergency Plumbing Help</Link>
        <Link href="/drain-cleaning-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Drain Cleaning Help</Link>
        <Link href="/water-heater-repair-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Water Heater Help</Link>
        <Link href="/leak-detection-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Leak Detection Help</Link>
        <Link href="/contact" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full shadow-sm transition">Contact</Link>
      </nav>
    </>
  );
}
