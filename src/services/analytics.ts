
import { useAnalytics } from '@/hooks/useAnalytics';

export class AnalyticsService {
  private static instance: AnalyticsService;
  
  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  trackPhoneCall(source: string = 'unknown') {
    const analytics = useAnalytics();
    analytics.trackPhoneCall();
    console.log(`Phone call tracked from: ${source}`);
  }

  trackQuoteRequest(service?: string, source: string = 'unknown') {
    const analytics = useAnalytics();
    analytics.trackQuoteRequest(service);
    console.log(`Quote request tracked - Service: ${service}, Source: ${source}`);
  }

  trackServiceView(serviceName: string) {
    const analytics = useAnalytics();
    analytics.trackServiceView(serviceName);
    console.log(`Service view tracked: ${serviceName}`);
  }

  trackPageView(page: string, title?: string) {
    const analytics = useAnalytics();
    analytics.trackPageView(page, title);
    console.log(`Page view tracked: ${page}`);
  }
}

export const analyticsService = AnalyticsService.getInstance();

// Export the functions that existing code expects
export { initializeAnalytics, trackEvent, trackPageView } from './analytics/index';
