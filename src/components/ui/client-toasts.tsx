
"use client";

import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { canUseDOM } from "@/hooks/toast/toast-utils";

/**
 * ClientToasts ensures toast functionality only runs on the client side
 */
export function ClientToasts() {
  const [mounted, setMounted] = React.useState(false);
  
  // Only mount component on the client
  React.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  
  // Don't render anything on the server
  if (!mounted || !canUseDOM()) {
    return null;
  }

  return <Toaster />;
}
