
import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// This component only renders on the client side where React hooks are available
export function ClientToasts() {
  return (
    <>
      <Toaster />
      <Sonner />
    </>
  );
}
