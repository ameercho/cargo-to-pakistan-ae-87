
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Package, ShieldCheck, CheckSquare, FileCheck, Warehouse, Phone, MessageCircle, MapPin } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/home/CallToAction";

const FullContainer = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = [
    {
      title: "20ft Container",
      description: "Standard 20-foot container for medium-sized shipments.",
      icon: Package,
      iconColor: "text-cargo-orange",
    },
    {
      title: "40ft Container", 
      description: "Large 40-foot container for high-volume cargo.",
      icon: Truck,
      iconColor: "text-cargo-blue",
    },
    {
      title: "High Cube Container",
      description: "Extra height containers for bulky items.",
      icon: Warehouse,
      iconColor: "text-cargo-green",
    },
  ];

  const benefits = [
    { title: "Exclusive Use", description: "Your goods are the only cargo in the container", icon: CheckSquare },
    { title: "Enhanced Security", description: "Reduced handling means lower risk of damage", icon: ShieldCheck },
    { title: "Fixed Pricing", description: "Predictable costs for budget planning", icon: Package },
    { title: "Flexibility", description: "Various container sizes to match your needs", icon: Truck },
    { title: "Direct Delivery", description: "Door-to-door service throughout Pakistan", icon: Warehouse },
  ];

  const containerTypes = [
    { name: "20ft Standard", capacity: "33.2 cubic meters", weight: "Up to 28,200 kg" },
    { name: "40ft Standard", capacity: "67.7 cubic meters", weight: "Up to 28,800 kg" },
    { name: "40ft High Cube", capacity: "76.4 cubic meters", weight: "Up to 28,500 kg" },
    { name: "Refrigerated", capacity: "Varies by size", weight: "Temperature-controlled cargo" },
  ];
  
  const handleCall = () => {
    window.location.href = "tel:+971504948135";
  };
  
  const handleWhatsApp = () => {
    window.open(`https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20full%20container%20services%20to%20Pakistan.`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Full Container Load Services from UAE to Pakistan | FCL Shipping</title>
        <meta name="description" content="Dedicated full container load services from UAE to Pakistan. Secure and efficient FCL shipping solutions with door-to-door delivery." />
        <meta name="keywords" content="full container load, FCL shipping, UAE to Pakistan, container cargo, sea freight, dedicated container" />
        <link rel="canonical" href="https://cargotopakistan.ae/services/full-container" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cargo-green to-cargo-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-start space-y-6">
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                Container Shipping Services
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Full Container Load <span className="text-cargo-orange">Services</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Dedicated container shipping solutions from UAE to Pakistan with enhanced security and fixed pricing.
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
                  <Truck className="mr-2 h-6 w-6 text-cargo-green" />
                  Dedicated Container Shipping from UAE to Pakistan
                </h2>
              
                <div className="prose max-w-none">
                  <p className="mb-4 text-lg">
                    Our Full Container Load (FCL) services provide you with exclusive use of an entire shipping container for your cargo from the UAE to Pakistan. This service is ideal for larger shipments, valuable goods, or when you require enhanced security and minimal handling of your cargo.
                  </p>
                  
                  <p className="mb-4">
                    With FCL shipping, your goods are loaded at origin and remain untouched until they reach their destination, significantly reducing the risk of damage or loss. Our FCL service includes container delivery to your loading point in the UAE, transportation to Pakistan, and delivery to your specified destination address.
                  </p>
                  
                  <div className="my-8 p-6 bg-cargo-lightBlue rounded-lg border-l-4 border-cargo-blue">
                    <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                      <Truck className="mr-2 h-5 w-5" />
                      Container Types Available
                    </h3>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 mb-6 rounded-lg">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 border-b text-left">Container Type</th>
                            <th className="py-2 px-4 border-b text-left">Capacity</th>
                            <th className="py-2 px-4 border-b text-left">Weight Limit</th>
                          </tr>
                        </thead>
                        <tbody>
                          {containerTypes.map((type, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="py-2 px-4 border-b">{type.name}</td>
                              <td className="py-2 px-4 border-b">{type.capacity}</td>
                              <td className="py-2 px-4 border-b">{type.weight}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Key Destinations in Pakistan</h3>
                  
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
                  <Package className="mr-2 h-5 w-5" />
                  Request a Quick Quote
                </h3>
                
                <div className="p-4 bg-cargo-lightGreen rounded-lg mb-4">
                  <p className="text-sm text-cargo-green font-medium">
                    Contact us now for a free quote for container services!
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
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">FCL Benefits</h3>
                
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
            <h2 className="text-2xl font-bold text-cargo-blue mt-3 mb-3">Container Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the container size that best suits your cargo requirements for delivery to Pakistan.
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
                  Sea Freight Options <ArrowRight className="ml-2 h-4 w-4" />
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

export default FullContainer;
