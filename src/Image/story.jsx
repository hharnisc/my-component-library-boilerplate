import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from './index';

storiesOf('Image', module)
  .add('default', () => (
    <Image
      src={'http://via.placeholder.com/300x300'}
    />
  ))
  .add('height=5rem', () => (
    <Image
      src={'http://via.placeholder.com/300x300'}
      height={'5rem'}
    />
  ))
  .add('width=10rem', () => (
    <Image
      src={'http://via.placeholder.com/300x300'}
      width={'10rem'}
    />
  ))
  .add('height=5rem,width=10rem', () => (
    <Image
      src={'http://via.placeholder.com/300x300'}
      height={'5rem'}
      width={'10rem'}
    />
  ));
