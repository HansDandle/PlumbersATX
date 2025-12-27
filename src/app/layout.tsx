import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallCTA from '@/components/CallCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Plumbers ATX',
    template: '%s | Plumbers ATX',
  },
  description: 'Austin TX plumbing company offering emergency, drain cleaning, water heater repair, and leak detection services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 font-sans text-gray-900">
        <Header />
        <main className="flex-1 w-full max-w-4xl mx-auto px-2 sm:px-6 py-8">
          {children}
        </main>
        <Footer />
        <CallCTA />
      </body>
    </html>
  );
}
