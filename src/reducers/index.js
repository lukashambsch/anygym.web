import { combineReducers } from 'redux'
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
  members
})

export default checkInApp
