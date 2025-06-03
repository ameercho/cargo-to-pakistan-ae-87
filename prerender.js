
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

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

// Complete list of all routes that need to be prerendered
const routesToPrerender = [
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
]

;(async () => {
  console.log('Prerendering routes...')
  
  for (const url of routesToPrerender) {
    try {
      console.log(`Attempting to prerender: ${url}`)
      
      // Get the HTML and route validity from the render function
      const renderResult = await render(url)
      
      if (!renderResult || !renderResult.isValidRoute) {
        console.warn(`⚠️ Route ${url} doesn't match any defined route - skipping prerender`)
        continue
      }
      
      const { html } = renderResult
      
      // Insert the rendered app into the HTML template
      const renderedHtml = template.replace('<!--app-html-->', html)

      // Create directory structure if needed
      const urlPath = url === '/' ? '/index' : url
      const filePath = `dist${urlPath}.html`
      const dir = path.dirname(toAbsolute(filePath))
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      
      // Write the prerendered HTML to the output directory
      fs.writeFileSync(toAbsolute(filePath), renderedHtml)
      console.log(`✅ Pre-rendered: ${filePath}`)
    } catch (error) {
      console.error(`❌ Error prerendering ${url}:`, error.message)
      // Continue with other routes even if one fails
    }
  }
  
  console.log('Prerendering complete!')
})()
