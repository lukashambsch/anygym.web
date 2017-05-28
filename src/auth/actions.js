// @flow
import axios from 'axios';
import Cookies from 'js-cookie';
import { push } from 'react-router-redux';

import config from '../config';
import type { User } from './types';

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
export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function authenticateSuccess(token: string) {
  let authHeader: string = `Bearer ${token}`;
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

export function authenticateFailure(err: Error) {
  delete axios.defaults.headers.common['Authorization'];

  return {
    type: SET_AUTH_FAILURE,
    error: err
  };
}

export function handleEmailChange(event: SyntheticInputEvent) {
  return {
    type: HANDLE_EMAIL_CHANGE,
    email: event.target.value
  };
}

export function handlePasswordChange(event: SyntheticInputEvent) {
  return {
    type: HANDLE_PASSWORD_CHANGE,
    password: event.target.value
  };
}

export function handlePasswordConfirmChange(event: SyntheticInputEvent) {
  return {
    type: HANDLE_PASSWORD_CONFIRM_CHANGE,
    passwordConfirm: event.target.value
  };
}

export function requestToken(user: User) {
  Cookies.set(config.emailCookieKey, user.email);

  return {
    type: REQUEST_TOKEN,
    user: user
  };
}

export function requestRegister(user: User) {
  return {
    type: REQUEST_REGISTER,
    user: user
  };
}

export function requestUser(email: string) {
  return {
    type: REQUEST_USER,
    email: email
  };
}

export function receiveUser(json: User) {
  return {
    type: RECEIVE_USER,
    user: json
  };
}

export function logoutUser() {
  Cookies.remove(config.tokenKey);
  delete axios.defaults.headers.common['Authorization'];

  return {
    type: LOGOUT_USER
  };
}

export function checkForToken() {
  let token: string = Cookies.get(config.tokenKey);

  if (token) {
    let authHeader: string = `Bearer ${token}`;
    axios.defaults.headers.common['Authorization'] = authHeader;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }

  return {
    type: CHECK_FOR_TOKEN,
    token: token,
    authenticated: token ? true : false,
    email: Cookies.get(config.emailCookieKey)
  };
}

export function verifyToken() {
  return function(dispatch: Function) {
    let token: string = Cookies.get(config.tokenKey);

    if (token) {
      dispatch(authenticateSuccess(token));
    } else {
      dispatch(authenticateFailure(Error('No token present')));
      dispatch(push('/login'));
    }
  }
}

export function login(email: string, password: string) {
  return requestToken({email: email, password: password});
}

export function register(user: User) {
  return requestRegister(user);
}
