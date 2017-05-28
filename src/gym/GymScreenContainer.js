// @flow
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
import { withRouter } from 'react-router';

import GymScreen from './GymScreen';
import { requestVisits } from '../visit/actions';
import { requestMembers } from '../member/actions';
import { requestStatuses } from '../status/actions';
import type { GymScreenStateProps, GymScreenDispatchProps } from './GymScreen';

function mapStateToProps(state): GymScreenStateProps {
  return {
    authenticated: state.auth.authenticated
  };
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
    },
    goToLogin: () => {
      dispatch(push('/login'));
    }
  };
}

const GymScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GymScreen);

export default withRouter(GymScreenContainer);
