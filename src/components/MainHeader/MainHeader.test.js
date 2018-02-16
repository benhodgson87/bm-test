import React from 'react'
import { shallow } from 'enzyme'

import MainHeader from './MainHeader'

describe('MainHeader component', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<MainHeader />)
    expect(wrapper).toMatchSnapshot()
  })
})
