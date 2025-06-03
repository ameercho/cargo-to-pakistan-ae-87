
import SEOHead from "@/components/SEOHead";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesContent from "@/components/services/ServicesContent";
import MainServices from "@/components/services/MainServices";
import AdditionalServices from "@/components/services/AdditionalServices";
import ServicesCallToAction from "@/components/services/ServicesCallToAction";
import FloatingButton from "@/components/FloatingButton";
import InternalLinksSection from "@/components/InternalLinksSection";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { relatedServices, popularDestinations, uaeServiceAreas } from "@/utils/seo-utils";

const Services = () => {
  // SEO Data for Services page
  const seoData = {
    title: "Cargo Services from UAE to Pakistan | Sea Freight, Air Freight & More",
    description: "Comprehensive cargo shipping services from UAE to Pakistan. Sea freight, air freight, courier services, packaging, and full container loads with door-to-door delivery.",
    keywords: "cargo services, UAE to Pakistan shipping, sea freight, air freight, courier service, full container load, packaging services",
    canonicalUrl: "https://cargotopakistan.ae/services",
    ogTitle: "Cargo Services from UAE to Pakistan | Cargo Connect",
    ogDescription: "Comprehensive cargo shipping services from UAE to Pakistan with competitive rates and reliable delivery.",
    ogImage: "https://cargotopakistan.ae/images/services-overview.jpg",
    h1: "Professional Cargo Services from UAE to Pakistan"
  };

  // Schema markup for Services page
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cargo Connect Services",
    "description": "Comprehensive cargo shipping services from UAE to Pakistan including sea freight, air freight, courier services, and full container loads.",
    "provider": {
      "@type": "Organization",
      "name": "Cargo to Pakistan",
      "url": "https://cargotopakistan.ae",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": "Dubai"
      }
    },
    "serviceType": "Cargo Shipping",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Pakistan"
      },
      {
        "@type": "Country", 
        "name": "United Arab Emirates"
      }
    ],
    "hasOfferingCatalog": {
      "@type": "OfferingCatalog",
      "name": "Cargo Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sea Freight",
            "description": "Cost-effective ocean shipping solutions for larger cargo shipments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Air Freight",
            "description": "Fast air cargo services for time-sensitive shipments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Courier Service",
            "description": "Express courier delivery options for urgent packages"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Container Load",
            "description": "Dedicated container shipping solutions"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cargotopakistan.ae/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://cargotopakistan.ae/services"
      }
    ]
  };

  return (
    <div className="pt-20">
      {/* SEO Head */}
      <SEOHead seoData={seoData} structuredData={[servicesSchema, breadcrumbSchema]} />

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container-custom">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section with H1 */}
      <ServicesHeroSection title={seoData.h1} />

      {/* Detailed Services Content */}
      <ServicesContent />

      {/* Main Services */}
      <MainServices />

      {/* Additional Services */}
      <AdditionalServices />

      {/* Internal Links - Related Services */}
      <InternalLinksSection 
        title="Our Complete Service Portfolio"
        links={relatedServices}
      />

      {/* Internal Links - UAE Service Areas */}
      <InternalLinksSection 
        title="UAE Service Areas We Cover"
        links={uaeServiceAreas}
        className="bg-white"
      />

      {/* Internal Links - Pakistan Destinations */}
      <InternalLinksSection 
        title="Popular Pakistan Destinations"
        links={popularDestinations}
      />

      {/* Call to Action */}
      <ServicesCallToAction />

      <FloatingButton />
    </div>
  );
};

export default Services;
