import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Package,
  Truck,
  Shield,
  Clock,
  ShieldCheck,
  FileCheck,
  Phone,
  MessageCircle,
  MapPin,
  RefreshCw,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/home/CallToAction";
import { useSafeContact } from "@/hooks/useSafeContact";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CrossStuffing = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Container Consolidation",
      description:
        "Efficient consolidation of multiple shipments into containers.",
      icon: Package,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Cargo Redistribution",
      description:
        "Redistribution of cargo for optimal shipping configurations.",
      icon: RefreshCw,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Secure Handling",
      description:
        "Professional handling and protection during transfer operations.",
      icon: Shield,
      iconColor: "text-cargo-green",
    },
  ];

  const benefits = [
    {
      title: "Cost Optimization",
      description: "Reduce shipping costs through efficient consolidation",
      icon: Package,
    },
    {
      title: "Fast Processing",
      description: "Quick cross stuffing and cargo handling",
      icon: Clock,
    },
    {
      title: "Safe Operations",
      description: "Secure handling during transfer process",
      icon: ShieldCheck,
    },
    {
      title: "Quality Control",
      description: "Thorough inspection and documentation",
      icon: FileCheck,
    },
    {
      title: "Professional Service",
      description: "Expert handling by trained personnel",
      icon: Shield,
    },
  ];

  const { makeCall, openWhatsApp } = useSafeContact();

  const handleCall = () => makeCall("cross_stuffing_page");

  const handleWhatsApp = () => {
    openWhatsApp(
      "Hello, I'm interested in your cross stuffing services.",
      "cross_stuffing_page",
    );
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
                Cargo Handling Services
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Cross Stuffing Services to{" "}
                <span className="text-cargo-orange">Pakistan</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Professional cross stuffing and cargo consolidation services for
                efficient container loading and cost-effective shipping to
                Pakistan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-cargo-orange hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-0.5 tap-target"
                  size="lg"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
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
                <BreadcrumbPage>Cross Stuffing</BreadcrumbPage>
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
                  <RefreshCw className="mr-2 h-6 w-6 text-cargo-green" />
                  Professional Cross Stuffing Services
                </h2>

                <div className="prose max-w-none">
                  <p className="mb-4 text-lg">
                    Our cross stuffing services provide efficient cargo
                    consolidation and container loading solutions for shipments
                    to Pakistan. We specialize in optimizing container space
                    utilization, reducing shipping costs, and ensuring safe
                    handling during the transfer process.
                  </p>

                  <p className="mb-4">
                    Cross stuffing involves transferring cargo from one
                    container to another or consolidating multiple shipments
                    into a single container. Our skilled team handles this
                    process with precision, ensuring your goods are properly
                    secured and documented throughout the operation.
                  </p>

                  <div className="my-8 p-6 bg-cargo-lightBlue rounded-lg border-l-4 border-cargo-blue">
                    <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                      <RefreshCw className="mr-2 h-5 w-5" />
                      Why Choose Our Cross Stuffing Services?
                    </h3>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-0">
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <Package className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Efficient container consolidation</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <Clock className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Quick processing times</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <ShieldCheck className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Secure cargo handling</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-cargo-lightGreen flex items-center justify-center mr-3">
                          <FileCheck className="h-4 w-4 text-cargo-green" />
                        </div>
                        <span>Complete documentation</span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-cargo-blue mt-8 mb-4">
                    Cross Stuffing Operations
                  </h3>

                  <p className="mb-4">Our cross stuffing services include:</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" />{" "}
                      Container Consolidation
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Cargo
                      Redistribution
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" /> Space
                      Optimization
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center">
                      <MapPin className="h-4 w-4 text-cargo-green mr-2" />{" "}
                      Quality Inspection
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4 flex items-center">
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Get Cross Stuffing Quote
                </h3>

                <div className="p-4 bg-cargo-lightGreen rounded-lg mb-4">
                  <p className="text-sm text-cargo-green font-medium">
                    Contact us for cross stuffing services!
                  </p>
                </div>

                <Button
                  className="w-full bg-cargo-blue hover:bg-blue-800 text-white shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
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
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">
                  Key Benefits
                </h3>

                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div
                        className={`rounded-full p-2 mr-4 bg-cargo-lightBlue`}
                      >
                        <benefit.icon className="h-5 w-5 text-cargo-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">
                          {benefit.description}
                        </p>
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
            <span className="text-cargo-blue bg-cargo-lightBlue px-3 py-1 rounded-full text-sm font-medium">
              Our Services
            </span>
            <h2 className="text-2xl font-bold text-cargo-blue mt-3 mb-3">
              Complete Cross Stuffing Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional cargo consolidation and container handling services
              for efficient shipping.
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
              <Link to="/services/warehousing">
                <Button className="bg-cargo-blue hover:bg-blue-800 tap-target">
                  Warehousing Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services/packaging">
                <Button className="bg-cargo-green hover:bg-green-700 text-white shadow-sm tap-target">
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

export default CrossStuffing;
