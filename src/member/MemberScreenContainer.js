// @flow
import { connect } from 'react-redux';
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
import { withRouter } from 'react-router';

import MemberScreen from './MemberScreen';
import type { MemberScreenStateProps, MemberScreenDispatchProps } from './MemberScreen';

function mapStateToProps(state: Object): MemberScreenStateProps {
  return {};
}

function mapDispatchToProps(dispatch: Function): MemberScreenDispatchProps {
  return {};
}

const MemberScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberScreen);

export default withRouter(MemberScreenContainer);
