
import { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: object;
}

const PageSEO = ({
  title,
  description,
  keywords,
  canonical,
  robots = "index,follow",
  ogTitle,
  ogDescription,
  ogImage,
  structuredData
}: PageSEOProps) => {
  useEffect(() => {
    // Only update if we're in the browser and the static injection hasn't handled it
    if (typeof window === 'undefined') return;
    
    // Check if static SEO has already been injected
    const hasStaticSEO = document.querySelector('meta[name="seo-source"][content="static"]');
    const hasStaticTitle = document.title && document.title.trim() !== '';
    
    if (hasStaticSEO && hasStaticTitle) {
      console.log('Static SEO already injected, skipping dynamic SEO');
      return;
    }

    // Function to safely update or create meta tag
    const updateMetaTag = (selector: string, content: string, attribute = 'content') => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attribute, content);
      } else {
        element = document.createElement('meta');
        if (selector.includes('name=')) {
          const name = selector.match(/name="([^"]*)"]/)?.[1];
          if (name) element.setAttribute('name', name);
        } else if (selector.includes('property=')) {
          const property = selector.match(/property="([^"]*)"]/)?.[1];
          if (property) element.setAttribute('property', property);
        }
        element.setAttribute(attribute, content);
        document.head.appendChild(element);
      }
    };

    // Update title
    document.title = title;

    // Update meta tags
    updateMetaTag('meta[name="description"]', description);
    
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', keywords);
    }
    
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (linkElement) {
        linkElement.setAttribute('href', canonical);
      } else {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        linkElement.setAttribute('href', canonical);
        document.head.appendChild(linkElement);
      }
    }

    updateMetaTag('meta[name="robots"]', robots);
    updateMetaTag('meta[property="og:title"]', ogTitle || title);
    updateMetaTag('meta[property="og:description"]', ogDescription || description);
    updateMetaTag('meta[property="og:type"]', 'website');
    updateMetaTag('meta[property="og:url"]', canonical || window.location.href);
    
    if (ogImage) {
      updateMetaTag('meta[property="og:image"]', ogImage);
    }

    // Add structured data if provided
    if (structuredData) {
      let structuredDataElement = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (structuredDataElement) {
        structuredDataElement.textContent = JSON.stringify(structuredData);
      } else {
        structuredDataElement = document.createElement('script');
        structuredDataElement.type = 'application/ld+json';
        structuredDataElement.textContent = JSON.stringify(structuredData);
        document.head.appendChild(structuredDataElement);
      }
    }

    // Mark as dynamically injected
    updateMetaTag('meta[name="seo-source"]', 'dynamic');

  }, [title, description, keywords, canonical, robots, ogTitle, ogDescription, ogImage, structuredData]);

  return null;
};

export default PageSEO;
