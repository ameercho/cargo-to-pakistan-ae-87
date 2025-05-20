
// Define the window interface with dataLayer
interface Window {
  dataLayer: any[];
}

// Initialize dataLayer if it doesn't exist yet
export const initDataLayer = (): void => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
  }
};

// Push events to dataLayer
export const pushToDataLayer = (data: any): void => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(data);
  }
};

// Common event types
export const trackPageView = (pagePath: string, pageTitle: string): void => {
  pushToDataLayer({
    event: 'pageview',
    page: {
      path: pagePath,
      title: pageTitle
    }
  });
};

export const trackEvent = (category: string, action: string, label?: string, value?: number): void => {
  pushToDataLayer({
    event: 'customEvent',
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
    eventValue: value
  });
};

// E-commerce tracking
export const trackProductView = (product: {
  id: string,
  name: string,
  price?: number,
  category?: string
}): void => {
  pushToDataLayer({
    event: 'productView',
    ecommerce: {
      detail: {
        products: [product]
      }
    }
  });
};

// Form submission tracking
export const trackFormSubmit = (formId: string, formName: string): void => {
  pushToDataLayer({
    event: 'formSubmit',
    formId,
    formName
  });
};

// User interaction tracking
export const trackUserInteraction = (interactionType: string, elementId?: string): void => {
  pushToDataLayer({
    event: 'userInteraction',
    interactionType,
    elementId
  });
};

// Custom timing events
export const trackTiming = (category: string, variable: string, time: number): void => {
  pushToDataLayer({
    event: 'timing',
    timingCategory: category,
    timingVar: variable,
    timingValue: time
  });
};
