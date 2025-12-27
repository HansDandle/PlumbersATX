import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME, PHONE_NUMBER, CITY } from '@/lib/constants';

export const metadata = {
  title: `${SITE_NAME} | Plumbing Help in ${CITY}`,
  description: `Caring support for Austin homeowners. We help you find local plumbing help, day or night. No pressure. No hidden fees. Call ${PHONE_NUMBER}.`,
};

export default function HomePage() {
  return (
    <>
      <section className="mb-8">
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <Image src="/vancartoon.jpg" alt="Plumbers van cartoon" width={340} height={180} className="rounded border" />
        </div>
        <div className="flex items-center justify-center gap-3 mb-2">
          <Image src="/logo.jpg" alt="Plumbers ATX logo" width={48} height={48} className="rounded" />
          <div className="text-2xl sm:text-4xl font-bold text-blue-900 tracking-tight">Plumbers ATX</div>
        </div>
        <div className="text-lg text-gray-800 mb-2 text-center">Caring help for Austin homeowners, any time of day.</div>
        <div className="text-base text-blue-900 font-semibold mb-4 text-center">24/7 Plumbing Support</div>
        <a href={`tel:${PHONE_NUMBER}`} className="block w-full sm:w-auto bg-blue-800 text-white text-lg font-bold px-6 py-3 rounded mb-4 text-center">Call {PHONE_NUMBER}</a>
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Image src="/familybr.jpg" alt="Family in kitchen" width={320} height={180} className="rounded border" />
          <Image src="/kitchen%20sink.webp" alt="Clean kitchen sink" width={320} height={180} className="rounded border" />
        </div>
        <div className="text-sm text-gray-700 mt-4 text-center">We listen first. No pressure. Just help when you need it most.</div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">How We Can Help</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="bg-[#f7f6f3] border rounded p-4 text-center">
            <Link href="/emergency-plumber-austin" className="text-blue-800 font-semibold underline">Emergency plumbing help</Link>
          </li>
          <li className="bg-[#f7f6f3] border rounded p-4 text-center">
            <Link href="/drain-cleaning-austin" className="text-blue-800 font-semibold underline">Drain cleaning help</Link>
          </li>
          <li className="bg-[#f7f6f3] border rounded p-4 text-center">
            <Link href="/water-heater-repair-austin" className="text-blue-800 font-semibold underline">Water heater help</Link>
          </li>
          <li className="bg-[#f7f6f3] border rounded p-4 text-center">
            <Link href="/leak-detection-austin" className="text-blue-800 font-semibold underline">Leak detection help</Link>
          </li>
        </ul>
        <div className="text-sm text-gray-700 mt-2">We connect you with local, independent plumbers. All work is performed by licensed professionals, not by this site.</div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">Why Neighbors Use Plumbers ATX</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-1">
          <li>Calm, friendly support</li>
          <li>Clear answers, no pressure</li>
          <li>Local plumbers only</li>
          <li>Upfront pricing, no surprises</li>
          <li>Available day or night</li>
        </ul>
        <div className="text-sm text-gray-700 mt-2">We’re here to help, not to sell. If you have questions, just call.</div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">What Neighbors Say</h2>
        <ul className="space-y-4">
          <li className="bg-[#f7f6f3] border rounded p-4">
            <div className="text-gray-800 mb-1">“They listened and helped me find the right plumber. Felt taken care of.”</div>
            <div className="text-sm text-gray-600">— Mike R., South Austin</div>
          </li>
          <li className="bg-[#f7f6f3] border rounded p-4">
            <div className="text-gray-800 mb-1">“No pressure, just clear answers. The plumber was great.”</div>
            <div className="text-sm text-gray-600">— Linda S., Round Rock</div>
          </li>
          <li className="bg-[#f7f6f3] border rounded p-4">
            <div className="text-gray-800 mb-1">“I called these guys because the sh*t was about to hit the fan, literally. They had someone out before my wife caught a whiff of it, thanks almighty!</div>
            <div className="text-sm text-gray-600">— Carlos G., Pflugerville</div>
          </li>
        </ul>
        <div className="text-xs text-gray-500 mt-2">Reviews are from real Austin-area homeowners who used a local plumber found through this site.</div>
      </section>
      <section className="mb-8">
        <div className="text-base text-gray-700 mb-2">We are not a plumbing company. We help you find a local, independent plumber. All work is performed by licensed professionals, not by this site.</div>
        <div className="text-sm text-gray-600">If you’re not sure what you need, just call. We’re here to help, not to sell.</div>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <Image src="/rockplumbers.jpg" alt="Austin rock plumbers group photo" width={340} height={180} className="rounded border" />
        </div>
      </section>
      <nav className="flex flex-wrap justify-center gap-2 mt-6">
        <Link href="/emergency-plumber-austin" className="text-blue-800 underline">Emergency Plumber</Link>
        <Link href="/drain-cleaning-austin" className="text-blue-800 underline">Drain Cleaning</Link>
        <Link href="/water-heater-repair-austin" className="text-blue-800 underline">Water Heater Repair</Link>
        <Link href="/leak-detection-austin" className="text-blue-800 underline">Leak Detection</Link>
        <Link href="/about" className="text-blue-800 underline">About</Link>
        <Link href="/contact" className="text-blue-800 underline">Contact</Link>
        <Link href="/areas-served" className="text-blue-800 underline">Areas Served</Link>
      </nav>
    </>
  );
}
