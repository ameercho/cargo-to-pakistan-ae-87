
// Static SEO metadata injector for build-time injection
// This replaces React Helmet with pure static HTML generation

import { getSEOData } from '../src/config/seo-config.js';

/**
 * Generates HTML meta tags from SEO data
 * @param {Object} seoData - SEO configuration object
 * @returns {string} - HTML meta tags
 */
function generateMetaTags(seoData) {
  const tags = [];
  
  // Title tag
  if (seoData.title) {
    tags.push(`<title>${escapeHtml(seoData.title)}</title>`);
  }
  
  // Basic meta tags
  if (seoData.description) {
    tags.push(`<meta name="description" content="${escapeHtml(seoData.description)}" />`);
  }
  
  if (seoData.keywords) {
    tags.push(`<meta name="keywords" content="${escapeHtml(seoData.keywords)}" />`);
  }
  
  // Canonical URL
  if (seoData.canonicalUrl) {
    tags.push(`<link rel="canonical" href="${escapeHtml(seoData.canonicalUrl)}" />`);
  }
  
  // Open Graph tags
  if (seoData.ogTitle) {
    tags.push(`<meta property="og:title" content="${escapeHtml(seoData.ogTitle)}" />`);
  }
  
  if (seoData.ogDescription) {
    tags.push(`<meta property="og:description" content="${escapeHtml(seoData.ogDescription)}" />`);
  }
  
  if (seoData.ogImage) {
    tags.push(`<meta property="og:image" content="${escapeHtml(seoData.ogImage)}" />`);
  }
  
  if (seoData.canonicalUrl) {
    tags.push(`<meta property="og:url" content="${escapeHtml(seoData.canonicalUrl)}" />`);
  }
  
  // Default Open Graph type
  tags.push(`<meta property="og:type" content="website" />`);
  tags.push(`<meta property="og:site_name" content="Cargo to Pakistan" />`);
  
  // Twitter Card tags
  tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  
  if (seoData.ogTitle) {
    tags.push(`<meta name="twitter:title" content="${escapeHtml(seoData.ogTitle)}" />`);
  }
  
  if (seoData.ogDescription) {
    tags.push(`<meta name="twitter:description" content="${escapeHtml(seoData.ogDescription)}" />`);
  }
  
  if (seoData.ogImage) {
    tags.push(`<meta name="twitter:image" content="${escapeHtml(seoData.ogImage)}" />`);
  }
  
  // Additional meta tags
  tags.push(`<meta name="robots" content="index, follow" />`);
  tags.push(`<meta name="author" content="Cargo to Pakistan" />`);
  tags.push(`<meta name="language" content="en" />`);
  
  return tags.join('\n    ');
}

/**
 * Escapes HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text
 */
function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return text.replace(/[&<>"']/g, (match) => map[match]);
}

/**
 * Injects SEO metadata into HTML at build time
 * @param {string} html - Original HTML content
 * @param {string} route - Current route path
 * @returns {Promise<string>} - HTML with injected metadata
 */
export async function injectMetadata(html, route) {
  try {
    console.log(`🔍 Injecting SEO metadata for route: ${route}`);
    
    // Get SEO data for the current route
    const seoData = getSEOData(route);
    
    if (!seoData) {
      console.warn(`⚠️ No SEO data found for route: ${route}`);
      return html;
    }
    
    // Generate meta tags
    const metaTags = generateMetaTags(seoData);
    
    // Inject the meta tags into the HTML
    const updatedHtml = html.replace('<!--seo-head-->', metaTags);
    
    console.log(`✅ Successfully injected SEO metadata for: ${route}`);
    console.log(`📝 Title: ${seoData.title}`);
    console.log(`📄 Description: ${seoData.description?.substring(0, 100)}...`);
    
    return updatedHtml;
    
  } catch (error) {
    console.error(`❌ Error injecting metadata for ${route}:`, error);
    
    // Fallback: inject basic metadata
    const fallbackMeta = `
    <title>Cargo to Pakistan from UAE | Professional Shipping Services</title>
    <meta name="description" content="Professional cargo shipping services from UAE to Pakistan with competitive rates and reliable delivery." />
    <meta name="keywords" content="cargo to pakistan, uae pakistan shipping, professional cargo services" />
    <link rel="canonical" href="https://cargotopakistan.ae${route}" />
    <meta property="og:title" content="Cargo to Pakistan from UAE" />
    <meta property="og:description" content="Professional cargo shipping services from UAE to Pakistan." />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Cargo to Pakistan" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="robots" content="index, follow" />`;
    
    return html.replace('<!--seo-head-->', fallbackMeta);
  }
}

/**
 * Validates that SEO data contains required fields
 * @param {Object} seoData - SEO data to validate
 * @returns {boolean} - Whether SEO data is valid
 */
function validateSEOData(seoData) {
  if (!seoData) return false;
  
  const required = ['title', 'description'];
  const missing = required.filter(field => !seoData[field]);
  
  if (missing.length > 0) {
    console.warn(`⚠️ Missing required SEO fields: ${missing.join(', ')}`);
    return false;
  }
  
  return true;
}
