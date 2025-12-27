"use client";
import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME, CITY, PHONE_NUMBER } from '@/lib/constants';

  title: `About ${SITE_NAME} | Plumbing Lead Generation in ${CITY}`,
  description: `${SITE_NAME} is a lead generation service connecting people in ${CITY} with independent local plumbers. Learn how we work.`,
};

  return (
    <>
      <section className="hero">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-blue-800 drop-shadow">About {SITE_NAME}</h1>
        <div className="flex flex-wrap gap-6 justify-center my-4">
          <Image src="/familybr.jpg" alt="Family in kitchen" width={300} height={180} className="rounded-xl shadow object-cover" />
          <Image src="/kitchen%20sink.webp" alt="Clean kitchen sink" width={300} height={180} className="rounded-xl shadow object-cover" />
        </div>
        <p className="text-lg text-blue-900 mb-4">{SITE_NAME} is not a plumbing company. We are a lead generation service that connects people in {CITY} with independent, local plumbing professionals. We do not provide plumbing services directly and are not licensed plumbers.</p>
      </section>
      <div className="callout">We help you find the right local plumber for your needs. All service work is performed by independent, third-party professionals.</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 mt-8">
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <Image src="/commercial.png" alt="Commercial plumbing" width={80} height={80} className="mb-2 rounded" />
          <span className="font-bold text-lg mb-1">Commercial & Residential</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <Image src="/sewer.webp" alt="Sewer line" width={80} height={80} className="mb-2 rounded" />
          <span className="font-bold text-lg mb-1">Drain & Sewer Help</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <Image src="/waterheater.webp" alt="Water heater" width={80} height={80} className="mb-2 rounded" />
          <span className="font-bold text-lg mb-1">Water Heater Issues</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <Image src="/undersink.jpeg" alt="Under sink pipes" width={80} height={80} className="mb-2 rounded" />
          <span className="font-bold text-lg mb-1">Leak Detection</span>
        </li>
      </ul>
      <div className="callout">Have questions? <Link href="/contact" className="text-blue-700 underline">Contact us</Link> or call <a href={`tel:${PHONE_NUMBER}`} className="text-blue-700 underline">{PHONE_NUMBER}</a>.</div>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="/emergency-plumber-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Emergency Plumber</Link>
        <Link href="/drain-cleaning-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Drain Cleaning</Link>
        <Link href="/water-heater-repair-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Water Heater Repair</Link>
        <Link href="/leak-detection-austin" className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Leak Detection</Link>
      </nav>
    </>
  );
}
