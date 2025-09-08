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
export default defineConfig(({ mode, command }) => {
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
      command === 'build' && sitemapPlugin(),
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
        output: {
          // Simplified chunk splitting to avoid React duplication issues
          manualChunks: {
            // Keep React as a single chunk to avoid multiple instances
            'react': ['react', 'react-dom', 'react-router-dom'],
            // UI components
            'ui': [
              '@radix-ui/react-accordion',
              '@radix-ui/react-alert-dialog',
              '@radix-ui/react-avatar',
              '@radix-ui/react-dialog',
              '@radix-ui/react-dropdown-menu',
              '@radix-ui/react-label',
              '@radix-ui/react-select',
              '@radix-ui/react-separator',
              '@radix-ui/react-tabs',
              '@radix-ui/react-toast',
              '@radix-ui/react-tooltip',
              '@radix-ui/react-slot'
            ],
            // Utility libraries
            'vendor': [
              'clsx', 
              'tailwind-merge', 
              'class-variance-authority',
              '@tanstack/react-query',
              'lucide-react'
            ]
          }
        }
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
