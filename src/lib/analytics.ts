// Analytics utility functions for tracking events

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

// Track a custom event
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

// Track download button click
export const trackDownload = (fileName: string, source: string) => {
  trackEvent("download_click", {
    file_name: fileName,
    download_source: source,
    timestamp: new Date().toISOString(),
  });
};

// Track page view (automatic with GA, but useful for SPA navigation)
export const trackPageView = (pagePath: string, pageTitle: string) => {
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle,
  });
};

// Track download completion (when user actually starts download)
export const trackDownloadStart = (fileName: string) => {
  trackEvent("download_start", {
    file_name: fileName,
    timestamp: new Date().toISOString(),
  });
};
