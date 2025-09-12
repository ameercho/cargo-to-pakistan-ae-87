import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Truck, MapPin, Phone, MessageCircle } from "lucide-react";
import { useSafeContact } from "@/hooks/useSafeContact";
import PageSEO from "@/components/SEO/PageSEO";

const GetAQuote = () => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    // Do not prevent default to allow Netlify submission and redirect
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const testimonials = [
    {
      name: "Ahmed Hassan",
      location: "Dubai to Karachi",
      text: "Excellent service! My cargo reached Karachi safely and on time. Very competitive rates and professional handling."
    },
    {
      name: "Fatima Ali",
      location: "Abu Dhabi to Lahore", 
      text: "Best cargo service for Pakistan. They handled all customs clearance and delivered door-to-door as promised."
    },
    {
      name: "Muhammad Khan",
      location: "Sharjah to Islamabad",
      text: "Used their service multiple times for business cargo. Always reliable and transparent pricing with no hidden fees."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-cargo-green/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-cargo-green mb-4">Quote Request Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest! We'll contact you within 2 hours with your personalized quote.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-cargo-green hover:bg-cargo-green/90"
            >
              Submit Another Quote
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageSEO 
        title="Get Free Quote - Pakistan Cargo from Dubai, Abu Dhabi, Sharjah & Ajman"
        description="Get instant quote for cargo shipping to Pakistan from UAE. No hidden fees, door-to-door service, real-time tracking. Professional cargo services with competitive rates."
        keywords="Pakistan cargo quote, cargo to Pakistan rates, Dubai to Pakistan shipping, cargo quote UAE, Pakistan cargo pricing"
        canonical="/get-a-quote"
      />
      
      <div className="min-h-screen bg-background">
        {/* Above the Fold */}
        <section className="py-8 md:py-16 bg-gradient-to-br from-cargo-blue to-cargo-green text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Get a Free Quote for Cargo to Pakistan from Dubai, Abu Dhabi, Sharjah & Ajman
                </h1>
                
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                  Fill out the form below to get a personalized, all-inclusive quote with no hidden fees.
                </p>
                
                {/* Trust Signals */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
              
              {/* Right Column - Lead Form */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
                <form 
                  name="cargo-quote" 
                  method="POST" 
                  data-netlify="true"
                  action="/thank-you"
                  onSubmit={handleSubmit}
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
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
        
        {/* Below the Fold */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Why Choose Us */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cargo-blue mb-4">
                Why Choose Our Pakistan Cargo Services?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-cargo-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-cargo-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Competitive Rates</h3>
                <p className="text-gray-600 text-sm">Best prices in UAE for Pakistan cargo with transparent pricing and no hidden fees</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-cargo-green/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Truck className="h-8 w-8 text-cargo-green" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Customs Expertise</h3>
                <p className="text-gray-600 text-sm">Complete customs clearance handling for hassle-free Pakistan cargo delivery</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-cargo-orange/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-cargo-orange" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Real-Time Tracking</h3>
                <p className="text-gray-600 text-sm">Track your Pakistan cargo shipment from UAE pickup to Pakistan delivery</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-cargo-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-cargo-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
                <p className="text-gray-600 text-sm">Dedicated customer support in English and Urdu languages</p>
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-cargo-blue mb-8">
                What Our Customers Say
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="mb-4">
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm italic">"{testimonial.text}"</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Final CTA */}
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
      </div>
    </>
  );
};

export default GetAQuote;