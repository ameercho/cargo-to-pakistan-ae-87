
import SEOHead from "@/components/SEOHead";
import ServicesHero from "@/components/services/ServicesHero";
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
import { CheckCircle, Shield, Clock, Globe } from "lucide-react";

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
      <section className="py-16 bg-gradient-to-br from-cargo-blue to-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {seoData.h1}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Discover our complete range of cargo shipping solutions designed to meet your specific needs. From express air freight to cost-effective sea freight, we provide reliable and secure shipping services with competitive rates and professional handling.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Worldwide Coverage</h3>
                <p className="text-sm text-gray-200">All UAE cities to Pakistan destinations</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Secure Handling</h3>
                <p className="text-sm text-gray-200">Professional packaging and protection</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Timely Delivery</h3>
                <p className="text-sm text-gray-200">Reliable schedules and tracking</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Quality Service</h3>
                <p className="text-sm text-gray-200">Dedicated customer support team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
              Comprehensive Cargo Solutions for Every Need
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-lg leading-relaxed mb-6">
                At Cargo to Pakistan, we understand that every shipment is unique and requires specialized handling. Our comprehensive range of cargo services is designed to accommodate various shipping requirements, from urgent documents to large household relocations. With over a decade of experience in UAE-Pakistan logistics, we have developed efficient systems and partnerships that ensure your cargo reaches its destination safely and on time.
              </p>
              
              <p className="leading-relaxed mb-6">
                Our service portfolio includes multiple shipping options to suit different budgets and timeframes. Whether you need cost-effective sea freight for bulk shipments, rapid air freight for time-sensitive cargo, or specialized services for delicate items, our expert team will recommend the best solution for your specific requirements. We pride ourselves on transparent pricing, reliable schedules, and exceptional customer service throughout the shipping process.
              </p>
              
              <p className="leading-relaxed mb-8">
                Every service we offer includes professional packaging assessment, secure handling protocols, customs clearance assistance, and real-time tracking capabilities. Our extensive network spans all seven emirates of the UAE and covers major cities and remote areas across Pakistan, ensuring comprehensive coverage for your cargo shipping needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-cargo-blue mb-4">Why Our Services Stand Out</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Professional packaging services with quality materials and expert techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Comprehensive insurance options to protect your valuable shipments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Real-time tracking system with regular status updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Dedicated customer support team available throughout the shipping process</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-cargo-blue mb-4">Service Coverage Areas</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Complete UAE coverage: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Major Pakistan cities: Karachi, Lahore, Islamabad, Peshawar, Quetta, Faisalabad, Multan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Remote areas and smaller cities across all provinces of Pakistan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cargo-green mt-0.5 flex-shrink-0" />
                    <span>Door-to-door service available in most locations with local delivery partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
