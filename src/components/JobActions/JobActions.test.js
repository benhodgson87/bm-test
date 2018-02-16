import React from 'react'
import { mount } from 'enzyme'

import JobActions from './JobActions'

const handleEdit = jest.fn()
const handleDelete = jest.fn()

const baseProps = {
  id: 123,
  handleEdit,
  handleDelete,
}

const renderProps = props => Object.assign({}, baseProps, props)

describe('JobActions presentational component', () => {
  test('renders as expected', () => {
    const wrapper = mount(<JobActions {...renderProps({})} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Fires an edit callback on click', () => {
    const wrapper = mount(<JobActions {...renderProps()} />)
    wrapper
      .find('.job-actions-edit')
      .find('a')
      .simulate('click')
    expect(handleEdit).toHaveBeenCalledWith(123)
  })

  test('Fires a delete callback on click', () => {
    const wrapper = mount(<JobActions {...renderProps()} />)
    wrapper
      .find('.job-actions-delete')
      .find('a')
      .simulate('click')
    expect(handleDelete).toHaveBeenCalledWith(123)
  })
})
