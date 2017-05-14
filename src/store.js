// @flow
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import reducer from './reducers';
import rootSaga from './sagas';

export const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
let middleware = [
  reduxRouterMiddleware,
  sagaMiddleware
];

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local') {
  const loggerMiddleware = createLogger();
  middleware.push(loggerMiddleware);
}

export const store = createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);
