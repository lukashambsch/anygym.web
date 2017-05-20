// @flow
import React, { Component } from 'react';

import Button from '../shared/Button';
import type { Visit } from './types';
import type { Member } from '../member/types';

export type VisitDetailStateProps = {
  visit: Visit;
  member: Member;
};

export type VisitDetailDispatchProps = {
  approveClickHandler: Function;
  denyClickHandler: Function;
  goToVisitList: Function;
  requestVisit: Function;
};

class VisitDetail extends Component {
  props: VisitDetailStateProps & VisitDetailDispatchProps;

  componentDidMount() {
    this.props.requestVisit(this.props.match.params.visit_id);
  }

  render() {
    return (
      <div className="visit-detail">
        <Button
          color="red"
          clickHandler={this.props.goToVisitList}>
          <span className="fa fa-arrow-left"></span>
        </Button>
        <span>{this.props.member.first_name}</span>
        <span>{this.props.member.last_name}</span>
        <span>{this.props.visit.created_on}</span>
      </div>
    );
  }
}

export default VisitDetail;
