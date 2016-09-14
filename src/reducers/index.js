import { combineReducers } from 'redux'
import visits from './visits'
import visibilityFilter from './visibilityFilter'
import statuses from './statuses'
import members from './members'

const checkInApp = combineReducers({
  visits,
  visibilityFilter,
  statuses,
  members
})

export default checkInApp
