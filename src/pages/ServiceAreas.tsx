
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Ship, Plane, Phone, MessageCircle } from "lucide-react";
import FloatingButton from "@/components/FloatingButton";

const ServiceAreas = () => {
  // UAE origin cities with their corresponding route paths
  const uaeLocations = [
    { city: "Dubai", country: "UAE", path: "/areas/dubai" },
    { city: "Abu Dhabi", country: "UAE", path: "/areas/abu-dhabi" },
    { city: "Sharjah", country: "UAE", path: "/areas/sharjah" },
    { city: "Ajman", country: "UAE", path: "/areas/ajman" },
    { city: "Ras Al Khaimah", country: "UAE", path: "/areas/ras-al-khaimah" },
    { city: "Fujairah", country: "UAE", path: "/areas/fujairah" },
    { city: "Umm Al Quwain", country: "UAE", path: "/areas/umm-al-quwain" },
    { city: "Al Ain", country: "UAE", path: "/areas/al-ain" }
  ];
  
  // Pakistan destination cities with their corresponding route paths
  const pakistanLocations = [
    { city: "Karachi", country: "Pakistan", path: "/pakistan-cargo-to-karachi" },
    { city: "Lahore", country: "Pakistan", path: "/pakistan-cargo-to-lahore" },
    { city: "Islamabad", country: "Pakistan", path: "/pakistan-cargo-to-islamabad" },
    { city: "Peshawar", country: "Pakistan", path: "/pakistan-cargo-to-peshawar" },
    { city: "Quetta", country: "Pakistan", path: null },
    { city: "Faisalabad", country: "Pakistan", path: null },
    { city: "Multan", country: "Pakistan", path: null },
    { city: "Sialkot", country: "Pakistan", path: null },
    { city: "Rawalpindi", country: "Pakistan", path: null },
    { city: "Gujranwala", country: "Pakistan", path: null },
    { city: "Hyderabad", country: "Pakistan", path: null },
    { city: "Bahawalpur", country: "Pakistan", path: null },
    { city: "Sargodha", country: "Pakistan", path: null },
    { city: "Sukkur", country: "Pakistan", path: null },
    { city: "Larkana", country: "Pakistan", path: null },
    { city: "Sheikhupura", country: "Pakistan", path: null }
  ];

  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };
  
  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20to%20Pakistan.", "_blank");
  };
  
  return <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Service Areas</h1>
            <p className="text-xl text-gray-100 mb-8">
              Comprehensive shipping coverage from the UAE to destinations throughout Pakistan
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={handleCall} className="bg-white text-cargo-green hover:bg-gray-100 flex items-center gap-2 tap-target">
                <Phone className="h-4 w-4" /> Contact Us
              </Button>
              <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 tap-target">
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
              location.path ? (
                <Link to={location.path} key={index} className="block">
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center card-hover">
                    <MapPin className="h-5 w-5 text-cargo-orange mx-auto mb-2" />
                    <h3 className="font-medium">{location.city}</h3>
                    <p className="text-xs text-gray-500 mt-1">{location.country}</p>
                  </div>
                </Link>
              ) : (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <MapPin className="h-5 w-5 text-cargo-orange mx-auto mb-2" />
                  <h3 className="font-medium">{location.city}</h3>
                  <p className="text-xs text-gray-500 mt-1">{location.country}</p>
                </div>
              )
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

      {/* Direct Route Links */}
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

      {/* Service Type Links */}
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

      {/* CTA Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Ship to Pakistan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and experience our reliable cargo services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-cargo-green hover:bg-gray-100 tap-target" size="lg">
                Get a Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 tap-target" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FloatingButton />
    </div>;
};

export default ServiceAreas;
