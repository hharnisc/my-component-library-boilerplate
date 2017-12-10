import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../index';

storiesOf('Text')
  .add('default', () => (
    <Text>oh hey!</Text>
  ));
