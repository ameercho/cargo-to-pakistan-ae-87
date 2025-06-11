
import React from 'react';
import { MapPin, Ship, Package, Truck, ArrowRight } from "lucide-react";

interface PakistanCargoMainContentProps {
  city: string;
  description?: string;
  areas: string[];
}

const PakistanCargoMainContent: React.FC<PakistanCargoMainContentProps> = ({ 
  city, 
  description, 
  areas 
}) => {
  const defaultDescription = `We provide comprehensive cargo solutions from UAE to ${city}, Pakistan. Our services are designed to meet all your shipping needs with reliability and efficiency.`;

  const features = [
    { icon: MapPin, text: `Door-to-door delivery throughout ${city}` },
    { icon: Package, text: "Secure packaging and handling" },
    { icon: Truck, text: "Real-time cargo tracking" },
    { icon: ArrowRight, text: "Customs clearance assistance" }
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-cargo-blue mb-6 flex items-center">
        <MapPin className="mr-2 h-6 w-6 text-cargo-green" />
        {city} Cargo Services from UAE
      </h2>
    
      <div className="prose max-w-none">
        <p className="mb-4 text-lg">
          {description || defaultDescription}
        </p>
        
        <p className="mb-4">
          Whether you're sending personal belongings, commercial goods, or specialized items, our experienced team ensures your cargo reaches {city} safely and on schedule.
        </p>
        
        <div className="my-8 p-6 bg-cargo-lightBlue rounded-lg border-l-4 border-cargo-blue">
          <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
            <Ship className="mr-2 h-5 w-5" />
            Why Choose Our {city} Cargo Services?
          </h3>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-0">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                  <feature.icon className="h-4 w-4 text-cargo-green" />
                </div>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">{city} Cargo Destinations</h3>
        
        <p className="mb-4">
          We deliver to all areas in {city} including:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {areas.map((area, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
              <MapPin className="h-4 w-4 text-cargo-green mr-2" /> {area}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PakistanCargoMainContent;
