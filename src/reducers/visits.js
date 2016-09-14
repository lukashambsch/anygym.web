const visit = (state, action) => {
  switch (action.type) {
    case 'APPROVE_VISIT':
      return {
        visit_id: action.visit.visit_id,
        gym_location_id: action.visit.gym_location_id,
        status_id: 2
      }
    default:
      return state
  }
}

const visits = (state = [], action) => {
  switch (action.type) {
    case 'APPROVE_VISIT':
      return [
        ...state,
        visit(undefined, action)
      ]
    default:
      return state
  }
}

export default visits
