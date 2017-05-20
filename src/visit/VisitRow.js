// @flow
import React, { Component } from 'react'

import { formatTime } from '../shared/utils';
import type { Visit } from '../visit/types';
import type { Member } from '../member/types';

import './static/VisitRow.css';

class VisitRow extends Component {
  props: {
    member: Member;
    visit: Visit;
    clickHandler: Function;
  };

  render() {
    return (
      <div className="visit-row" onClick={this.props.clickHandler}>
        <span>{this.props.member.first_name + ' ' + this.props.member.last_name}</span>
        <span>{formatTime(this.props.visit.created_on)}</span>
      </div>
    )
  }
}

export default VisitRow;
