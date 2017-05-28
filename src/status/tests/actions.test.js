import * as actions from '../actions';
import { statuses } from '../../mocks';

describe('status actions', () => {

  it('receiveMembers maps array correctly', () => {
    let json = Object.values(statuses);
    let action = actions.receiveStatuses(json);

    expect(action.type).toEqual(actions.RECEIVE_STATUSES);
    expect(action.statuses[1].status_id).toEqual(1);
  });

});

