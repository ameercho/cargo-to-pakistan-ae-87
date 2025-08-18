import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "@/components/common/ErrorBoundary";

/**
 * Main application layout component - simplified version
 */
const AppLayout: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <Outlet />
        </main>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default AppLayout;