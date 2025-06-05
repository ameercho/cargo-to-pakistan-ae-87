
import { Helmet } from "react-helmet-async";
import { SEOData } from "@/types";
import { SEO_DEFAULTS, COMPANY_INFO } from "@/constants";

interface SEOHeadProps {
  seoData: SEOData;
  structuredData?: object;
}

const SEOHead = ({ seoData, structuredData }: SEOHeadProps) => {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
  } = seoData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Self-referencing canonical URL - this is crucial for SEO */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Ensure pages are indexable */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage || SEO_DEFAULTS.defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:locale" content={SEO_DEFAULTS.locale} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO_DEFAULTS.twitterHandle} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || SEO_DEFAULTS.defaultImage} />
      
      {/* Additional SEO Tags */}
      <meta name="author" content={COMPANY_INFO.name} />
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="geo.region" content={SEO_DEFAULTS.region} />
      <meta name="geo.placename" content={SEO_DEFAULTS.placeName} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
