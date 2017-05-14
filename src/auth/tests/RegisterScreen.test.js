import React from 'react';
import { shallow } from 'enzyme';

import RegisterScreen from '../RegisterScreen';

function setup() {
  const props = {
    email: 'test@gmail.com',
    password: 'testpass',
    password: 'testconfirm',
    roles: [{
      role_id: 1,
      role_name: 'Gym'
    }, {
      role_id: 2,
      role_name: 'Member'
    }],
    onEmailChange: jest.fn(),
    onPasswordChange: jest.fn(),
    onPasswordConfirmChange: jest.fn(),
    register: jest.fn()
  };

  const registerScreen = shallow(<RegisterScreen {...props} />);

  return {
    props,
    registerScreen
  };
}

describe('<RegisterScreen />', () => {

  it('RegisterScreen renders self and subcomponents successfully', () => {
    const { props, registerScreen } = setup();

    expect(registerScreen.find('PageHeader').length).toEqual(1);
    expect(registerScreen.find('PageBody').length).toEqual(1);
    expect(registerScreen.find('RegisterForm').length).toEqual(1);
  });

});
