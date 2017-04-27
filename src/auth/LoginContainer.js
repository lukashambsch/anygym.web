import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import { handleEmailChange, handlePasswordChange, login } from './actions';

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEmailChange: (event) => {
      dispatch(handleEmailChange(event))
    },
    onPasswordChange: (event) => {
      dispatch(handlePasswordChange(event))
    },
    login: (email, password) => {
      dispatch(login(email, password))
    }
  };
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginContainer;
