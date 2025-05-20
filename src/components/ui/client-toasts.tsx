
"use client";

import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

// This component strictly only renders on the client side
export function ClientToasts() {
  // Use state to track if component is mounted
  const [mounted, setMounted] = React.useState(false);
  
  // Load components on client-side only
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  // Only render when mounted on client
  if (!mounted) {
    return null;
  }
  
  return (
    <>
      <Toaster />
      <SonnerToaster />
    </>
  );
}
