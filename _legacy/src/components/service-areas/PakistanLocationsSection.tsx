
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface PakistanLocation {
  city: string;
  country: string;
  path: string;
}

const PakistanLocationsSection = () => {
  // Pakistan destination cities with their corresponding route paths
  const pakistanLocations: PakistanLocation[] = [
    { city: "Karachi", country: "Pakistan", path: "/pakistan-cargo-to-karachi" },
    { city: "Lahore", country: "Pakistan", path: "/pakistan-cargo-to-lahore" },
    { city: "Islamabad", country: "Pakistan", path: "/pakistan-cargo-to-islamabad" },
    { city: "Peshawar", country: "Pakistan", path: "/pakistan-cargo-to-peshawar" },
    { city: "Quetta", country: "Pakistan", path: "/pakistan-cargo-to-quetta" },
    { city: "Faisalabad", country: "Pakistan", path: "/pakistan-cargo-to-faisalabad" },
    { city: "Multan", country: "Pakistan", path: "/pakistan-cargo-to-multan" },
    { city: "Sialkot", country: "Pakistan", path: "/pakistan-cargo-to-sialkot" },
    { city: "Rawalpindi", country: "Pakistan", path: "/pakistan-cargo-to-rawalpindi" },
    { city: "Gujranwala", country: "Pakistan", path: "/pakistan-cargo-to-gujranwala" },
    { city: "Hyderabad", country: "Pakistan", path: "/pakistan-cargo-to-hyderabad" },
    { city: "Bahawalpur", country: "Pakistan", path: "/pakistan-cargo-to-bahawalpur" },
    { city: "Sargodha", country: "Pakistan", path: "/pakistan-cargo-to-sargoda" },
    { city: "Sukkur", country: "Pakistan", path: "/pakistan-cargo-to-sukkur" },
    { city: "Larkana", country: "Pakistan", path: "/pakistan-cargo-to-larkana" },
    { city: "Sheikhupura", country: "Pakistan", path: "/pakistan-cargo-to-sheikhupura" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Pakistan Destination Locations</h2>
          <p className="section-description">
            We deliver to all major cities and regions throughout Pakistan.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {pakistanLocations.map((location, index) => (
            <Link to={location.path} key={index} className="block">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center card-hover">
                <MapPin className="h-5 w-5 text-cargo-orange mx-auto mb-2" />
                <h3 className="font-medium">{location.city}</h3>
                <p className="text-xs text-gray-500 mt-1">{location.country}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 p-6 bg-cargo-lightBlue rounded-lg">
          <h3 className="text-xl font-semibold text-cargo-blue mb-3">Can't find your location?</h3>
          <p className="mb-4">
            We deliver to many other locations across Pakistan. Contact us to check if we service your specific area.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button className="bg-cargo-green text-white hover:bg-[#176a3e] tap-target">
                Get a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="hover:bg-cargo-lightGreen hover:text-cargo-green tap-target">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PakistanLocationsSection;
