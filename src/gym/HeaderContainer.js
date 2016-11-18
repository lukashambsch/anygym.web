import { connect } from 'react-redux'

import Header from './Header'
import { verifyToken } from '../auth/actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkForToken: () => {
      dispatch(verifyToken())
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
