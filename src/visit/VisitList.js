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
  onApproveClick: Function;
  onDenyClick: Function;
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
        <table>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Status</th>
              <th>Created</th>
              <th>Modified</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.visits.map(visit =>
              <VisitRow
                key={visit.visit_id}
                members={this.props.members}
                statuses={this.props.statuses}
                approve={this.props.onApproveClick}
                deny={this.props.onDenyClick}
                visit={visit} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VisitList;
