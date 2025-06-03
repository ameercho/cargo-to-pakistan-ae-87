
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Package, Truck } from "lucide-react";

const Index = () => {
  const seoData = {
    title: "Cargo to Pakistan from UAE | Reliable Shipping Services",
    description: "Professional cargo shipping services from UAE to Pakistan. Door-to-door delivery from Dubai, Abu Dhabi, Sharjah to Karachi, Lahore, Islamabad. Get free quote today!",
    keywords: "cargo to pakistan, uae to pakistan shipping, dubai to karachi cargo, sea freight pakistan, air freight pakistan, door to door delivery",
    canonicalUrl: "https://cargotopakistan.ae/",
    ogTitle: "Cargo to Pakistan from UAE | Reliable Shipping Services",
    ogDescription: "Professional cargo shipping from UAE to Pakistan with door-to-door delivery. Competitive rates, secure handling, reliable delivery to all major cities.",
    ogImage: "https://cargotopakistan.ae/images/homepage-og.jpg",
    h1: "Professional Cargo Services from UAE to Pakistan"
  };

  const popularDestinations = [
    { name: "Karachi", href: "/pakistan-cargo-to-karachi", desc: "Pakistan's largest port city and commercial hub" },
    { name: "Lahore", href: "/pakistan-cargo-to-lahore", desc: "Cultural capital and second largest city" },
    { name: "Islamabad", href: "/pakistan-cargo-to-islamabad", desc: "Capital city and political center" },
    { name: "Peshawar", href: "/pakistan-cargo-to-peshawar", desc: "Historic northwestern gateway city" }
  ];

  const serviceAreas = [
    { name: "Dubai", href: "/dubai-to-pakistan", desc: "Business hub with daily cargo services" },
    { name: "Abu Dhabi", href: "/abu-dhabi-to-pakistan", desc: "Capital emirate shipping solutions" },
    { name: "Sharjah", href: "/sharjah-to-pakistan", desc: "Cultural capital cargo services" },
    { name: "Ajman", href: "/ajman-to-pakistan", desc: "Growing emirate shipping options" }
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FreightCompany",
    "name": "Cargo to Pakistan",
    "url": "https://cargotopakistan.ae",
    "description": "Professional cargo shipping services from UAE to Pakistan",
    "serviceArea": {
      "@type": "Place",
      "name": "United Arab Emirates to Pakistan"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-50-494-8135",
      "contactType": "customer service"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead seoData={seoData} structuredData={structuredData} />
      
      <HeroSection />
      
      {/* Main Content Section with Unique Text */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
              Reliable Cargo Shipping from UAE to Pakistan
            </h2>
            
            <div className="prose max-w-none text-lg text-gray-700 mb-12">
              <p className="mb-6">
                Welcome to the UAE's leading cargo shipping service to Pakistan. We provide professional, 
                secure, and affordable cargo transportation from all major UAE cities including Dubai, 
                Abu Dhabi, Sharjah, and Ajman to every corner of Pakistan. Whether you're shipping 
                personal belongings, commercial goods, or household items, our experienced team ensures 
                safe and timely delivery.
              </p>
              
              <p className="mb-6">
                Our comprehensive cargo services include sea freight for cost-effective bulk shipments, 
                air freight for urgent deliveries, full container loads for large volume cargo, and 
                express courier services for documents and small packages. With years of experience 
                in UAE to Pakistan logistics, we understand the unique requirements of cross-border shipping.
              </p>
              
              <p className="mb-6">
                From Dubai to Karachi, Abu Dhabi to Lahore, or Sharjah to Islamabad, we offer door-to-door 
                pickup and delivery services. Our professional packing, customs clearance assistance, 
                real-time tracking, and comprehensive insurance options give you complete peace of mind 
                throughout the shipping process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Package className="h-12 w-12 text-cargo-blue mx-auto mb-4" />
                <h3 className="font-semibold text-cargo-blue mb-2">Professional Packing</h3>
                <p className="text-sm text-gray-600">Expert packaging using quality materials for safe transit</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Truck className="h-12 w-12 text-cargo-green mx-auto mb-4" />
                <h3 className="font-semibold text-cargo-blue mb-2">Door-to-Door Service</h3>
                <p className="text-sm text-gray-600">Complete pickup and delivery to your doorstep</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <MapPin className="h-12 w-12 text-cargo-orange mx-auto mb-4" />
                <h3 className="font-semibold text-cargo-blue mb-2">All Major Cities</h3>
                <p className="text-sm text-gray-600">Service coverage across UAE and Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      
      {/* Popular Destinations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
            Popular Pakistan Destinations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {popularDestinations.map((destination, index) => (
              <Link 
                key={index}
                to={destination.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
              >
                <h3 className="font-semibold text-cargo-blue mb-2 group-hover:text-cargo-green transition-colors">
                  {destination.name}
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

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
            UAE Service Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {serviceAreas.map((area, index) => (
              <Link 
                key={index}
                to={area.href}
                className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center group"
              >
                <h3 className="font-semibold text-cargo-blue mb-2 group-hover:text-cargo-green transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-600">{area.desc}</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/service-areas"
              className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
            >
              View All UAE Service Areas <ArrowRight className="ml-2 h-4 w-4" />
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
