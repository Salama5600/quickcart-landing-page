import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://freshcart.example.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description,
  path = '',
  type = 'website',
  jsonLd,
}) {
  const fullTitle = title.includes('FreshCart')
    ? title
    : `${title} | FreshCart`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:site_name" content="FreshCart" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
