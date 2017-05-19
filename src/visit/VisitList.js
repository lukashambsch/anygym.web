// @flow
import React, { Component } from 'react';

import VisitRow from './VisitRow';
import type { Visit } from './types';
import type { Member } from '../member/types';
import type { Status } from '../status/types';

export type VisitListStateProps = {
  visits: Array<Visit>;
  members: Array<Member>;
  statuses: Array<Status>;
};

export type VisitListDispatchProps = {
  loadData: Function;
  goToDetail: Function;
};

class VisitList extends Component {
  props: VisitListStateProps & VisitListDispatchProps;

  componentWillMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.loadData()}>Refresh</button>
        {this.props.visits.map(visit =>
          <VisitRow
            key={visit.visit_id}
            member={this.props.members[visit.member_id] || {}}
            visit={visit}
            clickHandler={() => this.props.goToDetail(visit.visit_id)} />
        )}
      </div>
    );
  }
}

export default VisitList;
