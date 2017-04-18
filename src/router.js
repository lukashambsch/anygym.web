import React from 'react'
import { Router, Route, Redirect } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import Cookies from 'js-cookie'

import AppContainer from './AppContainer'
import GymHeaderContainer from './gym/HeaderContainer'
import LocationListContainer from './location/LocationListContainer'
import LoginContainer from './auth/LoginContainer'
import MemberHeaderContainer from './member/HeaderContainer'
import RegisterContainer from './auth/RegisterContainer'
import VisibleVisitList from './visit/VisibleVisitList'
import { store, history } from './store'
import config from './config'

var router =
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer>
        <Route exact path="/" render={() => (
          <Redirect to="/login" />
        )}/>
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <GymHeaderContainer onEnter={requireAuth}>
          <Route path="/visits" component={VisibleVisitList} />
        </GymHeaderContainer>
        <MemberHeaderContainer onEnter={requireAuth}>
          <Route path="/locations" component={LocationListContainer} />
        </MemberHeaderContainer>
      </AppContainer>
    </ConnectedRouter>
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
