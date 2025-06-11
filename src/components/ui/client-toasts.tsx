
"use client";

import * as React from "react";
import { Toaster } from "@/components/ui/toaster";

/**
 * ClientToasts ensures toast functionality only runs on the client side
 */
export function ClientToasts() {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }

  return <Toaster />;
}
