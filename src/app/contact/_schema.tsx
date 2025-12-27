import { SITE_NAME, PHONE_NUMBER, CITY } from '@/lib/constants';

export function ContactPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: SITE_NAME,
    url: 'https://plumbersatx.com/contact',
    contactOption: 'TollFree',
    telephone: PHONE_NUMBER,
    areaServed: CITY,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
