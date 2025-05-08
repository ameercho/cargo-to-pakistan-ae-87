
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRoutes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { routes } from "./routes";

// Create a new query client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  // Use the routes configuration to render routes
  const routeElements = useRoutes(routes);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toast notifications */}
        <Toaster />
        <Sonner />
        
        {/* Main application layout */}
        <Layout>
          {routeElements}
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
