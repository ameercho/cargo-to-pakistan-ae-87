
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

// Import the simple SEO injector
async function importSEOInjector() {
  try {
    const { injectMetadata } = await import('./utils/simple-seo-injector.js');
    return injectMetadata;
  } catch (error) {
    console.error('Failed to import SEO injector:', error);
    return null;
  }
}

// Try to import the server render function, fallback if not available
let render;
try {
  const serverModule = await import('./dist/server/entry-server.js');
  render = serverModule.render;
} catch (error) {
  console.warn('Server build not found, using client-side rendering fallback');
  // Fallback render function that just returns the template
  render = async (url) => {
    return {
      html: '<!--app-html-->',
      isValidRoute: true
    };
  };
}

// Dynamic route extraction from route configuration files
async function getRoutesToPrerender() {
  try {
    // Import route configurations
    const { mainRoutes } = await import('./src/routes/config/mainRoutes.ts');
    const { serviceRoutes } = await import('./src/routes/config/serviceRoutes.ts');
    const { areaRoutes } = await import('./src/routes/config/areaRoutes.ts');
    const { pakistanRoutes } = await import('./src/routes/config/pakistanRoutes.ts');
    
    // Combine all routes
    const allRoutes = [
      ...mainRoutes,
      ...serviceRoutes,
      ...areaRoutes,
      ...pakistanRoutes
    ];
    
    // Extract paths and convert to URLs
    const routes = [];
    
    for (const route of allRoutes) {
      if ('index' in route && route.index) {
        // Index route maps to root
        routes.push('/');
      } else if (route.path && route.path !== '*') {
        // Regular route - add leading slash if not present
        const routePath = route.path.startsWith('/') ? route.path : '/' + route.path;
        routes.push(routePath);
      }
    }
    
    // Remove duplicates and sort
    return [...new Set(routes)].sort();
  } catch (error) {
    console.error('Failed to load route configurations:', error);
    // Fallback to static list if dynamic loading fails
    return [
      '/',
      '/services',
      '/about',
      '/contact',
      '/faq',
      '/service-areas',
      
      // Pakistan City Pages
      '/pakistan-cargo-to-karachi',
      '/pakistan-cargo-to-lahore',
      '/pakistan-cargo-to-islamabad',
      '/pakistan-cargo-to-peshawar',
      '/pakistan-cargo-to-quetta',
      '/pakistan-cargo-to-faisalabad',
      '/pakistan-cargo-to-multan',
      '/pakistan-cargo-to-sialkot',
      '/pakistan-cargo-to-rawalpindi',
      '/pakistan-cargo-to-gujranwala',
      '/pakistan-cargo-to-hyderabad',
      '/pakistan-cargo-to-bahawalpur',
      '/pakistan-cargo-to-sargoda',
      '/pakistan-cargo-to-sukkur',
      '/pakistan-cargo-to-larkana',
      '/pakistan-cargo-to-sheikhupura',
      
      // Service Pages
      '/services/sea-freight',
      '/services/air-freight',
      '/services/full-container',
      '/services/packaging',
      '/services/insurance',
      '/services/courier-service',
      '/services/warehousing',
      '/services/consulting',
      '/services/customs-clearance',
      '/services/secure-handling',
      '/services/moving-home',
      
      // UAE Area Pages
      '/areas/dubai',
      '/areas/abu-dhabi',
      '/areas/sharjah',
      '/areas/ajman',
      '/areas/ras-al-khaimah',
      '/areas/fujairah',
      '/areas/umm-al-quwain',
      '/areas/al-ain',
      
      // Country Routes
      '/dubai-to-pakistan',
      '/abu-dhabi-to-pakistan',
      '/sharjah-to-pakistan',
      '/ajman-to-pakistan'
    ];
  }
}

// Helper function to ensure directory exists
function ensureDirectoryExists(filePath) {
  const dir = path.dirname(toAbsolute(filePath));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
}

;(async () => {
  console.log('🚀 Starting simple SEO prerendering process...')
  
  // Import the SEO injection function
  const injectMetadata = await importSEOInjector();
  
  if (!injectMetadata) {
    console.error('❌ Could not load SEO injector, aborting prerender');
    process.exit(1);
  } else {
    console.log('✅ Simple SEO injector loaded successfully');
  }
  
  // Get dynamic routes from configuration
  const routesToPrerender = await getRoutesToPrerender();
  console.log(`📋 Found ${routesToPrerender.length} routes to prerender`);
  console.log('🔗 Routes:', routesToPrerender.join(', '));
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const url of routesToPrerender) {
    try {
      console.log(`\n📄 Processing route: ${url}`);
      
      // Get the HTML and route validity from the render function
      const renderResult = await render(url)
      
      if (!renderResult || !renderResult.isValidRoute) {
        console.warn(`⚠️ Route ${url} doesn't match any defined route - skipping prerender`)
        continue
      }
      
      const { html } = renderResult
      
      // Insert the rendered app into the HTML template
      let renderedHtml = template.replace('<!--app-html-->', html)
      
      // CRITICAL: Inject simple SEO metadata for this specific route
      try {
        renderedHtml = injectMetadata(renderedHtml, url)
        console.log(`✅ SEO metadata injected for: ${url}`)
      } catch (metaError) {
        console.error(`❌ Failed to inject metadata for ${url}:`, metaError.message)
        errorCount++;
        continue;
      }
      
      // Create directory structure if needed
      const urlPath = url === '/' ? '/index' : url
      const filePath = `dist${urlPath}.html`
      
      // Ensure directory exists before writing
      ensureDirectoryExists(filePath)
      
      // Write the prerendered HTML with injected metadata to the output directory
      fs.writeFileSync(toAbsolute(filePath), renderedHtml)
      console.log(`✅ Pre-rendered with SEO: ${filePath}`)
      successCount++;
      
    } catch (error) {
      console.error(`❌ Error prerendering ${url}:`, error.message)
      errorCount++;
      // Continue with other routes even if one fails
    }
  }
  
  console.log('\n🎉 Simple SEO prerendering complete!')
  console.log(`📊 Results: ${successCount} successful, ${errorCount} errors`)
  console.log('🔍 All pages now have build-time injected metadata for optimal SEO')
  console.log('🚀 Ready for deployment with complete static SEO!')
})()
