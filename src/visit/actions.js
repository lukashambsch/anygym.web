import axios from 'axios'

export const UPDATE_VISIT = 'UPDATE_VISIT'
export const REQUEST_VISITS = 'REQUEST_VISITS'
export const RECEIVE_VISITS = 'RECEIVE_VISITS'
export const VISITS_FETCH_SUCCESS = 'VISITS_FETCH_SUCCESS'
export const VISITS_FETCH_FAILURE  = 'VISITS_FETCH_FAILURE'

//const pendingId = 1
const approvedId = 2
const deniedIdentityId = 3
//const deniedBannedId = 4

export const updateVisit = (visit) => {
  return {
    type: UPDATE_VISIT,
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

    return axios.get('/visits')
      .then(response =>
        dispatch(receiveVisits(response.data))
      )
      .catch(err =>
        console.log(err)
      )
  }
}

export function approveVisit(visit) {
  return function(dispatch) {
    visit.status_id = approvedId
    dispatch(putVisit(visit))
  }
}

export function denyVisit(visit) {
  return function(dispatch) {
    visit.status_id = deniedIdentityId
    dispatch(putVisit(visit))
  }
}

export function putVisit(visit) {
  return function(dispatch) {
    return axios.put(`/visits/${visit.visit_id}`, visit)
      .then(response =>
        dispatch(updateVisit(response.data))
      )
      .catch(err =>
        console.log(err)
      )
  }
}
