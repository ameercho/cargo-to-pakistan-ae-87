
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
    const loadComponents = async () => {
      try {
        // Import toasters dynamically on the client side
        const toasterModule = await import("@/components/ui/toaster");
        const sonnerModule = await import("@/components/ui/sonner");
        
        setToasterComponents({
          Toaster: toasterModule.Toaster,
          SonnerToaster: sonnerModule.Toaster,
        });
        setMounted(true);
      } catch (error) {
        console.error("Failed to load toast components:", error);
      }
    };
    
    loadComponents();
    return () => setMounted(false);
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
