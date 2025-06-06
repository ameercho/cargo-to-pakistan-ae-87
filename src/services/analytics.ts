
// Analytics service without React hooks
export class AnalyticsService {
  private static instance: AnalyticsService;
  
  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  trackPhoneCall(source: string = 'unknown') {
    // Use the analytics functions directly instead of hooks
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'phone_call',
        eventCategory: 'conversion',
        eventAction: 'phone_call',
        eventLabel: source
      });
    }
    console.log(`Phone call tracked from: ${source}`);
  }

  trackQuoteRequest(service?: string, source: string = 'unknown') {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'quote_request',
        eventCategory: 'conversion',
        eventAction: 'quote_request',
        eventLabel: service || 'general'
      });
    }
    console.log(`Quote request tracked - Service: ${service}, Source: ${source}`);
  }

  trackServiceView(serviceName: string) {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'service_view',
        eventCategory: 'engagement',
        eventAction: 'service_view',
        eventLabel: serviceName
      });
    }
    console.log(`Service view tracked: ${serviceName}`);
  }

  trackPageView(page: string, title?: string) {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        eventCategory: 'engagement',
        eventAction: 'page_view',
        eventLabel: page
      });
    }
    console.log(`Page view tracked: ${page}`);
  }
}

export const analyticsService = AnalyticsService.getInstance();

// Export the functions that existing code expects
export { initializeAnalytics, trackEvent, trackPageView } from './analytics/index';
