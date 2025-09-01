
import { SEO_CONFIG, generateDynamicSEO } from '../src/config/seo-config.js';

function injectMetadata(html, pathname) {
  console.log('Injecting static SEO for:', pathname);
  
  // Get SEO data from centralized config
  const manualSEO = SEO_CONFIG[pathname];
  const seoData = manualSEO || generateDynamicSEO(pathname);
  
  console.log('Using SEO data:', seoData);
  
  // Create meta tags HTML
  const metaTags = `
    <title>${seoData.title}</title>
    <meta name="description" content="${seoData.description}" />
    <meta name="keywords" content="${seoData.keywords}" />
    <meta name="robots" content="index,follow" />
    <meta name="seo-source" content="static" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${seoData.canonicalUrl}" />
    <meta property="og:title" content="${seoData.ogTitle}" />
    <meta property="og:description" content="${seoData.ogDescription}" />
    <meta property="og:image" content="${seoData.ogImage}" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${seoData.canonicalUrl}" />
    <meta property="twitter:title" content="${seoData.ogTitle}" />
    <meta property="twitter:description" content="${seoData.ogDescription}" />
    <meta property="twitter:image" content="${seoData.ogImage}" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${seoData.canonicalUrl}" />
  `;
  
  // Replace the placeholder with actual meta tags
  if (html.includes('<!--seo-head-->')) {
    return html.replace('<!--seo-head-->', metaTags);
  }
  
  // Fallback: inject after <head> tag
  return html.replace('<head>', `<head>${metaTags}`);
}

export { injectMetadata };
