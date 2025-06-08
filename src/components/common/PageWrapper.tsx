
import React from 'react';
import SEOHead from "@/components/SEOHead";
import { useEnhancedSEO } from "@/hooks/useEnhancedSEO";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { SEOData } from "@/types";

interface PageWrapperProps {
  children: React.ReactNode;
  customSEO?: Partial<SEOData>;
  structuredData?: object;
  debug?: boolean;
}

const PageWrapper = ({ 
  children, 
  customSEO, 
  structuredData, 
  debug = false 
}: PageWrapperProps) => {
  useScrollToTop();
  
  const seoData = useEnhancedSEO({ 
    customSEO, 
    debug 
  });

  return (
    <>
      <SEOHead 
        seoData={seoData} 
        structuredData={structuredData} 
        debug={debug} 
      />
      {children}
    </>
  );
};

export default PageWrapper;
