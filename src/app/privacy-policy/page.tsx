"use client";
import { SITE_NAME } from '@/lib/constants';

export const metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Read the privacy policy for ${SITE_NAME}. Learn how we protect your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="hero">
        <span className="text-5xl mb-2">🔒</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-blue-800 drop-shadow">Privacy Policy</h1>
        <p className="text-lg text-blue-900 mb-4">Your privacy is important to us. {SITE_NAME} does not share your personal information with third parties.</p>
      </section>
      <div className="callout">We only collect information you provide through our contact form to respond to your inquiries.</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">🚫</span>
          <span className="font-bold text-lg mb-1">We do not sell your data</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">🍪</span>
          <span className="font-bold text-lg mb-1">No tracking cookies</span>
        </li>
        <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
          <span className="text-2xl mb-1">📬</span>
          <span className="font-bold text-lg mb-1">Used only for communication</span>
        </li>
      </ul>
      <div className="callout">If you have questions about our privacy practices, please <a href="/contact" className="text-blue-700 underline">contact us</a>.</div>
    </>
  );
}
