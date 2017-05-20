// @flow
import React, { Component } from 'react';

import PageBody from '../shared/PageBody';
import Button from '../shared/Button';
import type { Visit } from './types';
import type { Member } from '../member/types';
import type { Status } from '../status/types';

// placeholder replace w/ visit.image_path
import photo from '../shared/static/lukas-hambsch-profile.jpg';
import './static/VisitDetail.css';

export type VisitDetailStateProps = {
  visit: Visit;
  member: Member;
  status: Status;
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
      <div className="row visit-detail">
        <PageBody>
          <Button
            color="gray"
            clickHandler={this.props.goToVisitList}>
            <span className="fa fa-arrow-left"></span>
          </Button>
          <div className="row">
            <img className="profile-photo u-img-responsive" src={photo} alt="" />
          </div>
          <div className="columns twelve">
            <p>
              <b>Name:</b> {`${this.props.member.first_name} ${this.props.member.last_name}`}
            </p>
            <p>
              <b>Email:</b> {this.props.member.user.email}
            </p>
            <p>
              <b>Status:</b> {this.props.status.status_name}
            </p>
          </div>
          <div className="button-container">
            <Button
              className="columns"
              color="light-green"
              clickHandler={() => this.props.approveClickHandler(this.props.visit)}>
              Approve
            </Button>
          </div>
          <div className="button-container">
            <Button
              className="columns"
              color="light-red"
              clickHandler={() => this.props.denyClickHandler(this.props.visit)}>
              Deny
            </Button>
          </div>
        </PageBody>
      </div>
    );
  }
}

export default VisitDetail;
