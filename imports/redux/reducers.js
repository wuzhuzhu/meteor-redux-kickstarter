import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import LayoutReducersObj from '../modules/layout/reducers';

export default combineReducers({
  // reducers from modules
  ...LayoutReducersObj,

  // For React-Router-Redux
  routing: routerReducer,
})