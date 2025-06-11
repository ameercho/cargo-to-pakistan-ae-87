
import fs from 'fs';
import path from 'path';
import { getSEOData } from '../src/config/seo-config.js';

/**
 * Static SEO metadata injection utility
 * Injects SEO metadata into prerendered HTML files at build time
 */

export function injectMetadata(htmlContent, pathname) {
  const seoData = getSEOData(pathname);
  
  // Generate meta tags
  const metaTags = generateMetaTags(seoData);
  
  // Find the closing </head> tag and inject metadata before it
  const headCloseIndex = htmlContent.indexOf('</head>');
  if (headCloseIndex === -1) {
    console.warn(`No </head> tag found for ${pathname}`);
    return htmlContent;
  }
  
  // Inject the metadata
  const updatedHtml = htmlContent.slice(0, headCloseIndex) + 
                     metaTags + 
                     htmlContent.slice(headCloseIndex);
                     
  return updatedHtml;
}

function generateMetaTags(seoData) {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    h1
  } = seoData;
  
  // Default OG image if not specified
  const defaultOgImage = 'https://cargotopakistan.ae/images/dubai-cargo-hero.jpg';
  
  return `
    <!-- SEO Meta Tags - Injected at Build Time -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords}" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Enhanced robots meta for better indexing -->
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="${ogTitle || title}" />
    <meta property="og:description" content="${ogDescription || description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${ogImage || defaultOgImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${title} - Professional cargo services" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Cargo to Pakistan" />
    <meta property="og:locale" content="en_US" />
    
    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@cargotopakistan" />
    <meta name="twitter:title" content="${ogTitle || title}" />
    <meta name="twitter:description" content="${ogDescription || description}" />
    <meta name="twitter:image" content="${ogImage || defaultOgImage}" />
    <meta name="twitter:image:alt" content="${title} - Professional cargo services" />
    
    <!-- Additional SEO Tags -->
    <meta name="author" content="Cargo to Pakistan" />
    <meta httpEquiv="content-language" content="en-US" />
    <meta name="geo.region" content="AE-DU" />
    <meta name="geo.placename" content="Dubai" />
    
    <!-- Business specific meta tags -->
    <meta name="business.contact_data.street_address" content="Dubai, UAE" />
    <meta name="business.contact_data.locality" content="Dubai" />
    <meta name="business.contact_data.region" content="Dubai" />
    <meta name="business.contact_data.country_name" content="United Arab Emirates" />
    <meta name="business.contact_data.phone_number" content="+971504948135" />
    
    <!-- Enhanced indexing hints -->
    <meta name="revisit-after" content="7 days" />
    <meta name="rating" content="general" />
    <meta name="distribution" content="global" />
    <meta name="coverage" content="worldwide" />
    <meta name="target" content="all" />
    
    <!-- Structured Data for Business -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      "name": "Cargo to Pakistan",
      "url": "${canonicalUrl}",
      "description": "${description}",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": "Dubai",
        "addressLocality": "Dubai"
      },
      "geo": {
        "@type": "GeoCoordinates", 
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971-50-494-8135",
        "contactType": "customer service",
        "availableLanguage": ["English", "Urdu", "Arabic"]
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dubai",
          "containedIn": "United Arab Emirates"
        },
        {
          "@type": "Country", 
          "name": "Pakistan"
        }
      ]
    }
    </script>
  `;
}
