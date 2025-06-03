
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const seoData = {
    title: "Cargo to Pakistan - Professional Shipping Services from UAE",
    description: "Leading cargo shipping company from UAE to Pakistan. Door-to-door delivery, competitive rates, professional handling. Sea freight, air freight, courier services available.",
    keywords: "cargo to pakistan, uae to pakistan shipping, cargo services, sea freight, air freight",
    canonicalUrl: "https://cargotopakistan.ae/",
    ogTitle: "Cargo to Pakistan - Professional Shipping Services from UAE",
    ogDescription: "Leading cargo shipping company from UAE to Pakistan with professional handling and competitive rates.",
    ogImage: "https://cargotopakistan.ae/images/cargo-services-home.jpg",
    h1: "Professional Cargo Services from UAE to Pakistan"
  };

  const popularDestinations = [
    { name: "Karachi", href: "/pakistan-cargo-to-karachi", desc: "Pakistan's largest port city" },
    { name: "Lahore", href: "/pakistan-cargo-to-lahore", desc: "Cultural capital of Pakistan" },
    { name: "Islamabad", href: "/pakistan-cargo-to-islamabad", desc: "Capital city of Pakistan" },
    { name: "Peshawar", href: "/pakistan-cargo-to-peshawar", desc: "Historic northwestern city" }
  ];

  const serviceAreas = [
    { name: "Dubai", href: "/areas/dubai", desc: "Premier business hub" },
    { name: "Abu Dhabi", href: "/areas/abu-dhabi", desc: "Capital emirate" },
    { name: "Sharjah", href: "/areas/sharjah", desc: "Cultural capital" },
    { name: "Ajman", href: "/areas/ajman", desc: "Growing emirate" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead seoData={seoData} />
      
      <HeroSection />
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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-semibold text-cargo-blue mb-2">{destination.name}</h3>
                <p className="text-sm text-gray-600">{destination.desc}</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/service-areas"
              className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
            >
              View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
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
                className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                <h3 className="font-semibold text-cargo-blue mb-2">{area.name}</h3>
                <p className="text-sm text-gray-600">{area.desc}</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/service-areas"
              className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
            >
              View All UAE Areas <ArrowRight className="ml-2 h-4 w-4" />
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
