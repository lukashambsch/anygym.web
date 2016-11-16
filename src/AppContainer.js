import { connect } from 'react-redux'
import App from './App'
import { checkForToken } from './auth/actions'

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
