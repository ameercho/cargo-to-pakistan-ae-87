
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import FloatingButton from "@/components/FloatingButton";
import PageHeader from "@/components/layout/PageHeader";
import PageSEO from "@/components/SEO/PageSEO";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Contact = () => {
  const location = useLocation();

  // Generate breadcrumb items
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact', isLast: true }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Cargo to Pakistan",
    "description": "Get in touch with our expert team for professional cargo shipping services from UAE to Pakistan",
    "url": "https://cargotopakistan.ae/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Cargo to Pakistan",
      "telephone": "+971504948135",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": "Dubai",
        "addressLocality": "Dubai"
      }
    }
  };

  return (
    <div>
      <PageSEO
        title="Contact Cargo to Pakistan | Get Quote & Support"
        description="Get in touch with our expert team for professional cargo shipping services from UAE to Pakistan. We're here to help with quotes, questions, and support. Call +971504948135"
        keywords="contact cargo to pakistan, cargo quote uae, pakistan shipping support, cargo service contact"
        canonical="https://cargotopakistan.ae/contact"
        robots="index,follow"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <PageHeader
        title="Contact Cargo to Pakistan"
        subtitle="Get in touch with our expert team for professional cargo shipping services from UAE to Pakistan. We're here to help with quotes, questions, and support"
        icon={<Phone className="h-12 w-12" />}
        badgeText="24/7 Customer Support"
        backgroundClass="bg-gradient-to-br from-cargo-green to-cargo-blue"
      />

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
          <h1 className="text-4xl font-bold text-cargo-blue mb-8 text-center">
            <strong>Contact Us</strong> for Professional Pakistan Cargo Services
          </h1>
          
          <div className="prose max-w-3xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Ready to ship your cargo to Pakistan? Our expert team is here to help you with all your 
              <strong>UAE to Pakistan shipping needs</strong>. Get a free quote, ask questions, or schedule 
              a pickup for your cargo shipment to Pakistan.
            </p>
            
            <p className="text-gray-700">
              Whether you need <strong>sea freight to Pakistan</strong>, <strong>air freight services</strong>, 
              or <strong>door-to-door delivery</strong>, we're committed to providing exceptional customer service 
              and competitive rates for all your Pakistan cargo requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <div className="bg-white shadow-lg rounded-lg p-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
            <strong>Multiple Ways</strong> to Contact Us for Pakistan Cargo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Phone className="h-12 w-12 text-cargo-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-cargo-blue mb-3">
                <strong>Call Us Now</strong>
              </h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our Pakistan cargo experts for immediate assistance and quotes.
              </p>
              <a 
                href="tel:+971504948135" 
                className="text-cargo-blue hover:text-cargo-green font-semibold"
                title="Call for Pakistan cargo quote"
              >
                +971 50 494 8135
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">W</span>
              </div>
              <h3 className="text-xl font-semibold text-cargo-blue mb-3">
                <strong>WhatsApp Us</strong>
              </h3>
              <p className="text-gray-600 mb-4">
                Quick responses via WhatsApp for your Pakistan shipping queries and updates.
              </p>
              <a 
                href="https://wa.me/971504948135" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cargo-blue hover:text-cargo-green font-semibold"
                title="WhatsApp for Pakistan cargo service"
              >
                Chat on WhatsApp
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-cargo-lightBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cargo-blue font-bold text-xl">@</span>
              </div>
              <h3 className="text-xl font-semibold text-cargo-blue mb-3">
                <strong>Email Support</strong>
              </h3>
              <p className="text-gray-600 mb-4">
                Send detailed inquiries about your Pakistan cargo requirements via email.
              </p>
              <a 
                href="mailto:info@cargotopakistan.ae" 
                className="text-cargo-blue hover:text-cargo-green font-semibold"
                title="Email for Pakistan cargo inquiry"
              >
                info@cargotopakistan.ae
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
            <strong>Pakistan Cargo Services</strong> We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services/sea-freight" className="bg-gray-50 p-6 rounded-lg hover:bg-cargo-lightBlue transition-colors text-center">
              <h3 className="font-semibold text-cargo-blue mb-2">
                <strong>Sea Freight</strong>
              </h3>
              <p className="text-sm text-gray-600">Cost-effective ocean shipping to Pakistan</p>
            </Link>
            
            <Link to="/services/air-freight" className="bg-gray-50 p-6 rounded-lg hover:bg-cargo-lightBlue transition-colors text-center">
              <h3 className="font-semibold text-cargo-blue mb-2">
                <strong>Air Freight</strong>
              </h3>
              <p className="text-sm text-gray-600">Fast air cargo delivery to Pakistan</p>
            </Link>
            
            <Link to="/services/moving-home" className="bg-gray-50 p-6 rounded-lg hover:bg-cargo-lightBlue transition-colors text-center">
              <h3 className="font-semibold text-cargo-blue mb-2">
                <strong>Home Moving</strong>
              </h3>
              <p className="text-sm text-gray-600">Complete household relocation services</p>
            </Link>
            
            <Link to="/services" className="bg-gray-50 p-6 rounded-lg hover:bg-cargo-lightBlue transition-colors text-center">
              <h3 className="font-semibold text-cargo-blue mb-2">
                <strong>All Services</strong>
              </h3>
              <p className="text-sm text-gray-600">View complete service offerings</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />

      <FloatingButton />
    </div>
  );
};

export default Contact;
