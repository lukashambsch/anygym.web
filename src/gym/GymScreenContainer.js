// @flow
import { connect } from 'react-redux';
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
import { withRouter } from 'react-router';

import GymScreen from './GymScreen';
import type { GymScreenStateProps, GymScreenDispatchProps } from './GymScreen';

function mapStateToProps(state): GymScreenStateProps {
  return {};
}

function mapDispatchToProps(dispatch): GymScreenDispatchProps {
  return {};
}

const GymScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GymScreen);

export default withRouter(GymScreenContainer);
