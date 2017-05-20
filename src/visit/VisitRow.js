// @flow
import React, { Component } from 'react'

import { formatTime } from '../shared/utils';
import { statusEnum } from '../status/enums';
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
    let className: string = 'columns visit-row';

    if (this.props.visit.status_id === statusEnum.Approved) {
      className += ' approved';
    } else if (this.props.visit.status_id === statusEnum.DeniedIdentity ||
               this.props.visit.status_id === statusEnum.DeniedBanned) {
      className += ' denied';
    }

    return (
      <div className={className} onClick={this.props.clickHandler}>
        <span>{this.props.member.first_name + ' ' + this.props.member.last_name}</span>
        <span>{formatTime(this.props.visit.created_on)}</span>
      </div>
    )
  }
}

export default VisitRow;
