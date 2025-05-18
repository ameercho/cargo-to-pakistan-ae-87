
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const ServiceAreasHero = () => {
  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };
  
  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20to%20Pakistan.", "_blank");
  };
  
  return (
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
  );
};

export default ServiceAreasHero;
