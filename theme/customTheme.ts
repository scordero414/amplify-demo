import { createTheme, defaultDarkModeOverride } from "@aws-amplify/ui-react";

export const theme = createTheme({
  name: "my-theme",
  tokens: {
    fonts: {
      default: {
        variable:
          "'ZenDots', 'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif",
      },
    },
  },
  overrides: [defaultDarkModeOverride],
});
