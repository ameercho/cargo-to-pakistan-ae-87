/**
 * Safe navigation without React Router hooks
 * Uses native browser location instead of React Router
 */
export const useSafeNavigation = () => {
  const getLocation = () => {
    try {
      return {
        pathname: window?.location?.pathname || '/'
      };
    } catch (error) {
      return {
        pathname: '/'
      };
    }
  };

  const isActive = (path: string) => {
    try {
      const location = getLocation();
      if (path === '/') {
        return location.pathname === '/';
      }
      return location.pathname.startsWith(path);
    } catch (error) {
      return false;
    }
  };

  return {
    location: getLocation(),
    isActive
  };
};