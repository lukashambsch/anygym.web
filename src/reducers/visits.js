const visit = (state, action) => {
  switch (action.type) {
    case 'APPROVE_VISIT':
      return {
        ...state,
        status_id: 2
      }
    case 'DENY_VISIT':
      return {
        ...state,
        status_id: 3
      }
    default:
      return state
  }
}

const visits = (state = [], action) => {
  switch (action.type) {
    case 'APPROVE_VISIT':
      return state.map(v =>
        visit(v, action)
      )
    case 'DENY_VISIT':
      return state.map(v =>
        visit(v, action)
      )
    default:
      return state
  }
}

export default visits
