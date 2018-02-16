import React from 'react'
import { shallow } from 'enzyme'

import Surveys from './Surveys'

describe('Surveys view component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Surveys />)
    expect(wrapper).toMatchSnapshot()
  })
})
