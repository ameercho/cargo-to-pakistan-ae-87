
// Analytics service to centralize all tracking functionality
import { initDataLayer, pushToDataLayer } from './dataLayer';
import { isProductionDomain } from '@/utils/environment';
import { loadGTM, loadGA4 } from './scriptLoader';

// GA4 measurement ID - corrected
const GA4_MEASUREMENT_ID = 'G-K5V7CJ0G5P';

// Initialize analytics services only on production domain
export const initializeAnalytics = (): void => {
  // Always initialize dataLayer for consistent behavior
  initDataLayer();
  
  // Only load analytics scripts on production domain
  if (isProductionDomain()) {
    console.log('Production domain detected, loading analytics scripts');
    loadGTM();
    loadGA4();
  } else {
    console.log('Development domain detected, skipping analytics scripts');
    // Ensure gtag is available globally for development (no-op function)
    if (typeof window !== 'undefined') {
      (window as any).gtag = (window as any).gtag || function(){
        console.log('Development gtag call:', arguments);
      };
    }
  }
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle: string): void => {
  // Only track on production domain
  if (!isProductionDomain()) {
    console.log('Development: Page view tracked locally', { pagePath, pageTitle });
    return;
  }
  
  // GTM style tracking
  pushToDataLayer({
    event: 'pageview',
    page: {
      path: pagePath,
      title: pageTitle
    }
  });
  
  // GA4 style tracking via gtag
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA4_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

// Track user events
export const trackEvent = (
  category: string, 
  action: string, 
  label?: string, 
  value?: number
): void => {
  // Only track on production domain
  if (!isProductionDomain()) {
    console.log('Development: Event tracked locally', { category, action, label, value });
    return;
  }
  
  // GTM style tracking
  pushToDataLayer({
    event: 'customEvent',
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
    eventValue: value
  });
  
  // GA4 style tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Form submission tracking
export const trackFormSubmit = (formId: string, formName: string): void => {
  trackEvent('Form', 'Submit', `${formName} (${formId})`);
};

// Performance tracking
export const trackTiming = (category: string, variable: string, time: number): void => {
  // Only track on production domain
  if (!isProductionDomain()) {
    console.log('Development: Timing tracked locally', { category, variable, time });
    return;
  }
  
  pushToDataLayer({
    event: 'timing',
    timingCategory: category,
    timingVar: variable,
    timingValue: time
  });
};

export * from './dataLayer';
