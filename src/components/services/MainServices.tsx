
import ServiceCard from "@/components/ServiceCard";
import { Ship, Home, Truck } from "lucide-react";

const MainServices = () => {
  const mainServices = [
    {
      title: "Moving Home",
      description: "Complete home moving services for relocating to Pakistan.",
      icon: Home,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Sea Freight",
      description: "Cost-effective ocean shipping solutions for larger cargo shipments.",
      icon: Ship,
      iconColor: "text-cargo-green",
    },
    {
      title: "Full Container",
      description: "Efficient transportation services for your full container shipments to Pakistan.",
      icon: Truck,
      iconColor: "text-cargo-orange",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-cargo-blue mb-3">Primary Shipping Methods</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the shipping method that best suits your cargo requirements and timeline.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              iconColor={service.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
