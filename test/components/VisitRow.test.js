import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import VisitRow from '../../src/components/VisitRow'


describe('VisitRow', () => {
  let visit, statuses, members, props

  beforeEach(() => {
    visit = {
      visit_id: 1,
      member_id: 1,
      status_id: 1
    }

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
      key: visit.visit_id,
      members: members,
      statuses: statuses,
      approve: () => {},
      deny: () => {},
      visit: visit
    }

  });

  it('should be 1 row', () => {
    const wrapper = shallow(<VisitRow {...props} />)
    const rows = wrapper.find('tr')
    expect(rows).to.have.length(1)
  })

  it('should display 5 cells', () => {
    const wrapper = shallow(<VisitRow {...props} />)
    const cells = wrapper.find('tr td')
    expect(cells).to.have.length(5)
  })

  it('should display 2 buttons', () => {
    const wrapper = shallow(<VisitRow {...props} />)
    const buttons = wrapper.find('button')
    expect(buttons).to.have.length(2)
  })

})
