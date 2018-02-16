import React from 'react'
import { shallow, mount } from 'enzyme'

import Jobs from './Jobs'

const baseProps = {
  pending: false,
  items: [
    {
      id: 123,
      customer: {
        title: 'Mr',
        first_name: 'Wayne',
        last_name: 'World',
      },
      job: {
        dimensions: 234,
      },
    },
  ],
}

const renderProps = props => Object.assign({}, baseProps, props)

describe('Jobs presentational component', () => {
  test('renders as expected', () => {
    const wrapper = shallow(<Jobs {...renderProps()} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('shows the loading text if pending', () => {
    const props = { pending: true }
    const wrapper = mount(<Jobs {...renderProps(props)} />)
    expect(wrapper.text()).toContain('Loading')
  })

  test('shows an empty message if jobs list length is zero', () => {
    const props = { items: [] }
    const wrapper = mount(<Jobs {...renderProps(props)} />)
    expect(wrapper.text()).toContain('No items to display')
  })
})
