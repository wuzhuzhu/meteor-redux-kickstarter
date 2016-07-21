// TODO: remove it later.
// just for example.

import React from 'react';
import HelloWorld from '../HelloWorld.jsx';
import { storiesOf, action } from '@kadira/storybook';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

storiesOf('HelloWorld', module)
  .addDecorator(story => {
    return <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        {story()}
    </MuiThemeProvider>
  })
  .add('Default', () => {
    return <HelloWorld/>
  })
  .add('A Different World', () => {
    return <HelloWorld/>
  })
