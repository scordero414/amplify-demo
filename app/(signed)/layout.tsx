'use client';

import {
  FileUploader,
  Grid,
  TabItem,
  Tabs,
  Text,
  useTheme,
  View,
} from '@aws-amplify/ui-react';
import { Header } from '../(components)/Header';

const CustomText = (props: { children: React.ReactNode }) => {
  const { tokens } = useTheme();
  return (
    <Text color={tokens.colors.font.secondary} marginTop={24} marginBottom={24}>
      {props.children}
    </Text>
  );
};

export default function SignedLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { tokens } = useTheme();

  return (
    <>
      <Header isSigned />
      <Grid
        display="grid"
        templateColumns={{ base: '1fr', large: '1fr 3fr' }}
        height={'85%'}
      >
        <View
          backgroundColor={tokens.colors.background.secondary}
          paddingBottom={40}
          paddingTop={40}
          paddingLeft={10}
        >
          <CustomText>Fullstack Solvers</CustomText>
          <CustomText>Fullstack Solvers</CustomText>
          <CustomText>Fullstack Solvers</CustomText>
          <CustomText>Fullstack Solvers</CustomText>
        </View>
        <View
          style={{
            paddingRight: '20px',
            paddingLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {children}
        </View>
      </Grid>
    </>
  );
}
