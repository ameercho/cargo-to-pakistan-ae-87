
import React from "react";
import { Link } from "react-router-dom";
const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Cost-effective ocean shipping for large cargo volumes",
      link: "/services/sea-freight"
    },
    {
      icon: Plane,
      title: "Air Freight", 
      description: "Fast air cargo delivery within 3-7 days",
      link: "/services/air-freight"
    },
    {
      icon: Truck,
      title: "Door-to-Door",
      description: "Complete pickup and delivery service",
      link: "/services"
    },
    {
      icon: Package,
      title: "Packaging",
      description: "Professional packing and protection", 
      link: "/services/packaging"
    },
    {
      icon: Shield,
      title: "Insurance",
      description: "Comprehensive cargo insurance coverage",
      link: "/services/insurance"
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Priority handling for urgent shipments",
      link: "/services/courier-service"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cargo-blue to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-cargo-orange">Cargo Services</span>
            </h1>
            <p className="text-xl text-blue-100">
              Comprehensive shipping solutions from UAE to Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-cargo-blue group"
                >
                  <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-cargo-blue transition-colors">
                    <IconComponent className="h-8 w-8 text-cargo-blue group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-cargo-blue mb-4 group-hover:text-cargo-orange">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="text-cargo-blue group-hover:text-cargo-orange font-medium">
                    Learn More →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-cargo-blue mb-6">
            Ready to Ship to Pakistan?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free quote for your cargo shipping needs
          </p>
          <Link
            to="/contact"
            className="bg-cargo-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
