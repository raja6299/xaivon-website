import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { defaultMetadata, pageMetadata } from '../config/metadata';

export default function PageMeta({
  title,
  description,
  url,
  image,
  keywords,
  noindex
}) {
  const location = useLocation();
  const routeMeta = pageMetadata[location.pathname] || {};

  const finalTitle = title || routeMeta.title || defaultMetadata.title;
  const finalDescription = description || routeMeta.description || defaultMetadata.description;
  const finalUrl = url || (location.pathname === '/' ? 'https://xaivon.com/' : `https://xaivon.com${location.pathname}`);
  const finalImage = image || routeMeta.image || defaultMetadata.image;
  const finalKeywords = keywords || routeMeta.keywords || defaultMetadata.keywords;
  const finalNoindex = noindex !== undefined ? noindex : routeMeta.noindex;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <link rel="canonical" href={finalUrl} />
      <meta name="robots" content={finalNoindex ? "noindex, nofollow" : "index, follow"} />

      {/* OG Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  );
}
