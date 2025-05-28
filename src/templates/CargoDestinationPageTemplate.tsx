
import React from 'react';
import { Helmet } from "react-helmet-async";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface CargoDestinationInfo {
  city: string;
  description: string;
  areas?: string[];
  heroImage?: string;
}

interface CargoDestinationPageTemplateProps {
  destination: CargoDestinationInfo;
  type: 'pakistan' | 'uae';
}

const CargoDestinationPageTemplate: React.FC<CargoDestinationPageTemplateProps> = ({ 
  destination, 
  type 
}) => {
  useScrollToTop();

  const generateTitle = () => {
    if (type === 'pakistan') {
      return `Cargo Services to ${destination.city}, Pakistan | Fast & Reliable Shipping`;
    }
    return `Cargo Services from ${destination.city} to Pakistan | Door-to-Door Delivery`;
  };

  const generateDescription = () => {
    if (type === 'pakistan') {
      return `Professional cargo services to ${destination.city}, Pakistan. Reliable door-to-door delivery with tracking.`;
    }
    return `Professional cargo services from ${destination.city} to Pakistan. Door-to-door delivery with reliable tracking.`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{generateTitle()}</title>
        <meta name="description" content={generateDescription()} />
        <link rel="canonical" href={`https://cargotopakistan.ae/${destination.city.toLowerCase()}-cargo`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 hero-gradient">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {type === 'pakistan' 
                ? `Cargo Services to ${destination.city}, Pakistan`
                : `Cargo Services from ${destination.city} to Pakistan`
              }
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              {destination.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="page-section-lg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-cargo-blue mb-4">
                {type === 'pakistan' 
                  ? `Door-to-Door Cargo Delivery to ${destination.city}`
                  : `Door-to-Door Cargo Service from ${destination.city} to Pakistan`
                }
              </h2>
              <p className="mb-4">
                We offer reliable and efficient cargo services with professional handling, 
                customs clearance, and timely delivery. Our experienced team ensures your 
                shipments are handled with care throughout the entire process.
              </p>
              
              {destination.areas && (
                <>
                  <h3 className="text-xl font-semibold text-cargo-blue mt-6 mb-3">
                    Service Areas in {destination.city}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {destination.areas.map((area, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                        {area}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">
                  Get a Quote
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact us today for a free quote on your cargo shipment.
                </p>
                {/* Quote form would go here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CargoDestinationPageTemplate;
