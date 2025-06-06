
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Package, Truck, Plane, Ship, Clock, Shield } from "lucide-react";

const Index = () => {
  const seoData = {
    title: "Cargo to Pakistan from Dubai, Abu Dhabi, Sharjah & Ajman | Door-to-Door Shipping Services",
    description: "Need reliable cargo to Pakistan from UAE? We offer fast & secure door-to-door Pakistan cargo services from Dubai, Abu Dhabi, Sharjah, and Ajman. Get a free quote for your Pakistan cargo today!",
    keywords: "cargo to pakistan, pakistan cargo, pakistan cargo dubai, door to door cargo to pakistan, air cargo to pakistan from uae, sea cargo to pakistan from uae, parcel delivery to pakistan from dubai, cargo services uae to pakistan",
    canonicalUrl: "https://cargotopakistan.ae/",
    ogTitle: "Cargo to Pakistan from Dubai, Abu Dhabi, Sharjah & Ajman | Door-to-Door Shipping Services",
    ogDescription: "Need reliable cargo to Pakistan from UAE? We offer fast & secure door-to-door Pakistan cargo services from Dubai, Abu Dhabi, Sharjah, and Ajman. Get a free quote today!",
    ogImage: "https://cargotopakistan.ae/images/homepage-og.jpg",
    h1: "Your Premier Partner for Cargo to Pakistan from Dubai, Abu Dhabi, Sharjah & Ajman"
  };

  const popularDestinations = [
    { name: "Karachi", href: "/pakistan-cargo-to-karachi", desc: "Pakistan's largest port city and commercial hub" },
    { name: "Lahore", href: "/pakistan-cargo-to-lahore", desc: "Cultural capital and second largest city" },
    { name: "Islamabad", href: "/pakistan-cargo-to-islamabad", desc: "Capital city and political center" },
    { name: "Peshawar", href: "/pakistan-cargo-to-peshawar", desc: "Historic northwestern gateway city" }
  ];

  const citySpecificServices = [
    { 
      name: "Dubai", 
      href: "/dubai-to-pakistan", 
      desc: "Pakistan cargo Dubai services with daily departures",
      details: "Our comprehensive Pakistan cargo Dubai solutions ensure secure and timely delivery to all major Pakistani cities."
    },
    { 
      name: "Abu Dhabi", 
      href: "/abu-dhabi-to-pakistan", 
      desc: "Cargo to Pakistan from Abu Dhabi with professional handling",
      details: "Reliable cargo services from Abu Dhabi to Pakistan with door-to-door delivery options."
    },
    { 
      name: "Sharjah", 
      href: "/sharjah-to-pakistan", 
      desc: "Sharjah to Pakistan cargo with competitive rates",
      details: "Fast and secure Sharjah to Pakistan cargo services for all types of shipments."
    },
    { 
      name: "Ajman", 
      href: "/ajman-to-pakistan", 
      desc: "Affordable cargo options from Ajman to Pakistan",
      details: "Cost-effective cargo solutions from Ajman to Pakistan with reliable delivery schedules."
    }
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FreightCompany",
    "name": "Cargo to Pakistan",
    "url": "https://cargotopakistan.ae",
    "description": "Professional cargo shipping services from UAE to Pakistan with door-to-door delivery",
    "serviceArea": {
      "@type": "Place",
      "name": "United Arab Emirates to Pakistan"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-50-494-8135",
      "contactType": "customer service"
    },
    "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Pakistan"]
  };

  return (
    <div className="min-h-screen">
      <SEOHead seoData={seoData} structuredData={structuredData} />
      
      <HeroSection />
      
      {/* Main Content Section with Enhanced SEO Structure */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-cargo-blue mb-8 text-center">
              Your Premier Partner for Cargo to Pakistan from Dubai, Abu Dhabi, Sharjah & Ajman
            </h1>
            
            <div className="prose max-w-none text-lg text-gray-700 mb-12">
              <p className="mb-6">
                Welcome to the UAE's leading cargo shipping service to Pakistan. We provide professional, 
                secure, and affordable door-to-door cargo to Pakistan from all major UAE cities including Dubai, 
                Abu Dhabi, Sharjah, and Ajman. Our comprehensive Pakistan cargo services ensure safe and 
                timely delivery to every corner of Pakistan, whether you're shipping personal belongings, 
                commercial goods, or household items.
              </p>
              
              <p className="mb-6">
                Our extensive range includes sea cargo to Pakistan from UAE for cost-effective bulk shipments, 
                air cargo to Pakistan from UAE for urgent deliveries, full container loads for large volume cargo, 
                and express parcel delivery to Pakistan from Dubai for documents and small packages. With years 
                of experience in UAE to Pakistan logistics, we understand the unique requirements of cross-border shipping.
              </p>
              
              <p className="mb-6">
                From Pakistan cargo Dubai services to comprehensive shipping solutions from Abu Dhabi, Sharjah, 
                and Ajman, we offer complete door-to-door cargo to Pakistan with professional packing, customs 
                clearance assistance, real-time tracking, and comprehensive insurance options for complete 
                peace of mind throughout the shipping process.
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

      {/* City-Specific Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-cargo-blue mb-4">
            Cargo to Pakistan Services by UAE City
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We provide specialized Pakistan cargo services from every major UAE city with tailored solutions for your specific needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {citySpecificServices.map((city, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-cargo-blue mb-4">
                  {city.name === 'Dubai' && 'Pakistan Cargo Dubai Services'}
                  {city.name === 'Abu Dhabi' && 'Cargo to Pakistan from Abu Dhabi'}
                  {city.name === 'Sharjah' && 'Sharjah to Pakistan Cargo'}
                  {city.name === 'Ajman' && 'Affordable Cargo Options from Ajman to Pakistan'}
                </h3>
                <p className="text-gray-700 mb-4">{city.details}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Ship className="h-5 w-5 text-cargo-blue" />
                    <span className="text-sm">Sea Freight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-cargo-green" />
                    <span className="text-sm">Air Freight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-cargo-orange" />
                    <span className="text-sm">Door-to-Door</span>
                  </div>
                </div>
                <Link 
                  to={city.href}
                  className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
                >
                  Learn more about our {city.name.toLowerCase()} services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-cargo-blue mb-4">
              Comprehensive Shipping Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Ship className="h-5 w-5 text-cargo-blue" />
                  Sea Cargo to Pakistan from UAE
                </h4>
                <p className="text-gray-700 mb-4">
                  Our comprehensive sea cargo to Pakistan from UAE solutions ensure cost-effective bulk shipments with reliable delivery schedules.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Plane className="h-5 w-5 text-cargo-green" />
                  Air Cargo to Pakistan from UAE
                </h4>
                <p className="text-gray-700 mb-4">
                  Fast air cargo to Pakistan from UAE solutions for urgent and time-sensitive shipments with express delivery options.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Truck className="h-5 w-5 text-cargo-orange" />
                  Door-to-Door Cargo to Pakistan
                </h4>
                <p className="text-gray-700 mb-4">
                  Convenient door-to-door cargo to Pakistan services with complete pickup and delivery solutions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-cargo-blue" />
                  Parcel Delivery to Pakistan from Dubai
                </h4>
                <p className="text-gray-700 mb-4">
                  Express parcel delivery to Pakistan from Dubai for documents and small packages with tracking.
                </p>
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
