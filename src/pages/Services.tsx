
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Ship, Plane, Truck, Package, ShieldCheck, Clock, Warehouse, FileText, Map, Users, Lock, Repeat } from "lucide-react";
import FloatingButton from "@/components/FloatingButton";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments to Pakistan.",
      icon: Plane,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Sea Freight",
      description: "Cost-effective ocean shipping solutions for larger cargo shipments.",
      icon: Ship,
      iconColor: "text-cargo-green",
    },
    {
      title: "Road Transport",
      description: "Efficient ground transportation services for your cargo within Pakistan.",
      icon: Truck,
      iconColor: "text-cargo-orange",
    },
  ];

  const additionalServices = [
    {
      title: "Packaging",
      description: "Professional packaging services to ensure your items arrive safely and securely.",
      icon: Package,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Insurance",
      description: "Comprehensive insurance coverage for your valuable shipments against loss or damage.",
      icon: ShieldCheck,
      iconColor: "text-cargo-green",
    },
    {
      title: "Express Delivery",
      description: "Expedited shipping options for urgent cargo deliveries to Pakistan.",
      icon: Clock,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Warehousing",
      description: "Secure storage facilities for your cargo before final delivery to Pakistan.",
      icon: Warehouse,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Customs Clearance",
      description: "Expert assistance with customs documentation and procedures for smooth import into Pakistan.",
      icon: FileText,
      iconColor: "text-cargo-green",
    },
    {
      title: "Tracking Services",
      description: "Real-time tracking of your shipments from origin to destination.",
      icon: Map,
      iconColor: "text-cargo-orange",
    },
    {
      title: "Consulting",
      description: "Professional advice on the best shipping options for your specific cargo needs.",
      icon: Users,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Secure Handling",
      description: "Special handling for valuable, fragile, or sensitive items throughout the shipping process.",
      icon: Lock,
      iconColor: "text-cargo-green",
    },
    {
      title: "Return Services",
      description: "Efficient management of return shipments from Pakistan to origin countries.",
      icon: Repeat,
      iconColor: "text-cargo-orange",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-cargo-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Cargo Services</h1>
            <p className="text-xl text-gray-100 mb-8">
              Comprehensive shipping solutions for your cargo to Pakistan
            </p>
            <Button 
              className="bg-cargo-orange hover:bg-orange-600 text-white tap-target" 
              size="lg"
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Primary Shipping Methods</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the shipping method that best suits your cargo requirements and timeline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconColor={service.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Service Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare our shipping methods to find the best option for your needs.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-cargo-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-center">Speed</th>
                  <th className="px-6 py-4 text-center">Cost</th>
                  <th className="px-6 py-4 text-center">Cargo Size</th>
                  <th className="px-6 py-4 text-center">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Air Freight</td>
                  <td className="px-6 py-4 text-center">Fast (2-5 days)</td>
                  <td className="px-6 py-4 text-center">Higher</td>
                  <td className="px-6 py-4 text-center">Small to Medium</td>
                  <td className="px-6 py-4 text-center">Urgent shipments, valuable items</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Sea Freight</td>
                  <td className="px-6 py-4 text-center">Slow (25-40 days)</td>
                  <td className="px-6 py-4 text-center">Lower</td>
                  <td className="px-6 py-4 text-center">Large volumes</td>
                  <td className="px-6 py-4 text-center">Household goods, bulk items</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Road Transport</td>
                  <td className="px-6 py-4 text-center">Medium (varies)</td>
                  <td className="px-6 py-4 text-center">Medium</td>
                  <td className="px-6 py-4 text-center">Flexible</td>
                  <td className="px-6 py-4 text-center">Local distribution in Pakistan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of complementary services to ensure a smooth shipping experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconColor={service.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ship Your Cargo?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your shipping needs and get a customized quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button 
                className="bg-white text-cargo-green hover:bg-gray-100 tap-target" 
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 tap-target" 
              size="lg"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      <FloatingButton />
    </div>
  );
};

export default Services;
