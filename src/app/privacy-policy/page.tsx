// ...removed 'use client' to allow metadata export...
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
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-900">Privacy Policy</h1>
        <p className="text-lg text-gray-800 mb-4">Your privacy matters. {SITE_NAME} only uses your information to help you get the support you need. We never share or sell your information.</p>
        <div className="text-sm text-gray-700 mt-2">If you have questions, just ask. We’re here to help, not to sell.</div>
      </section>
      <div className="callout bg-[#f7f6f3] border rounded p-4 my-4 text-gray-800">We only collect information you provide through our contact form to respond to your needs. Your trust is important to us.</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🚫</span>
          <span className="font-bold text-lg mb-1">We do not sell your data</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🍪</span>
          <span className="font-bold text-lg mb-1">No tracking cookies</span>
        </li>
        <li className="bg-[#f7f6f3] rounded border p-6 flex flex-col items-center text-center">
          <span className="text-2xl mb-1">📬</span>
          <span className="font-bold text-lg mb-1">Used only for communication</span>
        </li>
      </ul>
      <div className="callout bg-[#f7f6f3] border rounded p-4 my-4 text-gray-800">If you have questions about our privacy practices, please <a href="/contact" className="text-blue-700 underline">contact us</a>. We’re happy to listen and answer.</div>
    </>
  );
}
