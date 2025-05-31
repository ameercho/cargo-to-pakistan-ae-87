
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
    src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // shipping containers
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // delivery truck
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // cargo ship
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // airplane cargo
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // warehouse
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // forklift
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1544149858-8934872967ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // delivery boxes
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // logistics center
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1601034913836-a1f43cc99ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // port crane
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // container port
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // delivery van
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // package handling
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // cargo ship at sea
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1534398409709-fe7d5ac632c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // shipping port
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // air freight
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // warehouse operations
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
