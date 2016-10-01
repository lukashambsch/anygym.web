import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import visits from './visits'
import visibilityFilter from './visibilityFilter'
import statuses from './statuses'
import members from './members'

const checkInApp = combineReducers({
  auth,
  visits,
  visibilityFilter,
  statuses,
  members,
  routing: routerReducer
})

export default checkInApp
