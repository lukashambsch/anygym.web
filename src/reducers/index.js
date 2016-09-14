import { combineReducers } from 'redux'
import visits from './visits'
import visibilityFilter from './visibilityFilter'

const checkInApp = combineReducers({
  visits,
  visibilityFilter
})

export default checkInApp
