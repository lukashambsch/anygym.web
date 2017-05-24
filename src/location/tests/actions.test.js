import * as actions from '../actions';

describe('location actions', () => {

  it('receiveLocations should create an action to set the locations', () => {
    const json = [{
      gym_location_id: 1,
      business_hours: []
    }, {
      gym_location_id: 2,
      business_hours: []
    }];
    const expectedItems = {
      1: json[0],
      2: json[1]
    };
    const returnedAction = actions.receiveLocations(json);

    expect(returnedAction.locations).toEqual(expectedItems);
  });

});
