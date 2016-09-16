import fetch from 'isomorphic-fetch'

export const APPROVE_VISIT = 'APPROVE_VISIT'
export const DENY_VISIT = 'DENY_VISIT'
export const UPDATE_VISIT = 'UPDATE_VISIT'
export const REQUEST_VISITS = 'REQUEST_VISITS'
export const RECEIVE_VISITS = 'RECEIVE_VISITS'

export const approveVisit = (visit_id) => {
  return {
    type: APPROVE_VISIT,
    visit_id
  }
}

export const denyVisit = (visit_id) => {
  return {
    type: DENY_VISIT,
    visit_id
  }
}

export const updateVisit = (visit) => {
  return {
    UPDATE_VISIT,
    visit
  }
}

export const requestVisits = () => {
  return {
    type: REQUEST_VISITS
  }
}

export const receiveVisits = (json) => {
  return {
    type: RECEIVE_VISITS,
    visits: json,
    recievedAt: Date.now()
  }
}

export function fetchVisits() {
  return function(dispatch) {
    dispatch(requestVisits())

    return fetch('http://localhost:8080/api/v1/visits/')
      .then(response => response.json())
      .then(json =>
        dispatch(receiveVisits(json))
      )
      .catch(err =>
        console.log(err)
      )
  }
}

export function putVisit(visit) {
  return function(dispatch) {
    return fetch(`http://localhost:8080/api/v1/visits/${visit.visit_id}/`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(visit)
    })
      .then(response => response.json())
      .then(json =>
        dispatch(updateVisit(json))
      )
      .catch(err =>
        console.log(err)
      )
  }
}
