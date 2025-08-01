
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

interface MovingHomeHeroProps {
  onCall: () => void;
  onWhatsApp: () => void;
}

const MovingHomeHero = ({ onCall, onWhatsApp }: MovingHomeHeroProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-cargo-green to-cargo-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-start space-y-6">
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
              Home Relocation Services
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
              Moving Home Services to <span className="text-cargo-orange">Pakistan</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl">
              Professional home moving services for complete relocation from UAE to Pakistan with careful handling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-cargo-orange hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-0.5 tap-target" 
                size="lg"
                onClick={onCall}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-lg tap-target"
                size="lg"
                onClick={onWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingHomeHero;
