
import React, { useEffect, lazy, Suspense } from 'react';
const ServicesContent = lazy(() => import("@/components/services/ServicesContent"));
const PageHeader = lazy(() => import("@/components/layout/PageHeader"));
import { Link } from "react-router-dom";
import { ArrowRight, Ship, Plane, Package, Shield, Truck, Home, Settings, WarehouseIcon, Warehouse, Container } from "lucide-react";
const CallToAction = lazy(() => import("@/components/home/CallToAction"));
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const Services = () => {
  // Main services array for grid
  const services = [
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Cost-effective sea cargo shipping from UAE to all major Pakistan ports. Full container load (FCL) and less than container load (LCL) options available.",
      href: "/services/sea-freight",
  features: ["FCL & LCL Options", "Port-to-Port & Door-to-Door", "Customs Clearance"]
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air cargo services from UAE to Pakistan. Ideal for urgent and high-value shipments.",
      href: "/services/air-freight",
      features: ["Express Delivery", "Airport-to-Airport & Door-to-Door", "Real-Time Tracking", "Priority Handling"]
    },
    {
      icon: Package,
      title: "Courier & Parcel",
      description: "Affordable courier and parcel delivery from UAE to Pakistan for documents, gifts, and small packages.",
      href: "/services/courier-service",
      features: ["Doorstep Pickup", "Online Tracking", "Customs Support", "Fast Delivery"]
    },
    {
      icon: Truck,
      title: "Door to Door",
      description: "Complete door-to-door cargo solutions from any UAE location to any address in Pakistan. Free pickup, professional packing, customs clearance, and reliable delivery for home and business shipping.",
      href: "/services/door-to-door",
      features: ["Free Pickup UAE-wide", "Packing & Unpacking", "Customs Clearance", "All Cities in Pakistan", "Real-Time Tracking", "Affordable Rates"]
    },
    {
      icon: Home,
      title: "Moving Home",
      description: "Professional home moving and relocation services from UAE to Pakistan, including packing, shipping, and delivery.",
      href: "/services/moving-home",
      features: ["Household Packing", "Furniture Handling", "Insurance", "Unpacking Service"]
    },
    {
      icon: Warehouse,
      title: "Warehousing & Storage",
      description: "Secure warehousing and storage solutions for your cargo before or after shipping to Pakistan.",
      href: "/services/warehousing",
      features: ["Climate-Controlled Storage", "24/7 Security Monitoring", "Inventory Management", "Flexible Terms"]
    },
    {
      icon: Container,
      title: "Cross Stuffing Services",
      description: "Efficient cross stuffing services for seamless transfer of cargo between containers and vehicles.",
      href: "/services/cross-stuffing",
      features: ["Quick Turnaround", "Professional Handling", "Secure Transfer", "Custom Solutions"]
    }
  ];

  // Popular routes for the bottom section
  const popularRoutes = [
    { from: "Dubai", to: "Karachi", href: "/pakistan-cargo-to-karachi", desc: "Most popular business route" },
    { from: "Abu Dhabi", to: "Lahore", href: "/pakistan-cargo-to-lahore", desc: "Cultural capital connection" },
    { from: "Sharjah", to: "Islamabad", href: "/pakistan-cargo-to-islamabad", desc: "Capital city service" },
    { from: "Dubai", to: "Peshawar", href: "/pakistan-cargo-to-peshawar", desc: "Northwestern gateway" }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate breadcrumb items
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', isLast: true }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Suspense fallback={<div className="py-12 text-center">Loading header...</div>}>
        <PageHeader
          title="Comprehensive Cargo Services from UAE to Pakistan"
          subtitle="Professional shipping solutions including sea freight, air freight, courier services, and complete logistics support for all your cargo needs from UAE to Pakistan with competitive rates and reliable delivery"
          icon={<Settings className="h-12 w-12" />}
          badgeText="Professional Services"
          backgroundClass="bg-gradient-to-br from-cargo-green to-cargo-blue"
        />
      </Suspense>

      {/* Breadcrumb Section */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container-custom">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  <BreadcrumbItem>
                    {!crumb.isLast ? (
                      <BreadcrumbLink asChild>
                        <Link to={crumb.path}>{crumb.name}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Suspense fallback={<div className="py-12 text-center">Loading services...</div>}>
            <ServicesContent />
          </Suspense>

          {/* Services Grid */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
                Our Complete Range of <strong>Pakistan Shipping Services</strong>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-cargo-blue/10 p-3 rounded-lg mr-4">
                          <IconComponent className="h-6 w-6 text-cargo-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-cargo-blue">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <ArrowRight className="h-4 w-4 text-cargo-green mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-cargo-blue hover:text-cargo-green transition-colors font-semibold"
                        title={`Learn more about ${service.title}`}
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Us / Service Features */}
          <section className="py-16 bg-white">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-center text-cargo-blue mb-12">
                Why Choose Our <strong>UAE to Pakistan Cargo Services</strong>
              </h2>
              <div className="prose max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-cargo-blue mb-4">
                      <strong>Professional Expertise in Pakistan Shipping</strong>
                    </h3>
                    <p className="text-gray-700 mb-4">
                      With years of experience in <strong>UAE to Pakistan cargo shipping</strong>, our team understands
                      the complexities of international logistics. We handle customs clearance,
                      documentation, and ensure compliance with all regulations for smooth delivery to Pakistan.
                    </p>
                    <p className="text-gray-700">
                      Our professional packing services protect your cargo during transit, while our
                      real-time tracking keeps you informed throughout the shipping process from UAE to Pakistan.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cargo-blue mb-4">
                      <strong>Competitive Pricing for Pakistan Cargo</strong>
                    </h3>
                    <p className="text-gray-700 mb-4">
                      We offer the most competitive rates for <strong>cargo services from UAE to Pakistan</strong>
                      without compromising on quality or reliability. Our sea freight options are
                      particularly cost-effective for bulk shipments to Pakistan.
                    </p>
                    <p className="text-gray-700">
                      Transparent pricing with no hidden fees ensures you know exactly what you're
                      paying for. Get a free quote today for your specific Pakistan shipping requirements.
                    </p>
                  </div>
                </div>
                <div className="bg-cargo-lightBlue p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-cargo-blue mb-4">
                    <strong>Complete Pakistan Cargo Solutions</strong>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    From <strong>household goods to commercial cargo</strong>, we handle all types of shipments to Pakistan.
                    Our services include professional packing, customs clearance, door-to-door delivery,
                    and complete peace of mind.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link to="/services/sea-freight" className="text-cargo-blue hover:text-cargo-green font-semibold">
                      → Sea Freight Services
                    </Link>
                    <Link to="/services/air-freight" className="text-cargo-blue hover:text-cargo-green font-semibold">
                      → Air Freight Services
                    </Link>
                    <Link to="/services/moving-home" className="text-cargo-blue hover:text-cargo-green font-semibold">
                      → Home Moving Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Suspense fallback={<div className="py-12 text-center">Loading...</div>}>
            <CallToAction />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

export default Services;
