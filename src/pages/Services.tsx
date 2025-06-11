
import React, { useEffect } from 'react';
import ServicesContent from "@/components/services/ServicesContent";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";
import { ArrowRight, Ship, Plane, Package, Shield, Truck, Home, Settings } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate breadcrumb items
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', isLast: true }
  ];

  const services = [
    {
      icon: Ship,
      title: "Sea Freight to Pakistan",
      description: "Cost-effective ocean shipping for large cargo volumes with reliable delivery schedules to all major Pakistan ports.",
      href: "/services/sea-freight",
      features: ["Full Container Load (FCL)", "Less Container Load (LCL)", "Door-to-Door Service", "Competitive Rates"]
    },
    {
      icon: Plane,
      title: "Air Freight to Pakistan",
      description: "Fast air cargo shipping for urgent and time-sensitive shipments to Pakistan with express delivery options.",
      href: "/services/air-freight",
      features: ["Express Delivery", "Secure Handling", "Real-time Tracking", "Priority Service"]
    },
    {
      icon: Package,
      title: "Full Container Services",
      description: "Dedicated container solutions for large volume cargo with maximum security and competitive pricing.",
      href: "/services/full-container",
      features: ["20ft & 40ft Containers", "FCL Services", "Competitive Rates", "Secure Loading"]
    },
    {
      icon: Truck,
      title: "Courier & Express Service",
      description: "Express delivery services for documents, small packages, and urgent shipments to Pakistan.",
      href: "/services/courier-service",
      features: ["Same Day Pickup", "Express Delivery", "Document Services", "Small Package Handling"]
    },
    {
      icon: Package,
      title: "Professional Packaging",
      description: "Expert packaging services using quality materials and techniques for safe cargo transportation.",
      href: "/services/packaging",
      features: ["Custom Packaging", "Fragile Item Handling", "Export Packing", "Quality Materials"]
    },
    {
      icon: Shield,
      title: "Cargo Insurance",
      description: "Comprehensive insurance coverage to protect your valuable shipments during transit to Pakistan.",
      href: "/services/insurance",
      features: ["Full Coverage", "Competitive Rates", "Easy Claims Process", "Peace of Mind"]
    },
    {
      icon: Home,
      title: "Moving Home Services",
      description: "Complete household relocation services for families and individuals moving from UAE to Pakistan.",
      href: "/services/moving-home",
      features: ["Household Items", "Personal Effects", "Furniture Shipping", "Complete Relocation"]
    }
  ];

  const popularRoutes = [
    { from: "Dubai", to: "Karachi", href: "/pakistan-cargo-to-karachi", desc: "Most popular business route" },
    { from: "Abu Dhabi", to: "Lahore", href: "/pakistan-cargo-to-lahore", desc: "Cultural capital connection" },
    { from: "Sharjah", to: "Islamabad", href: "/pakistan-cargo-to-islamabad", desc: "Capital city service" },
    { from: "Dubai", to: "Peshawar", href: "/pakistan-cargo-to-peshawar", desc: "Northwestern gateway" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title="Comprehensive Cargo Services from UAE to Pakistan"
        subtitle="Professional shipping solutions including sea freight, air freight, courier services, and complete logistics support for all your cargo needs from UAE to Pakistan with competitive rates and reliable delivery"
        icon={<Settings className="h-12 w-12" />}
        badgeText="Professional Services"
        backgroundClass="bg-gradient-to-br from-cargo-green to-cargo-blue"
      />

      {/* Breadcrumb Section */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container-custom">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  <BreadcrumbItem>
                    {!crumb.isLast ? (
                      <BreadcrumbLink asChild>
                        <Link to={crumb.path}>{crumb.name}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
            Our Complete Range of Shipping Services
          </h2>
          
          <div className="prose max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-700">
              We offer comprehensive cargo shipping services from all major UAE cities to Pakistan destinations. 
              Our experienced team provides professional handling, competitive rates, and reliable delivery 
              across sea freight, air freight, courier services, and specialized logistics solutions.
            </p>
          </div>
          
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
                        <ArrowRight className="h-4 w-4 text-cargo-green mr-2 flex-shrink-0" />
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

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
            Why Choose Our Cargo Services
          </h2>
          
          <div className="prose max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">Professional Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With years of experience in UAE to Pakistan cargo shipping, our team understands 
                  the complexities of international logistics. We handle customs clearance, 
                  documentation, and ensure compliance with all regulations.
                </p>
                <p className="text-gray-700">
                  Our professional packing services protect your cargo during transit, while our 
                  real-time tracking keeps you informed throughout the shipping process.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">Competitive Pricing</h3>
                <p className="text-gray-700 mb-4">
                  We offer the most competitive rates for cargo services from UAE to Pakistan 
                  without compromising on quality or reliability. Our sea freight options are 
                  particularly cost-effective for bulk shipments.
                </p>
                <p className="text-gray-700">
                  Transparent pricing with no hidden fees ensures you know exactly what you're 
                  paying for. Get a free quote today for your specific shipping requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
            Popular Shipping Routes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRoutes.map((route, index) => (
              <Link 
                key={index}
                to={route.href}
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow text-center group"
              >
                <h3 className="font-semibold text-cargo-blue mb-2 group-hover:text-cargo-green transition-colors">
                  {route.from} → {route.to}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {route.desc}
                </p>
                <p className="text-xs text-gray-500">
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
              View All Service Routes <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ServicesContent />
      <CallToAction />
    </div>
  );
};

export default Services;
