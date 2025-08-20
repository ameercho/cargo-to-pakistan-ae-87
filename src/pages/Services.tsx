
import React, { useEffect } from 'react';
import ServicesContent from "@/components/services/ServicesContent";
import PageHeader from "@/components/layout/PageHeader";
import PageSEO from "@/components/SEO/PageSEO";
import { Link } from "react-router-dom";
import { ArrowRight, Ship, Plane, Package, Shield, Truck, Home, Settings, WarehouseIcon, Warehouse, Container } from "lucide-react";
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
    },
    {
      icon: Warehouse,
      title: "Warehousing & Storage",
      description: "Secure warehousing and storage solutions for your cargo before or after shipping to Pakistan.",
      href: "/services/warehousing",
      features: ["Climate-Controlled Storage", "24/7 Security Monitoring", "Inventory Management", "Flexible Terms"]
    },
    {
      icon: Container,
      title: "Cross Stuffing Services",
      description: "Efficient cross stuffing services for seamless transfer of cargo between containers and vehicles.",
      href: "/services/cross-stuffing",
      features: ["Quick Turnaround", "Professional Handling", "Secure Transfer", "Custom Solutions"]
    }
    
  ];

  const popularRoutes = [
    { from: "Dubai", to: "Karachi", href: "/pakistan-cargo-to-karachi", desc: "Most popular business route" },
    { from: "Abu Dhabi", to: "Lahore", href: "/pakistan-cargo-to-lahore", desc: "Cultural capital connection" },
    { from: "Sharjah", to: "Islamabad", href: "/pakistan-cargo-to-islamabad", desc: "Capital city service" },
    { from: "Dubai", to: "Peshawar", href: "/pakistan-cargo-to-peshawar", desc: "Northwestern gateway" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cargo Services to Pakistan",
    "description": "Comprehensive cargo shipping services from UAE to Pakistan including sea freight, air freight, courier services",
    "provider": {
      "@type": "Organization",
      "name": "Cargo to Pakistan",
      "telephone": "+971504948135",
      "url": "https://cargotopakistan.ae"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pakistan Cargo Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <div className="min-h-screen">
      <PageSEO
        title="Cargo to Pakistan Services | Dubai Abu Dhabi Sharjah | Door-to-Door Shipping"
        description="Comprehensive cargo shipping services including sea freight, air freight, courier services, and complete logistics support for all your cargo needs from UAE to Pakistan"
        keywords="sea cargo to pakistan, dubai to pakistan sea cargo, moving home to pakistan, Full container service, pakistan cargo courier service"
        canonical="https://cargotopakistan.ae/services"
        robots="index,follow"
        structuredData={structuredData}
      />
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center text-cargo-blue mb-8">
            <strong>Professional Cargo Services</strong> from UAE to Pakistan
          </h1>
          
          <div className="prose max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              We offer comprehensive <strong>cargo shipping services from all major UAE cities to Pakistan destinations</strong>. 
              Our experienced team provides professional handling, competitive rates, and reliable delivery 
              across sea freight, air freight, courier services, and specialized logistics solutions.
            </p>
            
            <p className="text-gray-700">
              From <strong>Dubai to Karachi cargo</strong> and <strong>Abu Dhabi to Lahore shipping</strong>, we ensure your 
              goods reach Pakistan safely and on time. Our door-to-door service covers all major Pakistan cities 
              including Islamabad, Peshawar, Faisalabad, and more.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
            Our Complete Range of <strong>Pakistan Shipping Services</strong>
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
                        <ArrowRight className="h-4 w-4 text-cargo-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
                    title={`Learn more about ${service.title}`}
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
            Why Choose Our <strong>UAE to Pakistan Cargo Services</strong>
          </h2>
          
          <div className="prose max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">
                  <strong>Professional Expertise in Pakistan Shipping</strong>
                </h3>
                <p className="text-gray-700 mb-4">
                  With years of experience in <strong>UAE to Pakistan cargo shipping</strong>, our team understands 
                  the complexities of international logistics. We handle customs clearance, 
                  documentation, and ensure compliance with all regulations for smooth delivery to Pakistan.
                </p>
                <p className="text-gray-700">
                  Our professional packing services protect your cargo during transit, while our 
                  real-time tracking keeps you informed throughout the shipping process from UAE to Pakistan.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">
                  <strong>Competitive Pricing for Pakistan Cargo</strong>
                </h3>
                <p className="text-gray-700 mb-4">
                  We offer the most competitive rates for <strong>cargo services from UAE to Pakistan</strong> 
                  without compromising on quality or reliability. Our sea freight options are 
                  particularly cost-effective for bulk shipments to Pakistan.
                </p>
                <p className="text-gray-700">
                  Transparent pricing with no hidden fees ensures you know exactly what you're 
                  paying for. Get a free quote today for your specific Pakistan shipping requirements.
                </p>
              </div>
            </div>
            
            <div className="bg-cargo-lightBlue p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cargo-blue mb-4">
                <strong>Complete Pakistan Cargo Solutions</strong>
              </h3>
              <p className="text-gray-700 mb-4">
                From <strong>household goods to commercial cargo</strong>, we handle all types of shipments to Pakistan. 
                Our services include professional packing, customs clearance, door-to-door delivery, 
                and cargo insurance for complete peace of mind.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/services/sea-freight" className="text-cargo-blue hover:text-cargo-green font-semibold">
                  → Sea Freight Services
                </Link>
                <Link to="/services/air-freight" className="text-cargo-blue hover:text-cargo-green font-semibold">
                  → Air Freight Services  
                </Link>
                <Link to="/services/moving-home" className="text-cargo-blue hover:text-cargo-green font-semibold">
                  → Home Moving Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
            Popular <strong>UAE to Pakistan Shipping Routes</strong>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRoutes.map((route, index) => (
              <Link 
                key={index}
                to={route.href}
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow text-center group"
                title={`Cargo shipping from ${route.from} to ${route.to}`}
              >
                <h3 className="font-semibold text-cargo-blue mb-2 group-hover:text-cargo-green transition-colors">
                  <strong>{route.from} → {route.to}</strong>
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
              title="View all UAE to Pakistan service routes"
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
