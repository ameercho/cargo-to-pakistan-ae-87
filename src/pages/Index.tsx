
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
      
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cargo-blue to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Professional <span className="text-cargo-orange">Cargo to Pakistan</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Door-to-door shipping from UAE to Pakistan. Fast, secure, and reliable.
            </p>
            <Link 
              to="/contact" 
              className="bg-cargo-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-cargo-blue mb-8 text-center">
              Trusted UAE to Pakistan Cargo Service
            </h2>
            
            <div className="prose max-w-none text-lg text-gray-700 mb-12">
              <p className="mb-6">
                Welcome to UAE's most trusted cargo service to Pakistan. We provide professional, 
                secure, and affordable shipping from Dubai, Abu Dhabi, Sharjah and all Emirates to Pakistan.
              </p>
            </div>

            {/* Popular Destinations */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
                Popular Pakistan Destinations
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularDestinations.map((destination, index) => (
                  <Link 
                    key={index}
                    to={destination.href}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-cargo-blue group"
                  >
                    <div className="flex items-center mb-3">
                      <MapPin className="h-5 w-5 text-cargo-green mr-2" />
                      <h4 className="text-xl font-semibold text-cargo-blue group-hover:text-cargo-orange">
                        {destination.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{destination.desc}</p>
                    <div className="flex items-center text-cargo-blue group-hover:text-cargo-orange">
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Types */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-cargo-blue mb-8 text-center">
                Our Cargo Services
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Ship className="h-8 w-8 text-cargo-blue" />
                  </div>
                  <h4 className="text-xl font-semibold text-cargo-blue mb-3">Sea Freight</h4>
                  <p className="text-gray-600">Cost-effective ocean cargo for large shipments</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-cargo-lightGreen rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-cargo-green" />
                  </div>
                  <h4 className="text-xl font-semibold text-cargo-blue mb-3">Air Freight</h4>
                  <p className="text-gray-600">Fast delivery within 3-7 days</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-cargo-orange" />
                  </div>
                  <h4 className="text-xl font-semibold text-cargo-blue mb-3">Door-to-Door</h4>
                  <p className="text-gray-600">Complete pickup and delivery service</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cargo-blue mb-6 text-center">
                Why Choose Us?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-cargo-green mx-auto mb-3" />
                  <h4 className="font-semibold text-cargo-blue mb-2">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">Quick and reliable shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-cargo-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-cargo-blue mb-2">Secure Handling</h4>
                  <p className="text-sm text-gray-600">Professional packing and transport</p>
                </div>
                <div className="text-center">
                  <Package className="h-8 w-8 text-cargo-orange mx-auto mb-3" />
                  <h4 className="font-semibold text-cargo-blue mb-2">Door-to-Door</h4>
                  <p className="text-sm text-gray-600">Complete service</p>
                </div>
                <div className="text-center">
                  <ArrowRight className="h-8 w-8 text-cargo-green mx-auto mb-3" />
                  <h4 className="font-semibold text-cargo-blue mb-2">Tracking</h4>
                  <p className="text-sm text-gray-600">Real-time updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
