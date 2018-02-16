import React from 'react'
import { shallow } from 'enzyme'

import JobItem from './JobItem'

const baseProps = {
  id: 123,
  customer: {
    title: 'Mr',
    first_name: 'Wayne',
    last_name: 'World',
  },
  dimensions: 234,
}

const renderProps = props => Object.assign({}, baseProps, props)

describe('JobItem component', () => {
  test('renders as expected', () => {
    const wrapper = shallow(<JobItem {...renderProps({})} />)
    expect(wrapper).toMatchSnapshot()
  })
})
