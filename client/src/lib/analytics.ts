/**
 * Loads Umami analytics script dynamically if environment variables are configured.
 * Prevents any network requests or console errors when analytics is not configured.
 */
export function initAnalytics() {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

  // Silently skip if analytics not configured (normal for local dev)
  if (!endpoint || !websiteId) {
    return;
  }

  try {
    const script = document.createElement('script');
    script.defer = true;
    script.src = `${endpoint}/umami`;
    script.setAttribute('data-website-id', websiteId);

    // Add error handler to prevent unhandled errors
    script.onerror = () => {
      console.warn('Failed to load analytics script');
    };

    document.head.appendChild(script);
  } catch (error) {
    console.warn('Analytics initialization failed:', error);
  }
}
