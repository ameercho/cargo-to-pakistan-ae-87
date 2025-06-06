
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { router } from "./routes/index";
import * as React from "react";
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

  React.useEffect(() => {
    // Initialize analytics when the app mounts
    initializeAnalytics();
    setIsMounted(true);
  }, []);

  return (
    <React.StrictMode>
      <HelmetProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryClientProvider client={queryClient}>
            <AnalyticsProvider>
              <TooltipProvider>
                {/* Main application routing */}
                <RouterProvider router={router} />
                
                {/* Only render ClientToasts when we're on the client side */}
                {isMounted && <ClientToasts />}
              </TooltipProvider>
            </AnalyticsProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
