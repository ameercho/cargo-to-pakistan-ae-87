
"use client";

import * as React from "react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const [mounted, setMounted] = React.useState(false);
  const [theme, setTheme] = React.useState<ToasterProps["theme"]>("system");
  
  // Only run on client-side
  React.useEffect(() => {
    setMounted(true);
    
    // Safely try to use the theme hook (only on client)
    const getTheme = () => {
      try {
        // We need to dynamically require this to avoid SSR issues
        const { useTheme } = require("next-themes");
        const { resolvedTheme } = useTheme();
        if (resolvedTheme) {
          setTheme(resolvedTheme as ToasterProps["theme"]);
        }
      } catch (error) {
        // Silently fail if theme context isn't available
        console.warn("Theme context not available:", error);
      }
    };
    
    // Only attempt to get the theme when mounted
    if (mounted) {
      getTheme();
    }
    
    return () => setMounted(false);
  }, [mounted]);

  // Don't render anything until mounted
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
