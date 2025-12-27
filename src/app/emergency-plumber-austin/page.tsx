// ...removed 'use client' to allow metadata export...
import Link from 'next/link';
import Image from 'next/image';
import { PHONE_NUMBER, SITE_NAME, CITY } from '@/lib/constants';

export const metadata = {
  title: `Emergency Plumbing Help in ${CITY} | ${SITE_NAME}`,
  description: `Caring, calm support for plumbing emergencies in ${CITY}. We listen and connect you with local help, day or night. Call ${PHONE_NUMBER}.`,
};

export default function EmergencyPlumberPage() {
  return (
    <>
      <section className="hero">
        <div className="mb-2 flex justify-center">
          <Image src="/logo.jpg" alt="Plumbers ATX logo" width={80} height={80} className="rounded" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-900">Emergency Plumbing Help in {CITY}</h1>
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <Image src="/familybr.jpg" alt="Family in kitchen feeling reassured" width={320} height={180} className="rounded border bg-[#f7f6f3]" />
        </div>
        <p className="text-lg text-gray-800 mb-4">Plumbing emergency? We listen and calmly connect you with a local plumber, day or night. No pressure, just help when you need it most.</p>
        <a href={`tel:${PHONE_NUMBER}`} className="inline-block bg-blue-800 text-white px-8 py-3 rounded text-lg font-bold">Call {PHONE_NUMBER}</a>
        <div className="text-sm text-gray-700 mt-2">If you’re worried, just call. We’re here to help, not to sell.</div>
      </section>
      <div className="callout bg-[#f7f6f3] border rounded p-4 my-4 text-gray-800">We connect you with a local, licensed plumber for emergencies. All work is performed by independent professionals, not by this site.</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">💧</span>
          <span className="font-bold text-lg mb-1">Burst pipes</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🚽</span>
          <span className="font-bold text-lg mb-1">Overflowing toilets</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🏠</span>
          <span className="font-bold text-lg mb-1">Flooded basements</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🔧</span>
          <span className="font-bold text-lg mb-1">Major leaks</span>
        </li>
      </ul>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="/drain-cleaning-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Drain Cleaning Help</Link>
        <Link href="/water-heater-repair-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Water Heater Help</Link>
        <Link href="/leak-detection-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Leak Detection Help</Link>
        <Link href="/contact" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full shadow-sm transition">Contact</Link>
      </nav>
    </>
  );
}
