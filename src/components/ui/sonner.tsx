
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import * as React from "react"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  // Use a more robust approach to get the theme
  let theme = "system";
  
  // Only try to use useTheme if React.useContext is available
  if (typeof React.useContext === 'function') {
    try {
      const themeContext = useTheme();
      if (themeContext?.theme) {
        theme = themeContext.theme;
      }
    } catch (error) {
      console.error("Theme context not available:", error);
      // Default theme is already set
    }
  }

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
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
  )
}

export { Toaster }
