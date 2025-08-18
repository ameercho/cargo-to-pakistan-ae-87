
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
  React.useEffect(() => {
    // Initialize analytics when the app mounts
    initializeAnalytics();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <AnalyticsProvider>
          <RouterProvider router={router} />
          <ClientToasts />
        </AnalyticsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
