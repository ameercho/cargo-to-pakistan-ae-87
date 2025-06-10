
"use client";

import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { canUseDOM } from "@/hooks/toast/toast-utils";

/**
 * ClientToasts ensures toast functionality only runs on the client side
 */
export function ClientToasts() {
  // Only proceed if we're in browser and React is available
  if (!canUseDOM() || typeof React === 'undefined' || !React || !React.useState) {
    return null;
  }

  // Safely use state only after confirming React is available
  try {
    const [mounted, setMounted] = React.useState(false);
    
    // Only mount component on the client
    React.useEffect(() => {
      setMounted(true);
      return () => {
        setMounted(false);
      };
    }, []);
    
    // Don't render anything until mounted
    if (!mounted) {
      return null;
    }

    return <Toaster />;
  } catch (error) {
    console.warn('ClientToasts: React hooks not available, skipping render');
    return null;
  }
}
