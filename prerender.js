
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Discover all route files in the pages directory to find potential routes
const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.tsx$/, '').toLowerCase()
    return name === 'index' ? '/' : `/${name}`
  })

;(async () => {
  console.log('Prerendering routes...')
  
  for (const url of routesToPrerender) {
    try {
      // Get the HTML and route validity from the render function
      const { html, isValidRoute } = render(url)
      
      if (!isValidRoute) {
        console.warn(`⚠️ Route ${url} doesn't match any defined route - skipping prerender`)
        continue
      }
      
      // Insert the rendered app into the HTML template
      const renderedHtml = template.replace('<!--app-html-->', html)

      // Write the prerendered HTML to the output directory
      const filePath = `dist${url === '/' ? '/index' : url}.html`
      fs.writeFileSync(toAbsolute(filePath), renderedHtml)
      console.log(`✅ Pre-rendered: ${filePath}`)
    } catch (error) {
      console.error(`❌ Error prerendering ${url}:`, error)
    }
  }
  
  console.log('Prerendering complete!')
})()
