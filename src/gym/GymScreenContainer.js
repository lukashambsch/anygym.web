// @flow
import { connect } from 'react-redux';
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
import { withRouter } from 'react-router';

import GymScreen from './GymScreen';
import { requestVisits } from '../visit/actions';
import { requestMembers } from '../member/actions';
import { requestStatuses } from '../status/actions';
import type { GymScreenStateProps, GymScreenDispatchProps } from './GymScreen';

function mapStateToProps(state): GymScreenStateProps {
  return {};
}

function mapDispatchToProps(dispatch): GymScreenDispatchProps {
  return {
    getVisits: () => {
      dispatch(requestVisits());
    },
    getMembers: () => {
      dispatch(requestMembers());
    },
    getStatuses: () => {
      dispatch(requestStatuses());
    }
  };
}

const GymScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GymScreen);

export default withRouter(GymScreenContainer);
