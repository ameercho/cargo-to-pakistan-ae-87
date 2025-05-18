
import React from 'react';
import { Link } from "react-router-dom";
import { Plane, Ship, MapPin } from "lucide-react";

const ShippingServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Shipping Services</h2>
          <p className="section-description">
            We offer a variety of shipping options to meet your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Link to="/services/air-freight">
            <div className="p-6 bg-white shadow rounded-lg hover:shadow-md transition-all">
              <Plane className="h-10 w-10 text-cargo-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Air Freight</h3>
              <p className="text-gray-600">Fast shipping from UAE to Pakistan</p>
            </div>
          </Link>
          
          <Link to="/services/sea-freight">
            <div className="p-6 bg-white shadow rounded-lg hover:shadow-md transition-all">
              <Ship className="h-10 w-10 text-cargo-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Sea Freight</h3>
              <p className="text-gray-600">Economical shipping for larger cargo</p>
            </div>
          </Link>
          
          <Link to="/services/full-container">
            <div className="p-6 bg-white shadow rounded-lg hover:shadow-md transition-all">
              <MapPin className="h-10 w-10 text-cargo-orange mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Full Container</h3>
              <p className="text-gray-600">Dedicated container shipping</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShippingServicesSection;
