// This file provides JSON-LD schema for embedding in pages
export function LocalBusinessSchema({ name, phone, city }: { name: string; phone: string; city: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name,
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
