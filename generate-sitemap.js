
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// Set your domain here
const DOMAIN = 'https://www.cargotopakistan.ae';
const LAST_MODIFIED = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Get all routes from pages directory
const routes = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.tsx$/, '').toLowerCase();
    return name === 'index' ? '/' : `/${name}`;
  })
  .filter(route => route !== '/*'); // Filter out any catch-all routes

// Add dynamic routes based on our UAE cities and Pakistan cities
const uaeCities = ['dubai', 'abu-dhabi', 'sharjah', 'ajman'];
const pakistanCities = ['karachi', 'islamabad', 'lahore', 'peshawar'];

uaeCities.forEach(city => {
  routes.push(`/cargo-from-${city}`);
});

pakistanCities.forEach(city => {
  routes.push(`/cargo-to-${city}`);
});

// Generate sitemap XML content
const generateSitemapXML = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  routes.forEach(route => {
    const priority = route === '/' ? '1.0' : '0.8';
    const changefreq = route === '/' ? 'weekly' : 'monthly';
    
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${DOMAIN}${route}</loc>\n`;
    sitemap += `    <lastmod>${LAST_MODIFIED}</lastmod>\n`;
    sitemap += `    <changefreq>${changefreq}</changefreq>\n`;
    sitemap += `    <priority>${priority}</priority>\n`;
    sitemap += `  </url>\n`;
  });

  sitemap += `</urlset>\n`;
  return sitemap;
};

// Write sitemap to public directory
const sitemap = generateSitemapXML();
fs.writeFileSync(toAbsolute('public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
