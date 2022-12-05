import {
  Grid,
  View,
  useTheme,
  Text,
  FileUploader,
  ThemeProvider,
  Theme,
} from '@aws-amplify/ui-react';
import MyForm from '../components/form/MyForm';
import { createUseStyles } from 'react-jss';
// import styled from 'styled-components';

// const StyledView = styled(View)`
//   background-color: rgba(255, 255, 255);
//   padding: 10px;

// `;

const GridResponsiveExample = () => {
  const { tokens } = useTheme();

  // const useStyles = createUseStyles({
  //   styledText: {
  //     backgroundColor: 'blue',
  //   },
  // });
  
  // const classes = useStyles();

  return (
    <Grid
      templateColumns={{ base: '1fr', large: 'repeat(2, 1fr)' }}
      // templateRows={{ base: "0.5fr 1fr 1fr 1fr", large: "repeat(4, 1fr)" }}
      // height='100vh'
      gap={10}
    >
      <View
        columnSpan={{ base: 1, large: 2 }}
        backgroundColor={tokens.colors.brand.primary[90]}
      >
        Header
      </View>
      <View
        rowSpan={{ base: 1, large: 3 }}
        backgroundColor={tokens.colors.brand.primary[60]}
      >
        Nav
        <FileUploader acceptedFileTypes={['image/*']} accessLevel="public" />
      </View>
      <View
        backgroundColor={tokens.colors.brand.secondary[10]}
        rowSpan={{ base: 1, large: 2 }}
      >
        <MyForm onSubmit={(fields: any) => console.log(fields)} />
      </View>
      <View backgroundColor={tokens.colors.brand.primary[40]}>Footer</View>
    </Grid>
  );
};

export default GridResponsiveExample;
