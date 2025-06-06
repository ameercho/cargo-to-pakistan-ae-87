
// Analytics service - simplified and consolidated
export { 
  initializeAnalytics,
  trackPageView,
  trackEvent,
  trackPhoneCall,
  trackQuoteRequest,
  trackServiceView,
  trackFormSubmit
} from './analytics/index';

// Legacy AnalyticsService class for backward compatibility
export class AnalyticsService {
  private static instance: AnalyticsService;
  
  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  trackPhoneCall(source: string = 'unknown') {
    import('./analytics/index').then(({ trackPhoneCall }) => {
      trackPhoneCall(source);
    });
  }

  trackQuoteRequest(service?: string, source: string = 'unknown') {
    import('./analytics/index').then(({ trackQuoteRequest }) => {
      trackQuoteRequest(service, source);
    });
  }

  trackServiceView(serviceName: string) {
    import('./analytics/index').then(({ trackServiceView }) => {
      trackServiceView(serviceName);
    });
  }

  trackPageView(page: string, title?: string) {
    import('./analytics/index').then(({ trackPageView }) => {
      trackPageView(page, title || document.title);
    });
  }
}

export const analyticsService = AnalyticsService.getInstance();
