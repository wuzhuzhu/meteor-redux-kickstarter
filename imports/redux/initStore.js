import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { createStore, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware  } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Collections from '../common/collections';

const routerMiddlewareInst = routerMiddleware(browserHistory)
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ Meteor, Tracker, Collections }), routerMiddlewareInst),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)

export { store, history }
