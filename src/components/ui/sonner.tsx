
"use client";

import * as React from "react";
import { Toaster as Sonner } from "sonner";
import { canUseDOM } from "@/hooks/toast/toast-utils";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const [mounted, setMounted] = React.useState(false);
  const [theme, setTheme] = React.useState<ToasterProps["theme"]>("system");
  
  // Only run on client-side
  React.useEffect(() => {
    setMounted(true);
    
    // Safely determine theme on client only
    if (canUseDOM()) {
      try {
        const themeContext = document.documentElement.getAttribute('data-theme') || 
                             document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        setTheme(themeContext as ToasterProps["theme"]);
      } catch (error) {
        // Silently fall back to system theme
      }
    }
    
    return () => setMounted(false);
  }, []);

  // Don't render until mounted on client
  if (!mounted) {
    return null;
  }

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
