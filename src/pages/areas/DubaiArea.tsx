import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Home, Ship, Truck, Phone, MessageCircle } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";

const DubaiArea = () => {
  const neighborhoods = [
    "Deira", "Bur Dubai", "Downtown Dubai", "Business Bay", "Dubai Marina",
    "Jumeirah", "Al Barsha", "Mirdif", "Al Qusais", "International City",
    "JLT", "Palm Jumeirah", "Silicon Oasis", "Sports City", "JVC"
  ];

  const services = [
    {
      title: "Sea Freight from Dubai",
      description: "Cost-effective ocean shipping solutions from Dubai to Pakistan.",
      icon: Ship,
      link: "/services/sea-freight"
    },
    {
      title: "Full Container from Dubai",
      description: "Dedicated container shipping services from Dubai to Pakistan.",
      icon: Truck,
      link: "/services/full-container"
    },
    {
      title: "Moving Home from Dubai",
      description: "Complete home moving services from Dubai to Pakistan.",
      icon: Home,
      link: "/services/air-freight"
    }
  ];

  const handleCall = () => {
    window.location.href = "tel:+971504948135";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20from%20Dubai%20to%20Pakistan.", "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Cargo Services from Dubai to Pakistan | Reliable Shipping Solutions</title>
        <meta name="description" content="Professional cargo shipping services from Dubai to Pakistan. Door-to-door pickup from all Dubai neighborhoods with reliable delivery to major Pakistani cities." />
        <meta name="keywords" content="Dubai cargo to Pakistan, Dubai Pakistan shipping, cargo Dubai, freight forwarding Dubai, Dubai to Karachi cargo" />
        <link rel="canonical" href="https://cargotopakistan.ae/areas/dubai" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Dubai to Pakistan Cargo Services</h1>
            <p className="text-xl text-gray-100 mb-8">
              Professional cargo shipping services with pickup from all Dubai neighborhoods
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Cargo Services from Dubai to Pakistan</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  We offer comprehensive cargo shipping solutions from Dubai to all major cities in Pakistan. 
                  Our services include door-to-door pickup from any location in Dubai, professional packaging, 
                  shipping documentation, customs clearance, and final delivery to your destination in Pakistan.
                </p>
                
                <p className="mb-4">
                  With our extensive network in Dubai, we can collect your cargo from any neighborhood, whether 
                  you're in Downtown Dubai, Dubai Marina, Deira, or any other area. Our experienced team ensures 
                  your shipments are handled with care and delivered safely to Pakistan.
                </p>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Our Dubai Coverage Areas</h3>
                
                <p className="mb-4">
                  We provide pickup services throughout Dubai, including but not limited to:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {neighborhoods.map((area, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> {area}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Why Choose Our Dubai Cargo Services?</h3>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Convenient pickup from any location in Dubai</li>
                  <li>Multiple shipping options including sea, air, and express courier</li>
                  <li>Professional packing services available</li>
                  <li>Assistance with customs documentation for seamless clearance</li>
                  <li>Regular departures to Pakistan from Dubai</li>
                  <li>Online tracking of your shipment</li>
                  <li>Competitive rates with no hidden charges</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Pakistan Delivery Destinations</h3>
                
                <p className="mb-4">
                  From Dubai, we deliver to all major cities in Pakistan including:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  <Link to="/pakistan-cargo-to-karachi" className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-blue mr-2" /> Karachi
                    </span>
                  </Link>
                  <Link to="/pakistan-cargo-to-lahore" className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-blue mr-2" /> Lahore
                    </span>
                  </Link>
                  <Link to="/pakistan-cargo-to-islamabad" className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-blue mr-2" /> Islamabad
                    </span>
                  </Link>
                  <Link to="/pakistan-cargo-to-peshawar" className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-blue mr-2" /> Peshawar
                    </span>
                  </Link>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <MapPin className="h-4 w-4 text-cargo-blue mr-2" /> Faisalabad
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center">
                    <MapPin className="h-4 w-4 text-cargo-blue mr-2" /> Multan
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">Request Dubai Pickup</h3>
                <p className="mb-4 text-gray-600">
                  Fill out our simple form to schedule a pickup from your Dubai location. We'll contact you to confirm details.
                </p>
                <Button className="w-full bg-cargo-blue hover:bg-blue-800">
                  Schedule Pickup
                </Button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">Our Dubai Services</h3>
                
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-cargo-lightBlue rounded-full p-2 mr-4">
                        <service.icon className="h-5 w-5 text-cargo-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          <Link to={service.link} className="hover:text-cargo-blue">
                            {service.title}
                          </Link>
                        </h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 bg-cargo-lightGreen p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-cargo-green mb-4">Dubai Shipping Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2 mt-1" />
                    <p className="text-gray-700">Dubai is one of the UAE's major shipping hubs with world-class logistics infrastructure.</p>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2 mt-1" />
                    <p className="text-gray-700">Jebel Ali Port is the largest deep-water port in the Middle East and a key gateway for cargo to Pakistan.</p>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-cargo-green mr-2 mt-1" />
                    <p className="text-gray-700">Dubai International Airport offers extensive air freight options for urgent shipments to Pakistan.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Neighborhoods Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-cargo-blue mb-3">Dubai Service Coverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide pickup services across Dubai's diverse neighborhoods and communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-cargo-blue mb-4">Dubai Residential Areas</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-gray-50 rounded">Jumeirah</div>
                <div className="p-2 bg-gray-50 rounded">Al Barsha</div>
                <div className="p-2 bg-gray-50 rounded">Dubai Marina</div>
                <div className="p-2 bg-gray-50 rounded">Palm Jumeirah</div>
                <div className="p-2 bg-gray-50 rounded">Arabian Ranches</div>
                <div className="p-2 bg-gray-50 rounded">Mirdif</div>
                <div className="p-2 bg-gray-50 rounded">JVC</div>
                <div className="p-2 bg-gray-50 rounded">Dubai Hills</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-cargo-blue mb-4">Dubai Commercial Areas</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-gray-50 rounded">Deira</div>
                <div className="p-2 bg-gray-50 rounded">Bur Dubai</div>
                <div className="p-2 bg-gray-50 rounded">Business Bay</div>
                <div className="p-2 bg-gray-50 rounded">DIFC</div>
                <div className="p-2 bg-gray-50 rounded">Dubai Internet City</div>
                <div className="p-2 bg-gray-50 rounded">Dubai Media City</div>
                <div className="p-2 bg-gray-50 rounded">Jebel Ali</div>
                <div className="p-2 bg-gray-50 rounded">Al Quoz</div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="mb-6 text-gray-700">
              No matter where you are in Dubai, we can collect your cargo for shipping to Pakistan.
            </p>
            <Button className="bg-cargo-green hover:bg-[#176a3e] tap-target">
              Request Dubai Pickup
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default DubaiArea;
