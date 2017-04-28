export const REQUEST_MEMBERS = 'REQUEST_MEMBERS';
export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';
export const FAIL_MEMBER_REQUEST = 'FAIL_MEMBER_REQUEST';

export function requestMembers() {
  return {
    type: REQUEST_MEMBERS
  };
}

export function failMemberRequest(err) {
  return {
    type: FAIL_MEMBER_REQUEST,
    error: err
  };
}

export function receiveMembers(json) {
  let items = {};
  json.forEach((member) => {
    items[member.member_id] = member
  });

  return {
    type: RECEIVE_MEMBERS,
    members: items,
    receivedAt: Date.now()
  };
}

export function fetchMembers() {
  return requestMembers();
}
