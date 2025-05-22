
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { trackPageView, trackTiming } from "@/services/analytics";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Track page views when the route changes
  useEffect(() => {
    const startTime = performance.now();
    
    // Send pageview to analytics
    trackPageView(
      location.pathname + location.search,
      document.title
    );
    
    // Measure page load performance
    const loadTime = performance.now() - startTime;
    trackTiming('Page Navigation', 'Load Time', Math.round(loadTime));
    
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
