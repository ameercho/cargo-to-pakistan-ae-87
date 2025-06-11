import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Warehouse, Clock, Package, MapPin, FileCheck, ShieldCheck, Phone, MessageCircle, Archive } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/home/CallToAction";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Warehousing = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = [
    {
      title: "Secure Storage",
      description: "Climate-controlled warehouses with 24/7 security monitoring.",
      icon: ShieldCheck,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Inventory Management",
      description: "Professional inventory tracking and management systems.",
      icon: Archive,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Distribution Services",
      description: "Efficient distribution and fulfillment from our warehouses.",
      icon: Warehouse,
      iconColor: "text-cargo-green",
    },
  ];

  const benefits = [
    { title: "Secure Storage", description: "24/7 monitored warehouse facilities", icon: ShieldCheck },
    { title: "Flexible Terms", description: "Short and long-term storage options", icon: Clock },
    { title: "Inventory Tracking", description: "Real-time inventory management", icon: Package },
    { title: "Strategic Locations", description: "Warehouses in key UAE locations", icon: MapPin },
    { title: "Quality Assurance", description: "Regular quality checks and reporting", icon: FileCheck },
  ];

  const handleCall = () => {
    window.location.href = "tel:+971504948135";
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20warehousing%20services.`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cargo-green to-cargo-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-start space-y-6">
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                Warehousing Services
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Secure Warehousing in <span className="text-cargo-orange">UAE</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Professional warehousing and storage solutions in UAE with secure facilities for your cargo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-cargo-orange hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-0.5 tap-target" 
                  size="lg"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-lg tap-target"
                  size="lg"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container-custom">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/services">Services</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Warehousing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-cargo-blue mb-6 flex items-center">
                  <Warehouse className="mr-2 h-6 w-6 text-cargo-green" />
                  Professional Warehousing Services in UAE
                </h2>
              
                <div className="prose max-w-none">
                  <p className="mb-4 text-lg">
                    Our warehousing services provide secure, climate-controlled storage facilities across the UAE for cargo destined to Pakistan. Whether you need short-term storage during transit or long-term warehousing solutions, we offer flexible options to meet your requirements.
                  </p>
                  
                  <p className="mb-4">
                    Our state-of-the-art warehouse facilities are strategically located in Dubai, Abu Dhabi, and Sharjah, providing convenient access to major ports and airports. We offer comprehensive inventory management, quality control, and distribution services to ensure your cargo is handled with the utmost care.
                  </p>
                  
                  <div className="my-8 p-6 bg-cargo-lightBlue rounded-lg border-l-4 border-cargo-blue">
                    <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                      <Warehouse className="mr-2 h-5 w-5" />
                      Why Choose Our Warehousing Services?
                    </h3>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-0">
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <ShieldCheck className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>24/7 security monitoring</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <Clock className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Climate-controlled environment</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <Archive className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Advanced inventory management</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <FileCheck className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Regular quality inspections</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Warehouse Locations</h3>
                  
                  <p className="mb-4">
                    Our warehouse facilities are strategically located across the UAE:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Dubai Warehouse
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Abu Dhabi Facility
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Sharjah Storage
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Jebel Ali Complex
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                  <Warehouse className="mr-2 h-5 w-5" />
                  Request Storage Quote
                </h3>
                
                <div className="p-4 bg-cargo-lightGreen rounded-lg mb-4">
                  <p className="text-sm text-cargo-green font-medium">
                    Contact us for warehousing rates and availability!
                  </p>
                </div>
                
                <Button 
                  className="w-full bg-cargo-blue hover:bg-blue-800 text-white shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call +971504948135
                </Button>
                
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-cargo-blue text-white bg-cargo-blue hover:bg-blue-700"
                    onClick={handleWhatsApp}
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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-cargo-blue bg-cargo-lightBlue px-3 py-1 rounded-full text-sm font-medium">Our Services</span>
            <h2 className="text-2xl font-bold text-cargo-blue mt-3 mb-3">Complete Warehousing Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive storage and distribution services to support your cargo operations.
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
          
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/sea-freight">
                <Button className="bg-cargo-blue hover:bg-blue-800 tap-target">
                  Sea Freight Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services/packaging">
                <Button variant="outline" className="border-cargo-green text-cargo-green hover:bg-cargo-green hover:text-white tap-target">
                  Packaging Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Warehousing;
