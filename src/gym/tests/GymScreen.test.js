import React from 'react';
import { shallow } from 'enzyme';

import GymScreen from '../GymScreen';

function setup() {
  const props = {
    getVisits: jest.fn(),
    getMembers: jest.fn(),
    getStatuses: jest.fn()
  };

  const gymScreen = shallow(<GymScreen {...props} />);

  return {
    props,
    gymScreen
  };
}

describe('<GymScreen />', () => {

  it('GymScreen renders self and subcomponents', () => {
    const { gymScreen, props } = setup();

    expect(props.getVisits.mock.calls.length).toEqual(1);
    expect(props.getMembers.mock.calls.length).toEqual(1);
    expect(props.getStatuses.mock.calls.length).toEqual(1);
    expect(gymScreen.find('Route').length).toEqual(2);
  });

});
