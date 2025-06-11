
// Static SEO metadata injection utility for build-time HTML enhancement

export function injectMetadata(html, pathname) {
  // Import the SEO config - handle both .js and .ts extensions
  let getSEOData;
  try {
    // Try to import from the JS version first
    const seoConfig = await import('../src/config/seo-config.js');
    getSEOData = seoConfig.getSEOData;
  } catch (error) {
    console.log('No JS config found, trying TS config...');
    try {
      // Fallback to TypeScript version
      const seoConfig = await import('../src/config/seo-config.ts');
      getSEOData = seoConfig.getSEOData;
    } catch (tsError) {
      console.error('Could not import SEO config:', error, tsError);
      return html;
    }
  }

  if (!getSEOData) {
    console.warn('No getSEOData function found, returning original HTML');
    return html;
  }

  const seoData = getSEOData(pathname);
  
  // Generate meta tags HTML
  const metaTags = generateMetaTags(seoData);
  
  // Inject meta tags into the head section
  const headCloseIndex = html.indexOf('</head>');
  if (headCloseIndex === -1) {
    console.warn('No </head> tag found, cannot inject metadata');
    return html;
  }
  
  // Insert meta tags before closing head tag
  const beforeHead = html.substring(0, headCloseIndex);
  const afterHead = html.substring(headCloseIndex);
  
  return beforeHead + metaTags + afterHead;
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

  return `
    <!-- Static SEO Meta Tags -->
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="keywords" content="${escapeHtml(keywords)}" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="${escapeHtml(ogTitle || title)}" />
    <meta property="og:description" content="${escapeHtml(ogDescription || description)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:type" content="website" />
    ${ogImage ? `<meta property="og:image" content="${escapeHtml(ogImage)}" />` : ''}
    
    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(ogTitle || title)}" />
    <meta name="twitter:description" content="${escapeHtml(ogDescription || description)}" />
    ${ogImage ? `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />` : ''}
    
    <!-- Additional SEO Tags -->
    <meta name="robots" content="index, follow" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="7 days" />
    <meta name="author" content="Cargo to Pakistan" />
    
    <!-- Geo Tags -->
    <meta name="geo.region" content="AE-DU" />
    <meta name="geo.placename" content="Dubai, UAE" />
    <meta name="geo.position" content="25.2048;55.2708" />
    <meta name="ICBM" content="25.2048, 55.2708" />
    
  `;
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
