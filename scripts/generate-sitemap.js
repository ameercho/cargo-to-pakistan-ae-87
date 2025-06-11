
import fs from 'fs';
import path from 'path';
import { getSEOData } from '../src/config/seo-config.js';

const baseUrl = 'https://cargotopakistan.ae';

// Routes with their sitemap priorities
const routes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/services', priority: '0.9', changefreq: 'monthly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/faq', priority: '0.6', changefreq: 'monthly' },
  { url: '/service-areas', priority: '0.8', changefreq: 'monthly' },
  
  // Pakistan City Pages
  { url: '/pakistan-cargo-to-karachi', priority: '0.8', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-lahore', priority: '0.8', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-islamabad', priority: '0.8', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-peshawar', priority: '0.8', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-quetta', priority: '0.7', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-faisalabad', priority: '0.7', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-multan', priority: '0.7', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-sialkot', priority: '0.7', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-rawalpindi', priority: '0.7', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-gujranwala', priority: '0.7', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-hyderabad', priority: '0.7', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-bahawalpur', priority: '0.7', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-sargoda', priority: '0.7', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-sukkur', priority: '0.7', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-larkana', priority: '0.7', changefreq: 'monthly' },
  { url: '/pakistan-cargo-to-sheikhupura', priority: '0.7', changefreq: 'monthly' },
  
  // Service Pages
  { url: '/services/sea-freight', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/air-freight', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/full-container', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/packaging', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/insurance', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/courier-service', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/moving-home', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/warehousing', priority: '0.6', changefreq: 'monthly' },
  { url: '/services/consulting', priority: '0.6', changefreq: 'monthly' },
  { url: '/services/customs-clearance', priority: '0.6', changefreq: 'monthly' },
  { url: '/services/secure-handling', priority: '0.6', changefreq: 'monthly' },
  
  // UAE Area Pages
  { url: '/areas/dubai', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/abu-dhabi', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/sharjah', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/ajman', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/ras-al-khaimah', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/fujairah', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/umm-al-quwain', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/al-ain', priority: '0.7', changefreq: 'monthly' },
  
  // Country Routes
  { url: '/dubai-to-pakistan', priority: '0.8', changefreq: 'monthly' },
  { url: '/abu-dhabi-to-pakistan', priority: '0.8', changefreq: 'monthly' },
  { url: '/sharjah-to-pakistan', priority: '0.8', changefreq: 'monthly' },
  { url: '/ajman-to-pakistan', priority: '0.8', changefreq: 'monthly' },
];

// Validation function using static SEO config
function validateCanonicalConsistency(routes) {
  const inconsistentRoutes = [];
  
  routes.forEach(route => {
    try {
      const seoData = getSEOData(route.url);
      const expectedCanonical = `${baseUrl}${route.url}`;
      
      if (seoData.canonicalUrl !== expectedCanonical) {
        inconsistentRoutes.push({
          url: route.url,
          expected: expectedCanonical,
          actual: seoData.canonicalUrl
        });
      } else {
        console.log(`✅ Route ${route.url} has canonical: ${seoData.canonicalUrl}`);
      }
    } catch (error) {
      console.error(`❌ Error validating route ${route.url}:`, error.message);
      inconsistentRoutes.push({
        url: route.url,
        expected: `${baseUrl}${route.url}`,
        actual: 'ERROR'
      });
    }
  });
  
  return inconsistentRoutes;
}

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Validate canonical consistency using static SEO config
  console.log('🔍 Validating canonical URL consistency with static SEO config...');
  const inconsistentRoutes = validateCanonicalConsistency(routes);
  
  if (inconsistentRoutes.length > 0) {
    console.warn('⚠️ Found routes with inconsistent canonical URLs:', inconsistentRoutes);
  }
  
  // Filter routes to only include those with correct canonicals
  const validRoutes = routes.filter(route => {
    try {
      const seoData = getSEOData(route.url);
      const expectedCanonical = `${baseUrl}${route.url}`;
      
      if (seoData.canonicalUrl !== expectedCanonical) {
        console.log(`❌ Excluding ${route.url} - canonical mismatch`);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error(`❌ Error processing route ${route.url}, excluding from sitemap:`, error.message);
      return false;
    }
  });
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${validRoutes.map(route => {
  try {
    const seoData = getSEOData(route.url);
    return `  <url>
    <loc>${seoData.canonicalUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  } catch (error) {
    console.error(`❌ Error generating sitemap entry for ${route.url}:`, error.message);
    return '';
  }
}).filter(entry => entry !== '').join('\n')}
</urlset>
`;

  const publicDir = path.resolve(process.cwd(), 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemapXml);
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`📅 Updated with current date: ${currentDate}`);
  console.log(`📊 Total valid URLs with correct canonical URLs: ${validRoutes.length}`);
  console.log(`🔗 All URLs use canonical tags from static SEO configuration`);
}

// Allow running this script directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap();
}

export { generateSitemap };
