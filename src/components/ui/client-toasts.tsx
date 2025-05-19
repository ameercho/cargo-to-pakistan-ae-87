
"use client";

import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// This component only renders on the client side where React hooks are available
export function ClientToasts() {
  // Use a ref to track if the component is mounted
  const [mounted, setMounted] = React.useState(false);
  
  // Only render on client-side
  React.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  
  // Return null during SSR and first render
  if (!mounted) {
    return null;
  }
  
  return (
    <>
      <Toaster />
      <Sonner />
    </>
  );
}
