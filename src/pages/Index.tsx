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

  // 3. WhatsApp Pre-Capture Handler
  const handleWhatsAppAction = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If we already have the name, skip the prompt
    if (customerName) {
      window.open(`https://wa.me/971504948135?text=Hi, I am ${customerName}. I need a cargo quote to Pakistan.`, "_blank");
      return;
    }

    // Ask for name (Fastest implementation for performance)
    const nameInput = window.prompt("Who shall we address the quote to?");
    
    if (nameInput) {
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + 90);
      document.cookie = `customer_name=${encodeURIComponent(nameInput)}; expires=${expiry.toUTCString()}; path=/; SameSite=Lax; Secure`;
      
      setCustomerName(nameInput);
      window.open(`https://wa.me/971504948135?text=Hi, I am ${nameInput}. I need a cargo quote to Pakistan.`, "_blank");
    } else {
      // If user cancels, proceed with a generic message
      window.open("https://wa.me/971504948135?text=Hi, I need a cargo quote to Pakistan.", "_blank");
    }
  };
  // --- COOKIE & PERSONALIZATION LOGIC END ---

  // Optimized Metadata (2026 Internal Update)
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
      
      {/* Passing all personalization data to HeroSection */}
      <HeroSection 
        isReturning={isReturningUser} 
        customerName={customerName} 
        onWhatsAppClick={handleWhatsAppAction}
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
    </div>
  );
};

export default Index;