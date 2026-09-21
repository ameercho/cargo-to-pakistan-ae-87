/**
 * SEO Cleanup Utilities
 * Prevents duplicate meta tags and manages SEO conflicts
 */

export const cleanupDuplicateMetas = () => {
  if (typeof window === 'undefined') return;

  // Remove duplicate description tags
  const descriptions = document.querySelectorAll('meta[name="description"]');
  if (descriptions.length > 1) {
    // Keep the first one, remove the rest
    for (let i = 1; i < descriptions.length; i++) {
      descriptions[i].remove();
    }
  }

  // Remove duplicate keywords tags
  const keywords = document.querySelectorAll('meta[name="keywords"]');
  if (keywords.length > 1) {
    for (let i = 1; i < keywords.length; i++) {
      keywords[i].remove();
    }
  }

  // Remove duplicate Open Graph tags
  const ogTags = ['og:title', 'og:description', 'og:image', 'og:url'];
  ogTags.forEach(tag => {
    const elements = document.querySelectorAll(`meta[property="${tag}"]`);
    if (elements.length > 1) {
      for (let i = 1; i < elements.length; i++) {
        elements[i].remove();
      }
    }
  });

  // Remove duplicate canonical links
  const canonicals = document.querySelectorAll('link[rel="canonical"]');
  if (canonicals.length > 1) {
    for (let i = 1; i < canonicals.length; i++) {
      canonicals[i].remove();
    }
  }
};

export const hasSEOConflicts = (): boolean => {
  if (typeof window === 'undefined') return false;

  const descriptions = document.querySelectorAll('meta[name="description"]').length;
  const keywords = document.querySelectorAll('meta[name="keywords"]').length;
  const canonicals = document.querySelectorAll('link[rel="canonical"]').length;

  return descriptions > 1 || keywords > 1 || canonicals > 1;
};

// Initialize cleanup on page load
if (typeof window !== 'undefined') {
  // Clean up on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cleanupDuplicateMetas);
  } else {
    cleanupDuplicateMetas();
  }
  
  // Clean up on route changes (for SPAs)
  let lastPath = window.location.pathname;
  const checkForRouteChange = () => {
    if (window.location.pathname !== lastPath) {
      lastPath = window.location.pathname;
      setTimeout(cleanupDuplicateMetas, 100); // Small delay to let React render
    }
  };
  
  // Listen for navigation events
  window.addEventListener('popstate', checkForRouteChange);
  
  // Monitor for programmatic navigation
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;
  
  history.pushState = function(...args) {
    originalPushState.apply(history, args);
    setTimeout(checkForRouteChange, 100);
  };
  
  history.replaceState = function(...args) {
    originalReplaceState.apply(history, args);
    setTimeout(checkForRouteChange, 100);
  };
}
