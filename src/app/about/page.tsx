import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME, CITY, PHONE_NUMBER } from '@/lib/constants';

export const metadata = {
  title: `About ${SITE_NAME} | Plumbing Help in ${CITY}`,
  description: `${SITE_NAME} helps Austin homeowners find caring, local plumbing help. Learn how we listen and connect you with the right support.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-900">About {SITE_NAME}</h1>
        <div className="flex flex-wrap gap-6 justify-center my-4">
          <Image src="/familybr.jpg" alt="Family in kitchen" width={300} height={180} className="rounded border object-cover bg-[#f7f6f3]" />
          <Image src="/kitchen%20sink.webp" alt="Clean kitchen sink" width={300} height={180} className="rounded border object-cover bg-[#f7f6f3]" />
        </div>
        <p className="text-lg text-gray-800 mb-4">{SITE_NAME} is not a plumbing company. We listen, then help you find a local, independent plumber in {CITY} who can help. All work is performed by licensed professionals, not by this site.</p>
        <div className="text-sm text-gray-700 mt-2">We care about your peace of mind. No pressure, just help when you need it most.</div>
      </section>
      <div className="callout bg-[#f7f6f3] border rounded p-4 my-4 text-gray-800">We’re here to connect you with the right local plumber for your needs. If you’re not sure what you need, just call. We’re here to help, not to sell.</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 mt-8">
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <Image src="/commercial.png" alt="Commercial plumbing" width={80} height={80} className="mb-2 rounded bg-white" />
          <span className="font-bold text-lg mb-1">Commercial & Residential Help</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <Image src="/sewer.webp" alt="Sewer line" width={80} height={80} className="mb-2 rounded bg-white" />
          <span className="font-bold text-lg mb-1">Drain & Sewer Help</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <Image src="/waterheater.webp" alt="Water heater" width={80} height={80} className="mb-2 rounded bg-white" />
          <span className="font-bold text-lg mb-1">Water Heater Help</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <Image src="/undersink.jpeg" alt="Under sink pipes" width={80} height={80} className="mb-2 rounded bg-white" />
          <span className="font-bold text-lg mb-1">Leak Detection Help</span>
        </li>
      </ul>
      <div className="callout bg-[#f7f6f3] border rounded p-4 my-4 text-gray-800">Have questions? <Link href="/contact" className="text-blue-700 underline">Contact us</Link> or call <a href={`tel:${PHONE_NUMBER}`} className="text-blue-700 underline">{PHONE_NUMBER}</a>. We’re happy to listen and help you find the right support.</div>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="/emergency-plumber-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Emergency Plumbing Help</Link>
        <Link href="/drain-cleaning-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Drain Cleaning Help</Link>
        <Link href="/water-heater-repair-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Water Heater Help</Link>
        <Link href="/leak-detection-austin" className="bg-[#f7f6f3] hover:bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-sm transition">Leak Detection Help</Link>
      </nav>
    </>
  );
}
