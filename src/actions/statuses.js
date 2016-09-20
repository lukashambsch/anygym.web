import axios from 'axios'

export const REQUEST_STATUSES = 'REQUEST_STATUSES'
export const RECEIVE_STATUSES = 'RECEIVE_STATUSES'

export const requestStatuses = () => {
  return {
    type: REQUEST_STATUSES
  }
}

export const receiveStatuses = (json) => {
  return {
    type: RECEIVE_STATUSES,
    statuses: json,
    receivedAt: Date.now()
  }
}

export function fetchStatuses() {
  return function(dispatch) {
    dispatch(requestStatuses())

    return axios.get('http://localhost:8080/api/v1/statuses/')
      .then(response =>
        dispatch(receiveStatuses(response.data))
      )
      .catch(err =>
        console.log(err)
      )
  }
}
