import { ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import type { AppProps } from 'next/app';
import '../global.css';
import { theme } from '../theme/customTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} colorMode="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
