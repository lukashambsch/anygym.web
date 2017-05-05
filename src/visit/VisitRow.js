// @flow
import React, { Component } from 'react'

import type { Visit } from '../visit/types';
import type { Member } from '../member/types';
import type { Status } from '../status/types';

class VisitRow extends Component {
  props: {
    members: Array<Member>;
    statuses: Array<Status>;
    approve: Function;
    deny: Function;
    visit: Visit;
  };

  deny() {
    return this.props.deny;
  }

  getMember() {
    return this.props.members[this.props.visit.member_id] || {};
  }

  getStatus() {
    return this.props.statuses[this.props.visit.status_id] || {};
  }

  render() {
    let visit = this.props.visit,
      member = this.getMember(),
      status = this.getStatus();
    return (
      <tr>
        <td>{member.first_name + ' ' + member.last_name}</td>
        <td>{status.status_name}</td>
        <td>{visit.created_on}</td>
        <td>{visit.modified_on}</td>
        <td>
          <button onClick={() => this.props.approve(visit)}>Approve</button>
          <button onClick={() => this.props.deny(visit)}>Deny</button>
        </td>
      </tr>
    )
  }
}

export default VisitRow
