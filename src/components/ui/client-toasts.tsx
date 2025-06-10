
"use client";

import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { canUseDOM } from "@/hooks/toast/toast-utils";

/**
 * ClientToasts ensures toast functionality only runs on the client side
 */
export function ClientToasts() {
  // Early return before any hooks if React is not available
  if (!canUseDOM() || typeof React === 'undefined' || !React || typeof React.useState !== 'function') {
    return null;
  }

  // Now we can safely use hooks since we've confirmed React is available
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
