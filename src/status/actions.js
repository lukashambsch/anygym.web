export const REQUEST_STATUSES = 'REQUEST_STATUSES'
export const RECEIVE_STATUSES = 'RECEIVE_STATUSES'

export const requestStatuses = () => {
  return {
    type: REQUEST_STATUSES
  }
}

export const receiveStatuses = (json) => {
  return {
    type: RECEIVE_STATUSES,
    statuses: json,
    receivedAt: Date.now()
  }
}

export function fetchStatuses() {
  return requestStatuses()
}
