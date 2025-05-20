
"use client";

import * as React from "react";

// This component strictly only renders on the client side
export function ClientToasts() {
  // Use state to track if component is mounted and if toasters are loaded
  const [mounted, setMounted] = React.useState(false);
  const [ToasterComponents, setToasterComponents] = React.useState<{
    Toaster: React.ComponentType<any> | null;
    SonnerToaster: React.ComponentType<any> | null;
  }>({
    Toaster: null,
    SonnerToaster: null,
  });
  
  // Load components on client-side only
  React.useEffect(() => {
    let isMounted = true;
    
    const loadComponents = async () => {
      try {
        if (!isMounted) return;
        
        // Import toasters dynamically on the client side
        // Use a more direct import approach to avoid issues
        const toasterModule = await import("../ui/toaster");
        const sonnerModule = await import("../ui/sonner");
        
        if (isMounted) {
          setToasterComponents({
            Toaster: toasterModule.Toaster,
            SonnerToaster: sonnerModule.Toaster,
          });
          setMounted(true);
        }
      } catch (error) {
        console.error("Failed to load toast components:", error);
      }
    };
    
    // Only run this effect on the client
    if (typeof window !== "undefined") {
      loadComponents();
    }
    
    return () => {
      isMounted = false;
    };
  }, []);
  
  // Only render when mounted on client and components are loaded
  if (!mounted || !ToasterComponents.Toaster || !ToasterComponents.SonnerToaster) {
    return null;
  }
  
  const { Toaster, SonnerToaster } = ToasterComponents;
  
  return (
    <>
      <Toaster />
      <SonnerToaster />
    </>
  );
}
