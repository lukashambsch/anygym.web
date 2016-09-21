import { connect } from 'react-redux'
import { approveVisit, denyVisit } from '../actions/visits'
import VisitList from '../components/VisitList'

const getVisibleVisits = (visits, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return visits
    case 'SHOW_PENDING':
      return visits.filter(v => v.status_id === 1)
    case 'SHOW_APPROVED':
      return visits.filter(v => v.status_id === 2)
    case 'SHOW_DENIED':
      return visits.filter(v => v.status_id === 3)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => {
  let visits = Object.keys(state.visits.items).map((key) => state.visits.items[key])
  return {
    visits: getVisibleVisits(visits, state.visits.visibilityFilter),
    statuses: state.statuses.items,
    members: state.members.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onApproveClick: (visit) => {
      dispatch(approveVisit(visit))
    },
    onDenyClick: (visit) => {
      dispatch(denyVisit(visit))
    }
  }
}

const VisibleVisitList = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisitList)

export default VisibleVisitList
