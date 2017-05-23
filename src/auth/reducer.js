// @flow
import {
  SET_AUTH_SUCCESS,
  SET_AUTH_FAILURE,
  HANDLE_EMAIL_CHANGE,
  HANDLE_PASSWORD_CHANGE,
  HANDLE_PASSWORD_CONFIRM_CHANGE,
  REQUEST_TOKEN,
  CHECK_FOR_TOKEN,
  REQUEST_REGISTER,
  REGISTER_SUCCESS,
  RECEIVE_USER
} from './actions';
import type { User } from './types';

type State = {
  isAuthenticating: boolean;
  isRegistering: boolean;
  authenticated: boolean;
  token: string;
  passwordConfirm: string;
  user: User;
};

export const initialState: State = {
  isAuthenticating: false,
  isRegistering: true,
  authenticated: false,
  token: '',
  passwordConfirm: '',
  user: {
    user_id: 0,
    email: '',
    password: ''
  }
};

function auth (state: State = initialState, action: Object) {
  let user: User;

  switch (action.type) {
    case SET_AUTH_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticating: false,
        authenticated: true,
        token: action.token,
      });
    case SET_AUTH_FAILURE:
      user = Object.assign({}, state.user, {
        password: ''
      });

      return Object.assign({}, state, {
        isAuthenticating: false,
        authenticated: false,
        token: '',
        user: user
      });
    case HANDLE_EMAIL_CHANGE:
      user = Object.assign({}, state.user, {
        email: action.email
      });

      return Object.assign({}, state, {
        user: user
      });
    case HANDLE_PASSWORD_CHANGE:
      user = Object.assign({}, state.user, {
        password: action.password
      });

      return Object.assign({}, state, {
        user: user
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
        passwordConfirm: ''
      });
    case RECEIVE_USER:
      return Object.assign({}, state, {
        user: action.user
      });
    default:
      return state;
  }
}

export default auth;
