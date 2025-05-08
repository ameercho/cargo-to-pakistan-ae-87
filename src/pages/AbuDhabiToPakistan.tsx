
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Ship, Package, FileCheck, Calendar, Truck, Phone, MessageCircle } from "lucide-react";
import FloatingButton from "@/components/FloatingButton";

const AbuDhabiToPakistan = () => {
  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20from%20Abu%20Dhabi%20to%20Pakistan.", "_blank");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cargo to Pakistan from Abu Dhabi</h1>
            <p className="text-xl text-gray-100 mb-8">
              Reliable and cost-effective shipping solutions from Abu Dhabi to all major cities in Pakistan
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={handleCall}
                className="bg-white text-cargo-green hover:bg-gray-100 flex items-center gap-2 tap-target"
              >
                <Phone className="h-4 w-4" /> Call Now
              </Button>
              <Button 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 tap-target"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-cargo-blue mb-6">Abu Dhabi to Pakistan Cargo Services</h2>
              <p className="text-gray-600 mb-4">
                Our comprehensive cargo service from Abu Dhabi to Pakistan offers door-to-door delivery with professional handling of all your shipments, from pickup to final destination.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you're sending personal items, gifts for loved ones, or commercial cargo, we ensure safe and timely delivery to Pakistan with our experienced logistics team.
              </p>
              <p className="text-gray-600 mb-6">
                We cover all major cities in Pakistan including Karachi, Lahore, Islamabad, Peshawar, and many more with our reliable shipping network.
              </p>
              <div className="flex gap-4">
                <Link to="/contact">
                  <Button className="bg-cargo-green hover:bg-[#176a3e] text-white">Get a Quote</Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="bg-cargo-lightGreen rounded-lg p-8">
              <h3 className="text-xl font-bold text-cargo-blue mb-4">Our Abu Dhabi to Pakistan Services Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Plane className="h-5 w-5 text-cargo-green mt-1" />
                  <span>Air freight (3-5 business days)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Ship className="h-5 w-5 text-cargo-green mt-1" />
                  <span>Sea freight (25-40 days)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Package className="h-5 w-5 text-cargo-green mt-1" />
                  <span>Personal belongings & household items</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileCheck className="h-5 w-5 text-cargo-green mt-1" />
                  <span>Commercial shipments with documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-cargo-green mt-1" />
                  <span>Convenient pickup scheduling in Abu Dhabi</span>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-cargo-green mt-1" />
                  <span>Door-to-door delivery throughout Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Why Choose Our Abu Dhabi to Pakistan Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Benefit from our specialized knowledge and experience in shipping from Abu Dhabi to Pakistan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cargo-lightBlue rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-cargo-blue" />
              </div>
              <h3 className="text-xl font-semibold text-cargo-blue mb-2">Comprehensive Service</h3>
              <p className="text-gray-600">
                We handle everything from pickup in Abu Dhabi to final delivery in Pakistan, making shipping hassle-free.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cargo-lightBlue rounded-full flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-cargo-blue" />
              </div>
              <h3 className="text-xl font-semibold text-cargo-blue mb-2">Customs Expertise</h3>
              <p className="text-gray-600">
                Our team manages all customs procedures and paperwork for smooth clearance in Pakistan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cargo-lightBlue rounded-full flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-cargo-blue" />
              </div>
              <h3 className="text-xl font-semibold text-cargo-blue mb-2">Secure Packaging</h3>
              <p className="text-gray-600">
                Professional packing services to ensure your cargo is protected during transit from Abu Dhabi to Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Abu Dhabi to Pakistan Shipping Routes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer delivery services to all major cities and regions throughout Pakistan from Abu Dhabi.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Faisalabad", "Multan", "Sialkot"].map((city, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="font-medium text-cargo-blue">{city}</h3>
                <p className="text-xs text-gray-500 mt-1">Pakistan</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates & Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Shipping Process: Abu Dhabi to Pakistan</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-cargo-green rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Contact Us</h3>
                    <p className="text-gray-600">Reach out with details about your shipment from Abu Dhabi to Pakistan.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-cargo-green rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Arrange Collection</h3>
                    <p className="text-gray-600">We'll schedule a convenient pickup time at your Abu Dhabi location.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-cargo-green rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Processing & Documentation</h3>
                    <p className="text-gray-600">We prepare all necessary shipping and customs documents.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-cargo-green rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Shipping & Monitoring</h3>
                    <p className="text-gray-600">Your cargo is shipped to Pakistan with tracking information provided.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-cargo-green rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Final Delivery</h3>
                    <p className="text-gray-600">We deliver your shipment to the specified address in Pakistan.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Shipping Rates: Abu Dhabi to Pakistan</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h3 className="font-semibold text-lg mb-4">Factors that affect shipping costs:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cargo-green mt-2"></div>
                    <span className="text-gray-600">Weight and dimensions of your shipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cargo-green mt-2"></div>
                    <span className="text-gray-600">Chosen shipping method (air or sea)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cargo-green mt-2"></div>
                    <span className="text-gray-600">Final delivery location in Pakistan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cargo-green mt-2"></div>
                    <span className="text-gray-600">Nature of goods being shipped</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cargo-green mt-2"></div>
                    <span className="text-gray-600">Additional services required</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <Button className="bg-cargo-green hover:bg-[#176a3e] text-white">
                  Request a Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Ship from Abu Dhabi to Pakistan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and experience our exceptional cargo services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-white text-cargo-green hover:bg-gray-100 tap-target" 
              size="lg"
            >
              Get a Free Quote
            </Button>
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 tap-target" 
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FloatingButton />
    </div>
  );
};

export default AbuDhabiToPakistan;
