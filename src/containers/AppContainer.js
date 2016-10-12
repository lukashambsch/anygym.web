import { connect } from 'react-redux'
import App from '../components/App'
import { checkForToken } from '../actions/auth'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkForToken: () => {
      dispatch(checkForToken())
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
