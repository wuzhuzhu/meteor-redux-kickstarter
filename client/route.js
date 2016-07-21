import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import { store, history } from '../imports/redux/initStore'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import defaultTheme from '../imports/modules/layout/styles/theme'

// Container/Components
import MainLayout from '../imports/modules/layout/components/MainLayout.jsx'
import HelloWorld from '../imports/modules/layout/components/HelloWorld.jsx'


const muiTheme = getMuiTheme(defaultTheme)
const App = ({}) => (
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Route path="/" component={MainLayout}>
          <Route path="hello" component={HelloWorld}/>
        </Route>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default App;