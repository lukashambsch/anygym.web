import axios from 'axios'

import {
  SET_AUTH_SUCCESS,
  SET_AUTH_FAILURE,
  HANDLE_USERNAME_CHANGE,
  HANDLE_PASSWORD_CHANGE,
  REQUEST_TOKEN
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
        isAuthenticating: false,
        authenticated: true,
        token: token
      })
    case SET_AUTH_FAILURE:
      axios.defaults.headers.common['Authorization'] = ""

      return Object.assign({}, state, {
        isAuthenticating: false,
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
    case REQUEST_TOKEN:
      return Object.assign({}, state, {
        isAuthenticating: true
      })
    default:
      return state
  }
}

export default auth
