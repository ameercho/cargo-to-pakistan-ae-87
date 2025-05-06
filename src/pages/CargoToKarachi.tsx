
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Truck, Package, Ship, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingButton from "@/components/FloatingButton";
import { Helmet } from "react-helmet-async";
import HeroBanner from "@/components/cargo/HeroBanner";
import ServiceFeatures from "@/components/cargo/ServiceFeatures";
import LocationCoverage from "@/components/cargo/LocationCoverage";
import ServiceOptions from "@/components/cargo/ServiceOptions";
import CTASection from "@/components/cargo/CTASection";

const CargoToKarachi = () => {
  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20to%20Karachi,%20Pakistan.", "_blank");
  };

  const serviceFeatures = [
    "Door-to-door delivery to all areas in Karachi",
    "Air freight (2-5 days) and sea freight (25-40 days) options",
    "Free pickup from any location in the UAE",
    "Secure packaging and handling services",
    "Real-time shipment tracking",
    "Customs clearance assistance at Karachi port and airport"
  ];

  const karachiAreas = [
    "DHA", "Clifton", "Gulshan-e-Iqbal", "North Nazimabad", 
    "PECHS", "Saddar", "Gulistan-e-Johar", "Malir"
  ];

  const shippingOptions = {
    air: [
      "Express delivery within 2-5 business days",
      "Ideal for urgent or important shipments",
      "Arrives at Jinnah International Airport, Karachi"
    ],
    sea: [
      "Cost-effective shipping in 25-40 days",
      "Ideal for large shipments and household goods",
      "Arrives at Karachi Port (KPT)"
    ]
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
      <HeroBanner 
        title="Pakistan Cargo to Karachi" 
        description="Reliable cargo shipping services from UAE to Karachi with door-to-door delivery"
        handleCall={handleCall}
        handleWhatsApp={handleWhatsApp}
      />

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
              
              <ServiceFeatures 
                title="Our Karachi Cargo Services Include:" 
                features={serviceFeatures} 
              />
              
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
              
              <LocationCoverage title="Areas We Serve in Karachi" locations={karachiAreas} />
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <ServiceOptions 
        title="Shipping Options to Karachi" 
        description="Choose the shipping method that best suits your needs and budget"
        options={shippingOptions}
      />
      
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
      <CTASection 
        title="Ship Your Cargo to Karachi Today" 
        description="Contact us now for competitive rates and professional cargo services to Karachi, Pakistan."
      />

      <FloatingButton />
    </div>
  );
};

export default CargoToKarachi;
