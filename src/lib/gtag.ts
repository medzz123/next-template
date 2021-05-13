export const GA_TRACKING_ID = 'G-ABCDEF';

export const pageView = (url: string) => {
  // @ts-expect-error
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
