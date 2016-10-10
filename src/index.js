import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import App from './components/App'
import VisibleVisitList from './containers/VisibleVisitList.js'
import LoginContainer from './containers/LoginContainer.js'
import { store } from './store'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/login" />
        <Route path="login" component={LoginContainer} />
        <Route path="visits" component={VisibleVisitList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
