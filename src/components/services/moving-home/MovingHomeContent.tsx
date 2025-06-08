
import React from 'react';
import { Link } from "react-router-dom";
import { Home, Package, ShieldCheck, Truck, FileCheck, MapPin } from "lucide-react";

const MovingHomeContent = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-cargo-blue mb-6 flex items-center">
        <Home className="mr-2 h-6 w-6 text-cargo-green" />
        Professional Home Moving Services from UAE to Pakistan
      </h2>
    
      <div className="prose max-w-none">
        <p className="mb-4 text-lg">
          Our home moving services provide a complete relocation solution from UAE to Pakistan. We take care of packing, transportation, customs clearance, and delivery of all your household belongings to your new home in Pakistan.
        </p>
        
        <p className="mb-4">
          We operate home moving services from all major UAE locations including Dubai, Abu Dhabi, and Sharjah, with connections to Pakistan's key cities including Karachi, Lahore, Islamabad, and beyond. Our comprehensive moving services are ideal for families, professionals, or anyone relocating to Pakistan.
        </p>
        
        <div className="my-8 p-6 bg-cargo-lightBlue rounded-lg border-l-4 border-cargo-blue">
          <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Why Choose Our Home Moving Services?
          </h3>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-0">
            <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
              <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                <Package className="h-4 w-4 text-cargo-green" />
              </div>
              <span>Professional packing of all items</span>
            </li>
            <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
              <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                <ShieldCheck className="h-4 w-4 text-cargo-green" />
              </div>
              <span>Custom wooden crating</span>
            </li>
            <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
              <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                <Truck className="h-4 w-4 text-cargo-green" />
              </div>
              <span>Door-to-door delivery</span>
            </li>
            <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
              <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                <FileCheck className="h-4 w-4 text-cargo-green" />
              </div>
              <span>Customs clearance assistance</span>
            </li>
          </ul>
        </div>
        
        <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Home Moving Destinations in Pakistan</h3>
        
        <p className="mb-4">
          Our home moving services deliver to all major cities in Pakistan with onward distribution to:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          <Link to="/pakistan-cargo-to-karachi" className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
            <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Karachi
          </Link>
          <Link to="/pakistan-cargo-to-lahore" className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
            <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Lahore
          </Link>
          <Link to="/pakistan-cargo-to-islamabad" className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
            <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Islamabad
          </Link>
          <Link to="/pakistan-cargo-to-peshawar" className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
            <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Peshawar
          </Link>
          <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
            <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Faisalabad
          </div>
          <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
            <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Multan
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingHomeContent;
