import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './route'

Meteor.startup(() => {
  // When app startup, we should addEventListener to do somethings.
  injectTapEventPlugin();


  render(<App />, document.getElementById('mount'));
});
