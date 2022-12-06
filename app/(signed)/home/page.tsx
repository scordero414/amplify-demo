'use client';

import { Text, useTheme } from '@aws-amplify/ui-react';

export default function Page() {
  const { tokens } = useTheme();

  return <Text color={tokens.colors.font.secondary}>Hello, Home!</Text>;
}
