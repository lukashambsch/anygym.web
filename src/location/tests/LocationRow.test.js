import React from 'react';
import { shallow } from 'enzyme';

import LocationRow from '../LocationRow';
import { members, gymLocations } from '../../mocks';

function setup() {
  const props = {
    location: gymLocations[1],
    member: members[1]
  };

  const locationRow = shallow(<LocationRow {...props} />);

  return {
    props,
    locationRow
  };
}

describe('<LocationRow />', () => {

  it('LocationRow renders self and subcomponents', () => {
    const { locationRow } = setup();

    expect(locationRow.find('.location-row').length).toEqual(1);
    expect(locationRow.find('span.six').length).toEqual(5);
  });

});
