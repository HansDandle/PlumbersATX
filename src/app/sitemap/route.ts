export async function GET() {
  const pages = [
    '',
    'emergency-plumber-austin',
    'drain-cleaning-austin',
    'water-heater-repair-austin',
    'leak-detection-austin',
    'about',
    'contact',
    'areas-served',
    'privacy-policy',
    'terms',
  ];
  const baseUrl = 'https://plumbersatx.com';
  const urls = pages.map((page) => `<url><loc>${baseUrl}/${page}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
