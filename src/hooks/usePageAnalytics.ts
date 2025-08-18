
import { useEffect } from 'react';
import { useSafeAnalytics } from '@/hooks/useSafeAnalytics';

export const usePageAnalytics = (pageTitle?: string) => {
  const { trackPageView } = useSafeAnalytics();

  useEffect(() => {
    const currentPath = window.location.pathname;
    trackPageView(currentPath);
    
    // Update document title
    if (pageTitle) {
      document.title = pageTitle;
    }
  }, [pageTitle, trackPageView]);
};
