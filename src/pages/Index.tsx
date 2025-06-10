
import HeroSection from "@/components/home/HeroSection";
import HeroContent from "@/components/home/HeroContent";
import CitySpecificServices from "@/components/home/CitySpecificServices";
import FAQSection from "@/components/home/FAQSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
import SEOHead from "@/components/SEOHead";
import { useEnhancedSEO } from "@/hooks/useEnhancedSEO";

const Index = () => {
  // Use enhanced SEO hook with centralized configuration
  const seoData = useEnhancedSEO({ debug: true });

  // Enhanced structured data for Dubai local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Cargo to Pakistan",
    "url": "https://cargotopakistan.ae",
    "description": "Dubai's leading cargo shipping service to Pakistan with door-to-door delivery",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "Dubai",
      "addressLocality": "Dubai"
    },
    "geo": {
      "@type": "GeoCoordinates", 
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-50-494-8135",
      "contactType": "customer service",
      "availableLanguage": ["English", "Urdu", "Arabic"]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai",
        "containedIn": "United Arab Emirates"
      },
      {
        "@type": "Country", 
        "name": "Pakistan"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dubai Pakistan Cargo Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Air Cargo Dubai to Pakistan",
            "description": "Fast air freight from Dubai to all Pakistan cities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Sea Freight Dubai to Pakistan",
            "description": "Cost-effective sea cargo from Dubai ports"
          }
        }
      ]
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Dubai Customer Reviews"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead seoData={seoData} structuredData={structuredData} debug={true} />
      
      <HeroSection />
      <HeroContent />
      <CitySpecificServices />
      <FAQSection />
      <ServicesGrid />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
};

export default Index;
