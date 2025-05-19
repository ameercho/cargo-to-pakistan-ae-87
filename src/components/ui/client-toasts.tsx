
"use client";

import dynamic from 'next/dynamic'
import * as React from "react";

// Dynamically import both toasters with SSR disabled
const Toaster = dynamic(() => import("@/components/ui/toaster").then(mod => ({ default: mod.Toaster })), 
  { ssr: false }
);

const SonnerToaster = dynamic(() => import("@/components/ui/sonner").then(mod => ({ default: mod.Toaster })), 
  { ssr: false }
);

// This component strictly only renders on the client side
export function ClientToasts() {
  // Use state to track if component is mounted
  const [mounted, setMounted] = React.useState(false);
  
  // Only run on client-side
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
      {mounted && <Toaster />}
      {mounted && <SonnerToaster />}
    </>
  );
}
