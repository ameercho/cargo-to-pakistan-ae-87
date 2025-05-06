
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

interface HeroBannerProps {
  title: string;
  description: string;
  handleCall: () => void;
  handleWhatsApp: () => void;
}

const HeroBanner = ({ title, description, handleCall, handleWhatsApp }: HeroBannerProps) => {
  return (
    <section className="py-12 bg-cargo-green text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-xl text-gray-100 mb-8">
            {description}
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
  );
};

export default HeroBanner;
