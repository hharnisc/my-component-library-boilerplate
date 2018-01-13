import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './index';

storiesOf('Link', module)
  .add('default', () => (
    <Link
      href={'https://www.google.com/search?q=monorepo'}
    >
      Google Search - Monorepo
    </Link>
  ))
  .add('unstyled', () => (
    <Link
      href={'https://www.google.com/search?q=css'}
      unstyled
    >
      (unstyled) Google Search - CSS
    </Link>
  ));
