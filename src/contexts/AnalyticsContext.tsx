
import React, { createContext, ReactNode } from 'react';
import { 
  trackPhoneCall as trackPhoneCallService,
  trackQuoteRequest as trackQuoteRequestService,
  trackServiceView as trackServiceViewService,
  trackPageView as trackPageViewService
} from '@/services/analytics';

interface AnalyticsContextType {
  trackPhoneCall: (source?: string) => void;
  trackQuoteRequest: (service?: string, source?: string) => void;
  trackServiceView: (serviceName: string) => void;
  trackPageView: (page: string, title?: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
  const value: AnalyticsContextType = {
    trackPhoneCall: trackPhoneCallService,
    trackQuoteRequest: trackQuoteRequestService,
    trackServiceView: trackServiceViewService,
    trackPageView: trackPageViewService,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalyticsContext = () => {
  // Return a safe default instead of throwing when context is undefined
  try {
    const context = React.useContext(AnalyticsContext);
    return context || {
      trackPhoneCall: () => {},
      trackQuoteRequest: () => {},
      trackServiceView: () => {},
      trackPageView: () => {},
    };
  } catch (error) {
    // Return safe defaults if React.useContext fails
    return {
      trackPhoneCall: () => {},
      trackQuoteRequest: () => {},
      trackServiceView: () => {},
      trackPageView: () => {},
    };
  }
};
