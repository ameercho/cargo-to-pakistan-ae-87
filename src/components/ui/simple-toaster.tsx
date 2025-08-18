import React from "react";

/**
 * Simple toaster component that doesn't use hooks
 */
export function SimpleToaster() {
  return (
    <div 
      id="toast-container" 
      className="fixed top-4 right-4 z-50 flex flex-col gap-2"
      style={{ pointerEvents: 'none' }}
    />
  );
}