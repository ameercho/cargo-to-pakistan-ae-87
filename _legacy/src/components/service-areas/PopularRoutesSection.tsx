
import React from 'react';
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const PopularRoutesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Popular Shipping Routes</h2>
          <p className="section-description">
            Explore our most requested door-to-door shipping services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/dubai-to-pakistan">
            <div className="bg-gradient-to-r from-cargo-lightBlue to-blue-50 p-6 rounded-lg shadow-md transition-all hover:shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-cargo-blue">Dubai to Pakistan</h3>
              <p className="text-gray-600">Our most popular route with daily departures</p>
            </div>
          </Link>
          
          <Link to="/abu-dhabi-to-pakistan">
            <div className="bg-gradient-to-r from-cargo-lightGreen to-green-50 p-6 rounded-lg shadow-md transition-all hover:shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-cargo-green">Abu Dhabi to Pakistan</h3>
              <p className="text-gray-600">Regular scheduled shipments to all major cities</p>
            </div>
          </Link>
          
          <Link to="/ajman-to-pakistan">
            <div className="bg-gradient-to-r from-amber-100 to-yellow-50 p-6 rounded-lg shadow-md transition-all hover:shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-cargo-orange">Ajman to Pakistan</h3>
              <p className="text-gray-600">Reliable service with competitive rates</p>
            </div>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/pakistan-cargo-to-karachi">
            <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
              <MapPin className="h-6 w-6 text-cargo-blue mr-3" />
              <div>
                <h4 className="font-medium text-cargo-blue">UAE to Karachi</h4>
                <p className="text-sm text-gray-500">Express shipping to Pakistan's largest city</p>
              </div>
            </div>
          </Link>
          
          <Link to="/pakistan-cargo-to-lahore">
            <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
              <MapPin className="h-6 w-6 text-cargo-green mr-3" />
              <div>
                <h4 className="font-medium text-cargo-green">UAE to Lahore</h4>
                <p className="text-sm text-gray-500">Door-to-door service to Lahore</p>
              </div>
            </div>
          </Link>
          
          <Link to="/pakistan-cargo-to-islamabad">
            <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
              <MapPin className="h-6 w-6 text-cargo-orange mr-3" />
              <div>
                <h4 className="font-medium text-cargo-orange">UAE to Islamabad</h4>
                <p className="text-sm text-gray-500">Efficient shipping to the capital city</p>
              </div>
            </div>
          </Link>
          
          <Link to="/pakistan-cargo-to-peshawar">
            <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
              <MapPin className="h-6 w-6 text-purple-500 mr-3" />
              <div>
                <h4 className="font-medium text-purple-500">UAE to Peshawar</h4>
                <p className="text-sm text-gray-500">Reliable cargo service to KPK</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularRoutesSection;
