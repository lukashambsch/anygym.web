import axios from 'axios'
import Cookies from 'js-cookie'
import { push } from 'react-router-redux'

export const GET_TOKEN = 'GET_TOKEN'
export const SET_AUTH_SUCCESS = 'SET_AUTH_SUCCESS'
export const SET_AUTH_FAILURE = 'SET_AUTH_FAILURE'
export const HANDLE_EMAIL_CHANGE = 'HANDLE_EMAIL_CHANGE'
export const HANDLE_PASSWORD_CHANGE = 'HANDLE_PASSWORD_CHANGE'
export const REQUEST_TOKEN = 'REQUEST_TOKEN'
export const CHECK_FOR_TOKEN = 'CHECK_FOR_TOKEN'

export const authenticateSuccess = (token) => {
  return {
    type: SET_AUTH_SUCCESS,
    token: token
  }
}

export const authenticateFailure = (token) => {
  return {
    type: SET_AUTH_FAILURE,
    token: token
  }
}

export const handleEmailChange = (event) => {
  return {
    type: HANDLE_EMAIL_CHANGE,
    email: event.target.value
  }
}

export const handlePasswordChange = (event) => {
  return {
    type: HANDLE_PASSWORD_CHANGE,
    password: event.target.value
  }
}

export const requestToken = () => {
  return {
    type: REQUEST_TOKEN
  }
}

export function login (email, password) {
  return function(dispatch) {
    dispatch(getToken({email: email, password: password}))
  }
}

export function getToken(user) {
  return function(dispatch) {
    dispatch(requestToken())

    return axios.post('http://localhost:8080/api/v1/authenticate', user)
      .then(response => {
        dispatch(authenticateSuccess(response.data))
        dispatch(push('/visits'))
      })
      .catch(err =>
        console.log(err)
      )
  }
}

export const checkForToken = () => {
  return {
    type: CHECK_FOR_TOKEN,
    token: Cookies.get('jwtToken')
  }
}
