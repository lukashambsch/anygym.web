export const approveVisit = (visit) => {
  return {
    type: 'APPROVE_VISIT',
    visit: visit
  }
}

export const denyVisit = (visit) => {
  return {
    type: 'DENY_VISIT',
    visit: visit
  }
}
