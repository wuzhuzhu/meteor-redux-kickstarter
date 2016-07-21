// TODO: remove it later.
// just for example.

import React from 'react';
import HelloWorld from '../HelloWorld.jsx';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('HelloWorld', module)
  .add('Default', () => {
    return <HelloWorld/>
  })
  .add('A Different World', () => {
    return <HelloWorld/>
  })
