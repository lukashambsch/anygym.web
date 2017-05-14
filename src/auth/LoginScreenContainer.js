// @flow
import { connect } from 'react-redux';

import type { LoginScreenStateProps, LoginScreenDispatchProps } from './LoginScreen';
import LoginScreen from './LoginScreen';
import { handleEmailChange, handlePasswordChange, login } from './actions';

function mapStateToProps(state: Object): LoginScreenStateProps {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
}

function mapDispatchToProps(dispatch: Function): LoginScreenDispatchProps {
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

const LoginScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

export default LoginScreenContainer;
