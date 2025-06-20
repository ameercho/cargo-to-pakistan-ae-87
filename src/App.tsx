
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
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

const App: React.FC = () => {
  // Track if component is mounted for client-side only features
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    // Initialize analytics when the app mounts
    initializeAnalytics();
    
    // Use setTimeout to ensure React is fully ready
    setTimeout(() => {
      setIsMounted(true);
    }, 0);
  }, []);

  // Don't render anything until mounted to avoid SSR issues
  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cargo-blue"></div>
      </div>
    );
  }

  return (
    <React.StrictMode>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          <AnalyticsProvider>
            {/* Main application routing without TooltipProvider for now */}
            <RouterProvider router={router} />
            
            {/* Client-side only components */}
            <ClientToasts />
          </AnalyticsProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
