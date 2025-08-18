
import { useLocation } from 'react-router-dom';

export const useNavigation = () => {
  // Add debugging
  console.log("useNavigation called, trying useLocation");
  
  try {
    const location = useLocation();
    console.log("useLocation successful:", !!location);
    
    const isActive = (path: string) => {
      if (path === '/') {
        return location.pathname === '/';
      }
      return location.pathname.startsWith(path);
    };

    return {
      location,
      isActive
    };
  } catch (error) {
    console.error("useNavigation failed:", error);
    throw error;
  }
};
