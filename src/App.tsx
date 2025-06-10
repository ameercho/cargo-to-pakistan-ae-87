
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { router } from "./routes/index";
import { ThemeProvider } from "next-themes";
import { ClientToasts } from "@/components/ui/client-toasts";
import { AnalyticsProvider } from "@/contexts/AnalyticsContext";
import { initializeAnalytics } from "@/services/analytics";

// Create a new query client instance with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  // Track if component is mounted for client-side only features
  const [isMounted, setIsMounted] = React.useState(false);
  const [reactReady, setReactReady] = React.useState(false);

  React.useEffect(() => {
    // Ensure React is fully available before proceeding
    if (typeof React !== 'undefined' && React && React.useState) {
      setReactReady(true);
      // Initialize analytics when the app mounts
      initializeAnalytics();
      setIsMounted(true);
    }
  }, []);

  // Don't render anything until React is confirmed ready
  if (!reactReady || !isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          <AnalyticsProvider>
            <RouterProvider router={router} />
            <ClientToasts />
          </AnalyticsProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
