import { createTheme, defaultDarkModeOverride } from '@aws-amplify/ui-react';

const baseTheme = createTheme({
  name: 'my-base-theme',
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
