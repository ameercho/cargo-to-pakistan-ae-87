
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Ship, Package, FileCheck, Calendar, Truck, Phone, MessageCircle } from "lucide-react";
import FloatingButton from "@/components/FloatingButton";

const DubaiToPakistan = () => {
  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services%20from%20Dubai%20to%20Pakistan.", "_blank");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cargo to Pakistan from Dubai</h1>
            <p className="text-xl text-gray-100 mb-8">
              Efficient and affordable shipping solutions from Dubai to destinations across Pakistan
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
              <h2 className="text-3xl font-bold text-cargo-blue mb-6">Dubai to Pakistan Cargo Services</h2>
              <p className="text-gray-600 mb-4">
                Our specialized cargo service from Dubai to Pakistan offers complete door-to-door solutions with professional handling from start to finish.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you're sending personal effects, gifts, or commercial goods, our team ensures your shipment reaches its destination in Pakistan safely and efficiently.
              </p>
              <p className="text-gray-600 mb-6">
                We serve all major cities in Pakistan including Karachi, Lahore, Islamabad, Rawalpindi, and many more with our extensive delivery network.
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
              <h3 className="text-xl font-bold text-cargo-blue mb-4">Our Dubai to Pakistan Services Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Plane className="h-5 w-5 text-cargo-green mt-1" />
                  <span>Air freight (2-5 business days)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Ship className="h-5 w-5 text-cargo-green mt-1" />
                  <span>Sea freight (20-30 days)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Package className="h-5 w-5 text-cargo-green mt-1" />
                  <span>Personal and household items</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileCheck className="h-5 w-5 text-cargo-green mt-1" />
                  <span>Commercial shipments with documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-cargo-green mt-1" />
                  <span>Flexible pickup scheduling in Dubai</span>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-cargo-green mt-1" />
                  <span>Door-to-door delivery across Pakistan</span>
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
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Why Choose Our Dubai to Pakistan Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our specialized Dubai to Pakistan shipping expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cargo-lightBlue rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-cargo-blue" />
              </div>
              <h3 className="text-xl font-semibold text-cargo-blue mb-2">Full Service Solution</h3>
              <p className="text-gray-600">
                From pickup in Dubai to final delivery in Pakistan, we handle every step of the shipping process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cargo-lightBlue rounded-full flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-cargo-blue" />
              </div>
              <h3 className="text-xl font-semibold text-cargo-blue mb-2">Documentation Assistance</h3>
              <p className="text-gray-600">
                We handle all necessary customs documentation for smooth clearance at Pakistani ports.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cargo-lightBlue rounded-full flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-cargo-blue" />
              </div>
              <h3 className="text-xl font-semibold text-cargo-blue mb-2">Expert Packing</h3>
              <p className="text-gray-600">
                Professional packing services to ensure your items are protected during transit from Dubai to Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cargo-blue mb-3">Dubai to Pakistan Delivery Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver to all major cities and regions throughout Pakistan from Dubai.
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
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Shipping Process: Dubai to Pakistan</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-cargo-green rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Get in Touch</h3>
                    <p className="text-gray-600">Contact us with information about your shipment from Dubai to Pakistan.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-cargo-green rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Book Pickup</h3>
                    <p className="text-gray-600">We'll arrange collection from your address in Dubai at a time that suits you.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-cargo-green rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Preparation</h3>
                    <p className="text-gray-600">We pack your items properly and prepare all required shipping documents.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-cargo-green rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Shipping & Tracking</h3>
                    <p className="text-gray-600">Your cargo is transported to Pakistan with real-time tracking updates.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-cargo-green rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Delivery</h3>
                    <p className="text-gray-600">We deliver your shipment to the specified address in Pakistan.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-cargo-blue mb-6">Shipping Rates: Dubai to Pakistan</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h3 className="font-semibold text-lg mb-4">Factors that affect shipping costs:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cargo-green mt-2"></div>
                    <span className="text-gray-600">Weight and dimensions of the cargo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cargo-green mt-2"></div>
                    <span className="text-gray-600">Transportation method selected</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cargo-green mt-2"></div>
                    <span className="text-gray-600">Delivery location in Pakistan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cargo-green mt-2"></div>
                    <span className="text-gray-600">Category of goods being shipped</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cargo-green mt-2"></div>
                    <span className="text-gray-600">Additional services requested</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <Button className="bg-cargo-green hover:bg-[#176a3e] text-white">
                  Get Your Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-cargo-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Ship from Dubai to Pakistan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and experience our professional cargo services.
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

export default DubaiToPakistan;
