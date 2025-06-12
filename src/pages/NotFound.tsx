
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { trackEvent } from "@/services/analytics";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PageSEO from "@/components/SEO/PageSEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the 404 error to console
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Track 404 error in analytics
    trackEvent(
      'Error', 
      '404', 
      `Path: ${location.pathname}`,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <PageSEO
        title="Page Not Found | Cargo to Pakistan"
        description="The page you're looking for doesn't exist. Visit our homepage for cargo shipping services from UAE to Pakistan."
        keywords="cargo to pakistan, 404 error, page not found"
        canonical="https://cargotopakistan.ae/404"
        robots="noindex,nofollow"
      />
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-cargo-blue">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-cargo-green hover:bg-[#176a3e]">
          <a href="/" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Homepage
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
