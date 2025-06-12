
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
  ogImage?: string;
  ogType?: string;
}

const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  robots = "index,follow",
  ogImage = "https://cargotopakistan.ae/opengraph-image.png",
  ogType = "website"
}) => {
  const currentUrl = canonical || `https://cargotopakistan.ae${window.location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Cargo to Pakistan" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default PageSEO;
