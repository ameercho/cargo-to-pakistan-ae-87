import { Helmet } from "react-helmet-async";
import ServicesHero from "@/components/services/ServicesHero";
import MainServices from "@/components/services/MainServices";
import AdditionalServices from "@/components/services/AdditionalServices";
import ServicesCallToAction from "@/components/services/ServicesCallToAction";
import FloatingButton from "@/components/FloatingButton";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  // Schema markup for Services page
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cargo Connect Services",
    "description": "Comprehensive cargo shipping services from UAE to Pakistan including sea freight, air freight, courier services, and full container loads.",
    "provider": {
      "@type": "Organization",
      "name": "Cargo Connect",
      "url": "https://cargoconnect.pk",
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
        "item": "https://cargoconnect.pk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://cargoconnect.pk/services"
      }
    ]
  };

  return (
    <div className="pt-20">
      {/* SEO and Schema Markup */}
      <Helmet>
        <title>Cargo Services from UAE to Pakistan | Sea Freight, Air Freight & More</title>
        <meta name="description" content="Comprehensive cargo shipping services from UAE to Pakistan. Sea freight, air freight, courier services, packaging, and full container loads with door-to-door delivery." />
        <meta name="keywords" content="cargo services, UAE to Pakistan shipping, sea freight, air freight, courier service, full container load, packaging services" />
        <link rel="canonical" href="https://cargoconnect.pk/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cargo Services from UAE to Pakistan | Cargo Connect" />
        <meta property="og:description" content="Comprehensive cargo shipping services from UAE to Pakistan with competitive rates and reliable delivery." />
        <meta property="og:url" content="https://cargoconnect.pk/services" />
        <meta property="og:type" content="website" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

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

      {/* Hero Section */}
      <ServicesHero />

      {/* Main Services */}
      <MainServices />

      {/* Additional Services */}
      <AdditionalServices />

      {/* Internal Links Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Explore Our Service Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide cargo services from all major UAE cities to destinations across Pakistan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* UAE Origins */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-cargo-blue mb-4">From UAE Cities</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/areas/dubai" className="flex items-center text-gray-700 hover:text-cargo-blue transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Dubai Cargo Services
                  </Link>
                </li>
                <li>
                  <Link to="/areas/abu-dhabi" className="flex items-center text-gray-700 hover:text-cargo-blue transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Abu Dhabi Cargo
                  </Link>
                </li>
                <li>
                  <Link to="/areas/sharjah" className="flex items-center text-gray-700 hover:text-cargo-blue transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Sharjah Cargo
                  </Link>
                </li>
                <li>
                  <Link to="/areas/ajman" className="flex items-center text-gray-700 hover:text-cargo-blue transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Ajman Cargo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Pakistan Destinations */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-cargo-green mb-4">To Pakistan Cities</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/pakistan-cargo-to-karachi" className="flex items-center text-gray-700 hover:text-cargo-green transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Karachi Cargo
                  </Link>
                </li>
                <li>
                  <Link to="/pakistan-cargo-to-lahore" className="flex items-center text-gray-700 hover:text-cargo-green transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Lahore Cargo
                  </Link>
                </li>
                <li>
                  <Link to="/pakistan-cargo-to-islamabad" className="flex items-center text-gray-700 hover:text-cargo-green transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Islamabad Cargo
                  </Link>
                </li>
                <li>
                  <Link to="/pakistan-cargo-to-peshawar" className="flex items-center text-gray-700 hover:text-cargo-green transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Peshawar Cargo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Types */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-cargo-orange mb-4">Service Types</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/sea-freight" className="flex items-center text-gray-700 hover:text-cargo-orange transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Sea Freight
                  </Link>
                </li>
                <li>
                  <Link to="/services/moving-home" className="flex items-center text-gray-700 hover:text-cargo-orange transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Moving Home
                  </Link>
                </li>
                <li>
                  <Link to="/services/courier-service" className="flex items-center text-gray-700 hover:text-cargo-orange transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Courier Service
                  </Link>
                </li>
                <li>
                  <Link to="/services/full-container" className="flex items-center text-gray-700 hover:text-cargo-orange transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Full Container
                  </Link>
                </li>
              </ul>
            </div>

            {/* Additional Services */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-cargo-blue mb-4">Additional Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/packaging" className="flex items-center text-gray-700 hover:text-cargo-blue transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Packaging Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/insurance" className="flex items-center text-gray-700 hover:text-cargo-blue transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Cargo Insurance
                  </Link>
                </li>
                <li>
                  <Link to="/service-areas" className="flex items-center text-gray-700 hover:text-cargo-blue transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    All Service Areas
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex items-center text-gray-700 hover:text-cargo-blue transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <ServicesCallToAction />

      <FloatingButton />
    </div>
  );
};

export default Services;
