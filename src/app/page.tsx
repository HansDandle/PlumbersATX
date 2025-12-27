import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME, PHONE_NUMBER, CITY } from '@/lib/constants';

export const metadata = {
  title: `${SITE_NAME} | Connect with Local Plumbing Pros in ${CITY}`,
  description: `Looking for plumbing help in ${CITY}? ${SITE_NAME} connects you with trusted, independent local plumbers for emergency service, drain cleaning, water heater repair, and leak detection. Call us at ${PHONE_NUMBER}.`,
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-800 drop-shadow">{SITE_NAME}</h1>
        <p className="text-lg sm:text-xl mb-6 text-blue-900">Connecting you with local, independent plumbing professionals in {CITY}</p>
        <a href={`tel:${PHONE_NUMBER}`} className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-full shadow-lg text-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label={`Call us at ${PHONE_NUMBER}`}>Call {PHONE_NUMBER}</a>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <Image src="/familybr.jpg" alt="Family in kitchen" width={350} height={220} className="rounded-xl shadow-lg object-cover" />
          <Image src="/kitchen%20sink.webp" alt="Clean kitchen sink" width={350} height={220} className="rounded-xl shadow-lg object-cover" />
        </div>
      </section>
      <div className="callout mt-6">{SITE_NAME} is not a plumbing company. We connect you with local, independent plumbing professionals. We do not provide plumbing services directly.</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 mt-8">
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <Image src="/commercial.png" alt="Commercial plumbing" width={80} height={80} className="mb-2 rounded" />
          <span className="font-bold text-lg mb-1">Commercial & Residential</span>
          <span className="text-gray-600">Connect with pros for any job</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <Image src="/sewer.webp" alt="Sewer line" width={80} height={80} className="mb-2 rounded" />
          <span className="font-bold text-lg mb-1">Drain & Sewer Help</span>
          <span className="text-gray-600">Find help for clogs and backups</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <Image src="/waterheater.webp" alt="Water heater" width={80} height={80} className="mb-2 rounded" />
          <span className="font-bold text-lg mb-1">Water Heater Issues</span>
          <span className="text-gray-600">Connect with water heater pros</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <Image src="/undersink.jpeg" alt="Under sink pipes" width={80} height={80} className="mb-2 rounded" />
          <span className="font-bold text-lg mb-1">Leak Detection</span>
          <span className="text-gray-600">Find help for hidden leaks</span>
        </li>
      </ul>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="/emergency-plumber-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Emergency Plumber</Link>
        <Link href="/drain-cleaning-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Drain Cleaning</Link>
        <Link href="/water-heater-repair-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Water Heater Repair</Link>
        <Link href="/leak-detection-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Leak Detection</Link>
        <Link href="/about" className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full shadow-sm transition">About</Link>
        <Link href="/contact" className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full shadow-sm transition">Contact</Link>
        <Link href="/areas-served" className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full shadow-sm transition">Areas Served</Link>
      </nav>
    </>
  );
}
