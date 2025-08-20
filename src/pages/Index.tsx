
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
import PageSEO from "@/components/SEO/PageSEO";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Package, Truck, Plane, Ship, Clock, Shield } from "lucide-react";

const Index = () => {
  const popularDestinations = [
    { name: "Karachi", href: "/pakistan-cargo-to-karachi", desc: "Pakistan's largest port city and commercial hub" },
    { name: "Lahore", href: "/pakistan-cargo-to-lahore", desc: "Cultural capital and second largest city" },
    { name: "Islamabad", href: "/pakistan-cargo-to-islamabad", desc: "Capital city and political center" },
    { name: "Peshawar", href: "/pakistan-cargo-to-peshawar", desc: "Historic northwestern gateway city" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Cargo to Pakistan",
    "description": "Professional cargo shipping services from UAE to Pakistan with door-to-door delivery",
    "url": "https://cargotopakistan.ae",
    "logo": "https://cargotopakistan.ae/opengraph-image.png",
    "telephone": "+971504948135",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "Dubai",
      "addressLocality": "Dubai"
    },
    "areaServed": ["United Arab Emirates", "Pakistan"],
    "serviceType": "Cargo Shipping Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cargo Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sea Freight to Pakistan",
            "description": "Cost-effective ocean cargo shipping"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Air Freight to Pakistan", 
            "description": "Fast air cargo delivery"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <PageSEO
        title="Cargo to Pakistan from UAE | Dubai Abu Dhabi Sharjah | Door-to-Door Shipping"
        description="Professional cargo shipping from UAE to Pakistan with door-to-door delivery. Serving Dubai, Abu Dhabi, Sharjah & all Emirates. Trusted by 10,000+ customers. Call +971504948135"
        keywords="cargo to pakistan, dubai to pakistan cargo, uae pakistan shipping, cargo service dubai, pakistan cargo uae"
        canonical="https://cargotopakistan.ae"
        robots="index,follow"
        structuredData={structuredData}
      />
      
      <HeroSection />
      
      {/* Main Content Section with Enhanced SEO Structure */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-cargo-blue mb-8 text-center">
              <strong>Professional Cargo to Pakistan</strong> | Door to Door Delivery Service
            </h1>
            
            <div className="prose max-w-none text-lg text-gray-700 mb-12">
              <p className="mb-6">
                Welcome to Dubai's most trusted <strong>cargo service to Pakistan</strong>. We provide professional, 
                secure, and affordable <strong>cargo shipping from Dubai to Pakistan</strong>, serving Business Bay, Deira, 
                Bur Dubai, and all major Dubai areas. Our comprehensive Pakistan cargo solutions ensure safe and 
                timely delivery to every corner of Pakistan, whether you're shipping personal belongings, 
                commercial goods, or household items from Dubai's business districts.
              </p>
              
              <p className="mb-6">
                Our extensive <strong>Dubai cargo services</strong> include express air cargo to Pakistan for urgent deliveries, 
                cost-effective sea cargo from Dubai ports for bulk shipments, full container loads for large volume cargo, 
                and express courier service for documents and small packages. With years 
                of experience in <strong>Dubai to Pakistan logistics</strong>, we understand the unique requirements of expatriate 
                communities and businesses in Dubai, providing trusted cargo services across all Emirates.
              </p>
              
              <p className="mb-6">
                From specialized cargo services in <strong>Business Bay and Downtown Dubai</strong> to comprehensive shipping solutions from 
                Dubai Marina and Jumeirah, we offer complete <strong>door-to-door cargo to Pakistan</strong> with professional packing, 
                Dubai customs clearance assistance, real-time tracking, and comprehensive insurance options for complete 
                peace of mind throughout your Dubai Pakistan cargo shipping experience.
              </p>
            </div>

            {/* Popular Destinations Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
                <strong>Popular Pakistan Destinations</strong> from UAE
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularDestinations.map((destination, index) => (
                  <Link 
                    key={index}
                    to={destination.href}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-cargo-blue group"
                    title={`Cargo shipping to ${destination.name} Pakistan`}
                  >
                    <div className="flex items-center mb-3">
                      <MapPin className="h-5 w-5 text-cargo-green mr-2" />
                      <h3 className="text-xl font-semibold text-cargo-blue group-hover:text-cargo-orange">
                        <strong>Cargo to {destination.name}</strong>
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{destination.desc}</p>
                    <div className="flex items-center text-cargo-blue group-hover:text-cargo-orange">
                      <span className="text-sm font-medium">View Shipping Details</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* UAE Emirates Coverage */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
                <strong>UAE Emirates</strong> We Serve for Pakistan Cargo
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link 
                  to="/dubai-to-pakistan" 
                  className="bg-cargo-lightBlue p-6 rounded-lg hover:bg-cargo-blue hover:text-white transition-colors group"
                  title="Dubai to Pakistan cargo services"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                    <strong>Dubai Cargo Services</strong>
                  </h3>
                  <p className="text-sm opacity-90">Business Bay, Marina, Downtown, Deira & all Dubai areas to Pakistan</p>
                </Link>
                
                <Link 
                  to="/abu-dhabi-to-pakistan" 
                  className="bg-cargo-lightGreen p-6 rounded-lg hover:bg-cargo-green hover:text-white transition-colors group"
                  title="Abu Dhabi to Pakistan cargo services"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                    <strong>Abu Dhabi Cargo Services</strong>
                  </h3>
                  <p className="text-sm opacity-90">Al Reem, Khalifa City, Mussafah & all Abu Dhabi areas to Pakistan</p>
                </Link>
                
                <Link 
                  to="/sharjah-to-pakistan" 
                  className="bg-orange-100 p-6 rounded-lg hover:bg-cargo-orange hover:text-white transition-colors group"
                  title="Sharjah to Pakistan cargo services"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                    <strong>Sharjah Cargo Services</strong>
                  </h3>
                  <p className="text-sm opacity-90">Al Nahda, Al Majaz, Al Khan & all Sharjah areas to Pakistan</p>
                </Link>
              </div>
            </div>

            {/* Service Types */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-cargo-blue mb-8 text-center">
                Our <strong>Professional Cargo Services</strong> to Pakistan
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Ship className="h-8 w-8 text-cargo-blue" />
                  </div>
                  <h4 className="text-xl font-semibold text-cargo-blue mb-3">
                    <strong>Sea Freight to Pakistan</strong>
                  </h4>
                  <p className="text-gray-600">Cost-effective ocean cargo for large shipments with 15-30 days delivery to Pakistan ports</p>
                  <Link to="/services/sea-freight" className="text-cargo-blue hover:text-cargo-green mt-2 inline-block">
                    Learn More →
                  </Link>
                </div>
                
                <div className="text-center">
                  <div className="bg-cargo-lightGreen rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-cargo-green" />
                  </div>
                  <h4 className="text-xl font-semibold text-cargo-blue mb-3">
                    <strong>Air Freight to Pakistan</strong>
                  </h4>
                  <p className="text-gray-600">Fast air cargo delivery to Pakistan within 3-7 days for urgent shipments from UAE</p>
                  <Link to="/services/air-freight" className="text-cargo-blue hover:text-cargo-green mt-2 inline-block">
                    Learn More →
                  </Link>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-cargo-orange" />
                  </div>
                  <h4 className="text-xl font-semibold text-cargo-blue mb-3">
                    <strong>Door-to-Door Pakistan Cargo</strong>
                  </h4>
                  <p className="text-gray-600">Complete pickup and delivery service from your UAE location to Pakistan address</p>
                  <Link to="/services" className="text-cargo-blue hover:text-cargo-green mt-2 inline-block">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cargo-blue mb-6 text-center">
                Why Choose Our <strong>Pakistan Cargo Services</strong>?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-cargo-green mx-auto mb-3" />
                  <h4 className="font-semibold text-cargo-blue mb-2">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">Quick and reliable shipping to Pakistan</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-cargo-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-cargo-blue mb-2">Secure Handling</h4>
                  <p className="text-sm text-gray-600">Professional packing and safe transport</p>
                </div>
                <div className="text-center">
                  <Package className="h-8 w-8 text-cargo-orange mx-auto mb-3" />
                  <h4 className="font-semibold text-cargo-blue mb-2">Door-to-Door</h4>
                  <p className="text-sm text-gray-600">Complete pickup to delivery service</p>
                </div>
                <div className="text-center">
                  <ArrowRight className="h-8 w-8 text-cargo-green mx-auto mb-3" />
                  <h4 className="font-semibold text-cargo-blue mb-2">Real-time Tracking</h4>
                  <p className="text-sm text-gray-600">Track your cargo throughout the journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesGrid />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
};

export default Index;
