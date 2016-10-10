import axios from 'axios'

import {
  SET_AUTH_SUCCESS,
  SET_AUTH_FAILURE,
  HANDLE_USERNAME_CHANGE,
  HANDLE_PASSWORD_CHANGE
} from '../actions/auth'

const auth = (state = {
  isAuthenticating: false,
  authenticated: false,
  token: '',
  username: '',
  password: ''
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
    case HANDLE_USERNAME_CHANGE:
      return Object.assign({}, state, {
        username: action.username
      })
    case HANDLE_PASSWORD_CHANGE:
      return Object.assign({}, state, {
        password: action.password
      })
    default:
      return state
  }
}

export default auth
