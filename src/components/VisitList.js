import React, { Component } from 'react'
import Visit from './Visit'

class VisitList extends Component {
  getVisits() {
    return this.props.visits || [];
  }

  render() {
    return (
      <div>
        <ul>
          {this.getVisits().map(visit =>
            <Visit key={visit.visit_id} visit={visit} />
          )}
        </ul>
      </div>
    )
  }
}

export default VisitList
