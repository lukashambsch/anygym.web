// @flow
import React, { Component } from 'react';

import RegisterForm from './RegisterForm';
import type { Role } from './types';

export type RegisterScreenStateProps = {
  email: string;
  password: string;
  passwordConfirm: string;
  roles: Array<Role>;
};

export type RegisterScreenDispatchProps = {
  onEmailChange: Function;
  onPasswordChange: Function;
  onPasswordConfirmChange: Function;
  register: Function;
};

class RegisterScreen extends Component {
  props: RegisterScreenStateProps & RegisterScreenDispatchProps;

  render() {
    return (
      <div>
        <RegisterForm
          email={this.props.email}
          password={this.props.password}
          passwordConfirm={this.props.passwordConfirm}
          roles={this.props.roles}
          onEmailChange={this.props.onEmailChange}
          onPasswordChange={this.props.onPasswordChange}
          onPasswordConfirmChange={this.props.onPasswordConfirmChange}
          register={this.props.register} />
      </div>
    );
  }
}

export default RegisterScreen;
