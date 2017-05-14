import React from 'react';
import { shallow } from 'enzyme';

import GymScreen from '../GymScreen';

function setup() {
  const props = { };

  const gymScreen = shallow(<GymScreen {...props} />);

  return {
    props,
    gymScreen
  };
}

describe('<GymScreen />', () => {

  it('GymScreen renders self and subcomponents', () => {
    const { gymScreen, props } = setup();

    expect(gymScreen.find('PageHeader').length).toEqual(1);
    expect(gymScreen.find('PageBody').length).toEqual(1);
    expect(gymScreen.find('Route').length).toEqual(1);
  });

});
