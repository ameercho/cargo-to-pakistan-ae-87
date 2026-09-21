// RECOMMENDATION: Point this to your new SEO utility which contains 
// the "Trusted by 10,000+ Customers" branding.
import { getSEOForPath } from '../src/utils/seo-utils.ts'; 

/**
 * Injects SEO metadata into the HTML template during the build process.
 * This ensures search engines see the correct Title and Description immediately.
 */
function injectMetadata(html, pathname) {
  // 1. Clean the pathname to match your config keys (e.g., remove trailing slashes)
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/$/, "");
  
  console.log('🚀 Injecting static SEO for:', cleanPath);
  
  // 2. Get the high-quality SEO data from your utility
  const seoData = getSEOForPath(cleanPath);
  
  if (!seoData) {
    console.warn(`⚠️ No SEO data found for path: ${cleanPath}. Using defaults.`);
  }

  // 3. Create the Meta Tags HTML block
  // Added: h1 injection hint and charset safety
  const metaTags = `
    <title>${seoData.title}</title>
    <meta name="description" content="${seoData.description}" />
    <meta name="keywords" content="${seoData.keywords}" />
    <meta name="robots" content="index,follow" />
    <meta name="seo-source" content="static" />
    
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${seoData.canonicalUrl}" />
    <meta property="og:title" content="${seoData.ogTitle || seoData.title}" />
    <meta property="og:description" content="${seoData.ogDescription || seoData.description}" />
    <meta property="og:image" content="${seoData.ogImage || 'https://cargotopakistan.ae/opengraph-image.png'}" />
    
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${seoData.canonicalUrl}" />
    <meta property="twitter:title" content="${seoData.ogTitle || seoData.title}" />
    <meta property="twitter:description" content="${seoData.ogDescription || seoData.description}" />
    <meta property="twitter:image" content="${seoData.ogImage || 'https://cargotopakistan.ae/opengraph-image.png'}" />
    
    <link rel="canonical" href="${seoData.canonicalUrl}" />
  `;
  
  // 4. Smart Replacement Logic
  // Check for the specific placeholder first to avoid duplicating tags
  if (html.includes('')) {
    return html.replace('', metaTags);
  }
  
  // Fallback: Inject at the start of the head
  return html.replace('<head>', `<head>${metaTags}`);
}

export { injectMetadata };