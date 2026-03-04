import fs from 'fs';
import path from 'path';

const baseUrl = 'https://cargotopakistan.ae';

// Simple fallback SEO function
function getFallbackSEO(url) {
  return {
    canonicalUrl: `${baseUrl}${url}`
  };
}

// FULL LIST: 54 Routes to match your prerenderer
const routes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/services', priority: '0.9', changefreq: 'monthly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/faq', priority: '0.6', changefreq: 'monthly' },
  { url: '/service-areas', priority: '0.8', changefreq: 'monthly' },
  { url: '/get-a-quote', priority: '0.9', changefreq: 'monthly' }, // ADDED
  { url: '/areas', priority: '0.8', changefreq: 'monthly' },      // ADDED
  { url: '/thank-you', priority: '0.1', changefreq: 'yearly' },   // ADDED

  // Specific Service Landing Pages
  { url: '/door-to-door-cargo', priority: '0.8', changefreq: 'monthly' }, // ADDED

  // Pakistan City Pages (Slug-based)
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

  // Short-slug City Pages (Matches your Prerender log)
  { url: '/karachi-cargo', priority: '0.8', changefreq: 'monthly' },   // ADDED
  { url: '/lahore-cargo', priority: '0.8', changefreq: 'monthly' },    // ADDED
  { url: '/islamabad-cargo', priority: '0.8', changefreq: 'monthly' }, // ADDED
  { url: '/peshawar-cargo', priority: '0.8', changefreq: 'monthly' },  // ADDED

  // Service Category Pages
  { url: '/services/sea-freight', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/air-freight', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/full-container', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/packaging', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/courier-service', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/moving-home', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/warehousing', priority: '0.6', changefreq: 'monthly' },
  { url: '/services/consulting', priority: '0.6', changefreq: 'monthly' },
  { url: '/services/customs-clearance', priority: '0.6', changefreq: 'monthly' },
  { url: '/services/secure-handling', priority: '0.6', changefreq: 'monthly' },
  { url: '/services/cross-stuffing', priority: '0.6', changefreq: 'monthly' },
  { url: '/services/door-to-door', priority: '0.8', changefreq: 'monthly' }, // ADDED

  // UAE Area Pages
  { url: '/areas/dubai', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/abu-dhabi', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/sharjah', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/ajman', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/ras-al-khaimah', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/fujairah', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/umm-al-quwain', priority: '0.7', changefreq: 'monthly' },
  { url: '/areas/al-ain', priority: '0.7', changefreq: 'monthly' },

  // Major Route Pages
  { url: '/dubai-to-pakistan', priority: '0.8', changefreq: 'monthly' },
  { url: '/abu-dhabi-to-pakistan', priority: '0.8', changefreq: 'monthly' },
  { url: '/sharjah-to-pakistan', priority: '0.8', changefreq: 'monthly' },
  { url: '/ajman-to-pakistan', priority: '0.8', changefreq: 'monthly' },
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  console.log('🔍 Generating sitemap with complete route coverage...');
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
  const seoData = getFallbackSEO(route.url);
  return `  <url>
    <loc>${seoData.canonicalUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  const publicDir = path.resolve(process.cwd(), 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemapXml);
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`📅 Updated with current date: ${currentDate}`);
  console.log(`📊 Total URLs: ${routes.length}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap();
}

export { generateSitemap };