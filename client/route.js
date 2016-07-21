import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import { store, history } from '../imports/redux/initStore'

// Container/Components
import MainLayout from '../imports/modules/layout/components/MainLayout.jsx'
import HelloWorld from '../imports/modules/layout/components/HelloWorld.jsx'

const Router = ({}) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainLayout}>
        <Route path="hello" component={HelloWorld}/>
      </Route>
    </Router>
  </Provider>
)