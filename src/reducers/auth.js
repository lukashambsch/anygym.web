import axios from 'axios'
import Cookies from 'js-cookie'

import {
  SET_AUTH_SUCCESS,
  SET_AUTH_FAILURE,
  HANDLE_EMAIL_CHANGE,
  HANDLE_PASSWORD_CHANGE,
  REQUEST_TOKEN,
  CHECK_FOR_TOKEN
} from '../actions/auth'

const auth = (state = {
  isAuthenticating: false,
  authenticated: false,
  token: '',
  email: '',
  password: ''
}, action) => {
  switch (action.type) {
    case SET_AUTH_SUCCESS:
      let token = `Bearer ${action.token}`
      axios.defaults.headers.common['Authorization'] = token
      Cookies.set('jwtToken', token)

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
    case HANDLE_EMAIL_CHANGE:
      return Object.assign({}, state, {
        email: action.email
      })
    case HANDLE_PASSWORD_CHANGE:
      return Object.assign({}, state, {
        password: action.password
      })
    case REQUEST_TOKEN:
      return Object.assign({}, state, {
        isAuthenticating: true
      })
    case CHECK_FOR_TOKEN:
      if (action.token) {
        axios.defaults.headers.common['Authorization'] = action.token
      } else {
        delete axios.defaults.headers.common['Authorization']
      }

      return Object.assign({}, state, {
        isAuthenticating: false,
        authenticated: action.token ? true : false,
        token: action.token
      })
    default:
      return state
  }
}

export default auth
