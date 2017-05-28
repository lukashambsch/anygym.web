import { takeLatest } from 'redux-saga/effects';

import { CREATE_VISIT, UPDATE_VISIT, REQUEST_VISITS, REQUEST_VISIT } from '../actions';
import { createVisit, updateVisit, getVisits, getVisit } from '../sagas';
import { createVisitSaga, updateVisitSaga, getVisitsSaga, getVisitSaga } from '../sagas';

describe('visit sagas', () => {

  it('createVisitSaga', () => {
    const gen = createVisitSaga();

    expect(gen.next().value).toEqual(takeLatest(CREATE_VISIT, createVisit));
    expect(gen.next().done).toBe(true);
  });

  it('updateVisitSaga', () => {
    const gen = updateVisitSaga();

    expect(gen.next().value).toEqual(takeLatest(UPDATE_VISIT, updateVisit));
    expect(gen.next().done).toBe(true);
  });

  it('getVisitSaga', () => {
    const gen = getVisitSaga();

    expect(gen.next().value).toEqual(takeLatest(REQUEST_VISIT, getVisit));
    expect(gen.next().done).toBe(true);
  });

  it('getVisitsSaga', () => {
    const gen = getVisitsSaga();

    expect(gen.next().value).toEqual(takeLatest(REQUEST_VISITS, getVisits));
    expect(gen.next().done).toBe(true);
  });

});
