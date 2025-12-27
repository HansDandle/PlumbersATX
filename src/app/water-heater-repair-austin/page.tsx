// ...removed 'use client' to allow metadata export...
import Link from 'next/link';
import { PHONE_NUMBER, SITE_NAME, CITY } from '@/lib/constants';

export const metadata = {
  title: `Water Heater Help in ${CITY} | ${SITE_NAME}`,
  description: `Caring help for water heater worries in ${CITY}. We listen and connect you with local plumbers. Call ${PHONE_NUMBER} for gentle support.`,
};

export default function WaterHeaterRepairPage() {
  return (
    <>
      <section className="hero">
        <span className="text-5xl mb-2">🔥</span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-900">Water Heater Help in {CITY}</h1>
        <p className="text-lg text-gray-800 mb-4">No hot water? We listen and connect you with a local plumber who can help, day or night. No pressure, just support.</p>
        <a href={`tel:${PHONE_NUMBER}`} className="inline-block bg-blue-800 text-white px-8 py-3 rounded text-lg font-bold">Call {PHONE_NUMBER}</a>
        <div className="text-sm text-gray-700 mt-2">We care about your peace of mind. If you’re not sure what you need, just call.</div>
      </section>
      <div className="callout bg-[#f7f6f3] border rounded p-4 my-4 text-gray-800">We help you find the right local plumber for your water heater problem. All work is performed by licensed professionals, not by this site.</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🔌</span>
          <span className="font-bold text-lg mb-1">Gas & electric</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">💧</span>
          <span className="font-bold text-lg mb-1">Tankless systems</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🛠️</span>
          <span className="font-bold text-lg mb-1">Maintenance</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🔄</span>
          <span className="font-bold text-lg mb-1">Installation</span>
        </li>
      </ul>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="/emergency-plumber-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Emergency Plumbing Help</Link>
        <Link href="/drain-cleaning-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Drain Cleaning Help</Link>
        <Link href="/leak-detection-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Leak Detection Help</Link>
        <Link href="/contact" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full shadow-sm transition">Contact</Link>
      </nav>
    </>
  );
}
