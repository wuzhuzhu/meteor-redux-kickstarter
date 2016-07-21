import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { disable } from 'react-komposer';

setTimeout( () => {
  // require('bootstrap/dist/css/bootstrap.css');
  // require('inspinia');
}, 0)

//import 'inspinia'

disable();

function loadStories() {
  require('../imports/modules/layout/components/.stories');
}

setAddon(infoAddon);

configure(loadStories, module);
