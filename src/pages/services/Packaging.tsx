
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Package, ShieldCheck, Box, Scissors, Tag, Clipboard, Phone, MessageCircle, MapPin } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/home/CallToAction";

const Packaging = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Fragile Items",
      description: "Specialized packaging with extra cushioning for delicate items.",
      icon: ShieldCheck,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Furniture Packaging", 
      description: "Custom crating and wrapping solutions for furniture.",
      icon: Box,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Electronics Packaging",
      description: "Anti-static materials and moisture protection for electronics.",
      icon: Package,
      iconColor: "text-cargo-green",
    },
  ];

  const packagingTypes = [
    { 
      title: "Standard Packaging", 
      description: "Basic packaging suitable for non-fragile items using quality cartons and protective materials." 
    },
    { 
      title: "Fragile Item Packaging", 
      description: "Specialized packaging with extra cushioning and protection for delicate or breakable items." 
    },
    { 
      title: "Furniture Packaging", 
      description: "Custom crating and wrapping solutions for furniture and household goods." 
    },
    { 
      title: "Electronics Packaging", 
      description: "Anti-static packaging materials and moisture protection for electronic devices." 
    },
    { 
      title: "Commercial Goods", 
      description: "Bulk packaging solutions for commercial and industrial products with proper labeling." 
    }
  ];

  const benefits = [
    { title: "Damage Prevention", description: "Superior protection against transit damage", icon: ShieldCheck },
    { title: "Custom Solutions", description: "Tailored packaging for any item type", icon: Box },
    { title: "Quality Materials", description: "Durable materials for maximum protection", icon: Package },
    { title: "Professional Handling", description: "Experienced staff for proper packing", icon: Scissors },
    { title: "Proper Labeling", description: "Clear and compliant shipping labels", icon: Tag },
  ];
  
  const handleCall = () => {
    window.location.href = "tel:+971504948135";
  };
  
  const handleWhatsApp = () => {
    window.open(`https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20packaging%20services%20for%20shipping%20to%20Pakistan.`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Professional Packaging Services for UAE to Pakistan Cargo | Secure Shipping</title>
        <meta name="description" content="Expert packaging solutions for all types of cargo shipping from UAE to Pakistan. Custom packing services to ensure your items arrive safely and securely." />
        <meta name="keywords" content="cargo packaging, shipping packing services, fragile item packaging, UAE to Pakistan, secure shipping" />
        <link rel="canonical" href="https://cargotopakistan.ae/services/packaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cargo-green to-cargo-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-start space-y-6">
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                Professional Packaging Services
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Expert Packaging <span className="text-cargo-orange">Solutions</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Professional packing solutions to ensure your items are protected during transit from UAE to Pakistan.
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-cargo-blue mb-6 flex items-center">
                  <Package className="mr-2 h-6 w-6 text-cargo-green" />
                  Comprehensive Packaging Solutions
                </h2>
              
                <div className="prose max-w-none">
                  <p className="mb-4 text-lg">
                    Our professional packaging services ensure that your shipments to Pakistan are properly protected throughout their journey. We use high-quality materials and proven techniques to safeguard your items against damage during handling, transportation, and storage.
                  </p>
                  
                  <p className="mb-4">
                    Whether you're shipping household goods, delicate personal items, commercial merchandise, or industrial equipment, our packaging experts will provide the right solution for your specific needs. Our comprehensive packaging service includes material selection, custom boxing, protective wrapping, and proper labeling to ensure safe delivery.
                  </p>
                  
                  <div className="my-8 p-6 bg-cargo-lightBlue rounded-lg border-l-4 border-cargo-blue">
                    <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                      <Package className="mr-2 h-5 w-5" />
                      Our Packaging Services
                    </h3>
                    
                    <div className="space-y-4">
                      {packagingTypes.map((service, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                          <h4 className="font-medium text-cargo-blue mb-2">{service.title}</h4>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Destination Protection</h3>
                  
                  <p className="mb-4">
                    Our packaging ensures your items arrive safely at any Pakistan destination:
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    <Link to="/pakistan-cargo-to-karachi" className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Karachi
                    </Link>
                    <Link to="/pakistan-cargo-to-lahore" className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Lahore
                    </Link>
                    <Link to="/pakistan-cargo-to-islamabad" className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Islamabad
                    </Link>
                    <Link to="/pakistan-cargo-to-peshawar" className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Peshawar
                    </Link>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Faisalabad
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center hover:bg-gray-100 hover:shadow-md transition-all">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Multan
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                  <Clipboard className="mr-2 h-5 w-5" />
                  Request a Quick Quote
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
            <h2 className="text-2xl font-bold text-cargo-blue mt-3 mb-3">Packaging Specializations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our specialized packaging solutions for different types of cargo.
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
              <Link to="/services/insurance">
                <Button variant="outline" className="border-cargo-green text-cargo-green hover:bg-cargo-green hover:text-white tap-target">
                  Cargo Insurance <ArrowRight className="ml-2 h-4 w-4" />
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
