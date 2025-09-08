import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Plugin to generate sitemap during build (only in production)
const sitemapPlugin = () => {
  return {
    name: 'sitemap-generator',
    async buildStart() {
      // Only generate sitemap during production build
      if (process.env.NODE_ENV === 'production') {
        try {
          const { generateSitemap } = await import('./scripts/generate-sitemap.js' as any);
          generateSitemap();
        } catch (error) {
          console.warn('Sitemap generation failed:', error);
        }
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
}));
