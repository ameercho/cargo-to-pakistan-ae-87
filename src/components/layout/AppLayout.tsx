import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "@/components/common/ErrorBoundary";

/**
 * Main application layout component - simplified version
 */
const AppLayout: React.FC = () => {
  const location = useLocation();
  const hideChrome = location.pathname === '/get-a-quote';
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        {!hideChrome && <Header />}
        
        <main className="flex-1">
          <Outlet />
        </main>
        
        {!hideChrome && <Footer />}
      </div>
    </ErrorBoundary>
  );
};

export default AppLayout;