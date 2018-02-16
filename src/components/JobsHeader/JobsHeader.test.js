import React from 'react'
import { shallow } from 'enzyme'

import JobsHeader from './JobsHeader'

describe('JobsHeader component', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<JobsHeader />)
    expect(wrapper).toMatchSnapshot()
  })
})
