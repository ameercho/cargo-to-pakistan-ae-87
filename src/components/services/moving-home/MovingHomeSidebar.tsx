
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Home, Clock, ShieldCheck, FileCheck } from "lucide-react";

interface MovingHomeSidebarProps {
  onCall: () => void;
  onWhatsApp: () => void;
}

const MovingHomeSidebar = ({ onCall, onWhatsApp }: MovingHomeSidebarProps) => {
  const benefits = [
    { title: "Professional Service", description: "Expert packing and moving services", icon: Clock },
    { title: "Door to Door", description: "Complete home relocation services", icon: Home },
    { title: "Careful Handling", description: "Special care for your belongings", icon: Clock },
    { title: "Security", description: "Enhanced safety measures for valuables", icon: ShieldCheck },
    { title: "Documentation Support", description: "Expert assistance with paperwork", icon: FileCheck },
  ];

  return (
    <div className="lg:col-span-1 space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
          <Home className="mr-2 h-5 w-5" />
          Request a Quick Quote
        </h3>
        
        <div className="p-4 bg-cargo-lightGreen rounded-lg mb-4">
          <p className="text-sm text-cargo-green font-medium">
            Contact us now for a free quote for home moving services!
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
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-cargo-blue mb-4">Key Benefits</h3>
        
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={`rounded-full p-2 mr-4 bg-cargo-lightBlue`}>
                <benefit.icon className="h-5 w-5 text-cargo-blue" />
              </div>
              <div>
                <h4 className="font-medium mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingHomeSidebar;
