import React from 'react';
import { shallow } from 'enzyme';

import MemberScreen from '../MemberScreen';

function setup() {
  const props = { };

  const memberScreen = shallow(<MemberScreen {...props} />);

  return {
    props,
    memberScreen
  };
}

describe('<MemberScreen />', () => {

  it('MemberScreen renders self and subcomponents', () => {
    const { memberScreen, props } = setup();

    expect(memberScreen.find('Route').length).toEqual(1);
  });

});
