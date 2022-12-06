import { createTheme, defaultDarkModeOverride } from '@aws-amplify/ui-react';

const baseTheme = createTheme({
  name: 'my-base-theme',
  tokens: {
    fonts: {
      default: {
        variable:
          "'AvenirBold', 'AvenirRegular', 'ZenDots', 'Nunito Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif",
      },
    },
  },
  overrides: [defaultDarkModeOverride],
});

export const theme = createTheme(
  {
    name: 'my-theme',
    tokens: {
      components: {
        fileuploader: {
          ...baseTheme.tokens.components.fileuploader,
          dropzone: {
            ...baseTheme.tokens.components.fileuploader.dropzone,
            backgroundColor: baseTheme.tokens.colors.background.tertiary,
          },
        },
      },
    },
  },
  baseTheme
);
