import { Helmet } from 'react-helmet-async';

export default function PageMeta({ 
  title = 'XAIVON — AI-Powered Business Infrastructure',
  description = 'Enterprise AI automation, logistics solutions, chatbots & agents.',
  url = 'https://xaivon.com',
  image = 'https://xaivon.com/og-image.png'
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* OG Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
