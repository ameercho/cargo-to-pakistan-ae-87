
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Truck, Phone, ArrowRight, MessageCircle, Ship, Plane, Package } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingButton from "@/components/FloatingButton";
import { Helmet } from "react-helmet";

const CargoToKarachi = () => {
  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20to%20Karachi,%20Pakistan.", "_blank");
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>Cargo to Karachi, Pakistan | Fast & Reliable Shipping from UAE</title>
        <meta name="description" content="Professional cargo services from UAE to Karachi, Pakistan. Door-to-door delivery, air & sea freight options, and competitive rates for all your shipping needs." />
        <meta name="keywords" content="cargo to Karachi, shipping to Karachi Pakistan, UAE to Karachi cargo, send parcels to Karachi, Karachi freight services" />
        <link rel="canonical" href="https://www.cargotopakistan.ae/cargo-to-karachi" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pakistan Cargo to Karachi</h1>
            <p className="text-xl text-gray-100 mb-8">
              Reliable cargo shipping services from UAE to Karachi with door-to-door delivery
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
              <h2 className="text-2xl md:text-3xl font-bold text-cargo-blue mb-6">Expert Cargo Services to Karachi, Pakistan</h2>
              <p className="text-gray-600 mb-6">
                At Cargo to Pakistan, we specialize in delivering cargo from all major cities in the UAE to Karachi, Pakistan's largest city and economic hub. Whether you're sending personal effects, household items, or commercial goods, our comprehensive shipping services ensure your cargo arrives safely and on time.
              </p>
              <p className="text-gray-600 mb-6">
                Karachi, with its bustling port and position as Pakistan's commercial center, is one of our most served destinations. Our extensive network enables us to deliver to all areas within Karachi, including DHA, Clifton, Gulshan-e-Iqbal, North Nazimabad, and many more localities.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-cargo-blue mb-4">Our Karachi Cargo Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Door-to-door delivery to all areas in Karachi</span>
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
                    <span>Free pickup from any location in the UAE</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Secure packaging and handling services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Real-time shipment tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Customs clearance assistance at Karachi port and airport</span>
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
                      <Package className="h-6 w-6 text-cargo-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-cargo-blue">
                      UAE to Karachi Cargo Service
                    </h3>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-cargo-orange mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">From: UAE (All Emirates)</p>
                      <p className="text-sm text-gray-500">Free pickup from your location</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-cargo-blue mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">To: Karachi, Pakistan</p>
                      <p className="text-sm text-gray-500">Delivery to recipient's doorstep</p>
                    </div>
                  </div>
                  
                  <p className="mb-6 text-gray-600">
                    We offer comprehensive cargo services to Karachi, handling everything from pickup in the UAE to delivery at the final destination in Karachi. Our experienced team ensures your cargo is handled professionally every step of the way.
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
                <h3 className="text-xl font-bold text-cargo-blue mb-4">Areas We Serve in Karachi</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded shadow-sm">DHA</div>
                  <div className="p-3 bg-white rounded shadow-sm">Clifton</div>
                  <div className="p-3 bg-white rounded shadow-sm">Gulshan-e-Iqbal</div>
                  <div className="p-3 bg-white rounded shadow-sm">North Nazimabad</div>
                  <div className="p-3 bg-white rounded shadow-sm">PECHS</div>
                  <div className="p-3 bg-white rounded shadow-sm">Saddar</div>
                  <div className="p-3 bg-white rounded shadow-sm">Gulistan-e-Johar</div>
                  <div className="p-3 bg-white rounded shadow-sm">Malir</div>
                </div>
                <p className="text-center mt-4 text-gray-600 text-sm">
                  ...and all other areas in Karachi
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
            <h2 className="section-title">Shipping Options to Karachi</h2>
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
                    Air Freight to Karachi
                  </h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-cargo-lightBlue rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-blue" />
                    </div>
                    <span>Express delivery within 2-5 business days</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightBlue rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-blue" />
                    </div>
                    <span>Ideal for urgent or important shipments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightBlue rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-blue" />
                    </div>
                    <span>Arrives at Jinnah International Airport, Karachi</span>
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
                    Sea Freight to Karachi
                  </h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Cost-effective shipping in 25-40 days</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Ideal for large shipments and household goods</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cargo-lightGreen rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4 text-cargo-green" />
                    </div>
                    <span>Arrives at Karachi Port (KPT)</span>
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
      
      {/* What You Can Ship Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What You Can Ship to Karachi</h2>
            <p className="section-description">
              We handle a wide range of cargo types for delivery to Karachi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-cargo-lightGreen rounded-full p-3 inline-flex mb-4">
                <Package className="h-6 w-6 text-cargo-green" />
              </div>
              <h3 className="text-lg font-bold mb-3">Personal Effects</h3>
              <p className="text-gray-600">
                Clothes, books, electronics, and other personal belongings for individuals relocating or sending items to family.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-cargo-lightGreen rounded-full p-3 inline-flex mb-4">
                <Truck className="h-6 w-6 text-cargo-green" />
              </div>
              <h3 className="text-lg font-bold mb-3">Household Goods</h3>
              <p className="text-gray-600">
                Furniture, appliances, kitchenware, and other household items for families moving to Karachi.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-cargo-lightGreen rounded-full p-3 inline-flex mb-4">
                <Package className="h-6 w-6 text-cargo-green" />
              </div>
              <h3 className="text-lg font-bold mb-3">Commercial Goods</h3>
              <p className="text-gray-600">
                Business inventory, retail merchandise, trade show materials, and other commercial cargo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ship Your Cargo to Karachi Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us now for competitive rates and professional cargo services to Karachi, Pakistan.
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

export default CargoToKarachi;
