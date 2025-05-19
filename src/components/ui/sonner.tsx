
"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import * as React from "react";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const [mounted, setMounted] = React.useState(false);
  const [theme, setTheme] = React.useState<ToasterProps["theme"]>("system");
  
  // Only run on client-side
  React.useEffect(() => {
    setMounted(true);
    
    // Only try to use theme hooks when we're sure we're on the client
    if (typeof window !== 'undefined') {
      try {
        // Safely access useTheme
        const themeContext = useTheme();
        if (themeContext && themeContext.resolvedTheme) {
          setTheme(themeContext.resolvedTheme as ToasterProps["theme"]);
        }
      } catch (error) {
        // Silently fail if theme context isn't available
        console.warn("Theme context not available:", error);
      }
    }
    
    return () => setMounted(false);
  }, []);

  // Render nothing during SSR
  if (typeof window === 'undefined' || !mounted) {
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
