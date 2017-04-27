export const REQUEST_STATUSES = 'REQUEST_STATUSES';
export const FAIL_STATUS_REQUEST = 'FAIL_STATUS_REQUEST';
export const RECEIVE_STATUSES = 'RECEIVE_STATUSES';

export const requestStatuses = () => {
  return {
    type: REQUEST_STATUSES
  };
}

export const failStatusRequest = (err) => {
  console.log(err);

  return {
    type: FAIL_STATUS_REQUEST,
    error: err
  };
}

export const receiveStatuses = (json) => {
  let items = {};
  json.forEach((status) => {
    items[status.status_id] = status
  });

  return {
    type: RECEIVE_STATUSES,
    statuses: items,
    receivedAt: Date.now()
  };
}

export function fetchStatuses() {
  return requestStatuses();
}
