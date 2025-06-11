
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plane, Phone, MessageCircle, Ship, Truck } from "lucide-react";

interface PakistanCargoSidebarProps {
  city: string;
  onCall: () => void;
  onWhatsApp: () => void;
}

const PakistanCargoSidebar: React.FC<PakistanCargoSidebarProps> = ({ 
  city, 
  onCall, 
  onWhatsApp 
}) => {
  const services = [
    {
      title: "Sea Freight",
      description: `Cost-effective ocean shipping solutions for larger cargo shipments to ${city}.`,
      icon: Ship,
      iconColor: "text-cargo-green",
    },
    {
      title: "Full Container",
      description: `Efficient ground transportation services for your cargo within ${city}.`,
      icon: Truck,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Air Freight",
      description: `Fast and reliable air cargo services for time-sensitive shipments to ${city}.`,
      icon: Plane,
      iconColor: "text-cargo-blue",
    },
  ];

  return (
    <div className="lg:col-span-1 space-y-6">
      {/* Quote Request Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
          <Plane className="mr-2 h-5 w-5" />
          Request a Quick Quote
        </h3>
        
        <div className="p-4 bg-cargo-lightGreen rounded-lg mb-4">
          <p className="text-sm text-cargo-green font-medium">
            Contact us now for a free quote for shipping to {city}!
          </p>
        </div>
        
        <Button 
          className="w-full bg-cargo-blue hover:bg-blue-800 text-white shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          onClick={onCall}
        >
          <Phone className="mr-2 h-4 w-4" />
          Call +971504948135
        </Button>
        
        <div className="mt-4">
          <Button 
            variant="outline" 
            className="w-full border-cargo-blue text-white bg-cargo-blue hover:bg-blue-700"
            onClick={onWhatsApp}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </div>
      </div>
      
      {/* Shipping Options Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-cargo-blue mb-4">Our Shipping Options</h3>
        
        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={`rounded-full p-2 mr-4 ${service.iconColor.replace('text', 'bg')}/10`}>
                <service.icon className={`h-5 w-5 ${service.iconColor}`} />
              </div>
              <div>
                <h4 className="font-medium mb-1">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PakistanCargoSidebar;
