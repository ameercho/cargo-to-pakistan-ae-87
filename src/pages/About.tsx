
import { Button } from "@/components/ui/button";
import FloatingButton from "@/components/FloatingButton";
import PageHeader from "@/components/layout/PageHeader";
import PageSEO from "@/components/SEO/PageSEO";
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cargo to Pakistan",
    "description": "Trusted UAE Pakistan shipping company providing professional cargo services since 2015",
    "url": "https://cargotopakistan.ae",
    "logo": "https://cargotopakistan.ae/opengraph-image.png",
    "telephone": "+971504948135",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "Dubai",
      "addressLocality": "Dubai"
    },
    "areaServed": ["United Arab Emirates", "Pakistan"],
    "serviceType": "Cargo Shipping Services"
  };

  return (
    <div>
      <PageSEO
        title="About Cargo to Pakistan | Trusted UAE Pakistan Shipping Company"
        description="Your trusted partner for reliable and professional cargo services from UAE to Pakistan with years of experience and thousands of satisfied customers. Established 2015."
        keywords="about cargo to pakistan, uae pakistan shipping company, cargo service provider, shipping company uae"
        canonical="https://cargotopakistan.ae/about"
        robots="index,follow"
        structuredData={structuredData}
      />

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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-cargo-blue mb-8 text-center">
            <strong>About Cargo to Pakistan</strong> - Your Trusted UAE Pakistan Shipping Partner
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-cargo-blue mb-6">
                <strong>Our Story</strong> - Connecting UAE and Pakistan Since 2015
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                <strong>Cargo to Pakistan</strong> was founded in 2015 with a clear mission: to provide reliable, efficient, 
                and affordable <strong>cargo services from UAE to Pakistan</strong>. What started as a small operation 
                has grown into a trusted name in the UAE Pakistan shipping industry, serving thousands of customers annually.
              </p>
              <p className="text-gray-600 mb-6">
                Our founders identified a gap in the market for quality <strong>Pakistan cargo services</strong>, especially for 
                individuals and small businesses who needed reliable shipping options without the complexity and high costs 
                typically associated with international shipping between UAE and Pakistan.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we serve thousands of customers annually, helping them connect with family, friends, and business 
                partners in Pakistan through our comprehensive <strong>Dubai to Pakistan cargo</strong>, 
                <strong>Abu Dhabi to Pakistan shipping</strong>, and <strong>Sharjah to Pakistan cargo solutions</strong>.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button className="bg-cargo-blue hover:bg-blue-800">
                    Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-cargo-green text-cargo-green hover:bg-cargo-green hover:text-white">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cargo-blue mb-6">
                <strong>Our Core Values</strong> in Pakistan Cargo Services
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cargo-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cargo-blue"><strong>Reliability</strong></h4>
                    <p className="text-gray-600">We deliver on our promises, ensuring your cargo reaches Pakistan safely and on time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cargo-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cargo-blue"><strong>Transparency</strong></h4>
                    <p className="text-gray-600">Clear communication and honest pricing are at the heart of our Pakistan shipping business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cargo-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cargo-blue"><strong>Customer Focus</strong></h4>
                    <p className="text-gray-600">Your UAE to Pakistan shipping needs drive our service offerings and improvements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cargo-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-cargo-blue"><strong>Excellence</strong></h4>
                    <p className="text-gray-600">We continuously strive to improve and deliver the best possible Pakistan cargo service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
            <strong>UAE to Pakistan Service Coverage</strong>
          </h2>
          
          <div className="prose max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-700 text-center mb-6">
              We provide comprehensive <strong>cargo shipping services from all major UAE Emirates to Pakistan</strong>, 
              including Dubai, Abu Dhabi, Sharjah, Ajman, and more. Our Pakistan cargo network covers all major 
              Pakistani cities including Karachi, Lahore, Islamabad, Peshawar, and Faisalabad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Link to="/dubai-to-pakistan" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-cargo-blue mb-2">
                <strong>Dubai to Pakistan Cargo</strong>
              </h3>
              <p className="text-gray-600 text-sm">Complete cargo services from all Dubai areas to Pakistan</p>
            </Link>
            
            <Link to="/abu-dhabi-to-pakistan" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-cargo-blue mb-2">
                <strong>Abu Dhabi to Pakistan</strong>
              </h3>
              <p className="text-gray-600 text-sm">Professional shipping from Abu Dhabi to Pakistan</p>
            </Link>
            
            <Link to="/sharjah-to-pakistan" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-cargo-blue mb-2">
                <strong>Sharjah to Pakistan</strong>
              </h3>
              <p className="text-gray-600 text-sm">Reliable cargo services from Sharjah to Pakistan</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">
              <strong>Our Impact</strong> in UAE Pakistan Cargo Industry
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The numbers that define our journey and commitment to quality <strong>UAE to Pakistan cargo services</strong>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm border border-gray-100">
              <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-cargo-blue" />
              </div>
              <div className="text-4xl font-bold text-cargo-blue mb-2">10,000+</div>
              <div className="text-gray-600"><strong>Happy Customers</strong></div>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm border border-gray-100">
              <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Map className="h-8 w-8 text-cargo-blue" />
              </div>
              <div className="text-4xl font-bold text-cargo-blue mb-2">25+</div>
              <div className="text-gray-600"><strong>Pakistan Cities Served</strong></div>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm border border-gray-100">
              <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-cargo-blue" />
              </div>
              <div className="text-4xl font-bold text-cargo-blue mb-2">99%</div>
              <div className="text-gray-600"><strong>Delivery Success Rate</strong></div>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-sm border border-gray-100">
              <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-cargo-blue" />
              </div>
              <div className="text-4xl font-bold text-cargo-blue mb-2">9+</div>
              <div className="text-gray-600"><strong>Years Experience</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
            Why Choose <strong>Cargo to Pakistan</strong> for UAE Pakistan Shipping?
          </h2>
          
          <div className="prose max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">
                  <strong>Expertise in Pakistan Cargo</strong>
                </h3>
                <p className="text-gray-700 mb-4">
                  With over 9 years of experience in <strong>UAE to Pakistan cargo shipping</strong>, we understand 
                  the complexities of international logistics, customs procedures, and the specific requirements 
                  of shipping between UAE and Pakistan.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Professional packing for Pakistan shipments</li>
                  <li>• Customs clearance expertise</li>
                  <li>• Real-time tracking systems</li>
                  <li>• Insurance coverage options</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-cargo-blue mb-4">
                  <strong>Comprehensive Pakistan Services</strong>
                </h3>
                <p className="text-gray-700 mb-4">
                  From <strong>household goods to commercial cargo</strong>, we handle all types of shipments to Pakistan. 
                  Our services include sea freight, air freight, door-to-door delivery, and specialized moving services.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Sea freight to Pakistan (cost-effective)</li>
                  <li>• Air freight to Pakistan (fast delivery)</li>
                  <li>• Door-to-door Pakistan service</li>
                  <li>• Home moving to Pakistan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Experience Our <strong>Pakistan Cargo Service</strong>?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their <strong>cargo shipping from UAE to Pakistan</strong>.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="w-auto">
              <Button 
                className="bg-white text-cargo-green hover:bg-gray-100 tap-target w-full" 
                size="lg"
              >
                Get Free Quote
              </Button>
            </Link>
            <Link to="/services" className="w-auto">
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 tap-target w-full" 
                size="lg"
              >
                View Services <ArrowRight className="ml-2 h-4 w-4" />
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
