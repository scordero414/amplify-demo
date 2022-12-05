import { Button } from '@aws-amplify/ui-react';
import { ReactNode } from 'react';

export default function CancelButton(props: { children: ReactNode }) {
  return (
    <Button
      style={{
        backgroundColor: 'red',
        color: 'white',
      }}
    >
      {props.children}
    </Button>
  );
}
