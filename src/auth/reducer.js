import {
  SET_AUTH_SUCCESS,
  SET_AUTH_FAILURE,
  HANDLE_EMAIL_CHANGE,
  HANDLE_PASSWORD_CHANGE,
  HANDLE_PASSWORD_CONFIRM_CHANGE,
  REQUEST_TOKEN,
  CHECK_FOR_TOKEN,
  REQUEST_REGISTER,
  REGISTER_SUCCESS
} from './actions';

const auth = (state = {
  isAuthenticating: false,
  isRegistering: true,
  authenticated: false,
  token: '',
  email: '',
  password: '',
  passwordConfirm: '',
  userId: 1
}, action) => {
  switch (action.type) {
    case SET_AUTH_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticating: false,
        authenticated: true,
        token: action.token,
        email: '',
        password: ''
      });
    case SET_AUTH_FAILURE:
      return Object.assign({}, state, {
        isAuthenticating: false,
        authenticated: false,
        token: '',
        email: '',
        password: ''
      });
    case HANDLE_EMAIL_CHANGE:
      return Object.assign({}, state, {
        email: action.email
      });
    case HANDLE_PASSWORD_CHANGE:
      return Object.assign({}, state, {
        password: action.password
      });
    case HANDLE_PASSWORD_CONFIRM_CHANGE:
      return Object.assign({}, state, {
        passwordConfirm: action.passwordConfirm
      });
    case REQUEST_TOKEN:
      return Object.assign({}, state, {
        isAuthenticating: true
      });
    case CHECK_FOR_TOKEN:
      return Object.assign({}, state, {
        isAuthenticating: false,
        authenticated: action.authenticated,
        token: action.token
      });
    case REQUEST_REGISTER:
      return Object.assign({}, state, {
        isRegistering: true
      });
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isRegistering: false,
        email: '',
        password: '',
        passwordConfirm: ''
      });
    default:
      return state;
  }
}

export default auth;
