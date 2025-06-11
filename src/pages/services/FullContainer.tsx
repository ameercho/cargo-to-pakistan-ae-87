import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Clock, Package, MapPin, FileCheck, ShieldCheck, Phone, MessageCircle, Container } from "lucide-react";
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

const FullContainer = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = [
    {
      title: "20ft Container",
      description: "Standard-sized container for a variety of cargo types.",
      icon: Container,
      iconColor: "text-cargo-orange",
    },
    {
      title: "40ft Container",
      description: "Larger container option for bigger shipments and bulky items.",
      icon: Truck,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Refrigerated Container",
      description: "Temperature-controlled containers for perishable goods.",
      icon: Clock,
      iconColor: "text-cargo-green",
    },
  ];

  const benefits = [
    { title: "Dedicated Space", description: "Exclusive use of a full container", icon: Container },
    { title: "Cost-Effective", description: "Economical for large volume shipments", icon: Clock },
    { title: "Secure Transport", description: "Sealed container for enhanced security", icon: ShieldCheck },
    { title: "Flexible Cargo", description: "Suitable for various types of goods", icon: Package },
    { title: "Global Reach", description: "Worldwide container shipping network", icon: MapPin },
  ];

  const handleCall = () => {
    window.location.href = "tel:+971504948135";
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20full%20container%20services%20to%20Pakistan.`, "_blank");
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
        "name": "Full Container",
        "item": "https://cargotopakistan.ae/services/full-container"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Full Container Load (FCL) Services from UAE to Pakistan | Dedicated Container Shipping</title>
        <meta name="description" content="Professional full container load (FCL) services from UAE to Pakistan with dedicated container shipping solutions for large cargo volumes." />
        <meta name="keywords" content="full container load, FCL, dedicated container, UAE to Pakistan shipping, container shipping" />
        <link rel="canonical" href="https://cargotopakistan.ae/services/full-container" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cargo-green to-cargo-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-start space-y-6">
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                Container Services
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Full Container Load to <span className="text-cargo-orange">Pakistan</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Dedicated container shipping solutions for large cargo volumes from UAE to Pakistan with complete container control.
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
                <BreadcrumbPage>Full Container</BreadcrumbPage>
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
                  <Truck className="mr-2 h-6 w-6 text-cargo-green" />
                  Full Container Load (FCL) Services
                </h2>
              
                <div className="prose max-w-none">
                  <p className="mb-4 text-lg">
                    Our Full Container Load (FCL) services provide dedicated container shipping solutions from UAE to Pakistan. Ideal for large cargo volumes, FCL ensures your goods are shipped in a secure, sealed container with complete control over the shipping process.
                  </p>
                  
                  <p className="mb-4">
                    We offer a range of container sizes, including 20ft and 40ft options, to accommodate various cargo dimensions. Our FCL services include door-to-door delivery, customs clearance, and real-time tracking, ensuring a seamless shipping experience from origin to destination.
                  </p>
                  
                  <div className="my-8 p-6 bg-cargo-lightBlue rounded-lg border-l-4 border-cargo-blue">
                    <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                      <Truck className="mr-2 h-5 w-5" />
                      Why Choose Our FCL Services?
                    </h3>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-0">
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <Container className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Dedicated container for your cargo</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <ShieldCheck className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Enhanced security and protection</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <Clock className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Cost-effective for large shipments</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <FileCheck className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Customs clearance assistance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">Container Shipping Destinations</h3>
                  
                  <p className="mb-4">
                    We offer FCL services to all major cities and ports in Pakistan, including:
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
                  <Truck className="mr-2 h-5 w-5" />
                  Request a Container Quote
                </h3>
                
                <div className="p-4 bg-cargo-lightGreen rounded-lg mb-4">
                  <p className="text-sm text-cargo-green font-medium">
                    Contact us now for a free quote on full container shipping!
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
            <h2 className="text-2xl font-bold text-cargo-blue mt-3 mb-3">Container Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the container size that best suits your cargo requirements.
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

export default FullContainer;
