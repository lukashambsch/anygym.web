// @flow
import React, { Component } from 'react';

import PageHeader from '../shared/PageHeader';
import PageBody from '../shared/PageBody';
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
        <PageHeader title={'Registration'} />
        <PageBody>
          <RegisterForm
            email={this.props.email}
            password={this.props.password}
            passwordConfirm={this.props.passwordConfirm}
            roles={this.props.roles}
            onEmailChange={this.props.onEmailChange}
            onPasswordChange={this.props.onPasswordChange}
            onPasswordConfirmChange={this.props.onPasswordConfirmChange}
            register={this.props.register} />
        </PageBody>
      </div>
    );
  }
}

export default RegisterScreen;
