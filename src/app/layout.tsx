import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Plumbers ATX',
    template: '%s | Plumbers ATX',
  },
  description: 'Connecting Austin homeowners with local plumbing help. Calm, helpful, and here when you need us.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#f7f6f3] font-sans text-gray-900">
        <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
            <div className="text-2xl font-bold text-blue-900 tracking-tight">Plumbers ATX</div>
            <a href="tel:512-601-4544" className="text-base font-semibold text-blue-800 bg-blue-100 px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" style={{display:'block'}}>512-601-4544</a>
          </div>
          <div className="w-full bg-blue-900 text-white text-center text-sm py-1 font-semibold">24/7 Emergency Plumbing Help</div>
        </header>
        <main className="flex-1 w-full max-w-4xl mx-auto px-2 sm:px-6 py-8">
          {children}
        </main>
        <footer className="w-full border-t border-gray-200 bg-white text-center text-sm text-gray-700 py-6 mt-8">
          <div>We help Austin homeowners find local plumbing help. No pressure. No hidden fees. Just honest support when you need it.</div>
          <div className="mt-2">&copy; {new Date().getFullYear()} Plumbers ATX</div>
        </footer>
        <a href="tel:512-601-4544" className="fixed bottom-4 right-4 bg-blue-800 text-white px-4 py-2 rounded shadow-lg text-lg font-bold block sm:hidden z-50" style={{display:'block'}}>Call 512-601-4544</a>
      </body>
    </html>
  );
}
