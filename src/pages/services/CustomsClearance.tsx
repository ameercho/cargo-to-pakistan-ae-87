import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Clock, Package, MapPin, FileCheck, ShieldCheck, Phone, MessageCircle, Clipboard } from "lucide-react";
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

const CustomsClearance = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = [
    {
      title: "Documentation Support",
      description: "Complete assistance with customs documentation and paperwork.",
      icon: Clipboard,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Duty Calculation",
      description: "Accurate duty and tax calculations for your shipments.",
      icon: FileText,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Compliance Guidance",
      description: "Expert guidance on import/export regulations and requirements.",
      icon: ShieldCheck,
      iconColor: "text-cargo-green",
    },
  ];

  const benefits = [
    { title: "Expert Knowledge", description: "Deep understanding of customs regulations", icon: FileText },
    { title: "Fast Processing", description: "Quick customs clearance procedures", icon: Clock },
    { title: "Document Preparation", description: "Complete customs documentation support", icon: Clipboard },
    { title: "Compliance Assurance", description: "Ensure full regulatory compliance", icon: ShieldCheck },
    { title: "Cost Transparency", description: "Clear duty and tax calculations", icon: FileCheck },
  ];

  const handleCall = () => {
    window.location.href = "tel:+971504948135";
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20customs%20clearance%20services.`, "_blank");
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
        "name": "Customs Clearance",
        "item": "https://cargotopakistan.ae/services/customs-clearance"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* SEO Component */}
      <PageSEO
        title="Customs Clearance for Cargo to Pakistan | Cargo to Pakistan"
        description="Expert customs clearance services for cargo to Pakistan. Documentation, duty calculation, and compliance support. Call +971504948135."
        keywords="customs clearance Pakistan, cargo customs UAE, import export compliance, cargo to Pakistan, customs UAE"
        canonical="https://cargotopakistan.ae/services/customs-clearance"
        robots="index,follow"
      />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cargo-green to-cargo-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-start space-y-6">
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                Customs Services
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Customs Clearance for <span className="text-cargo-orange">Pakistan</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Expert customs clearance services to ensure smooth and compliant import procedures for your cargo to Pakistan.
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
                <BreadcrumbPage>Customs Clearance</BreadcrumbPage>
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
                  <FileText className="mr-2 h-6 w-6 text-cargo-green" />
                  Professional Customs Clearance Services
                </h2>
              
                <div className="prose max-w-none">
                  <p className="mb-4 text-lg">
                    Our customs clearance services ensure smooth and efficient processing of your cargo through Pakistan customs. We handle all documentation, duty calculations, and compliance requirements to minimize delays and avoid penalties during the import process.
                  </p>
                  
                  <p className="mb-4">
                    Our experienced customs specialists are well-versed in Pakistan's import regulations and maintain strong relationships with customs authorities. We provide end-to-end support from documentation preparation to final customs release, ensuring your cargo reaches its destination without complications.
                  </p>
                  
                  <div className="my-8 p-6 bg-cargo-lightBlue rounded-lg border-l-4 border-cargo-blue">
                    <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      Why Choose Our Customs Services?
                    </h3>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-0">
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <Clipboard className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Complete documentation support</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <Clock className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Fast clearance processing</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <ShieldCheck className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Regulatory compliance assurance</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <FileCheck className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Transparent cost calculations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Our Customs Services</h3>
                  
                  <p className="mb-4">
                    We provide comprehensive customs clearance support including:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Import Documentation
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Duty Calculations
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Compliance Verification
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Customs Liaison
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Get Customs Support
                </h3>
                
                <div className="p-4 bg-cargo-lightGreen rounded-lg mb-4">
                  <p className="text-sm text-cargo-green font-medium">
                    Contact us for customs clearance assistance!
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
            <h2 className="text-2xl font-bold text-cargo-blue mt-3 mb-3">Complete Customs Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert customs clearance services to ensure smooth import procedures for your cargo.
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
              <Link to="/services/consulting">
                <Button className="bg-cargo-blue hover:bg-blue-800 tap-target">
                  Consulting Services <ArrowRight className="ml-2 h-4 w-4" />
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

export default CustomsClearance;
