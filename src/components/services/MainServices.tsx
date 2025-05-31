
import ServiceCard from "@/components/ServiceCard";
import { Ship, Home, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MainServices = () => {
  const mainServices = [
    {
      title: "Moving Home",
      description: "Complete home moving services for relocating to Pakistan.",
      icon: Home,
      iconColor: "text-cargo-blue",
      link: "/services/air-freight", // Air freight handles moving home services
    },
    {
      title: "Sea Freight",
      description: "Cost-effective ocean shipping solutions for larger cargo shipments.",
      icon: Ship,
      iconColor: "text-cargo-green",
      link: "/services/sea-freight",
    },
    {
      title: "Full Container",
      description: "Efficient transportation services for your full container shipments to Pakistan.",
      icon: Truck,
      iconColor: "text-cargo-orange",
      link: "/services/full-container",
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
            <div key={index} className="group">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconColor={service.iconColor}
              />
              <div className="mt-4 text-center">
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional quick links */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/services/courier-service"
              className="bg-cargo-lightBlue text-cargo-blue px-4 py-2 rounded-lg hover:bg-cargo-blue hover:text-white transition-colors"
            >
              Express Courier
            </Link>
            <Link 
              to="/services/packaging"
              className="bg-cargo-lightGreen text-cargo-green px-4 py-2 rounded-lg hover:bg-cargo-green hover:text-white transition-colors"
            >
              Packaging Services
            </Link>
            <Link 
              to="/services/insurance"
              className="bg-orange-100 text-cargo-orange px-4 py-2 rounded-lg hover:bg-cargo-orange hover:text-white transition-colors"
            >
              Cargo Insurance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
