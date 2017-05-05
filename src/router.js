// flow
import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import Cookies from 'js-cookie';

import AppContainer from './AppContainer';
import { store, history } from './store';
import config from './config';

var router =
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer>
      </AppContainer>
    </ConnectedRouter>
  </Provider>;

export function requireAuth(nextState, replace) {
  let token = Cookies.get(config.tokenKey);

  if (!token) {
    replace({
      pathname: 'login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

export default router;
