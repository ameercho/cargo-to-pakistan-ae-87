
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import { ThemeProvider } from "next-themes";
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
  // Add debugging to see if React is available
  console.log("App rendering, React available:", !!React, !!React?.useState);
  
  React.useEffect(() => {
    console.log("App mounted, initializing analytics");
    initializeAnalytics();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <AnalyticsProvider>
          <RouterProvider router={router} />
        </AnalyticsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
