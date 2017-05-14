// @flow
import { connect } from 'react-redux';

import type { RegisterScreenStateProps, RegisterScreenDispatchProps } from './RegisterScreen';
import RegisterScreen from './RegisterScreen';
import { register, handleEmailChange, handlePasswordChange, handlePasswordConfirmChange } from './actions';

function mapStateToProps(state: Object): RegisterScreenStateProps {
  return {
    email: state.auth.email,
    password: state.auth.password,
    passwordConfirm: state.auth.passwordConfirm,
    roles: []
  };
}

function mapDispatchToProps(dispatch: Function): RegisterScreenDispatchProps {
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
)(RegisterScreen);

export default RegisterContainer;
