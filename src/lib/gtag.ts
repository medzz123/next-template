export const GA_TRACKING_ID = "G-ABCDEF";

export const pageView = (url: string) => {
  // @ts-ignore
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
