import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
import SEOHead from "@/components/SEOHead";
import { useEnhancedSEO } from "@/hooks/useEnhancedSEO";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Package, Truck, Plane, Ship, Clock, Shield } from "lucide-react";

const Index = () => {
  // Use enhanced SEO hook with centralized configuration
  const seoData = useEnhancedSEO({ debug: true });

  const popularDestinations = [
    { name: "Karachi", href: "/pakistan-cargo-to-karachi", desc: "Pakistan's largest port city and commercial hub" },
    { name: "Lahore", href: "/pakistan-cargo-to-lahore", desc: "Cultural capital and second largest city" },
    { name: "Islamabad", href: "/pakistan-cargo-to-islamabad", desc: "Capital city and political center" },
    { name: "Peshawar", href: "/pakistan-cargo-to-peshawar", desc: "Historic northwestern gateway city" }
  ];

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
      
      {/* Main Content Section with Enhanced Dubai SEO Structure */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-cargo-blue mb-8 text-center">
              {seoData.h1}
            </h1>
            
            <div className="prose max-w-none text-lg text-gray-700 mb-12">
              <p className="mb-6">
                Welcome to Dubai's most trusted cargo service to Pakistan. We provide professional, 
                secure, and affordable cargo shipping from Dubai to Pakistan, serving Business Bay, Deira, 
                Bur Dubai, and all major Dubai areas. Our comprehensive Pakistan cargo solutions ensure safe and 
                timely delivery to every corner of Pakistan, whether you're shipping personal belongings, 
                commercial goods, or household items from Dubai's business districts.
              </p>
              
              <p className="mb-6">
                Our extensive Dubai cargo services include express air cargo to Pakistan for urgent deliveries, 
                cost-effective sea cargo from Dubai ports for bulk shipments, full container loads for large volume cargo, 
                and express courier service for documents and small packages. With years 
                of experience in Dubai to Pakistan logistics, we understand the unique requirements of expatriate 
                communities and businesses in Dubai, providing trusted cargo services across all Emirates.
              </p>
              
              <p className="mb-6">
                From specialized cargo services in Business Bay and Downtown Dubai to comprehensive shipping solutions from 
                Dubai Marina and Jumeirah, we offer complete door-to-door cargo to Pakistan with professional packing, 
                Dubai customs clearance assistance, real-time tracking, and comprehensive insurance options for complete 
                peace of mind throughout your Dubai Pakistan cargo shipping experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Package className="h-12 w-12 text-cargo-blue mx-auto mb-4" />
                <h3 className="font-semibold text-cargo-blue mb-2">Professional Packing</h3>
                <p className="text-sm text-gray-600">Expert packaging using quality materials for safe transit with special care for electronics and furniture</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Truck className="h-12 w-12 text-cargo-green mx-auto mb-4" />
                <h3 className="font-semibold text-cargo-blue mb-2">Door-to-Door Service</h3>
                <p className="text-sm text-gray-600">Complete pickup and delivery to your doorstep with real-time tracking</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <MapPin className="h-12 w-12 text-cargo-orange mx-auto mb-4" />
                <h3 className="font-semibold text-cargo-blue mb-2">All Major Cities</h3>
                <p className="text-sm text-gray-600">Service coverage across UAE and Pakistan with efficient handling for all cargo types</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Pakistan Cargo Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <h2 className="text-3xl font-bold text-cargo-blue mb-6">
              Cargo to Pakistan from Dubai: Your Reliable Partner
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 mb-4">
                Our specialized Pakistan cargo Dubai team handles all types of shipments with professional care and expertise. 
                Whether you're sending personal cargo from Dubai to Pakistan or commercial shipments, we ensure swift and secure delivery. 
                Our Pakistan cargo Dubai services include daily departures, comprehensive tracking, and dedicated customer support 
                for all your shipping needs from Dubai to Pakistan.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Ship className="h-5 w-5 text-cargo-blue" />
                  <span className="text-sm">Sea Freight Dubai to Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-cargo-green" />
                  <span className="text-sm">Air Freight Dubai to Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-cargo-orange" />
                  <span className="text-sm">Door-to-Door Dubai</span>
                </div>
              </div>
              <Link 
                to="/dubai-to-pakistan"
                className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
              >
                Learn about our comprehensive Pakistan cargo Dubai options <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-cargo-blue mb-6">
              Seamless Pakistan Cargo Services from Abu Dhabi
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 mb-4">
                Experience reliable cargo to Pakistan from Abu Dhabi with our professional handling and competitive rates. 
                Our Abu Dhabi to Pakistan cargo services offer complete door-to-door delivery options with secure handling 
                for all shipment types. We provide dedicated Pakistan cargo services from Abu Dhabi with flexible scheduling 
                and comprehensive insurance coverage for your peace of mind.
              </p>
              <Link 
                to="/abu-dhabi-to-pakistan"
                className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
              >
                Explore cargo rates from Abu Dhabi to Pakistan <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-cargo-blue mb-6">
              Efficient Cargo Solutions from Sharjah to Pakistan
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 mb-4">
                Fast and secure Sharjah to Pakistan cargo services for all types of shipments with competitive pricing. 
                Our Pakistan cargo services from Sharjah include professional packing, customs clearance assistance, 
                and reliable delivery schedules. Choose our trusted cargo to Pakistan from Sharjah for cost-effective 
                shipping solutions with guaranteed delivery times.
              </p>
              <Link 
                to="/sharjah-to-pakistan"
                className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
              >
                Learn about our sea cargo to Pakistan options from Sharjah <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-cargo-blue mb-6">
              Affordable Cargo from Ajman to Pakistan
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 mb-4">
                Cost-effective cargo solutions from Ajman to Pakistan with reliable delivery schedules and professional service. 
                Our Pakistan cargo services from Ajman offer budget-friendly shipping options without compromising on quality or security. 
                Experience hassle-free cargo to Pakistan from Ajman with our comprehensive door-to-door delivery solutions.
              </p>
              <Link 
                to="/ajman-to-pakistan"
                className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
              >
                Get a free quote for cargo from Ajman to Pakistan <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for Long-tail Keywords */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
              Frequently Asked Questions - Pakistan Cargo Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-cargo-blue mb-3">What are your cargo rates to Pakistan?</h3>
                <p className="text-gray-700">Our Pakistan cargo rates vary based on weight, dimensions, and shipping method. We offer competitive pricing for sea cargo to Pakistan, air cargo to Pakistan, and door-to-door cargo to Pakistan services.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-cargo-blue mb-3">Do you offer door-to-door cargo to Pakistan?</h3>
                <p className="text-gray-700">Yes, we provide comprehensive door-to-door cargo to Pakistan services from all UAE cities including Dubai, Abu Dhabi, Sharjah, and Ajman with pickup and delivery to your specified addresses.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-cargo-blue mb-3">How long does cargo from Dubai to Pakistan take?</h3>
                <p className="text-gray-700">Delivery times for Pakistan cargo Dubai services range from 3-5 days for air cargo to Pakistan to 15-20 days for sea cargo to Pakistan, depending on the destination city and shipping method chosen.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-cargo-blue mb-3">What items can I send via Pakistan cargo services?</h3>
                <p className="text-gray-700">Our Pakistan cargo services accept household items, electronics, documents, personal belongings, and commercial goods. We provide specialized packing for fragile items and ensure secure handling throughout the journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      
      {/* Popular Destinations Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
            Popular Pakistan Destinations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {popularDestinations.map((destination, index) => (
              <Link 
                key={index}
                to={destination.href}
                className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center group"
              >
                <h3 className="font-semibold text-cargo-blue mb-2 group-hover:text-cargo-green transition-colors">
                  Cargo to {destination.name}
                </h3>
                <p className="text-sm text-gray-600">{destination.desc}</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/service-areas"
              className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
            >
              View All Pakistan Destinations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CallToAction />
    </div>
  );
};

export default Index;
