import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import AppContainer from './AppContainer'
import VisibleVisitList from './visit/VisibleVisitList.js'
import LoginContainer from './auth/LoginContainer.js'
import RegisterContainer from './auth/RegisterContainer.js'
import { store } from './store'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/login" />
        <Route path="login" component={LoginContainer} />
        <Route path="register" component={RegisterContainer} />
        <Route path="visits" component={VisibleVisitList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
