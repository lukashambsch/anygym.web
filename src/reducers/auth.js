import axios from 'axios'

import { SET_AUTH_SUCCESS, SET_AUTH_FAILURE } from '../actions/auth'

const auth = (state = {
  authenticated: false,
  token: ''
}, action) => {
  switch (action.type) {
    case SET_AUTH_SUCCESS:
      let token = `Bearer ${action.token}`
      axios.defaults.headers.common['Authorization'] = token

      return Object.assign({}, state, {
        authenticated: true,
        token: token
      })
    case SET_AUTH_FAILURE:
      axios.defaults.headers.common['Authorization'] = ""

      return Object.assign({}, state, {
        authenticated: false,
        token: ""
      })
    default:
      return state
  }
}

export default auth
