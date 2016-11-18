import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import Cookies from 'js-cookie'

import AppContainer from './AppContainer'
import GymHeaderContainer from './gym/HeaderContainer'
import LocationListContainer from './location/LocationListContainer'
import LoginContainer from './auth/LoginContainer'
import MemberHeaderContainer from './member/HeaderContainer'
import RegisterContainer from './auth/RegisterContainer'
import VisibleVisitList from './visit/VisibleVisitList'
import { store } from './store'
import config from './config'

const history = syncHistoryWithStore(browserHistory, store)

var router =
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/login" />
        <Route path="login" component={LoginContainer} />
        <Route path="register" component={RegisterContainer} />
        <Route path="/" component={GymHeaderContainer} onEnter={requireAuth}>
          <Route path="visits" component={VisibleVisitList} />
        </Route>
        <Route path="/" component={MemberHeaderContainer} onEnter={requireAuth}>
          <Route path="locations" component={LocationListContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>

function requireAuth(nextState, replace) {
  let token = Cookies.get(config.tokenKey)

  if (!token) {
    replace({
      pathname: 'login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default router
