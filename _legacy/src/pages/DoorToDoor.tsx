
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Truck, Home, Package, ArrowRight, Shield, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSafeContact } from "@/hooks/useSafeContact";

const DoorToDoor: React.FC = () => {

  const { makeCall, openWhatsApp } = useSafeContact();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    originCity: "",
    destinationCity: "",
    cargoType: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cargo-green to-cargo-blue text-white text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hassle-Free Door-to-Door Pakistan Cargo
              </h1>
              <p className="text-lg md:text-xl mb-6">
                We handle everything from pickup at your door in Dubai to safe delivery at your loved ones' door in Pakistan.
              </p>
              {/* Pricing Details */}
              <div className="bg-white/10 rounded-lg p-4 md:p-6 mb-4 text-left">
                <h2 className="text-xl font-semibold mb-2 text-white">Pricing (AED per kg or item)</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-white">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-1 pr-4">Item Type</th>
                        <th className="text-left py-1">Price (AED)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>General Items - clothes, shoes, toys, wood furniture, luggage</td><td>3</td></tr>
                      <tr><td>Electronics - small appliances (juicer, blender, small oven)</td><td>12</td></tr>
                      <tr><td>Mattress</td><td>5</td></tr>
                      <tr><td>Sofa</td><td>8</td></tr>
                      <tr><td>Furniture (dismantle)</td><td>3</td></tr>
                      <tr><td>Bicycle kids</td><td>100</td></tr>
                      <tr><td>Bicycle adult</td><td>150</td></tr>
                      <tr><td>Scooty battery operated</td><td>12</td></tr>
                      <tr><td>Kids toy car battery operated</td><td>12</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 text-sm text-orange-100">
                  <p>Above are the indication price.<br />
                  <span className="font-semibold">AED 30/- Doc fee per invoice will apply.</span><br />
                  Packing Charges varies and are additional.</p>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Shield className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">No Hidden Fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">Real-Time Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Truck className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">Door-to-Door Service</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-left gap-4">
                <Button 
                  onClick={() => makeCall('quote_page_cta')}
                  className="bg-cargo-orange hover:bg-orange-600 text-white"
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
                <Button 
                  onClick={() => openWhatsApp("Hi, I want to ship cargo to Pakistan. Can you help me with a quote?", 'quote_page_cta')}
                  className="bg-cargo-green hover:bg-cargo-green/90 text-white"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
              {/* Moving Home Promo CTA */}
              <a
                href="/services/moving-home"
                className="block mt-6 p-4 rounded-lg bg-gradient-to-r from-cargo-orange to-cargo-green text-white shadow-lg flex items-center gap-3 hover:shadow-xl hover:scale-[1.02] transition-all focus:outline-none focus:ring-2 focus:ring-cargo-blue"
                aria-label="Learn more about moving home services and full container discounts"
              >
                <span className="text-2xl">🚚</span>
                <div>
                  <span className="font-semibold text-lg">Moving out of the UAE?</span><br />
                  <span className="text-sm">Click here to get <span className="font-bold underline">exclusive discounts</span> on full container shipping! Secure, fast, and affordable relocation for your entire home or business.</span>
                </div>
              </a>
            </div>
            {/* Right Column - Lead Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
              <form 
                name="cargo-quote" 
                method="POST" 
                data-netlify="true"
                action="/thank-you"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="cargo-quote" />
                <input type="hidden" name="bot-field" />
                {/* Ensure Select values are submitted */}
                <input type="hidden" name="originCity" value={formData.originCity} />
                <input type="hidden" name="cargoType" value={formData.cargoType} />
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h2>
                  <p className="text-gray-600">Professional cargo services to Pakistan</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Full Name *
                  </label>
                  <Input 
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Phone Number *
                  </label>
                  <Input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+971 50 123 4567"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Email Address *
                  </label>
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Origin City *
                  </label>
                  <Select name="originCity" onValueChange={(value) => handleInputChange('originCity', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select pickup city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dubai">Dubai</SelectItem>
                      <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                      <SelectItem value="sharjah">Sharjah</SelectItem>
                      <SelectItem value="ajman">Ajman</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Destination City in Pakistan *
                  </label>
                  <Input 
                    type="text"
                    name="destinationCity"
                    value={formData.destinationCity}
                    onChange={(e) => handleInputChange('destinationCity', e.target.value)}
                    placeholder="e.g. Karachi, Lahore, Islamabad"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Cargo Type *
                  </label>
                  <Select name="cargoType" onValueChange={(value) => handleInputChange('cargoType', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cargo type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="household">Household Goods</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Message / Details 
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your cargo (weight, dimensions, special requirements)"
                    rows={3}
                    className="w-full"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-cargo-orange hover:bg-orange-600 text-white font-semibold py-3 text-lg"
                  size="lg"
                >
                  Get My Free Quote
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  We'll respond within 2 hours with your personalized quote
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Service Works */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
            Our Door-to-Door Cargo Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Package className="h-10 w-10 text-cargo-green mb-2" />
              <h3 className="font-semibold mb-2">1. Get a Quote</h3>
              <p className="text-gray-700 text-sm">
                Contact us for a quick and accurate cargo rate for your shipment. Our team will provide a transparent quote with no hidden fees.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="h-10 w-10 text-cargo-green mb-2" />
              <h3 className="font-semibold mb-2">2. Free Pickup</h3>
              <p className="text-gray-700 text-sm">
                Schedule a time for us to pick up your items. We offer free door-to-door cargo service from your location in the UAE.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Home className="h-10 w-10 text-cargo-green mb-2" />
              <h3 className="font-semibold mb-2">3. Safe Transit</h3>
              <p className="text-gray-700 text-sm">
                Your cargo is handled with care and shipped via air cargo to Pakistan or sea cargo to Pakistan, whichever you prefer.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Package className="h-10 w-10 text-cargo-green mb-2" />
              <h3 className="font-semibold mb-2">4. Doorstep Delivery</h3>
              <p className="text-gray-700 text-sm">
                We manage customs clearance and deliver your parcel directly to the recipient's door in Pakistan, no matter the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
            Why Choose Our Door-to-Door Service?
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <strong>Expertise:</strong> With years of experience in <b>door to door cargo Pakistan</b> and <b>shipping to Pakistan</b>, we handle all types of cargo, from personal luggage to commercial shipments.
            </li>
            <li>
              <strong>Reliability:</strong> We are committed to safe, timely delivery and provide secure tracking for every shipment.
            </li>
            <li>
              <strong>Customer Support:</strong> Our dedicated team assists you at every step, from quote to delivery, ensuring a smooth experience.
            </li>
            <li>
              <strong>Comprehensive Service:</strong> We offer <b>cargo from Dubai to Pakistan door to door</b>, <b>sea cargo to Pakistan</b>, <b>parcel delivery to Pakistan</b>, and <b>home moving to Pakistan</b>—all with transparent pricing.
            </li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-cargo-blue rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Ship Your Cargo to Pakistan?
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Get your free quote above or contact us directly for immediate assistance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => makeCall('quote_page_cta')}
                className="bg-cargo-orange hover:bg-orange-600 text-white"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
              <Button 
                onClick={() => openWhatsApp("Hi, I want to ship cargo to Pakistan. Can you help me with a quote?", 'quote_page_cta')}
                className="bg-cargo-green hover:bg-cargo-green/90 text-white"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default DoorToDoor;
