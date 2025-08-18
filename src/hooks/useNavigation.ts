
/**
 * Simplified navigation hook without React Router dependencies
 * Provides safe fallbacks during React initialization issues
 */
export const useNavigation = () => {
  // Fallback location object
  const location = {
    pathname: window?.location?.pathname || '/'
  };

  const isActive = (path: string) => {
    try {
      if (path === '/') {
        return location.pathname === '/';
      }
      return location.pathname.startsWith(path);
    } catch (error) {
      return false;
    }
  };

  return {
    location,
    isActive
  };
};
