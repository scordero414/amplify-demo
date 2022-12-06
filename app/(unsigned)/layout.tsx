'use client';

import { Card, Flex, useTheme } from '@aws-amplify/ui-react';
import { Header } from '../(components)/Header';

export default function UnsignedLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { tokens } = useTheme();

  return (
    <>
      <Header />
      <Flex display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Card
          height={500}
          backgroundColor={tokens.colors.background.secondary}
          borderRadius={16}
        >
          <Flex
            display="flex"
            textAlign="center"
            justifyContent={'center'}
            alignItems={'center'}
            height={'100%'}
            width={500}
          >
            {children}
          </Flex>
        </Card>
      </Flex>
    </>
  );
}
