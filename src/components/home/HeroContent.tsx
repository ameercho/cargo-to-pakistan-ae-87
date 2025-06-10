
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Package, Truck, Plane, Ship } from "lucide-react";

const HeroContent = () => {
  const popularDestinations = [
    { name: "Karachi", href: "/pakistan-cargo-to-karachi", desc: "Pakistan's largest port city and commercial hub" },
    { name: "Lahore", href: "/pakistan-cargo-to-lahore", desc: "Cultural capital and second largest city" },
    { name: "Islamabad", href: "/pakistan-cargo-to-islamabad", desc: "Capital city and political center" },
    { name: "Peshawar", href: "/pakistan-cargo-to-peshawar", desc: "Historic northwestern gateway city" }
  ];

  return (
    <>
      {/* Main Content Section with Enhanced Dubai SEO Structure */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-cargo-blue mb-8 text-center">
              Dubai to Pakistan Cargo Services - Professional Shipping Solutions
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
    </>
  );
};

export default HeroContent;
