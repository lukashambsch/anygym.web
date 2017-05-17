// @flow
import { connect } from 'react-redux';

import Nav from './Nav';
import type { NavStateProps, NavDispatchProps } from './Nav';
import { toggleMenu } from './actions';

function mapStateToProps(state): NavStateProps {
  return {
    isMenuVisible: state.nav.isMenuVisible
  };
}

function mapDispatchToProps(dispatch): NavDispatchProps {
  return {
    toggleMenu: () => {
      dispatch(toggleMenu());
    }
  };
}

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default NavContainer;
