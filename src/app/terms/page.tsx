"use client";
import { SITE_NAME } from '@/lib/constants';

export const metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description: `Read the terms of service for ${SITE_NAME}. Understand your rights and responsibilities.`,
};

export default function TermsPage() {
  return (
    <>
      <section className="hero">
        <span className="text-5xl mb-2">📄</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-blue-800 drop-shadow">Terms of Service</h1>
        <p className="text-lg text-blue-900 mb-4">By using {SITE_NAME}'s website, you agree to our terms of service. Our services are provided as-is and without warranty.</p>
      </section>
      <div className="callout">We strive for accuracy but cannot guarantee all information is current or error-free. Use our site at your own risk.</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">⚠️</span>
          <span className="font-bold text-lg mb-1">Use at your own risk</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">ℹ️</span>
          <span className="font-bold text-lg mb-1">Informational content</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">❓</span>
          <span className="font-bold text-lg mb-1">Contact us with questions</span>
        </li>
      </ul>
      <div className="callout">For more information, please <a href="/contact" className="text-blue-700 underline">contact us</a>.</div>
    </>
  );
}
