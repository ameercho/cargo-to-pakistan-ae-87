
/**
 * SEO Helper Functions
 * Use these to generate structured data and optimize content
 */

// Generate structured data for local business
export const generateLocalBusinessSchema = (
  name: string,
  description: string,
  address?: string
) => ({
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": name,
  "description": description,
  "url": "https://cargotopakistan.ae",
  "logo": "https://cargotopakistan.ae/opengraph-image.png",
  "telephone": "+971504948135",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AE",
    "addressRegion": "Dubai",
    "addressLocality": address || "Dubai"
  },
  "areaServed": ["United Arab Emirates", "Pakistan"],
  "serviceType": "Cargo Shipping Services"
});

// Generate structured data for service pages
export const generateServiceSchema = (
  serviceName: string,
  description: string,
  serviceType: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "serviceType": serviceType,
  "provider": {
    "@type": "Organization",
    "name": "Cargo to Pakistan",
    "telephone": "+971504948135",
    "url": "https://cargotopakistan.ae"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Pakistan"
  }
});

// Generate FAQ structured data
export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Helper to validate heading hierarchy
export const validateHeadingStructure = (content: string): boolean => {
  // Simple check for proper heading order
  const headings = content.match(/<h[1-6][^>]*>/gi) || [];
  let lastLevel = 0;
  
  for (const heading of headings) {
    const level = parseInt(heading.match(/h([1-6])/)?.[1] || '1');
    if (level > lastLevel + 1) {
      console.warn(`Heading structure issue: jumping from h${lastLevel} to h${level}`);
      return false;
    }
    lastLevel = level;
  }
  return true;
};

// Generate breadcrumb structured data
export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});
