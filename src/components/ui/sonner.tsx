
"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import * as React from "react";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  // Default to system theme
  const [theme, setTheme] = React.useState<ToasterProps["theme"]>("system");
  
  // Once mounted, get theme from context
  React.useEffect(() => {
    try {
      const { theme: currentTheme } = useTheme();
      if (currentTheme) {
        setTheme(currentTheme as ToasterProps["theme"]);
      }
    } catch (error) {
      console.warn("Theme context not available:", error);
    }
  }, []);

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
