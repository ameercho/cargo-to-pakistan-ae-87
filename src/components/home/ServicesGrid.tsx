
import { Link } from "react-router-dom";
import { Ship, Plane, Package, Shield, Truck, Home } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Cost-effective ocean shipping for large cargo volumes with reliable delivery schedules.",
      href: "/services/sea-freight"
    },
    {
      icon: Plane,
      title: "Air Freight", 
      description: "Fast air cargo shipping for urgent and time-sensitive shipments to Pakistan.",
      href: "/services/air-freight"
    },
    {
      icon: Package,
      title: "Full Container",
      description: "Dedicated container solutions for large volume cargo with maximum security.",
      href: "/services/full-container"
    },
    {
      icon: Truck,
      title: "Courier Service",
      description: "Express delivery services for documents and small packages.",
      href: "/services/courier-service"
    },
    {
      icon: Package,
      title: "Packaging",
      description: "Expert packaging services using quality materials and techniques.",
      href: "/services/packaging"
    },
    {
      icon: Shield,
      title: "Insurance",
      description: "Comprehensive insurance coverage to protect your valuable shipments.",
      href: "/services/insurance"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
          Our Cargo Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.href}
                className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center group"
              >
                <div className="bg-cargo-blue/10 p-3 rounded-lg mx-auto mb-4 w-fit group-hover:bg-cargo-blue/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-cargo-blue" />
                </div>
                <h3 className="text-xl font-semibold text-cargo-blue mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
