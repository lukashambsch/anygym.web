// @flow
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { requestVisits } from './actions';
import { requestMembers } from '../member/actions';
import VisitList from './VisitList';
import type { VisitListStateProps, VisitListDispatchProps } from './VisitList';
import type { Visit } from './types';

function getVisibleVisits(visits: Array<Visit>, filter: string): Array<any> {
  switch (filter) {
    case 'SHOW_ALL':
      return visits;
    case 'SHOW_PENDING':
      return visits.filter(v => v.status_id === 1);
    case 'SHOW_APPROVED':
      return visits.filter(v => v.status_id === 2);
    case 'SHOW_DENIED':
      return visits.filter(v => v.status_id === 3);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

function mapStateToProps(state: Object): VisitListStateProps {
  let visits: Array<Visit> = Object.keys(state.visits.items).map((key) => state.visits.items[key]);

  return {
    visits: getVisibleVisits(visits, state.visits.visibilityFilter),
    statuses: state.statuses.items,
    members: state.members.items
  };
}

function mapDispatchToProps(dispatch): VisitListDispatchProps {
  return {
    requestVisits: () => {
      dispatch(requestVisits());
    },
    requestMembers: () => {
      dispatch(requestMembers());
    },
    goToDetail: (visit_id: number) => {
      dispatch(push(`/gym/visits/${visit_id}`));
    }
  }
}

const VisitListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisitList);

export default VisitListContainer;
