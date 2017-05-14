import React from 'react';
import { shallow } from 'enzyme';

import LoginScreen from '../LoginScreen';

function setup() {
  const props = {
    email: 'test@gmail.com',
    password: 'testpass',
    onEmailChange: jest.fn(),
    onPasswordChange: jest.fn(),
    login: jest.fn()
  };

  const loginScreen = shallow(<LoginScreen {...props} />);

  return {
    props,
    loginScreen
  };
}

describe('<LoginScreen />', () => {

  it('LoginScreen renders self and subcomponents successfully', () => {
    const { props, loginScreen } = setup();

    expect(loginScreen.find('LoginForm').length).toEqual(1);
  });

});
