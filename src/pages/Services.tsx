
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesContent from "@/components/services/ServicesContent";
import { Link } from "react-router-dom";
import { ArrowRight, Ship, Plane, Package, Shield, Truck, Home } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Cost-effective ocean shipping for large cargo volumes with reliable delivery schedules.",
      href: "/services/sea-freight",
      features: ["Full Container Load", "Less Container Load", "Door-to-Door Service"]
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast air cargo shipping for urgent and time-sensitive shipments to Pakistan.",
      href: "/services/air-freight",
      features: ["Express Delivery", "Secure Handling", "Real-time Tracking"]
    },
    {
      icon: Package,
      title: "Full Container",
      description: "Dedicated container solutions for large volume cargo with maximum security.",
      href: "/services/full-container",
      features: ["20ft & 40ft Containers", "FCL Services", "Competitive Rates"]
    },
    {
      icon: Truck,
      title: "Courier Service",
      description: "Express delivery services for documents and small packages.",
      href: "/services/courier-service",
      features: ["Same Day Pickup", "Express Delivery", "Document Services"]
    },
    {
      icon: Package,
      title: "Professional Packaging",
      description: "Expert packaging services using quality materials and techniques.",
      href: "/services/packaging",
      features: ["Custom Packaging", "Fragile Item Handling", "Export Packing"]
    },
    {
      icon: Shield,
      title: "Cargo Insurance",
      description: "Comprehensive insurance coverage to protect your valuable shipments.",
      href: "/services/insurance",
      features: ["Full Coverage", "Competitive Rates", "Easy Claims Process"]
    },
    {
      icon: Home,
      title: "Moving Home",
      description: "Complete household relocation services for families moving to Pakistan.",
      href: "/services/moving-home",
      features: ["Household Items", "Personal Effects", "Furniture Shipping"]
    }
  ];

  const popularRoutes = [
    { from: "Dubai", to: "Karachi", href: "/pakistan-cargo-to-karachi" },
    { from: "Abu Dhabi", to: "Lahore", href: "/pakistan-cargo-to-lahore" },
    { from: "Sharjah", to: "Islamabad", href: "/pakistan-cargo-to-islamabad" },
    { from: "Ajman", to: "Peshawar", href: "/pakistan-cargo-to-peshawar" }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cargo Services from UAE to Pakistan | Sea Freight, Air Freight & More</title>
        <meta name="description" content="Comprehensive cargo shipping services from UAE to Pakistan. Sea freight, air freight, courier services, packaging, and full container loads with door-to-door delivery." />
        <meta name="keywords" content="cargo services, UAE to Pakistan shipping, sea freight, air freight, courier service, full container load" />
        <link rel="canonical" href="https://cargotopakistan.ae/services" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Cargo Services from UAE to Pakistan | Sea Freight, Air Freight & More" />
        <meta property="og:description" content="Comprehensive cargo shipping services from UAE to Pakistan with professional handling and competitive rates." />
        <meta property="og:url" content="https://cargotopakistan.ae/services" />
        <meta property="og:image" content="https://cargotopakistan.ae/images/cargo-services.jpg" />
      </Helmet>

      <ServicesHeroSection title="Comprehensive Cargo Services to Pakistan" />
      
      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
            Our Complete Range of Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-cargo-blue/10 p-3 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-cargo-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-cargo-blue">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="h-4 w-4 text-cargo-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesContent />

      {/* Popular Routes */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
            Popular Shipping Routes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRoutes.map((route, index) => (
              <Link 
                key={index}
                to={route.href}
                className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                <h3 className="font-semibold text-cargo-blue mb-2">
                  {route.from} → {route.to}
                </h3>
                <p className="text-sm text-gray-600">
                  Reliable cargo services from {route.from} to {route.to}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/service-areas"
              className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
            >
              View All Service Areas <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Services;
