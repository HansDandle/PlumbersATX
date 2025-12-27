// ...removed 'use client' to allow metadata export...
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
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-900">Terms of Service</h1>
        <p className="text-lg text-gray-800 mb-4">By using {SITE_NAME}, you agree to our terms. We do our best to provide helpful information and connect you with local plumbers, but we can’t guarantee every detail is perfect.</p>
        <div className="text-sm text-gray-700 mt-2">If you have questions, just ask. We’re here to help, not to sell.</div>
      </section>
      <div className="callout bg-[#f7f6f3] border rounded p-4 my-4 text-gray-800">We strive for accuracy but can’t guarantee all information is current or error-free. Please use our site as a helpful resource, not a substitute for professional advice.</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">⚠️</span>
          <span className="font-bold text-lg mb-1">Use at your own risk</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">ℹ️</span>
          <span className="font-bold text-lg mb-1">Informational content</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">❓</span>
          <span className="font-bold text-lg mb-1">Contact us with questions</span>
        </li>
      </ul>
      <div className="callout bg-[#f7f6f3] border rounded p-4 my-4 text-gray-800">For more information, please <a href="/contact" className="text-blue-700 underline">contact us</a>. We’re happy to listen and answer.</div>
    </>
  );
}
