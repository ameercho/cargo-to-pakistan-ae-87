
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import FloatingButton from "@/components/FloatingButton";
import PageHeader from "@/components/layout/PageHeader";
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

  return (
    <div>
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

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <div className="bg-white shadow-lg rounded-lg p-1">
              <ContactForm />
            </div>
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
