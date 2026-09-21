import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

interface UAECity {
  name: string;
  path: string;
  description: string;
}

const UAECitiesSection = () => {
  const uaeCities: UAECity[] = [
    { 
      name: "Dubai", 
      path: "/areas/dubai",
      description: "Comprehensive cargo services from Dubai to all Pakistan destinations with door-to-door delivery."
    },
    { 
      name: "Abu Dhabi", 
      path: "/areas/abu-dhabi",
      description: "Professional cargo handling from Abu Dhabi to Pakistan with secure packaging and tracking."
    },
    { 
      name: "Sharjah", 
      path: "/areas/sharjah",
      description: "Reliable cargo pickup and delivery services from Sharjah to Pakistan destinations."
    },
    { 
      name: "Ajman", 
      path: "/areas/ajman",
      description: "Complete cargo solutions from Ajman to Pakistan with competitive rates and fast delivery."
    },
    { 
      name: "Ras Al Khaimah", 
      path: "/areas/ras-al-khaimah",
  description: "Professional cargo services from Ras Al Khaimah to Pakistan."
    },
    { 
      name: "Fujairah", 
      path: "/areas/fujairah",
      description: "Efficient cargo transport from Fujairah to Pakistan with sea and air freight options."
    },
    { 
      name: "Umm Al Quwain", 
      path: "/areas/umm-al-quwain",
      description: "Dedicated cargo services from Umm Al Quwain to Pakistan with custom clearance support."
    },
    { 
      name: "Al Ain", 
      path: "/areas/al-ain",
      description: "Complete cargo pickup and delivery services from Al Ain to Pakistan destinations."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">UAE Cities</h2>
          <p className="section-description">
            Explore our comprehensive cargo services from major UAE cities to Pakistan destinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uaeCities.map((city, index) => (
            <Link 
              key={index}
              to={city.path}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-cargo-blue hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="bg-cargo-lightBlue rounded-full p-3 mr-3">
                    <MapPin className="h-5 w-5 text-cargo-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-cargo-blue group-hover:text-cargo-green transition-colors">
                    {city.name}
                  </h3>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-cargo-blue transition-colors" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {city.description}
              </p>
              <Button variant="outline" className="w-full border-cargo-green text-white bg-cargo-green hover:bg-green-700">
                View {city.name} Services
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UAECitiesSection;