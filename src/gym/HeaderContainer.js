import { connect } from 'react-redux'

import Header from './Header'
import { checkForToken } from '../auth/actions'

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

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
