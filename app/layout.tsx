'use client';

import { ReactNode } from 'react';
import { Header } from './(components)/Header';
import localFont from '@next/font/local';
import { ThemeProvider, useTheme, View } from '@aws-amplify/ui-react';
import { theme } from '../theme/customTheme';
import './global.css';

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: [
    {
      path: '../public/fonts/AvenirNextLTPro-Bold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvenirNextLTPro-Regular.otf',
      weight: '200',
      style: 'normal',
    },
  ],
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { tokens } = useTheme();

  return (
    <html
      lang="en"
      className={myFont.className}
      // style={{ margin: 0, height: '100%' }}
    >
      <head />
      <body
      // style={{
      //   margin: 0,
      //   height: '100%',
      //   '> *': {
      //     height: '100%',
      //   },
      // }}
      >
        <ThemeProvider theme={theme} colorMode="system">
          <View
            className="layoutDiv"
            backgroundColor={tokens.colors.background.primary}
          >
            {children}
          </View>
        </ThemeProvider>
      </body>
    </html>
  );
}
