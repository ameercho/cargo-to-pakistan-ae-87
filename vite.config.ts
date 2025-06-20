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
        output: {
          // Manual chunk splitting for better caching
          manualChunks: {
            // React and React DOM in separate chunk
            'react-vendor': ['react', 'react-dom'],
            // React Router in separate chunk
            'router': ['react-router-dom', '@remix-run/router'],
            // UI components in separate chunk - only include packages that actually exist
            'ui-vendor': [
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
            'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
            // Form handling
            'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
            // Icons and charts
            'icons-charts': ['lucide-react', 'recharts'],
            // Other vendor libraries
            'vendor': [
              '@tanstack/react-query',
              'next-themes',
              'sonner',
              'date-fns'
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
