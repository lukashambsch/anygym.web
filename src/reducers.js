import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import auth from './auth/reducer'
import visits from './visit/reducer'
import visibilityFilter from './visit/visibilityFilterReducer'
import statuses from './status/reducer'
import members from './member/reducer'
import locations from './location/reducer'

const reducers = combineReducers({
  auth,
  visits,
  visibilityFilter,
  statuses,
  members,
  locations,
  router: routerReducer
})

export default reducers
