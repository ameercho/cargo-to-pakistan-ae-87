import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { SimpleToaster } from "@/components/ui/simple-toaster";

/**
 * Main application layout component
 * Consolidates all layout concerns in one place
 */
const AppLayout: React.FC = () => {
  // Add debugging
  console.log("AppLayout rendering, React available:", !!React?.useState);
  
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <Outlet />
        </main>
        
        <Footer />
        <SimpleToaster />
      </div>
    </ErrorBoundary>
  );
};

export default AppLayout;