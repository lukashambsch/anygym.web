// @flow
import type { Visit } from './types';
import { statusEnum } from '../status/enums';

export const UPDATE_VISIT = 'UPDATE_VISIT';
export const CREATE_VISIT = 'CREATE_VISIT';
export const CREATE_VISIT_SUCCESS = 'CREATE_VISIT_SUCCESS';
export const UPDATE_VISIT_SUCCESS = 'UPDATE_VISIT_SUCCESS';
export const FAIL_VISIT_REQUEST = 'FAIL_VISIT_REQUEST';
export const REQUEST_VISITS = 'REQUEST_VISITS';
export const RECEIVE_VISITS = 'RECEIVE_VISITS';
export const REQUEST_VISIT = 'REQUEST_VISIT';
export const RECEIVE_VISIT = 'RECEIVE_VISIT';

export function updateVisit(visit: Visit) {
  return {
    type: UPDATE_VISIT,
    visit: visit
  };
}

export function createVisit(visit: Visit) {
  visit.status_id = statusEnum.Pending;

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

export function receiveVisit(visit: Visit) {
  return {
    type: RECEIVE_VISIT,
    visit: visit
  };
}

export function approveVisit(visit: Visit) {
  visit.status_id = statusEnum.Approved;
  return updateVisit(visit);
}

export function denyVisit(visit: Visit) {
  visit.status_id = statusEnum.DeniedIdentity;
  return updateVisit(visit);
}

export function requestVisit(visit_id: number) {
  return {
    type: REQUEST_VISIT,
    visit_id: visit_id
  }
}
