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
        backgroundColor={tokens.colors.background.primary}
        // templateRows={{ base: "0.5fr 1fr 1fr 1fr", large: "repeat(4, 1fr)" }}
        // height='100vh'
      // gap={10}
    >
      <View
        columnSpan={{ base: 1, large: 2 }}
        backgroundColor={tokens.colors.background.primary}
      >
        <Text fontFamily='Nunito Sans' fontSize={48} paddingLeft={50} paddingBottom={30} paddingTop={30}>Fullstack Solvers</Text>
      </View>
      <View
        rowSpan={{ base: 1, large: 3 }}
        backgroundColor={tokens.colors.background.primary}
        style={{paddingRight: '20px', paddingLeft: '20px', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}
      >
        <FileUploader acceptedFileTypes={['image/*']} accessLevel="public" />
      </View>
      <View
        backgroundColor={tokens.colors.background.secondary}
        rowSpan={{ base: 1, large: 2 }}
        style={{ marginRight: '20px'}}
      >
        <MyForm onSubmit={(fields: any) => console.log(fields)} />
      </View>
      <View backgroundColor={tokens.colors.background.primary}>Footer</View>
    </Grid>
  );
};

export default GridResponsiveExample;
