// @flow
import { connect } from 'react-redux';

import Nav from './Nav';
import type { NavStateProps, NavDispatchProps } from './Nav';
import { toggleMenu, closeMenu } from './actions';
import { logoutUser } from '../auth/actions';

function mapStateToProps(state): NavStateProps {
  return {
    isMenuVisible: state.nav.isMenuVisible,
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch): NavDispatchProps {
  return {
    toggleMenu: () => {
      dispatch(toggleMenu());
    },
    closeMenu: () => {
      dispatch(closeMenu());
    },
    logoutUser: () => {
      dispatch(closeMenu());
      dispatch(logoutUser());
    }
  };
}

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default NavContainer;
