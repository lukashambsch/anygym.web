// @flow
import React, { Component } from 'react';

import PageBody from '../shared/PageBody';
import Button from '../shared/Button';
import VisitRow from './VisitRow';
import type { Visit } from './types';
import type { Member } from '../member/types';
import type { Status } from '../status/types';

import './static/VisitList.css';

export type VisitListStateProps = {
  visits: Array<Visit>;
  members: Array<Member>;
  statuses: Array<Status>;
};

export type VisitListDispatchProps = {
  requestVisits: Function;
  requestMembers: Function;
  goToDetail: Function;
};

class VisitList extends Component {
  props: VisitListStateProps & VisitListDispatchProps;

  componentWillMount() {
    if (Object.keys(this.props.visits).length === 0) {
      this.props.requestVisits();
    }

    if (Object.keys(this.props.members).length === 0) {
      this.props.requestMembers();
    }
  }

  loadData() {
    this.props.requestVisits();
    this.props.requestMembers();
  }

  render() {
    return (
      <div className="row visit-list">
        <PageBody>
          <div className="columns twelve action-bar">
            <Button
              color="gray"
              clickHandler={() => this.loadData()}>
              Update
            </Button>
          </div>
          <h3>Check In</h3>
          {this.props.visits.map(visit =>
            <VisitRow
              key={visit.visit_id}
              member={this.props.members[visit.member_id] || {}}
              visit={visit}
              clickHandler={() => this.props.goToDetail(visit.visit_id)} />
          )}
        </PageBody>
      </div>
    );
  }
}

export default VisitList;
