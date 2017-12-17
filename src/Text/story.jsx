import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './index';

storiesOf('Text', module)
  .add('default', () => (
    <Text>oh hey!</Text>
  ))
  .add('size=3', () => (
    <Text
      size={3}
    >
      Rems = 3 = huge
    </Text>
  ))
  .add('size=0.5', () => (
    <Text
      size={0.5}
    >
      Rems = 0.5 = small
    </Text>
  ));
