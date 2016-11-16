import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import AppContainer from './AppContainer'
import VisibleVisitList from './visit/VisibleVisitList'
import LoginContainer from './auth/LoginContainer'
import RegisterContainer from './auth/RegisterContainer'
import { store } from './store'

const history = syncHistoryWithStore(browserHistory, store)

var router =
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/login" />
        <Route path="login" component={LoginContainer} />
        <Route path="register" component={RegisterContainer} />
        <Route path="visits" component={VisibleVisitList} />
      </Route>
    </Router>
  </Provider>

export default router
