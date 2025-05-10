
import { ArrowRight, Ship, Truck, Package, ShieldCheck, Clock, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const services = [
    {
      title: "Sea Freight",
      description: "Cost-effective ocean shipping solutions for larger cargo shipments.",
      icon: Ship,
      iconColor: "text-cargo-green",
      link: "/services/sea-freight"
    },
    {
      title: "Full Container",
      description: "Efficient ground transportation services for your cargo within Pakistan.",
      icon: Truck,
      iconColor: "text-cargo-orange",
      link: "/services/full-container"
    },
    {
      title: "Packaging",
      description: "Professional packaging services to ensure your items arrive safely.",
      icon: Package,
      iconColor: "text-cargo-blue",
      link: "/services/packaging"
    },
    {
      title: "Insurance",
      description: "Comprehensive coverage for your valuable shipments against loss or damage.",
      icon: ShieldCheck,
      iconColor: "text-cargo-green",
      link: "/services/insurance"
    },
    {
      title: "Courier Service",
      description: "Expedited shipping options for urgent cargo deliveries.",
      icon: Clock,
      iconColor: "text-cargo-orange",
      link: "/services/courier-service"
    },
    {
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments to Pakistan.",
      icon: Plane,
      iconColor: "text-cargo-blue",
      link: "/services/air-freight"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive cargo solutions tailored to your specific needs for shipping to Pakistan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconColor={service.iconColor}
              />
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-cargo-blue hover:bg-blue-800 tap-target">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
