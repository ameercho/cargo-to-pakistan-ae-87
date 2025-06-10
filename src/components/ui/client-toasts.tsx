
"use client";

import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { canUseDOM } from "@/hooks/toast/toast-utils";

/**
 * ClientToasts ensures toast functionality only runs on the client side
 */
export function ClientToasts() {
  // Check if we can use DOM and React is available
  if (!canUseDOM() || typeof React === 'undefined' || !React) {
    return null;
  }

  // Use hooks unconditionally after the early return checks
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
}
