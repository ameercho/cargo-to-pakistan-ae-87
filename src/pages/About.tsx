
import { Button } from "@/components/ui/button";
import FloatingButton from "@/components/FloatingButton";
import PageHeader from "@/components/layout/PageHeader";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Award, ShieldCheck, Map, Info } from "lucide-react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const About = () => {
  const location = useLocation();

  // Generate breadcrumb items
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about', isLast: true }
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHeader
        title="About Cargo to Pakistan"
        subtitle="Your trusted partner for reliable and professional cargo services from UAE to Pakistan with years of experience and thousands of satisfied customers"
        icon={<Info className="h-12 w-12" />}
        badgeText="Trusted Since 2015"
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

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-cargo-blue mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Cargo to Pakistan was founded in 2015 with a clear mission: to provide reliable, efficient, and affordable cargo services to Pakistan. What started as a small operation has grown into a trusted name in the shipping industry.
              </p>
              <p className="text-gray-600 mb-6">
                Our founders identified a gap in the market for quality cargo services to Pakistan, especially for individuals and small businesses who needed reliable shipping options without the complexity and high costs typically associated with international shipping.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of customers annually, helping them connect with family, friends, and business partners in Pakistan through our comprehensive cargo solutions.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-cargo-blue mb-4">Our Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cargo-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cargo-blue">Reliability</h4>
                    <p className="text-gray-600">We deliver on our promises, ensuring your cargo reaches its destination safely and on time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cargo-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cargo-blue">Transparency</h4>
                    <p className="text-gray-600">Clear communication and honest pricing are at the heart of our business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cargo-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cargo-blue">Customer Focus</h4>
                    <p className="text-gray-600">Your needs drive our service offerings and improvements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cargo-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cargo-blue">Excellence</h4>
                    <p className="text-gray-600">We continuously strive to improve and deliver the best possible service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The numbers that define our journey and commitment to quality service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-cargo-blue" />
              </div>
              <div className="text-4xl font-bold text-cargo-blue mb-2">5,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Map className="h-8 w-8 text-cargo-blue" />
              </div>
              <div className="text-4xl font-bold text-cargo-blue mb-2">15+</div>
              <div className="text-gray-600">Service Locations</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-cargo-blue" />
              </div>
              <div className="text-4xl font-bold text-cargo-blue mb-2">99%</div>
              <div className="text-gray-600">Delivery Success Rate</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-cargo-blue" />
              </div>
              <div className="text-4xl font-bold text-cargo-blue mb-2">8+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Experience Our Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their cargo to Pakistan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="w-auto">
              <Button 
                className="bg-white text-cargo-green hover:bg-gray-100 tap-target w-full" 
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/services" className="w-auto">
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 tap-target w-full" 
                size="lg"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FloatingButton />
    </div>
  );
};

export default About;
