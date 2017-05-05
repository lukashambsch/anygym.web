// @flow
import { connect } from 'react-redux';

import type { RegistrationStateProps, RegistrationDispatchProps } from './RegisterForm';
import RegisterForm from './RegisterForm';
import { register, handleEmailChange, handlePasswordChange, handlePasswordConfirmChange } from './actions';

function mapStateToProps(state: Object): RegistrationStateProps {
  return {
    email: state.auth.email,
    password: state.auth.password,
    passwordConfirm: state.auth.passwordConfirm,
    roles: []
  };
}

function mapDispatchToProps(dispatch: Function): RegistrationDispatchProps {
  return {
    onEmailChange: (event) => {
      dispatch(handleEmailChange(event))
    },
    onPasswordChange: (event) => {
      dispatch(handlePasswordChange(event))
    },
    onPasswordConfirmChange: (event) => {
      dispatch(handlePasswordConfirmChange(event))
    },
    register: (user) => {
      dispatch(register(user))
    }
  };
}

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);

export default RegisterContainer;
