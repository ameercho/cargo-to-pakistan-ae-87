
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PakistanCargoServices = () => {
  const destinations = [
    {
      city: "Karachi",
      description: "Fast and reliable cargo shipping services to Karachi from all major UAE cities. Door-to-door delivery with tracking."
    },
    {
      city: "Lahore",
      description: "Efficient cargo transportation to Lahore with customs clearance assistance and secure handling of your shipments."
    },
    {
      city: "Islamabad",
      description: "Professional cargo services to Islamabad with flexible options for personal and commercial shipments."
    },
    {
      city: "Peshawar",
      description: "Dependable cargo delivery to Peshawar with competitive rates and door-to-door service options."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Pakistan Cargo Services</h2>
          <p className="section-description">
            We offer specialized cargo shipping solutions to major cities across Pakistan with door-to-door delivery options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-cargo-lightBlue rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-cargo-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Pakistan Cargo to {destination.city}
                  </h3>
                </div>
                
                <p className="mb-6 text-gray-600">{destination.description}</p>
                
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="text-cargo-blue hover:bg-cargo-lightBlue border-cargo-blue tap-target">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-sm text-gray-500">
                    Delivery within 4-7 days
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/service-areas">
            <Button className="bg-cargo-blue hover:bg-blue-800 tap-target">
              View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PakistanCargoServices;
