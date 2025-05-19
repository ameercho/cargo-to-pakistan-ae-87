
"use client";

import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// This component strictly only renders on the client side
export function ClientToasts() {
  // Use state to track if component is mounted
  const [mounted, setMounted] = React.useState(false);
  
  // Only run on client-side
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  // Return null during SSR and first render
  if (typeof window === 'undefined' || !mounted) {
    return null;
  }
  
  // Only render the toasts when we're certain we're on the client
  return (
    <>
      <Toaster />
      <Sonner />
    </>
  );
}
