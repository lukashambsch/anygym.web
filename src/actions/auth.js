import axios from 'axios';
import { push } from 'react-router-redux'
import { store } from '../store'
import { fetchVisits } from './visits'
import { fetchStatuses } from './statuses'
import { fetchMembers } from './members'

export const GET_TOKEN = 'GET_TOKEN'
export const SET_AUTH_SUCCESS = 'SET_AUTH_SUCCESS'
export const SET_AUTH_FAILURE = 'SET_AUTH_FAILURE'
export const HANDLE_USERNAME_CHANGE = 'HANDLE_USERNAME_CHANGE'
export const HANDLE_PASSWORD_CHANGE = 'HANDLE_PASSWORD_CHANGE'
export const REQUEST_TOKEN = 'REQUEST_TOKEN'

export const authenticateSuccess = (token) => {
  store.dispatch(push('/visits'))
  setTimeout(() => {
    store.dispatch(fetchVisits())
    store.dispatch(fetchStatuses())
    store.dispatch(fetchMembers())
  }, 500)

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

export const handleUsernameChange = (event) => {
  return {
    type: HANDLE_USERNAME_CHANGE,
    username: event.target.value
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

export function login (username, password) {
  return function(dispatch) {
    dispatch(getToken())
  }
}

export function getToken() {
  return function(dispatch) {
    dispatch(requestToken())

    return axios.get('http://localhost:8080/api/v1/authenticate')
      .then(response =>
        dispatch(authenticateSuccess(response.data))
      )
      .catch(err =>
        console.log(err)
      )
  }
}
