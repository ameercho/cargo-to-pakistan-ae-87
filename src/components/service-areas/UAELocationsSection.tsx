
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Ship, Plane } from "lucide-react";

interface UAELocation {
  city: string;
  country: string;
  path?: string;
}

const UAELocationsSection = () => {
  // UAE origin cities with their corresponding route paths
  const uaeLocations: UAELocation[] = [
    { city: "Dubai", country: "UAE", path: "/areas/dubai" },
    { city: "Abu Dhabi", country: "UAE", path: "/areas/abu-dhabi" },
    { city: "Sharjah", country: "UAE", path: "/areas/sharjah" },
    { city: "Ajman", country: "UAE", path: "/areas/ajman" },
    { city: "Ras Al Khaimah", country: "UAE", path: "/areas/ras-al-khaimah" },
    { city: "Fujairah", country: "UAE", path: "/areas/fujairah" },
    { city: "Umm Al Quwain", country: "UAE", path: "/areas/umm-al-quwain" },
    { city: "Al Ain", country: "UAE", path: "/areas/al-ain" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">UAE Origin Locations</h2>
          <p className="section-description">
            We provide cargo pickup services from all major cities across the UAE.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {uaeLocations.map((location, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 card-hover">
              <div className="flex items-center mb-4">
                <div className="bg-cargo-lightGreen rounded-full p-3 mr-4">
                  <MapPin className="h-5 w-5 text-cargo-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    {location.path ? (
                      <Link to={location.path} className="hover:text-cargo-green transition-colors">
                        Cargo from {location.city}
                      </Link>
                    ) : (
                      <>Cargo from {location.city}</>
                    )}
                  </h3>
                  <p className="text-gray-500">{location.country}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                We provide cargo pickup services from {location.city} with door-to-door delivery options to Pakistan.
              </p>
              <div className="flex gap-2">
                <div className="bg-cargo-lightBlue p-2 rounded flex items-center">
                  <Plane className="h-4 w-4 text-cargo-blue mr-2" /> Air Freight
                </div>
                <div className="bg-cargo-lightGreen p-2 rounded flex items-center">
                  <Ship className="h-4 w-4 text-cargo-green mr-2" /> Sea Freight
                </div>
              </div>
              {location.path && (
                <div className="mt-4">
                  <Link to={location.path}>
                    <Button variant="outline" className="w-full border-cargo-green text-white bg-cargo-green hover:bg-green-700">
                      View {location.city} Services
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UAELocationsSection;
