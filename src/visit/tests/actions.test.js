import * as actions from '../actions';

describe('visit actions', () => {

  it('receiveVisits maps array correctly', () => {
    let json = [{
      visit_id: 1,
      member_id: 1,
      gym_location_id: 2,
      status_id: 1,
      created_on: '2017-04-15T14:08:59.788111Z',
      modified_on: ''
    }, {
      visit_id: 2,
      member_id: 3,
      gym_location_id: 2,
      status_id: 2,
      created_on: '2017-04-15T14:08:59.788111Z',
      modified_on: ''
    }];

    let action = actions.receiveVisits(json);

    expect(action.type).toEqual(actions.RECEIVE_VISITS);
    expect(action.visits[1].status_id).toEqual(1);
  });

});
