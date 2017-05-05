// @flow
import { connect } from 'react-redux';
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
import { withRouter } from 'react-router';

import MemberSection from './MemberSection';
import type { MemberSectionStateProps, MemberSectionDispatchProps } from './MemberSection';

function mapStateToProps(state: Object): MemberSectionStateProps {
  return {};
}

function mapDispatchToProps(dispatch: Function): MemberSectionDispatchProps {
  return {};
}

const MemberSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberSection);

export default withRouter(MemberSectionContainer);
