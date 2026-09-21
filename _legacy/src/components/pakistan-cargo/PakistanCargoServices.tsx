
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ship, Truck, Plane } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

interface PakistanCargoServicesProps {
  city: string;
}

const PakistanCargoServices: React.FC<PakistanCargoServicesProps> = ({ city }) => {
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
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-cargo-blue bg-cargo-lightBlue px-3 py-1 rounded-full text-sm font-medium">Our Services</span>
          <h2 className="text-2xl font-bold text-cargo-blue mt-3 mb-3">Complete Shipping Solutions for {city}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the shipping method that best suits your cargo requirements for delivery to {city}.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              iconColor={service.iconColor}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/services">
            <Button className="bg-cargo-blue hover:bg-blue-800 text-white shadow-md transition-all hover:shadow-lg transform hover:-translate-y-0.5">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PakistanCargoServices;
