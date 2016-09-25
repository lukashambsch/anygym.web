import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import VisibleVisitList from './containers/VisibleVisitList.js'
import LoginContainer from './containers/LoginContainer.js'
import { fetchVisits } from './actions/visits'
import { fetchStatuses } from './actions/statuses'
import { fetchMembers } from './actions/members'
import { getToken } from './actions/auth'

const loggerMiddleware = createLogger()

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
))

const routes = <Route path="/" component={App}>
  <Route path="login" component={LoginContainer} />
  <Route path="visits" component={VisibleVisitList} />
</Route>

store.dispatch(getToken())
setTimeout(() => {
  store.dispatch(fetchVisits())
  store.dispatch(fetchStatuses())
  store.dispatch(fetchMembers())
}, 500)

render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
)
