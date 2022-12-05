import { Grid, View, useTheme, Text } from "@aws-amplify/ui-react";
import MyForm from "../components/form/MyForm";

const GridResponsiveExample = () => {
  const { tokens } = useTheme();
  return (
    <Grid
      templateColumns={{ base: "1fr", large: "repeat(2, 1fr)" }}
      // templateRows={{ base: "0.5fr 1fr 1fr 1fr", large: "repeat(4, 1fr)" }}
      height='100vh'
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
