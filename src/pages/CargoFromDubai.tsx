
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingButton from "@/components/FloatingButton";
import { Helmet } from "react-helmet-async";
import HeroBanner from "@/components/cargo/HeroBanner";
import ServiceFeatures from "@/components/cargo/ServiceFeatures";
import LocationCoverage from "@/components/cargo/LocationCoverage";
import ServiceOptions from "@/components/cargo/ServiceOptions";
import CTASection from "@/components/cargo/CTASection";

const CargoFromDubai = () => {
  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20from%20Dubai%20to%20Pakistan.", "_blank");
  };

  const serviceFeatures = [
    "Door-to-door delivery to all major cities in Pakistan",
    "Air freight (2-5 days) and sea freight (25-40 days) options",
    "Free pickup from your location in Dubai",
    "Secure packaging and handling of your shipments",
    "Real-time tracking of your cargo",
    "Customs clearance assistance"
  ];

  const dubaiAreas = [
    "Dubai Marina", "Deira", "Bur Dubai", "Jumeirah", 
    "Business Bay", "Downtown Dubai", "JLT", "Al Barsha"
  ];

  const shippingOptions = {
    air: [
      "Fast delivery within 2-5 business days",
      "Ideal for urgent shipments and valuable items",
      "Weight restrictions apply"
    ],
    sea: [
      "Economical shipping in 25-40 days",
      "Perfect for large or heavy shipments",
      "Cost-effective for non-urgent cargo"
    ]
  };

  const faqs = [
    {
      question: "How long does shipping from Dubai to Pakistan take?",
      answer: "Shipping times vary based on the method you choose. Air freight typically takes 2-5 business days, while sea freight can take 25-40 days. Express services are available for urgent shipments."
    },
    {
      question: "Do you provide packaging materials?",
      answer: "Yes, we provide professional packaging materials to ensure your items are safely protected during transit. Our team will pack your items securely to prevent any damage during shipping."
    },
    {
      question: "How much does it cost to send cargo from Dubai to Pakistan?",
      answer: "Shipping costs depend on the weight, dimensions, shipping method, and destination in Pakistan. Contact us for a free, no-obligation quote tailored to your specific shipping needs."
    },
    {
      question: "Can I track my shipment?",
      answer: "Yes, we provide real-time tracking for all shipments. Once your cargo is processed, you'll receive a tracking number to monitor your shipment's progress from Dubai to its destination in Pakistan."
    }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Cargo to Pakistan from Dubai | Fast & Reliable Shipping Services</title>
        <meta name="description" content="Send cargo to Pakistan from Dubai with our professional door-to-door shipping service. Affordable rates, secure handling, and fast delivery guaranteed." />
        <meta name="keywords" content="cargo to Pakistan from Dubai, Dubai to Pakistan cargo, shipping to Pakistan from Dubai, send parcel to Pakistan from Dubai, Dubai Pakistan cargo services" />
        <link rel="canonical" href="https://www.cargotopakistan.ae/cargo-from-dubai" />
      </Helmet>
      
      {/* Hero Section */}
      <HeroBanner 
        title="Cargo to Pakistan from Dubai"
        description="Fast, reliable and affordable door-to-door cargo services from Dubai to all major cities in Pakistan"
        handleCall={handleCall}
        handleWhatsApp={handleWhatsApp}
      />

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
              
              <ServiceFeatures 
                title="Our Dubai to Pakistan Cargo Services Include:" 
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
                      <span className="mr-2">✈️</span> Air Freight
                    </div>
                    <div className="bg-cargo-lightGreen p-2 rounded flex items-center">
                      <span className="mr-2">🚢</span> Sea Freight
                    </div>
                  </div>
                </div>
              </div>
              
              <LocationCoverage title="Dubai Areas We Cover" locations={dubaiAreas} />
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <ServiceOptions 
        title="Dubai to Pakistan Shipping Options"
        description="Choose the shipping method that best suits your needs and budget"
        options={shippingOptions}
      />
      
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
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-cargo-blue mb-2">{faq.question}</h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Ship from Dubai to Pakistan?"
        description="Contact us today for a free quote and experience our reliable cargo services from Dubai to Pakistan."
      />

      <FloatingButton />
    </div>
  );
};

export default CargoFromDubai;
