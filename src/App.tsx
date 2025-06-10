
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { router } from "./routes/index";
import { ThemeProvider } from "next-themes";
import { ClientToasts } from "@/components/ui/client-toasts";
import { AnalyticsProvider } from "@/contexts/AnalyticsContext";
import { initializeAnalytics } from "@/services/analytics";
import { TooltipProvider } from "@/components/ui/tooltip";

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

  React.useEffect(() => {
    // Initialize analytics when the app mounts
    initializeAnalytics();
    setIsMounted(true);
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          <AnalyticsProvider>
            {/* Only render TooltipProvider when mounted and React is ready */}
            {isMounted ? (
              <TooltipProvider>
                <RouterProvider router={router} />
                <ClientToasts />
              </TooltipProvider>
            ) : (
              <div>Loading...</div>
            )}
          </AnalyticsProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
