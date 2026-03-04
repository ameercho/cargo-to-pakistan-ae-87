import { useState, useEffect } from "react"; 
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";

// SEO Imports
import PageSEO from "@/components/SEO/PageSEO";
import { generateSEOData } from "../utils/seo-utils";

import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Package, Truck, Plane, Ship, Clock, Shield } from "lucide-react";

const Index = () => {
  // --- COOKIE & PERSONALIZATION LOGIC START ---
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [customerName, setCustomerName] = useState("");
  
  // UI State for the Name Capture Modal
  const [showNameModal, setShowNameModal] = useState(false);
  const [tempName, setTempName] = useState("");
  const [pendingAction, setPendingAction] = useState<"whatsapp" | "call" | null>(null);

  useEffect(() => {
    const returningCookieName = "returning_customer";
    const nameCookieName = "customer_name";
    const cookies = document.cookie.split("; ");
    
    // 1. Check for returning status
    const hasReturningCookie = cookies.find((row) => row.startsWith(`${returningCookieName}=`));
    if (hasReturningCookie) {
      setIsReturningUser(true);
    } else {
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + 30);
      document.cookie = `${returningCookieName}=true; expires=${expiry.toUTCString()}; path=/; SameSite=Lax; Secure`;
      setIsReturningUser(false);
    }

    // 2. Check for saved customer name
    const hasNameCookie = cookies.find((row) => row.startsWith(`${nameCookieName}=`));
    if (hasNameCookie) {
      setCustomerName(decodeURIComponent(hasNameCookie.split("=")[1]));
    }
  }, []);

  // 3. Unified Contact Intent Handler
  const handleContactIntent = (type: "whatsapp" | "call") => {
    if (customerName) {
      // If we already have the name, proceed immediately
      executeAction(type, customerName);
    } else {
      // Otherwise, open the name capture modal
      setPendingAction(type);
      setShowNameModal(true);
    }
  };

  const executeAction = (type: "whatsapp" | "call", name?: string) => {
    const phoneNumber = "971504948135";
    if (type === "whatsapp") {
      const msg = name 
        ? `Hi, I am ${name}. I need a cargo quote to Pakistan.` 
        : "Hi, I need a cargo quote to Pakistan.";
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    } else {
      // Direct Phone Call
      window.location.href = `tel:+${phoneNumber}`;
    }
  };

  const handleModalSubmit = () => {
    if (tempName.trim()) {
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + 90);
      document.cookie = `customer_name=${encodeURIComponent(tempName.trim())}; expires=${expiry.toUTCString()}; path=/; SameSite=Lax; Secure`;
      setCustomerName(tempName.trim());
      if (pendingAction) executeAction(pendingAction, tempName.trim());
    } else if (pendingAction) {
      // If they click continue without a name, just proceed
      executeAction(pendingAction);
    }
    setShowNameModal(false);
    setTempName("");
  };
  // --- COOKIE & PERSONALIZATION LOGIC END ---

  const seo = generateSEOData.homepage();

  const popularDestinations = [
    { name: "Karachi", href: "/pakistan-cargo-to-karachi", desc: "Pakistan's largest port city and commercial hub" },
    { name: "Lahore", href: "/pakistan-cargo-to-lahore", desc: "Cultural capital and second largest city" },
    { name: "Islamabad", href: "/pakistan-cargo-to-islamabad", desc: "Capital city and political center" },
    { name: "Peshawar", href: "/pakistan-cargo-to-peshawar", desc: "Historic northwestern gateway city" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Cargo to Pakistan",
    "description": "Professional cargo shipping services from UAE to Pakistan with door-to-door delivery",
    "url": "https://cargotopakistan.ae",
    "logo": "https://cargotopakistan.ae/opengraph-image.png",
    "telephone": "+971504948135",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1240"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971504948135",
      "contactType": "customer service",
      "areaServed": ["AE", "PK"],
      "availableLanguage": ["English", "Urdu", "Hindi", "Arabic"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "Dubai",
      "addressLocality": "Dubai"
    },
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "City", "name": "Sharjah" },
      { "@type": "Country", "name": "Pakistan" }
    ],
    "serviceType": "Cargo Shipping Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cargo Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sea Freight to Pakistan",
            "description": "Cost-effective ocean cargo shipping"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Air Freight to Pakistan", 
            "description": "Fast air cargo delivery"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <PageSEO 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        ogImage={seo.ogImage}
        structuredData={structuredData}
      />
      
      {/* Passing all personalization data and new handlers to HeroSection */}
      <HeroSection 
        isReturning={isReturningUser} 
        customerName={customerName} 
        onWhatsAppClick={() => handleContactIntent("whatsapp")}
        onCallClick={() => handleContactIntent("call")}
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-cargo-blue mb-8 text-center">
              <strong>{seo.h1}</strong>
            </h1>
            
            <div className="prose max-w-none text-lg text-gray-700 mb-12">
              <p className="mb-6">
                Welcome to Dubai's most trusted <strong>cargo service to Pakistan</strong>. We provide professional, 
                secure, and affordable <strong>cargo shipping from Dubai to Pakistan</strong>, serving Business Bay, Deira, 
                Bur Dubai, and all major Dubai areas. Our comprehensive Pakistan cargo solutions ensure safe and 
                performance-optimized delivery to every corner of Pakistan.
              </p>
              
              <p className="mb-6">
                Our <strong>Dubai cargo services</strong> include express air cargo to Pakistan for urgent deliveries, 
                cost-effective sea cargo from Dubai ports for bulk shipments, and full door-to-door logistics. 
                With years of experience in <strong>Dubai to Pakistan logistics</strong>, we understand the unique 
                requirements of businesses and expatriates across the Emirates.
              </p>
            </div>

            {/* Popular Destinations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-cargo-blue mb-8 text-center">
                <strong>Popular Pakistan Destinations</strong> from UAE
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularDestinations.map((destination, index) => (
                  <Link 
                    key={index}
                    to={destination.href}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-cargo-blue group"
                    title={`Cargo shipping to ${destination.name} Pakistan`}
                  >
                    <div className="flex items-center mb-3">
                      <MapPin className="h-5 w-5 text-cargo-green mr-2" />
                      <h3 className="text-xl font-semibold text-cargo-blue group-hover:text-cargo-orange">
                        <strong>Cargo to {destination.name}</strong>
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{destination.desc}</p>
                    <div className="flex items-center text-cargo-blue group-hover:text-cargo-orange">
                      <span className="text-sm font-medium">View Shipping Details</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Types */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-cargo-blue mb-8 text-center">
                Our <strong>Professional Cargo Services</strong> to Pakistan
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-cargo-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Ship className="h-8 w-8 text-cargo-blue" />
                  </div>
                  <h4 className="text-xl font-semibold text-cargo-blue mb-3">
                    <strong>Sea Freight to Pakistan</strong>
                  </h4>
                  <p className="text-gray-600">Cost-effective ocean cargo for large shipments from UAE ports</p>
                  <Link to="/services/sea-freight" className="text-cargo-blue hover:text-cargo-green mt-2 inline-block">
                    Learn More →
                  </Link>
                </div>
                
                <div className="text-center">
                  <div className="bg-cargo-lightGreen rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-cargo-green" />
                  </div>
                  <h4 className="text-xl font-semibold text-cargo-blue mb-3">
                    <strong>Air Freight to Pakistan</strong>
                  </h4>
                  <p className="text-gray-600">Fast air cargo delivery within 3-7 days for urgent shipments</p>
                  <Link to="/services/air-freight" className="text-cargo-blue hover:text-cargo-green mt-2 inline-block">
                    Learn More →
                  </Link>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-cargo-orange" />
                  </div>
                  <h4 className="text-xl font-semibold text-cargo-blue mb-3">
                    <strong>Door-to-Door Pakistan Cargo</strong>
                  </h4>
                  <p className="text-gray-600">Complete pickup and delivery service from your UAE location</p>
                  <Link to="/services" className="text-cargo-blue hover:text-cargo-green mt-2 inline-block">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesGrid />
      <WhyChooseUs />
      <CallToAction />

      {/* --- CUSTOM NAME CAPTURE MODAL --- */}
      {showNameModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full overflow-hidden animate-in zoom-in duration-300">
            <div className="bg-cargo-blue p-5 text-white text-center">
              <h3 className="text-xl font-bold">Personalized Quote</h3>
            </div>
            <div className="p-6">
              <label className="block text-gray-700 font-semibold mb-2">What is your name?</label>
              <input 
                type="text" 
                placeholder="Enter your name..."
                className="w-full border-2 border-gray-100 rounded-lg px-4 py-3 outline-none focus:border-cargo-orange transition-colors text-cargo-blue font-medium"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleModalSubmit()}
                autoFocus
              />
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button 
                  onClick={() => { setShowNameModal(false); if(pendingAction) executeAction(pendingAction); }} 
                  className="text-gray-400 font-medium hover:text-gray-600 transition-colors"
                >
                  Skip
                </button>
                <button 
                  onClick={handleModalSubmit} 
                  className="bg-cargo-orange text-white font-bold py-2 rounded-lg hover:bg-orange-600 shadow-md transition-all active:scale-95"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;