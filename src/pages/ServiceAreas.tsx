
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Ship, Plane, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingButton from "@/components/FloatingButton";

const ServiceAreas = () => {
  const uaeLocations = [
    "Dubai", "Abu Dhabi", "Sharjah", "Ajman", 
    "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Al Ain"
  ];
  
  const pakistanLocations = [
    "Karachi", "Lahore", "Islamabad", "Peshawar", 
    "Quetta", "Faisalabad", "Multan", "Sialkot",
    "Rawalpindi", "Gujranwala", "Hyderabad", "Bahawalpur",
    "Sargodha", "Sukkur", "Larkana", "Sheikhupura"
  ];

  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20to%20Pakistan.", "_blank");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-cargo-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Service Areas</h1>
            <p className="text-xl text-gray-100 mb-8">
              Comprehensive shipping coverage from the UAE to destinations throughout Pakistan
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={handleCall}
                className="bg-white text-cargo-green hover:bg-gray-100 flex items-center gap-2 tap-target"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </Button>
              <Button 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 tap-target"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* UAE Origin Locations */}
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
                    <h3 className="text-xl font-semibold">Cargo from {location}</h3>
                    <p className="text-gray-500">United Arab Emirates</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  We provide cargo pickup services from {location} with door-to-door delivery options to Pakistan.
                </p>
                <div className="flex gap-2">
                  <div className="bg-cargo-lightBlue p-2 rounded flex items-center">
                    <Plane className="h-4 w-4 text-cargo-blue mr-2" /> Air Freight
                  </div>
                  <div className="bg-cargo-lightGreen p-2 rounded flex items-center">
                    <Ship className="h-4 w-4 text-cargo-green mr-2" /> Sea Freight
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pakistan Destination Locations */}
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
              <Link to={`/services`} key={index} className="block">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center card-hover">
                  <MapPin className="h-5 w-5 text-cargo-orange mx-auto mb-2" />
                  <h3 className="font-medium">{location}</h3>
                  <p className="text-xs text-gray-500 mt-1">Pakistan</p>
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
              <Button className="bg-cargo-green hover:bg-[#176a3e] tap-target">
                Get a Quote
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="hover:bg-cargo-lightGreen hover:text-cargo-green tap-target">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Map */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Shipping Routes</h2>
            <p className="section-description">
              We offer multiple shipping routes from the UAE to Pakistan to ensure your cargo reaches its destination safely and on time.
            </p>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <p className="text-lg font-medium mb-4">Interactive Map Coming Soon</p>
            <p className="text-gray-600">
              We are working on an interactive map to better visualize our shipping routes and service areas.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white shadow rounded-lg">
              <Plane className="h-10 w-10 text-cargo-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Air Freight Routes</h3>
              <p className="text-gray-600">UAE to Pakistan in 2-5 days</p>
            </div>
            
            <div className="p-6 bg-white shadow rounded-lg">
              <Ship className="h-10 w-10 text-cargo-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Sea Freight Routes</h3>
              <p className="text-gray-600">UAE to Pakistan in 25-40 days</p>
            </div>
            
            <div className="p-6 bg-white shadow rounded-lg">
              <MapPin className="h-10 w-10 text-cargo-orange mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Delivery Network</h3>
              <p className="text-gray-600">Coverage across all major Pakistani cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ship to Pakistan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and experience our reliable cargo services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-white text-cargo-green hover:bg-gray-100 tap-target" 
              size="lg"
            >
              Get a Free Quote
            </Button>
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 tap-target" 
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FloatingButton />
    </div>
  );
};

export default ServiceAreas;
