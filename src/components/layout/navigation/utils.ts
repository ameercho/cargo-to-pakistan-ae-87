
/**
 * Navigation utility functions for consistent styling and behavior
 */

/**
 * Generates CSS classes for navigation links based on active state
 */
export const getNavLinkClasses = (isActive: boolean): string => {
  const baseClasses = "font-medium tap-target px-2 py-1 transition-colors relative overflow-hidden group";
  const activeClasses = "text-cargo-green after:scale-x-100";
  const inactiveClasses = "text-black hover:text-cargo-green";
  
  return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
};

/**
 * Generates CSS classes for the navigation underline effect
 */
export const getUnderlineClasses = (isActive: boolean): string => {
  const baseClasses = "absolute bottom-0 left-0 w-full h-0.5 bg-cargo-green transform transition-transform duration-300 origin-left";
  const activeScale = "scale-x-100";
  const inactiveScale = "scale-x-0 group-hover:scale-x-100";
  
  return `${baseClasses} ${isActive ? activeScale : inactiveScale}`;
};

/**
 * Generates CSS classes for mobile navigation links
 */
export const getMobileNavLinkClasses = (isActive: boolean): string => {
  const baseClasses = "font-medium tap-target p-3 transition-all duration-200";
  const activeClasses = "bg-cargo-lightGreen text-cargo-green rounded-md border-l-4 border-cargo-green";
  const inactiveClasses = "text-black hover:bg-cargo-lightGreen hover:rounded-md";
  
  return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
};
