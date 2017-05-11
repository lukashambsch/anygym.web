import React from 'react';
import { shallow } from 'enzyme';

import RegisterForm from '../RegisterForm';

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

  const registerForm = shallow(<RegisterForm {...props} />);

  return {
    props,
    registerForm
  };
}

describe('<RegisterForm />', () => {

  it('RegisterForm successfully renders self and subcomponents', () => {
    const { props, registerForm } = setup();

    expect(registerForm.find('input[type="text"]').length).toEqual(1);
    expect(registerForm.find('input[type="password"]').length).toEqual(2);
    expect(registerForm.find('button'));
  });

  it('RegisterForm button click registers user', () => {
    const { props, registerForm } = setup();

    registerForm.find('button').simulate('click');
    expect(props.register.mock.calls.length).toEqual(1);
  });

  it('RegisterForm email text box updates email', () => {
    const { props, registerForm } = setup();

    registerForm.find('input[type="text"]').simulate('change', {target: {value: 'new@gmail.com'}});
    expect(props.onEmailChange.mock.calls.length).toEqual(1);
  });

  it('RegisterForm password text box updates password', () => {
    const { props, registerForm } = setup();

    registerForm.find('input[type="password"]').at(0).simulate('change', {target: {value: 'newpass'}});
    expect(props.onPasswordChange.mock.calls.length).toEqual(1);
  });

  it('RegisterForm password confirm text box updates password confirm', () => {
    const { props, registerForm } = setup();

    registerForm.find('input[type="password"]').at(1).simulate('change', {target: {value: 'newpass'}});
    expect(props.onPasswordConfirmChange.mock.calls.length).toEqual(1);
  });

});

