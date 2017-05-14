import * as actions from '../actions';

describe('location actions', () => {

  it('receiveLocations should create an action to set the locations', () => {
    const json = [{
      gym_location_id: 1
    }, {
      gym_location_id: 2
    }];
    const expectedItems = {
      1: json[0],
      2: json[1]
    };
    const returnedAction = actions.receiveLocations(json);

    expect(returnedAction.locations).toEqual(expectedItems);
  });

});
