
import ServiceCard from "@/components/ServiceCard";
import { Package, ShieldCheck, Clock, Warehouse, FileText, Map, Users, Lock, Repeat } from "lucide-react";
import { Link } from "react-router-dom";

const AdditionalServices = () => {
  const additionalServices = [
    {
      title: "Packaging",
      description: "Professional packaging services to ensure your items arrive safely and securely.",
      icon: Package,
      iconColor: "text-cargo-blue",
      link: "/services/packaging",
    },
    {
      title: "Full Container",
      description: "Complete container shipping solutions for your cargo to Pakistan.",
      icon: ShieldCheck,
      iconColor: "text-cargo-green",
      link: "/services/full-container",
    },
    {
      title: "Courier Service",
      description: "Fast courier delivery options for urgent cargo and packages to Pakistan.",
      icon: Clock,
      iconColor: "text-cargo-orange",
      link: "/services/courier-service",
    },
    {
      title: "Warehousing",
      description: "Secure storage facilities for your cargo before final delivery to Pakistan.",
      icon: Warehouse,
      iconColor: "text-cargo-blue",
      link: "/contact", // Link to contact for warehousing inquiries
    },
    {
      title: "Customs Clearance",
      description: "Expert assistance with customs documentation and procedures for smooth import into Pakistan.",
      icon: FileText,
      iconColor: "text-cargo-green",
      link: "/contact", // Link to contact for customs assistance
    },
    {
      title: "Tracking Services",
      description: "Tracking of your shipments from origin to destination.",
      icon: Map,
      iconColor: "text-cargo-orange",
      link: "/contact", // Link to contact for tracking inquiries
    },
    {
      title: "Consulting",
      description: "Professional advice on the best shipping options for your specific cargo needs.",
      icon: Users,
      iconColor: "text-cargo-blue",
      link: "/contact",
    },
    {
      title: "Secure Handling",
      description: "Special handling for valuable, fragile, or sensitive items throughout the shipping process.",
      icon: Lock,
      iconColor: "text-cargo-green",
      link: "/services/insurance",
    },
    {
      title: "Return Services",
      description: "Efficient management of return shipments from Pakistan to origin countries.",
      icon: Repeat,
      iconColor: "text-cargo-orange",
      link: "/contact",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-cargo-blue mb-3">Additional Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of complementary services to ensure a smooth shipping experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className="block group hover:scale-105 transition-transform duration-200"
            >
              <div className="h-full">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  iconColor={service.iconColor}
                />
              </div>
            </Link>
          ))}
        </div>
        
        {/* Related Links Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-cargo-blue mb-6">Looking for Something Specific?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-medium text-cargo-blue mb-3">Popular Routes</h4>
              <div className="space-y-2 text-sm">
                <Link to="/dubai-to-pakistan" className="block text-gray-600 hover:text-cargo-blue">Dubai to Pakistan</Link>
                <Link to="/abu-dhabi-to-pakistan" className="block text-gray-600 hover:text-cargo-blue">Abu Dhabi to Pakistan</Link>
                <Link to="/sharjah-to-pakistan" className="block text-gray-600 hover:text-cargo-blue">Sharjah to Pakistan</Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-medium text-cargo-green mb-3">Major Destinations</h4>
              <div className="space-y-2 text-sm">
                <Link to="/pakistan-cargo-to-karachi" className="block text-gray-600 hover:text-cargo-green">Karachi Cargo</Link>
                <Link to="/pakistan-cargo-to-lahore" className="block text-gray-600 hover:text-cargo-green">Lahore Cargo</Link>
                <Link to="/pakistan-cargo-to-islamabad" className="block text-gray-600 hover:text-cargo-green">Islamabad Cargo</Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-medium text-cargo-orange mb-3">Need Help?</h4>
              <div className="space-y-2 text-sm">
                <Link to="/contact" className="block text-gray-600 hover:text-cargo-orange">Contact Us</Link>
                <Link to="/faq" className="block text-gray-600 hover:text-cargo-orange">FAQ</Link>
                <Link to="/about" className="block text-gray-600 hover:text-cargo-orange">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
