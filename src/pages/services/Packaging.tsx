import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Clock, Shield, MapPin, FileCheck, ShieldCheck, Phone, MessageCircle, Box } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/home/CallToAction";
import PageSEO from "@/components/SEO/PageSEO";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Packaging = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = [
    {
      title: "Professional Packing",
      description: "Expert packing and moving services for all household items.",
      icon: Package,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Custom Crating",
      description: "Custom-built wooden crates for fragile and valuable items.",
      icon: Box,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Secure Wrapping",
      description: "Protective wrapping and cushioning for safe transport.",
      icon: Shield,
      iconColor: "text-cargo-green",
    },
  ];

  const benefits = [
    { title: "Expert Packing", description: "Professional packing of all items", icon: Clock },
    { title: "Custom Crating", description: "Custom wooden crating for valuables", icon: Box },
    { title: "Secure Wrapping", description: "Protective wrapping and cushioning", icon: ShieldCheck },
    { title: "Fragile Handling", description: "Special care for fragile items", icon: Package },
    { title: "Insurance Options", description: "Coverage for packed items", icon: FileCheck },
  ];

  const handleCall = () => {
    window.location.href = "tel:+971504948135";
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20packaging%20services%20for%20cargo%20to%20Pakistan.`, "_blank");
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cargotopakistan.ae/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://cargotopakistan.ae/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Packaging",
        "item": "https://cargotopakistan.ae/services/packaging"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* SEO Component */}
      <PageSEO
        title="Packaging Services for Cargo to Pakistan | Cargo to Pakistan"
        description="Professional packaging services in UAE for safe cargo delivery to Pakistan. Custom crating, secure wrapping, and expert packing. Call +971504948135."
        keywords="packaging services Pakistan, cargo packing UAE, custom crating, cargo to Pakistan, packing UAE"
        canonical="https://cargotopakistan.ae/services/packaging"
        robots="index,follow"
      />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cargo-green to-cargo-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-start space-y-6">
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                Packaging Services
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Professional Packaging for <span className="text-cargo-orange">Pakistan</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Expert packaging services to ensure your cargo arrives safely and securely in Pakistan.
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
                <BreadcrumbPage>Packaging</BreadcrumbPage>
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
                  <Package className="mr-2 h-6 w-6 text-cargo-green" />
                  Professional Packaging Services for Cargo to Pakistan
                </h2>
              
                <div className="prose max-w-none">
                  <p className="mb-4 text-lg">
                    Our packaging services provide expert packing solutions for cargo shipments from UAE to Pakistan. We ensure your items are securely packed and protected for safe delivery.
                  </p>
                  
                  <p className="mb-4">
                    We offer a range of packaging options including professional packing, custom crating, and secure wrapping to suit different types of cargo. Our experienced packers use high-quality materials and proven techniques to safeguard your items during transit.
                  </p>
                  
                  <div className="my-8 p-6 bg-cargo-lightBlue rounded-lg border-l-4 border-cargo-blue">
                    <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                      <Package className="mr-2 h-5 w-5" />
                      Why Choose Our Packaging Services?
                    </h3>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-0">
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <Package className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Professional packing of all items</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <Box className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Custom wooden crating</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <ShieldCheck className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Secure wrapping and cushioning</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <Clock className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Fast and efficient service</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Packaging Options</h3>
                  
                  <p className="mb-4">
                    We offer a range of packaging options to suit your cargo needs:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Standard Packing
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Custom Crating
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Bubble Wrapping
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Palletizing
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Request a Packaging Quote
                </h3>
                
                <div className="p-4 bg-cargo-lightGreen rounded-lg mb-4">
                  <p className="text-sm text-cargo-green font-medium">
                    Contact us now for a free quote for packaging services!
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
            <h2 className="text-2xl font-bold text-cargo-blue mt-3 mb-3">Complete Packaging Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert packaging services to ensure your cargo arrives safely and securely in Pakistan.
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
              <Link to="/services/insurance">
                <Button className="bg-cargo-blue hover:bg-blue-800 tap-target">
                  Cargo Insurance <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services/courier-service">
                <Button variant="outline" className="border-cargo-green text-cargo-green hover:bg-cargo-green hover:text-white tap-target">
                  Express Courier <ArrowRight className="ml-2 h-4 w-4" />
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

export default Packaging;
