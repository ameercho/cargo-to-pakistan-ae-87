"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { trackEvent } from "@/services/analytics";
export const ShuffleHero = () => {
  const handleCall = () => {
    trackEvent('Contact', 'Call', 'Hero Section');
    window.location.href = "tel:+971504948135";
  };
  const handleWhatsApp = () => {
    trackEvent('Contact', 'WhatsApp', 'Hero Section');
    window.open("https://wa.me/971504948135?text=Hello,%20I'm%20interested%20in%20your%20cargo%20services.", "_blank");
  };
  return <section className="w-full px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-cargo-green font-medium uppercase tracking-wide">
          Reliable Cargo Services
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">Cargo to Pakistan</h1>
        <p className="text-base md:text-lg text-gray-600 my-4 md:my-6">
          Professional cargo services from UAE to Pakistan. Door-to-door delivery, sea freight, air freight, and full container services with competitive rates.
        </p>
        
        {/* Call and WhatsApp buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Button onClick={handleCall} className="bg-cargo-green hover:bg-cargo-green/90 text-white tap-target flex items-center gap-2" aria-label="Call our customer service">
            <Phone className="h-4 w-4" /> Call Us Now
          </Button>
          <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 text-white tap-target flex items-center gap-2" aria-label="Contact us on WhatsApp">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </Button>
        </div>
        
        <div className="pt-6">
          <div className="flex flex-wrap gap-3">
            <div className="bg-cargo-lightBlue py-2 px-4 rounded-full text-sm text-cargo-blue font-medium">Moving Home</div>
            <div className="bg-cargo-lightGreen py-2 px-4 rounded-full text-sm text-cargo-green font-medium">Sea Freight</div>
            <div className="bg-cargo-lightOrange py-2 px-4 rounded-full text-sm text-cargo-orange font-medium">Full Container</div>
          </div>
        </div>
      </div>
      <ShuffleGrid />
    </section>;
};
const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

// Get Cloudinary base URL - adjust cloud name as needed
const getCloudinaryUrl = (filename: string) => {
  // Replace 'your-cloud-name' with your actual Cloudinary cloud name
  // The Netlify plugin should make this available, but we'll use a direct approach
  return `/.netlify/images?url=/images/${filename}&w=400&h=300&fit=crop`;
};

// Shipping, logistics and courier themed images
const squareData = [{
  id: 1,
  src: getCloudinaryUrl("containers.webp"),
  alt: "Shipping containers at port"
}, {
  id: 2,
  src: getCloudinaryUrl("pallet-jack.webp"),
  alt: "Pallet jack for warehouse operations"
}, {
  id: 3,
  src: getCloudinaryUrl("fedex-plane.webp"),
  alt: "FedEx cargo plane for air freight"
}, {
  id: 4,
  src: getCloudinaryUrl("container-port.webp"),
  alt: "Container yard at shipping port"
}, {
  id: 5,
  src: getCloudinaryUrl("cargo-ship-vesal.webp"),
  alt: "Cargo ship vessel for sea freight"
}, {
  id: 6,
  src: getCloudinaryUrl("warehouse-racking.webp"),
  alt: "Warehouse storage racking system"
}, {
  id: 7,
  src: getCloudinaryUrl("dhl-van.webp"),
  alt: "DHL delivery van for courier services"
}, {
  id: 8,
  src: getCloudinaryUrl("box-delivery.webp"),
  alt: "Package delivery service"
}, {
  id: 9,
  src: getCloudinaryUrl("scania-truck.webp"),
  alt: "Scania delivery truck"
}, {
  id: 10,
  src: getCloudinaryUrl("uae-flag.webp"),
  alt: "United Arab Emirates flag"
}, {
  id: 11,
  src: getCloudinaryUrl("dubai-perl.webp"),
  alt: "Dubai skyline and architecture"
}, {
  id: 12,
  src: getCloudinaryUrl("abu-dhabi-mosque.webp"),
  alt: "Sheikh Zayed Mosque in Abu Dhabi"
}, {
  id: 13,
  src: getCloudinaryUrl("pakistani-truck.webp"),
  alt: "Pakistani decorated truck"
}, {
  id: 14,
  src: getCloudinaryUrl("pakistani-flag.webp"),
  alt: "Pakistan flag"
}, {
  id: 15,
  src: getCloudinaryUrl("fork-lift-loading.webp"),
  alt: "Forklift loading operations"
}, {
  id: 16,
  src: getCloudinaryUrl("warehouse.webp"),
  alt: "Warehouse operations and logistics"
}];
const generateSquares = () => {
  return shuffle(squareData).map(sq => <motion.div key={sq.id} layout transition={{
    duration: 1.5,
    type: "spring"
  }} className="w-full h-full rounded-md overflow-hidden bg-gray-200">
      <img src={sq.src} alt={sq.alt} loading="lazy" className="w-full h-full object-cover" />
    </motion.div>);
};
const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());
  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };
  return <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map(sq => sq)}
    </div>;
};