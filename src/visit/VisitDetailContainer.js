// @flow
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { approveVisit, denyVisit } from './actions';
import VisitDetail from './VisitDetail';
import type { VisitDetailStateProps, VisitDetailDispatchProps } from './VisitDetail';
import type { Visit } from './types';

function mapStateToProps(state: Object): VisitDetailStateProps {
  return {
    visit: state.visits.visit,
    member: state.members.items[state.visits.visit.member_id] || {}
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
    }
  }
}

const VisitDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisitDetail);

export default VisitDetailContainer;
