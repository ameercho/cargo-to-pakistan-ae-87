
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalyticsContext } from '@/contexts/AnalyticsContext';

export const usePageAnalytics = (pageTitle?: string) => {
  const location = useLocation();
  const { trackPageView } = useAnalyticsContext();

  useEffect(() => {
    trackPageView(location.pathname, pageTitle || document.title);
  }, [location.pathname, pageTitle, trackPageView]);
};
