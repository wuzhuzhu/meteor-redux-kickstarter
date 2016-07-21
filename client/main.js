import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
// import HelloWorld from './HelloWorld.js';

import injectTapEventPlugin from 'react-tap-event-plugin'

const HelloWorld = () => (
  <div>
    <p>HelloWorld</p>
  </div>
)

Meteor.startup(() => {
  // When app startup, we should addEventListener to do somethings.
  injectTapEventPlugin();


  render(<HelloWorld />, document.getElementById('mount'));
});
