
"use client";

import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";

/**
 * ClientToasts ensures toast functionality only runs on the client side
 */
export function ClientToasts() {
  // Enhanced check for React availability
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Double-check that we're in a proper React environment
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      setMounted(true);
    }
  }, []);
  
  // Don't render anything until we're sure React is fully available
  if (!mounted || typeof window === 'undefined') {
    return null;
  }

  return <Toaster />;
}
