import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
// import HelloWorld from './HelloWorld.js';

const HelloWorld = () => (
  <div>
    <p>HelloWorld</p>
  </div>
)

Meteor.startup(() => {
  render(<HelloWorld />, document.getElementById('mount'));
});
