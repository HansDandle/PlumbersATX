import { PHONE_NUMBER } from '@/lib/constants';

export default function CallCTA() {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden bg-gradient-to-r from-blue-600 to-blue-400 text-white px-10 py-4 rounded-full shadow-2xl text-lg font-bold tracking-wide border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-400 animate-bounce"
      aria-label={`Call us at ${PHONE_NUMBER}`}
    >
      <svg className="inline mr-2" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.16a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg>
      Call {PHONE_NUMBER}
    </a>
  );
}
