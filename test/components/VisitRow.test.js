import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import VisitRow from '../../src/visit/VisitRow'
import { visits, statuses, members } from '../mock-data'


describe('VisitRow', () => {
  let visit, props

  beforeEach(() => {
    visit = visits[0]

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
