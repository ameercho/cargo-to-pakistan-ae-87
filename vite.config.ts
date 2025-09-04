import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Plugin to generate sitemap during build
const sitemapPlugin = () => {
  return {
    name: 'sitemap-generator',
    async buildStart() {
      // Dynamic import to avoid TypeScript declaration issues
      const { generateSitemap } = await import('./scripts/generate-sitemap.js' as any);
      generateSitemap();
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
      sitemapPlugin(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // Client build configuration
      outDir: 'dist',
      // Increase chunk size warning limit to reduce noise
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        // Remove manual chunks to avoid React context issues
        external: [],
      },
      // Enable source maps for better debugging in production
      sourcemap: false,
      // Minimize CSS
      cssMinify: true,
      // Use default esbuild minification instead of terser
      minify: true
    },
    // SSR configuration
    ssr: {
      // Don't externalize dependencies for SSR
      noExternal: ['react', 'react-dom', 'react-router-dom']
    }
  };
});
