// @flow
import type { Visit } from './types';

export const UPDATE_VISIT = 'UPDATE_VISIT';
export const CREATE_VISIT = 'CREATE_VISIT';
export const CREATE_VISIT_SUCCESS = 'CREATE_VISIT_SUCCESS';
export const UPDATE_VISIT_SUCCESS = 'UPDATE_VISIT_SUCCESS';
export const FAIL_VISIT_REQUEST = 'FAIL_VISIT_REQUEST';
export const REQUEST_VISITS = 'REQUEST_VISITS';
export const RECEIVE_VISITS = 'RECEIVE_VISITS';

const pendingId: number = 1;
const approvedId: number = 2;
const deniedIdentityId: number = 3;
//const deniedBannedId = 4;

export function updateVisit(visit: Visit) {
  return {
    type: UPDATE_VISIT,
    visit: visit
  };
}

export function createVisit(visit: Visit) {
  visit.status_id = pendingId;

  return {
    type: CREATE_VISIT,
    visit: visit
  };
}

export function createVisitSuccess() {
  return {
    type: CREATE_VISIT_SUCCESS
  };
}

export function updateVisitSuccess() {
  return {
    type: UPDATE_VISIT_SUCCESS
  };
}

export function requestVisits() {
  return {
    type: REQUEST_VISITS
  };
}

export function failVisitRequest(err: Error) {
  console.log(err);

  return {
    type: FAIL_VISIT_REQUEST,
    error: err
  };
}

export function receiveVisits(json: Array<Visit>) {
  let items: Object = {};
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

export function approveVisit(visit: Visit) {
  visit.status_id = approvedId;
  return updateVisit(visit);
}

export function denyVisit(visit: Visit) {
  visit.status_id = deniedIdentityId;
  return updateVisit(visit);
}
