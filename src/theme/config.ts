import { createCss } from "@stitches/react";

export const { styled, getCssString } = createCss({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      hiContrast: "hsl(105,60%,55%)",
      loContrast: "white",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
      3: "17px",
    },
  },
});
