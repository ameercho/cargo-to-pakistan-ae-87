import React from "react";

/**
 * Ultra-simple toaster that doesn't use any hooks
 * This prevents React initialization issues
 */
export function SimpleToaster() {
  return (
    <div 
      id="toast-container" 
      className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none"
    />
  );
}