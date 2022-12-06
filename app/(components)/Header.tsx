'use client';

import { Flex, Text, useTheme, View } from '@aws-amplify/ui-react';
import { Nunito_Sans } from '@next/font/google';
import React from 'react';

// If loading a variable font, you don't need to specify the font weight
const nunitoSans = Nunito_Sans({ weight: '900', subsets: ['latin'] });

interface HeaderProps {
  isSigned?: boolean;
}

export const Header = ({ isSigned = false }: HeaderProps) => {
  const { tokens } = useTheme();

  return (
    <Flex
      display={'flex'}
      height="15%"
      alignItems={'center'}
      justifyContent={isSigned ? 'center' : 'flex-start'}
      paddingLeft={40}
      paddingRight={40}
    >
      <View className={nunitoSans.className}>
        <Text
          color={tokens.colors.font.secondary}
          fontSize={48}
          paddingBottom={30}
          paddingTop={30}
          margin={0}
        >
          Fullstack Solvers
        </Text>
      </View>
    </Flex>
  );
};
