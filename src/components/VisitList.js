import React, { Component } from 'react'
import VisitRow from './VisitRow'

class VisitList extends Component {
  componentWillMount() {
    this.props.loadData()
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
    )
  }
}

export default VisitList
