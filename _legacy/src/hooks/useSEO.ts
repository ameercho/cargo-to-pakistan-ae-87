
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
}

export const useSEO = (seoData?: SEOData) => {
  const location = useLocation();

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    // Check if static SEO is already in place
    const hasStaticSEO = document.querySelector('meta[name="seo-source"][content="static"]');
    
    if (hasStaticSEO) {
      console.log('Static SEO detected, skipping dynamic updates');
      return;
    }

    if (!seoData) return;

    // Clean up any existing dynamic SEO first
    const existingDynamicMarker = document.querySelector('meta[name="seo-source"][content="dynamic"]');
    if (existingDynamicMarker) {
      // Remove all dynamic meta tags
      const metasToRemove = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[property^="twitter:"]');
      metasToRemove.forEach(meta => meta.remove());
      
      const canonicalToRemove = document.querySelector('link[rel="canonical"]');
      if (canonicalToRemove) canonicalToRemove.remove();
    }

    // Apply new SEO data
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Helper to create or update meta tags
    const setMeta = (selector: string, content: string, attribute = 'content') => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('name=')) {
          const name = selector.match(/name="([^"]*)"]/)?.[1];
          if (name) element.setAttribute('name', name);
        } else if (selector.includes('property=')) {
          const property = selector.match(/property="([^"]*)"]/)?.[1];
          if (property) element.setAttribute('property', property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, content);
    };

    if (seoData.description) {
      setMeta('meta[name="description"]', seoData.description);
    }

    if (seoData.keywords) {
      setMeta('meta[name="keywords"]', seoData.keywords);
    }

    if (seoData.canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', seoData.canonical);
    }

    // Mark as dynamic SEO
    setMeta('meta[name="seo-source"]', 'dynamic');

  }, [seoData, location.pathname]);
};
