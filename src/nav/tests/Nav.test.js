import React from 'react';
import { shallow } from 'enzyme';

import Nav from '../Nav';

function setup() {
  const props = {
    isMenuVisible: true,
    user: {
      user_id: 1,
      roles: [{
        role_id: 1,
        role_name: 'admin'
      }]
    },
    toggleMenu: jest.fn(),
    closeMenu: jest.fn()
  };

  const nav = shallow(<Nav {...props} />).find('Nav').shallow();

  return {
    props,
    nav
  };
}

describe('<Nav />', () => {

  it('Nav renders self and subcomponents', () => {
    const { nav, props } = setup();

    expect(nav.find('nav').length).toEqual(1);
    expect(nav.find('li > Link').length).toEqual(4);
  });

  it('Nav hides menu', () => {
    const { props } = setup();
    props.isMenuVisible = false
    const nav = shallow(<Nav {...props} />).find('Nav').shallow();

    expect(nav.find('ul').length).toEqual(0);
  });

  it('Nav menu button click toggles menu', () => {
    const { nav, props } = setup();

    expect(nav.find('Button').props().clickHandler).toEqual(props.toggleMenu);
  });

});
