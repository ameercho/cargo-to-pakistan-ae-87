
"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import * as React from "react";

export function Toaster() {
  // Track if component is mounted on client
  const [mounted, setMounted] = React.useState(false);
  
  // Only run on client-side
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  // Only try to use the hook when mounted (client-side only)
  const { toasts } = mounted ? useToast() : { toasts: [] };

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
