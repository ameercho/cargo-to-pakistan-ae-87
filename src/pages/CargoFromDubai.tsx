
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Truck, Phone, ArrowRight, MessageCircle, Ship, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingButton from "@/components/FloatingButton";
import { Helmet } from "react-helmet";

const CargoFromDubai = () => {
  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20from%20Dubai%20to%20Pakistan.", "_blank");
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>Cargo to Pakistan from Dubai | Fast & Reliable Shipping Services</title>
        <meta name="description" content="Send cargo to Pakistan from Dubai with our professional door-to-door shipping service. Affordable rates, secure handling, and fast delivery guaranteed." />
        <meta name="keywords" content="cargo to Pakistan from Dubai, Dubai to Pakistan cargo, shipping to Pakistan from Dubai, send parcel to Pakistan from Dubai, Dubai Pakistan cargo services" />
        <link rel="canonical" href="https://www.cargotopakistan.ae/cargo-from-dubai" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cargo to Pakistan from Dubai</h1>
            <p className="text-xl text-gray-100 mb-8">
              Fast, reliable and affordable door-to-door cargo services from Dubai to all major cities in Pakistan
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={handleCall}
                className="bg-white text-cargo-green hover:bg-gray-100 flex items-center gap-2 tap-target"
                size="lg"
              >
                <Phone className="h-4 w-4" /> Call Now
              </Button>
              <Button 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 tap-target"
                size="lg"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-cargo-blue mb-6">Shipping from Dubai to Pakistan Made Simple</h2>
              <p className="text-gray-600 mb-6">
                At Cargo to Pakistan, we provide comprehensive cargo services from Dubai to all major cities in Pakistan. 
                Whether you're sending personal belongings, commercial goods, or excess baggage, our door-to-door 
                delivery service ensures your items reach their destination safely and on time.
              </p>
              <p className="text-gray-600 mb-6">
                With our strategically located office in Dubai, we offer convenient pickup from anywhere in the city, 
                including Dubai Marina, Deira, Bur Dubai, JBR, Business Bay, Downtown Dubai, and all other areas.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-cargo-blue mb-4">Our Dubai to Pakistan Cargo Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Door-to-door delivery to all major cities in Pakistan</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Air freight (2-5 days) and sea freight (25-40 days) options</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Free pickup from your location in Dubai</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Secure packaging and handling of your shipments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Real-time tracking of your cargo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Customs clearance assistance</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-4 flex-wrap">
                <Button className="bg-cargo-green hover:bg-[#176a3e] text-white tap-target">
                  Get a Free Quote
                </Button>
                <Link to="/services">
                  <Button variant="outline" className="border-cargo-green text-cargo-green hover:bg-cargo-lightGreen tap-target">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-cargo-lightBlue rounded-full p-3 mr-4">
                      <Truck className="h-6 w-6 text-cargo-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-cargo-blue">
                      Dubai to Pakistan Door-to-Door Service
                    </h3>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-cargo-orange mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">From: Dubai, UAE</p>
                      <p className="text-sm text-gray-500">Free pickup from your location</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-cargo-blue mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">To: All major cities in Pakistan</p>
                      <p className="text-sm text-gray-500">Delivery to recipient's doorstep</p>
                    </div>
                  </div>
                  
                  <p className="mb-6 text-gray-600">
                    Our door-to-door service eliminates the hassle of transporting your cargo. 
                    We handle everything from pickup in Dubai to delivery at the final destination in Pakistan.
                  </p>
                  
                  <div className="flex gap-3">
                    <div className="bg-cargo-lightBlue p-2 rounded flex items-center">
                      <Plane className="h-4 w-4 text-cargo-blue mr-2" /> Air Freight
                    </div>
                    <div className="bg-cargo-lightGreen p-2 rounded flex items-center">
                      <Ship className="h-4 w-4 text-cargo-green mr-2" /> Sea Freight
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-cargo-blue mb-4">Dubai Areas We Cover</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded shadow-sm">Dubai Marina</div>
                  <div className="p-3 bg-white rounded shadow-sm">Deira</div>
                  <div className="p-3 bg-white rounded shadow-sm">Bur Dubai</div>
                  <div className="p-3 bg-white rounded shadow-sm">Jumeirah</div>
                  <div className="p-3 bg-white rounded shadow-sm">Business Bay</div>
                  <div className="p-3 bg-white rounded shadow-sm">Downtown Dubai</div>
                  <div className="p-3 bg-white rounded shadow-sm">JLT</div>
                  <div className="p-3 bg-white rounded shadow-sm">Al Barsha</div>
                </div>
                <p className="text-center mt-4 text-gray-600 text-sm">
                  ...and all other areas in Dubai
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Dubai to Pakistan Shipping Options</h2>
            <p className="section-description">
              Choose the shipping method that best suits your needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-cargo-lightBlue rounded-full p-3 mr-4">
                    <Plane className="h-6 w-6 text-cargo-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Dubai to Pakistan Air Freight
                  </h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-cargo-lightBlue rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-blue" />
                    </div>
                    <span>Fast delivery within 2-5 business days</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightBlue rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-blue" />
                    </div>
                    <span>Ideal for urgent shipments and valuable items</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightBlue rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-blue" />
                    </div>
                    <span>Weight restrictions apply</span>
                  </li>
                </ul>
                
                <Button className="bg-cargo-blue hover:bg-blue-800 w-full tap-target">
                  Get Air Freight Quote
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-cargo-lightGreen rounded-full p-3 mr-4">
                    <Ship className="h-6 w-6 text-cargo-green" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Dubai to Pakistan Sea Freight
                  </h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Economical shipping in 25-40 days</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Perfect for large or heavy shipments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Cost-effective for non-urgent cargo</span>
                  </li>
                </ul>
                
                <Button className="bg-cargo-green hover:bg-[#176a3e] w-full tap-target">
                  Get Sea Freight Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs about Dubai to Pakistan Cargo */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Common questions about shipping cargo from Dubai to Pakistan
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-cargo-blue mb-2">How long does shipping from Dubai to Pakistan take?</h3>
              <p className="text-gray-600">
                Shipping times vary based on the method you choose. Air freight typically takes 2-5 business days, while sea freight can take 25-40 days. Express services are available for urgent shipments.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-cargo-blue mb-2">Do you provide packaging materials?</h3>
              <p className="text-gray-600">
                Yes, we provide professional packaging materials to ensure your items are safely protected during transit. Our team will pack your items securely to prevent any damage during shipping.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-cargo-blue mb-2">How much does it cost to send cargo from Dubai to Pakistan?</h3>
              <p className="text-gray-600">
                Shipping costs depend on the weight, dimensions, shipping method, and destination in Pakistan. Contact us for a free, no-obligation quote tailored to your specific shipping needs.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-cargo-blue mb-2">Can I track my shipment?</h3>
              <p className="text-gray-600">
                Yes, we provide real-time tracking for all shipments. Once your cargo is processed, you'll receive a tracking number to monitor your shipment's progress from Dubai to its destination in Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Ship from Dubai to Pakistan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and experience our reliable cargo services from Dubai to Pakistan.
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

export default CargoFromDubai;
