// @flow
import { connect } from 'react-redux';

import type { LoginStateProps, LoginDispatchProps } from './LoginForm';
import LoginForm from './LoginForm';
import { handleEmailChange, handlePasswordChange, login } from './actions';

function mapStateToProps(state: Object): LoginStateProps {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
}

function mapDispatchToProps(dispatch: Function): LoginDispatchProps {
  return {
    onEmailChange: (event: SyntheticInputEvent) => {
      dispatch(handleEmailChange(event))
    },
    onPasswordChange: (event: SyntheticInputEvent) => {
      dispatch(handlePasswordChange(event))
    },
    login: (email: string, password: string) => {
      dispatch(login(email, password))
    }
  };
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginContainer;
