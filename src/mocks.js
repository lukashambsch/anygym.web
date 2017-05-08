export const visits = [
  {
    visit_id: 1,
    member_id: 1,
    status_id: 1
  },
  {
    visit_id: 2,
    member_id: 1,
    status_id: 1
  },
  {
    visit_id: 3,
    member_id: 2,
    status_id: 1
  },
]

export const statuses = {
  1: {
    status_id: 1,
    status_name: 'Pending'
  },
  2: {
    status_id: 2,
    status_name: 'Approved'
  }
}

export const members = {
  1: {
    member_id: 1,
    user_id: 1,
    first_name: 'Lukas',
    last_name: 'Hambsch',
    address_id: null
  },
  2: {
    member_id: 2,
    user_id: 2,
    first_name: 'McKenzie',
    last_name: 'Hambsch',
    address_id: null
  }
}
