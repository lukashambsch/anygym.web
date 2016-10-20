import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import VisitList from '../../src/components/VisitList'


describe('VisitList', () => {
  let visits, statuses, members, props

  beforeEach(() => {
    visits = [
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

    statuses = {
      1: {
        status_id: 1,
        status_name: 'Pending'
      },
      2: {
        status_id: 2,
        status_name: 'Approved'
      }
    }

    members = {
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

    props = {
      loadData: () => {},
      members: members,
      statuses: statuses,
      onApproveClick: () => {},
      onDenyClick: () => {},
      visits: visits
    }

  });

  it('should have 3 VisitRow components', () => {
    const wrapper = shallow(<VisitList {...props} />)
    const rows = wrapper.find('VisitRow')
    expect(rows).to.have.length(3)
  })

})
