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
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', '@radix-ui/react-dialog'],
      force: true
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        // Force single React instance
        "react": path.resolve(__dirname, "./node_modules/react"),
        "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
        "react-router-dom": path.resolve(__dirname, "./node_modules/react-router-dom")
      },
      dedupe: ['react', 'react-dom', 'react-router-dom']
    },
    build: {
      // Client build configuration
      outDir: 'dist',
      // Increase chunk size warning limit to reduce noise
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        // Force external dependencies to use single instances
        external: [],
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'router-vendor': ['react-router-dom']
          }
        }
      },
      // Enable source maps for better debugging in production
      sourcemap: false,
      // Minimize CSS
      cssMinify: true,
      // Use default esbuild minification instead of terser
      minify: true
    }
  };
});
