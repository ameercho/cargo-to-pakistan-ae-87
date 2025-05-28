
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { usePageTracking } from "@/hooks/useAnalytics";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Use centralized hooks for common functionality
  useScrollToTop();
  usePageTracking();
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
