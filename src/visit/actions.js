import axios from 'axios';

export const UPDATE_VISIT = 'UPDATE_VISIT';
export const CREATE_VISIT = 'CREATE_VISIT';
export const CREATE_VISIT_SUCCESS = 'CREATE_VISIT_SUCCESS';
export const UPDATE_VISIT_SUCCESS = 'UPDATE_VISIT_SUCCESS';
export const FAIL_VISIT_REQUEST = 'FAIL_VISIT_REQUEST';
export const REQUEST_VISITS = 'REQUEST_VISITS';
export const RECEIVE_VISITS = 'RECEIVE_VISITS';

const pendingId = 1;
const approvedId = 2;
const deniedIdentityId = 3;
//const deniedBannedId = 4;

export const updateVisit = (visit) => {
  return {
    type: UPDATE_VISIT,
    visit
  };
}

export const createVisit = (visit) => {
  visit.status_id = pendingId;

  return {
    type: CREATE_VISIT,
    visit
  };
}

export const createVisitSuccess = () => {
  return {
    type: CREATE_VISIT_SUCCESS
  };
}

export const updateVisitSuccess = (visit) => {
  return {
    type: UPDATE_VISIT_SUCCESS,
    visit
  };
}

export const requestVisits = () => {
  return {
    type: REQUEST_VISITS
  };
}

export const failVisitRequest = (err) => {
  console.log(err);

  return {
    type: FAIL_VISIT_REQUEST,
    error: err
  };
}

export const receiveVisits = (json) => {
  let items = {};
  json.forEach((visit) => {
    items[visit.visit_id] = visit
  });

  return {
    type: RECEIVE_VISITS,
    visits: items,
    recievedAt: Date.now()
  };
}

export function fetchVisits() {
  return requestVisits();
}

export function approveVisit(visit) {
  visit.status_id = approvedId;
  return updateVisit(visit);
}

export function denyVisit(visit) {
  visit.status_id = deniedIdentityId;
  return updateVisit(visit);
}

export function putVisit(visit) {
  return function(dispatch) {
    return axios.put(`/visits/${visit.visit_id}`, visit)
      .then(response =>
        dispatch(updateVisit(response.data));
      )
      .catch(err =>
        console.log(err);
      )
  }
}
