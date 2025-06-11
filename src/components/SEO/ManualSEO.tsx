
import React from 'react';

interface ManualSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

// Simple manual SEO component - only for client-side fallback
// Primary SEO is handled at build time via static injection
const ManualSEO: React.FC<ManualSEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl
}) => {
  // This component serves as a placeholder for manual SEO
  // The actual SEO is injected at build time
  return null;
};

export default ManualSEO;
