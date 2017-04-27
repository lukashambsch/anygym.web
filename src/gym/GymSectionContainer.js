import { connect } from 'react-redux';
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
import { withRouter } from 'react-router';

import GymSection from './GymSection';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

const GymSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GymSection);

export default withRouter(GymSectionContainer);
