import fetch from 'isomorphic-fetch'

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

    return fetch('http://localhost:8080/api/v1/statuses/')
      .then(response => response.json())
      .then(json =>
        dispatch(receiveStatuses(json))
      )
      .catch(err =>
        console.log(err)
      )
  }
}
