
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import * as React from "react"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  // Default theme if useTheme hook is not available
  let themeValue = "system";
  
  // Safely try to use the useTheme hook
  try {
    // The component now should only render on the client side
    // where hooks are available, but we'll add another safety check
    if (typeof React.useContext === 'function') {
      const { theme = "system" } = useTheme();
      themeValue = theme;
    }
  } catch (e) {
    console.warn("Could not access theme context:", e);
  }

  return (
    <Sonner
      theme={themeValue as ToasterProps["theme"]}
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
