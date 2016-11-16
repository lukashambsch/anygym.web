import { connect } from 'react-redux'

import RegisterForm from './RegisterForm'
import { register, handleEmailChange, handlePasswordChange, handlePasswordConfirmChange } from './actions'

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    passwordConfirm: state.auth.passwordConfirm,
    roles: []
  }
}

const mapDispatchToProps = (dispatch) => {
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
  }
}

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm)

export default RegisterContainer
