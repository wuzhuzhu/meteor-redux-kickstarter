import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import { store, history } from '../imports/redux/initStore'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import defaultTheme from '../imports/modules/layout/styles/theme'

// Container/Components
import MainLayout from '../imports/modules/layout/components/MainLayout.jsx'
import HelloWorld from '../imports/modules/layout/components/HelloWorld.jsx'


const routes =
  <Route component={MainLayout}>
    <Route path="/" component={HelloWorld} />
  </Route>

const muiTheme = getMuiTheme(baseTheme)
const App = ({}) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router routes={routes} history={history} />
    </MuiThemeProvider>
  </Provider>
);

export default App;