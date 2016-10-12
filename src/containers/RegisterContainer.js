import { connect } from 'react-redux'
import RegisterForm from '../components/RegisterForm'

const mapStateToProps = (state) => {
  return {
    roles: []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm)

export default RegisterContainer
