import { SITE_NAME, PHONE_NUMBER, CITY } from '@/lib/constants';

export function AboutPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: SITE_NAME,
    url: 'https://plumbersatx.com/about',
    telephone: PHONE_NUMBER,
    areaServed: CITY,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
