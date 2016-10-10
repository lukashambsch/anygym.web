import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { handleUsernameChange, handlePasswordChange } from '../actions/auth'

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    password: state.auth.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUsernameChange: (event) => {
      dispatch(handleUsernameChange(event))
    },
    onPasswordChange: (event) => {
      dispatch(handlePasswordChange(event))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginContainer
