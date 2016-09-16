import React, { Component } from 'react'
import VisitRow from './VisitRow'

class VisitList extends Component {
  getVisits() {
    return this.props.visits || [];
  }

  render() {
    return (
      <div>
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
            {this.getVisits().map(visit =>
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
    )
  }
}

export default VisitList
