
import { Suspense } from "react";
import ErrorBoundary from "@/components/common/ErrorBoundary";

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cargo-blue"></div>
  </div>
);

// Wrapper for lazy loaded components
export const LazyWrapper = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

// Helper to create route with lazy wrapper
export const createLazyRoute = (element: React.ComponentType) => (
  <LazyWrapper>
    {React.createElement(element)}
  </LazyWrapper>
);
