import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "@/components/common/ErrorBoundary";

interface AppLayoutProps {
  children: React.ReactNode;
}

/**
 * Main application layout component - simplified version
 */
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default AppLayout;