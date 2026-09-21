
import React from 'react';
import { Link } from "react-router-dom";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ServicePageLayoutProps {
  children: React.ReactNode;
  heroSection: React.ReactNode;
  breadcrumbTitle: string;
}

const ServicePageLayout = ({ children, heroSection, breadcrumbTitle }: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {heroSection}

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
                <BreadcrumbPage>{breadcrumbTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Main Content */}
      {children}
    </div>
  );
};

export default ServicePageLayout;
