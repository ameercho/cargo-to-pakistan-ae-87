
"use client"

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

  return (
    <section className="w-full px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-cargo-green font-medium uppercase tracking-wide">
          Reliable Cargo Services
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Fast & Secure Shipping to Pakistan
        </h1>
        <p className="text-base md:text-lg text-gray-600 my-4 md:my-6">
          Professional cargo services from UAE to Pakistan. Door-to-door delivery, sea freight, air freight, and full container services with competitive rates.
        </p>
        
        {/* Call and WhatsApp buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Button 
            onClick={handleCall} 
            className="bg-cargo-green hover:bg-cargo-green/90 text-white tap-target flex items-center gap-2" 
            aria-label="Call our customer service"
          >
            <Phone className="h-4 w-4" /> Call Us Now
          </Button>
          <Button 
            onClick={handleWhatsApp} 
            className="bg-green-600 hover:bg-green-700 text-white tap-target flex items-center gap-2" 
            aria-label="Contact us on WhatsApp"
          >
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
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// Shipping, logistics and courier themed images
const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // shipping containers
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1712159208614-45b35e53b0cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Pallet Jack
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1601172449745-ec49ac55ae13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Fedex plane
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Container yard
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Cargo Ship
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // wrehouse isle
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1556011308-d6aedab5ed8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // DHL Pickup
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1659353741484-314fb43eabb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // box delivery
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // scania truck
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1603798994946-5ea9dbacf20e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // UAE Flag
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1667592441284-b590021411e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Dubai musium
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1512971064777-efe44a486ae0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Sheikh zayd mosque
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1588445740470-9e3b18e64ed3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Pakistani Truck
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1633100291356-19e4e0dcb98f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Pakistan Flag
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1601912552080-0fb89fd08042?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Fork lift
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // warehouse operations
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-md overflow-hidden bg-gray-200"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
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

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};
