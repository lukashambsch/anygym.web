import * as actions from '../actions';
import { members } from '../../mocks';

describe('member actions', () => {

  it('receiveMembers maps array correctly', () => {
    let json = Object.values(members);
    let action = actions.receiveMembers(json);

    expect(action.type).toEqual(actions.RECEIVE_MEMBERS);
    expect(action.members[1].member_id).toEqual(1);
  });

});
