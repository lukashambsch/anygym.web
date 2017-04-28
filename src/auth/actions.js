import axios from 'axios';
import Cookies from 'js-cookie';
import { push } from 'react-router-redux';

import config from '../config';

export const GET_TOKEN = 'GET_TOKEN';
export const SET_AUTH_SUCCESS = 'SET_AUTH_SUCCESS';
export const SET_AUTH_FAILURE = 'SET_AUTH_FAILURE';
export const HANDLE_EMAIL_CHANGE = 'HANDLE_EMAIL_CHANGE';
export const HANDLE_PASSWORD_CHANGE = 'HANDLE_PASSWORD_CHANGE';
export const HANDLE_PASSWORD_CONFIRM_CHANGE = 'HANDLE_PASSWORD_CONFIRM_CHANGE';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const CHECK_FOR_TOKEN = 'CHECK_FOR_TOKEN';
export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export function authenticateSuccess(token) {
  let authHeader = `Bearer ${token}`;
  axios.defaults.headers.common['Authorization'] = authHeader;
  Cookies.set(config.tokenKey, token);

  return {
    type: SET_AUTH_SUCCESS,
    token: token
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS
  };
}

export function authenticateFailure(err) {
  delete axios.defaults.headers.common['Authorization'];

  return {
    type: SET_AUTH_FAILURE,
    error: err
  };
}

export function handleEmailChange(event) {
  return {
    type: HANDLE_EMAIL_CHANGE,
    email: event.target.value
  };
}

export function handlePasswordChange(event) {
  return {
    type: HANDLE_PASSWORD_CHANGE,
    password: event.target.value
  };
}

export function handlePasswordConfirmChange(event) {
  return {
    type: HANDLE_PASSWORD_CONFIRM_CHANGE,
    passwordConfirm: event.target.value
  };
}

export function requestToken(user) {
  return {
    type: REQUEST_TOKEN,
    user: user
  };
}

export function requestRegister(user) {
  return {
    type: REQUEST_REGISTER,
    user: user
  };
}

export function checkForToken() {
  let token = Cookies.get(config.tokenKey);

  if (token) {
    let authHeader = `Bearer ${token}`
    axios.defaults.headers.common['Authorization'] = authHeader;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }

  return {
    type: CHECK_FOR_TOKEN,
    token: token,
    authenticated: token ? true : false
  };
}

export function verifyToken() {
  return function(dispatch) {
    let token = Cookies.get(config.tokenKey);

    if (token) {
      dispatch(authenticateSuccess(token));
    } else {
      dispatch(authenticateFailure('No token present'));
      dispatch(push('/login'));
    }
  }
}

export function login(email, password) {
  return requestToken({email: email, password: password});
}

export function register(user) {
  return requestRegister(user);
}
