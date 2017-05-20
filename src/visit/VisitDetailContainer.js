// @flow
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { approveVisit, denyVisit, requestVisit } from './actions';
import VisitDetail from './VisitDetail';
import type { VisitDetailStateProps, VisitDetailDispatchProps } from './VisitDetail';
import type { Visit } from './types';

function mapStateToProps(state: Object): VisitDetailStateProps {
  let emptyMember = {
    member_id: 0,
    user: {
      user_id: 0,
      email: '',
      password: ''
    }
  };
  return {
    visit: state.visits.visit,
    member: state.members.items[state.visits.visit.member_id] || emptyMember,
    status: state.statuses.items[state.visits.visit.status_id] || {}
  };
}

function mapDispatchToProps(dispatch: Function): VisitDetailDispatchProps {
  return {
    approveClickHandler: (visit: Visit) => {
      dispatch(approveVisit(visit));
    },
    denyClickHandler: (visit: Visit) => {
      dispatch(denyVisit(visit));
    },
    goToVisitList: () => {
      dispatch(push('/gym/visits'));
    },
    requestVisit: (visit_id: number) => {
      dispatch(requestVisit(visit_id));
    }
  }
}

const VisitDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisitDetail);

export default VisitDetailContainer;
