
import ServiceCard from "@/components/ServiceCard";
import { Package, ShieldCheck, Clock, Warehouse, FileText, Map, Users, Lock, Repeat } from "lucide-react";

const AdditionalServices = () => {
  const additionalServices = [
    {
      title: "Packaging",
      description: "Professional packaging services to ensure your items arrive safely and securely.",
      icon: Package,
      iconColor: "text-cargo-blue",
    },
    {
      title: "Full Container",
      description: "Complete container shipping solutions for your cargo to Pakistan.",
      icon: ShieldCheck,
      iconColor: "text-cargo-green",
    },
    {
      title: "Courier Service",
      description: "Fast courier delivery options for urgent cargo and packages to Pakistan.",
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
      description: "Tracking of your shipments from origin to destination.",
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
  );
};

export default AdditionalServices;
