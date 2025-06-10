
"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import React from "react";

export function Toaster() {
  // Add safety check for React availability
  if (!React || typeof React.useState !== 'function') {
    return null;
  }

  // Always call hooks unconditionally at the top level
  const [mounted, setMounted] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);
  
  // Only run on client-side
  React.useEffect(() => {
    setMounted(true);
    // For now, just use empty array to prevent errors
    setToasts([]);
    return () => setMounted(false);
  }, []);
  
  // Return empty during SSR or before mounting
  if (!mounted) {
    return null;
  }
  
  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
