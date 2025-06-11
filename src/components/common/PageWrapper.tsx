
import React from 'react';
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface PageWrapperProps {
  children: React.ReactNode;
  customSEO?: any; // Keep for backward compatibility but unused
  structuredData?: object; // Keep for backward compatibility but unused
  debug?: boolean; // Keep for backward compatibility but unused
}

const PageWrapper = ({ 
  children, 
  customSEO, 
  structuredData, 
  debug = false 
}: PageWrapperProps) => {
  useScrollToTop();

  // Since we now use static SEO injection at build time,
  // this component only handles scroll behavior and renders children
  return (
    <>
      {children}
    </>
  );
};

export default PageWrapper;
