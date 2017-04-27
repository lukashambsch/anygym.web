import { connect } from 'react-redux';
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
import { withRouter } from 'react-router';

import MemberSection from './MemberSection';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

const MemberSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberSection);

export default withRouter(MemberSectionContainer);
